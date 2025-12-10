// Navegación suave y menú hamburguesa
const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active")
})

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active")
  })
})

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Contar números animados
function animateCounter() {
  const counters = document.querySelectorAll("[data-count]")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-count"))
    let current = 0
    const increment = target / 50

    const updateCounter = () => {
      current += increment
      if (current < target) {
        counter.textContent = Math.floor(current)
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
  })
}

// Observador para ejecutar animación cuando se ve la sección
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains("estadisticas")) {
      animateCounter()
      observer.unobserve(entry.target)
    }
  })
})

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})

// Validar formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault()
  alert("¡Gracias por tu solicitud! Nos pondremos en contacto pronto.")
  this.reset()
})

// Efecto de parallax en hero
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero")
  const scrollPosition = window.scrollY
  hero.style.transform = `translateY(${scrollPosition * 0.5}px)`
})
