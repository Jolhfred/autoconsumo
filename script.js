
        // ==================== MENÚ HAMBURGUESA ====================
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // ==================== SCROLL SUAVE A SECCIONES ====================
        document.querySelectorAll('.nav-links a, .cta-button').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        // Calculate target position considering navbar height
                        const navbarHeight = document.getElementById('navbar').offsetHeight;
                        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // ==================== ANIMACIÓN DE CONTADORES ====================
        function animateCounter() {
            const counters = document.querySelectorAll('[data-count]');
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                // Adjust increment for smoother animation and avoid division by zero
                const increment = Math.max(1, Math.floor(target / 100)); 
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }

        // Observador para ejecutar animación cuando se ve la sección
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.classList.contains('beneficios')) {
                    animateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        const beneficiosSection = document.querySelector('.beneficios');
        if (beneficiosSection) {
            observer.observe(beneficiosSection);
        }

        // ==================== FAQ ACORDEÓN ====================
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.parentElement;
                
                // Cerrar otros items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle actual
                faqItem.classList.toggle('active');
            });
        });

        // ==================== VALIDACIÓN FORMULARIO ====================
        document.getElementById('contactoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes añadir lógica para enviar el formulario
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            this.reset();
        });

        // ==================== EFECTO PARALLAX EN HERO ====================
        // This parallax effect might not be desired with fixed navbar. 
        // Consider removing or adjusting if it causes layout issues.
        // window.addEventListener('scroll', () => {
        //     const hero = document.querySelector('.hero');
        //     const scrollPosition = window.scrollY;
        //     hero.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        // });

        // ==================== PRODUCTOS: FILTRO + CARRUSEL (8 por página) ====================
        (function productosFiltroCarrusel() {
        const track = document.getElementById('productosTrack');
        if (!track) return;

        const prevBtn = document.querySelector('.prod-prev');
        const nextBtn = document.querySelector('.prod-next');
        const pager = document.getElementById('productosPager');
        const filterButtons = document.querySelectorAll('.filtro-btn');

        // Lista MAESTRA (no se pierde aunque reconstruyamos páginas)
        const ALL = Array.from(document.querySelectorAll('#productosTrack .producto-card'));

        let currentPage = 0;
        let perPage = getPerPage();
        let pagesCount = 0;

        function getPerPage() {
            if (window.matchMedia('(max-width: 480px)').matches) return 1;  // celular real
            if (window.matchMedia('(max-width: 768px)').matches) return 2;  // móviles grandes
            return 8; // desktop
        }

        function chunk(arr, size) {
            const out = [];
            for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
            return out;
        }

        function buildPager(total) {
            if (!pager) return;
            pager.innerHTML = '';
            for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.className = 'pager-dot' + (i === currentPage ? ' active' : '');
            dot.addEventListener('click', () => goTo(i));
            pager.appendChild(dot);
            }
        }

        function updateNav() {
            if (prevBtn) prevBtn.disabled = currentPage <= 0;
            if (nextBtn) nextBtn.disabled = currentPage >= pagesCount - 1;

            if (pager) {
            pager.querySelectorAll('.pager-dot').forEach((d, idx) => {
                d.classList.toggle('active', idx === currentPage);
            });
            }
        }

        function goTo(pageIndex) {
            currentPage = Math.max(0, Math.min(pageIndex, pagesCount - 1));
            track.style.transform = `translateX(-${currentPage * 100}%)`;
            updateNav();
        }

        function render(cards) {
            // limpia track y reconstruye páginas
            track.innerHTML = '';
            perPage = getPerPage();

            const groups = chunk(cards, perPage);

            groups.forEach(group => {
            const page = document.createElement('div');
            page.className = 'productos-page';

            const grid = document.createElement('div');
            grid.className = 'productos-grid-page';

            group.forEach(card => grid.appendChild(card));
            page.appendChild(grid);
            track.appendChild(page);
            });

            pagesCount = groups.length || 1;
            currentPage = 0;

            buildPager(groups.length);
            goTo(0);
        }

        function applyFilter(filter) {
            const filtered =
            filter === 'todos'
                ? ALL
                : ALL.filter(card => (card.getAttribute('data-categoria') || '') === filter);

            // Importante: reinsertamos desde la lista maestra (evita “desaparecidos”)
            render(filtered);
        }

        // Flechas
        prevBtn?.addEventListener('click', () => goTo(currentPage - 1));
        nextBtn?.addEventListener('click', () => goTo(currentPage + 1));

        // Botones de filtro
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter') || 'todos';
            applyFilter(filter);
            });
        });

        // Inicial
        applyFilter('todos');

        // Rebuild si cambia móvil/desktop (4 <-> 8)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
            const newPerPage = getPerPage();
            if (newPerPage !== perPage) {
                // aplicar filtro activo actual
                const active = document.querySelector('.filtro-btn.active')?.getAttribute('data-filter') || 'todos';
                applyFilter(active);
            }
            }, 150);
        });
        })();



        // Product button actions
        document.querySelectorAll('.producto-boton').forEach(button => {
            button.addEventListener('click', function() {
                const productName = this.closest('.producto-card').querySelector('.producto-nombre').textContent;
                // Replace XXXXXXXXXX with your actual WhatsApp number
                const whatsappUrl = `https://wa.me/51947239146?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(productName)}`;
                window.open(whatsappUrl, '_blank');
            });
        });

        // Update WhatsApp button class and href if it's not already the updated one.
        // This is to handle cases where the html might be copied/pasted incorrectly.
        const whatsappBtn = document.querySelector('.whatsapp-btn');
        if (whatsappBtn && !whatsappBtn.classList.contains('whatsapp-float')) {
            whatsappBtn.classList.add('whatsapp-float');
            whatsappBtn.href = "https://wa.me/51947239146?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20sus%20servicios";
            whatsappBtn.setAttribute('aria-label', 'Contactar por WhatsApp');
            whatsappBtn.classList.remove('whatsapp-btn'); // Remove old class
        }