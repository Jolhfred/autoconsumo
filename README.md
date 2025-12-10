<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AUTOCÖNSUMO - Energía Eléctrica y Solar</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-green: #22c55e;
            --primary-blue: #0066cc;
            --secondary-blue: #4a90e2;
            --dark-bg: #0f172a;
            --light-bg: #f8fafc;
            --text-dark: #1e293b;
            --text-light: #64748b;
            --border-radius: 12px;
            --transition: all 0.3s ease;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--light-bg);
            color: var(--text-dark);
            overflow-x: hidden;
        }

        /* ==================== BOTÓN WHATSAPP ==================== */
        .whatsapp-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #25d366, #20a652);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
            transition: var(--transition);
            z-index: 999;
            animation: whatsappBounce 2s infinite;
        }

        @keyframes whatsappBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .whatsapp-btn:hover {
            background: linear-gradient(135deg, #20ba5b, #1a8c3f);
            transform: scale(1.15);
            animation: none;
        }

        .whatsapp-btn svg {
            width: 35px;
            height: 35px;
            fill: white;
        }

        /* ==================== NAVBAR ==================== */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: white;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        }

        .navbar-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-img {
            height: 50px;
            width: auto;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            position: relative;
            transition: var(--transition);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--primary-green), var(--primary-blue));
            transition: var(--transition);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .hamburger span {
            width: 25px;
            height: 3px;
            background-color: var(--text-dark);
            margin: 5px 0;
            transition: var(--transition);
        }

        /* ==================== HERO SECTION ==================== */
        .hero {
            margin-top: 80px;
            min-height: 90vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4rem 2rem;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            gap: 3rem;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .hero-content {
            flex: 1;
            z-index: 1;
        }

        .hero-title {
            font-size: 4rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-blue) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            animation: slideInLeft 0.8s ease;
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .hero-subtitle {
            font-size: 1.3rem;
            color: var(--text-light);
            margin-bottom: 2rem;
            animation: slideInLeft 0.8s ease 0.1s both;
        }

        .cta-button {
            padding: 1rem 2.5rem;
            font-size: 1rem;
            font-weight: 600;
            background: linear-gradient(135deg, var(--primary-green), var(--secondary-blue));
            color: white;
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: var(--transition);
            box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
            animation: slideInLeft 0.8s ease 0.2s both;
        }

        .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(34, 197, 94, 0.4);
        }

        .hero-animation {
            flex: 1;
            position: relative;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sun {
            width: 150px;
            height: 150px;
            background: radial-gradient(circle at 30% 30%, #ffd700, #ffa500);
            border-radius: 50%;
            position: absolute;
            top: 20px;
            right: 50px;
            box-shadow: 0 0 60px rgba(255, 215, 0, 0.6);
            animation: rotateSun 20s linear infinite;
        }

        @keyframes rotateSun {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .solar-panel {
            width: 200px;
            height: 120px;
            background: linear-gradient(135deg, #4a90e2 0%, #0066cc 100%);
            border-radius: 10px;
            position: absolute;
            bottom: 30px;
            left: 30px;
            box-shadow: 0 10px 30px rgba(74, 144, 226, 0.4);
            animation: floatPad 4s ease-in-out infinite;
            border: 3px solid rgba(255, 255, 255, 0.2);
        }

        @keyframes floatPad {
            0%, 100% { transform: translateY(0px) rotateZ(-5deg); }
            50% { transform: translateY(-30px) rotateZ(5deg); }
        }

        .solar-panel::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent 25%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 50%, transparent 50%);
            background-size: 20px 20px;
            border-radius: 10px;
        }

        /* ==================== SERVICIOS ==================== */
        .servicios {
            padding: 6rem 2rem;
            background: white;
        }

        .section-title {
            font-size: 2.8rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 4rem;
            color: var(--text-dark);
        }

        .servicios-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .service-card {
            background: linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%);
            padding: 2.5rem;
            border-radius: var(--border-radius);
            text-align: center;
            transition: var(--transition);
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
        }

        .service-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 1.5rem;
            transition: var(--transition);
        }

        .service-card:hover img {
            transform: scale(1.05);
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%);
            border-radius: 50%;
        }

        .service-card:hover {
            border-color: var(--primary-green);
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(34, 197, 94, 0.15);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: inline-block;
            animation: bounce 2s infinite;
        }

        .solar-icon {
            animation-delay: 0s;
        }

        .electric-icon {
            animation-delay: 0.2s;
        }

        .maintenance-icon {
            animation-delay: 0.4s;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }

        .service-card p {
            color: var(--text-light);
            line-height: 1.6;
        }

        /* ==================== BENEFICIOS ==================== */
        .beneficios {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 100%);
        }

        .beneficios-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .beneficio {
            background: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            transition: var(--transition);
            position: relative;
        }

        .beneficio:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(34, 197, 94, 0.2);
        }

        .beneficio-numero {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary-green), var(--primary-blue));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }

        .beneficio h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }

        .beneficio p {
            color: var(--text-light);
            line-height: 1.6;
        }

        /* ==================== STATS ==================== */
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: -3rem auto 0;
            padding: 2rem;
            position: relative;
            z-index: 10;
        }

        .stat-card {
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-blue) 100%);
            color: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            text-align: center;
            box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
            transition: var(--transition);
        }

        .stat-card:hover {
            transform: translateY(-10px);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
        }

        .stat-card p {
            font-size: 1rem;
            opacity: 0.9;
        }

        /* ==================== PROCESO ==================== */
        .proceso {
            padding: 6rem 2rem;
            background: white;
        }

        .timeline {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
        }

        .timeline::before {
            content: '';
            position: absolute;
            top: 50px;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--primary-green), var(--primary-blue));
            opacity: 0.3;
            z-index: -1;
        }

        .timeline-item {
            background: #f8fafc;
            padding: 2rem;
            border-radius: var(--border-radius);
            text-align: center;
            position: relative;
            transition: var(--transition);
        }

        .timeline-item:hover {
            background: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .timeline-dot {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--primary-green), var(--primary-blue));
            border-radius: 50%;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            color: white;
            box-shadow: 0 5px 20px rgba(34, 197, 94, 0.3);
        }

        .timeline-item h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }

        .timeline-item p {
            color: var(--text-light);
            line-height: 1.6;
        }

        /* ==================== GALERÍA ==================== */
        .galeria {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 100%);
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .gallery-item {
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            transition: var(--transition);
            cursor: pointer;
        }

        .gallery-item img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            transition: var(--transition);
        }

        .gallery-item:hover img {
            transform: scale(1.1);
        }

        /* ==================== UBICACIÓN ==================== */
        .ubicacion {
            padding: 6rem 2rem;
            background: white;
        }

        .ubicacion-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: start;
        }

        .mapa-container {
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .mapa-container iframe {
            width: 100%;
            height: 400px;
            border: none;
        }

        .ubicacion-info {
            background: linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%);
            padding: 2.5rem;
            border-radius: var(--border-radius);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .ubicacion-info h3 {
            font-size: 1.5rem;
            color: var(--primary-green);
            margin-bottom: 1.5rem;
        }

        .info-item {
            margin-bottom: 2rem;
        }

        .info-item h4 {
            font-size: 1.1rem;
            color: var(--text-dark);
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .info-item p {
            color: var(--text-light);
            line-height: 1.6;
        }

        /* ==================== FAQ ==================== */
        .faq {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 100%);
        }

        .faq-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .faq-item {
            margin-bottom: 1rem;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .faq-question {
            width: 100%;
            padding: 1.5rem;
            background: linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%);
            border: none;
            text-align: left;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .faq-question:hover {
            background: linear-gradient(135deg, #e0f9ff 0%, #e0fdf0 100%);
        }

        .faq-question::after {
            content: '+';
            font-size: 1.5rem;
            color: var(--primary-green);
            transition: var(--transition);
        }

        .faq-item.active .faq-question::after {
            transform: rotate(45deg);
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            background: white;
        }

        .faq-item.active .faq-answer {
            max-height: 200px;
        }

        .faq-answer p {
            padding: 1.5rem;
            color: var(--text-light);
            line-height: 1.6;
        }

        /* ==================== CONTACTO ==================== */
        .contacto {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
        }

        .contacto .section-title {
            color: white;
        }

        .contacto-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .contacto-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .contacto-form input,
        .contacto-form textarea {
            padding: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: var(--border-radius);
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 1rem;
            font-family: inherit;
            transition: var(--transition);
        }

        .contacto-form input::placeholder,
        .contacto-form textarea::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        .contacto-form input:focus,
        .contacto-form textarea:focus {
            outline: none;
            border-color: var(--primary-green);
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }

        .submit-btn {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, var(--primary-green), var(--primary-blue));
            color: white;
            border: none;
            border-radius: var(--border-radius);
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
        }

        .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(34, 197, 94, 0.4);
        }

        .contacto-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .info-item h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .info-item p {
            color: rgba(255, 255, 255, 0.7);
        }

        /* ==================== FOOTER ==================== */
        .footer {
            background: #0f172a;
            padding: 2rem;
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .social-links {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }

        .social-icon {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            transition: var(--transition);
        }

        .social-icon:hover {
            color: var(--primary-green);
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .hamburger {
                display: flex;
            }

            .hero {
                flex-direction: column-reverse;
                margin-top: 100px;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .hero-subtitle {
                font-size: 1.1rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .servicios-grid,
            .beneficios-container {
                grid-template-columns: 1fr;
            }

            .timeline::before {
                display: none;
            }

            .contacto-container {
                grid-template-columns: 1fr;
            }

            .stats {
                grid-template-columns: 1fr;
            }

            .gallery-grid {
                grid-template-columns: 1fr;
            }

            .ubicacion-container {
                grid-template-columns: 1fr;
            }

            .whatsapp-btn {
                width: 60px;
                height: 60px;
                bottom: 20px;
                right: 20px;
            }

            .whatsapp-btn svg {
                width: 30px;
                height: 30px;
            }
        }

        @media (max-width: 480px) {
            .navbar-container {
                padding: 1rem;
            }

            .hero-title {
                font-size: 2rem;
            }

            .section-title {
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }

            .servicios {
                padding: 3rem 1rem;
            }

            .stat-number {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Botón WhatsApp -->
    <a href="https://wa.me/51XXXXXXXXX" target="_blank" class="whatsapp-btn" title="Contactar por WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 0 0-7.008 6.962 6.961 6.961 0 0 0 1.173 3.751L3.06 20.16l3.992-1.048a6.953 6.953 0 0 0 3.326.789h.004c3.859 0 6.998-3.14 6.998-6.997a6.96 6.96 0 0 0-6.999-6.952zm0-2.381c4.279 0 7.761 3.484 7.761 7.763 0 4.28-3.482 7.764-7.761 7.764a7.737 7.737 0 0 1-3.7-.921l-.265-.141-2.755.723.738-2.693-.15-.24a7.759 7.759 0 0 1-1.047-4.091c0-4.279 3.484-7.762 7.761-7.762" fill="white"/></svg>
    </a>

    <!-- Navbar -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo">
                <img src="/images/image.png" alt="AUTOCÖNSUMO Logo" class="logo-img">
            </div>
            <ul class="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#beneficios">Beneficios</a></li>
                <li><a href="#ubicacion">Ubicación</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="inicio" class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Energía Limpia para tu Futuro</h1>
            <p class="hero-subtitle">Soluciones solares y eléctricas innovadoras para tu hogar y negocio</p>
            <button class="cta-button">Solicita tu Consulta</button>
        </div>
        <div class="hero-animation">
            <div class="sun"></div>
            <div class="solar-panel"></div>
        </div>
    </section>

    <!-- Servicios -->
    <section id="servicios" class="servicios">
        <h2 class="section-title">Nuestros Servicios</h2>
        <div class="servicios-grid">
            <div class="service-card">
                <img src="https://images.unsplash.com/photo-1508424757607-4ae3a8466ae9?w=400&h=200&fit=crop" alt="Energía Solar">
                <div class="service-icon solar-icon">☀️</div>
                <h3>Energía Solar</h3>
                <p>Instalación de paneles solares para hogares y negocios con máxima eficiencia y rendimiento</p>
            </div>
            <div class="service-card">
                <img src="https://images.unsplash.com/photo-1513096137-e50310cded33?w=400&h=200&fit=crop" alt="Instalaciones Eléctricas">
                <div class="service-icon electric-icon">⚡</div>
                <h3>Instalaciones Eléctricas</h3>
                <p>Servicios profesionales de instalación y mantenimiento eléctrico con certificación oficial</p>
            </div>
            <div class="service-card">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=200&fit=crop" alt="Mantenimiento">
                <div class="service-icon maintenance-icon">🔧</div>
                <h3>Mantenimiento Preventivo</h3>
                <p>Servicios de revisión y mantenimiento preventivo para optimizar el rendimiento del sistema</p>
            </div>
        </div>
    </section>

    <!-- Beneficios -->
    <section id="beneficios" class="beneficios">
        <h2 class="section-title">¿Por qué elegirnos?</h2>
        <div class="beneficios-container">
            <div class="beneficio">
                <div class="beneficio-numero">01</div>
                <h3>Ahorro Energético</h3>
                <p>Reduce tu factura eléctrica hasta un 80% con nuestras soluciones profesionales</p>
            </div>
            <div class="beneficio">
                <div class="beneficio-numero">02</div>
                <h3>Experiencia Comprobada</h3>
                <p>Más de 10 años trabajando en el sector de energías renovables con resultados garantizados</p>
            </div>
            <div class="beneficio">
                <div class="beneficio-numero">03</div>
                <h3>Garantía Completa</h3>
                <p>Garantía de 20 años en paneles solares y 10 años en instalación profesional</p>
            </div>
            <div class="beneficio">
                <div class="beneficio-numero">04</div>
                <h3>Asesoramiento Personalizado</h3>
                <p>Consultores expertos adaptados a tus necesidades específicas y presupuesto</p>
            </div>
        </div>
    </section>

    <!-- Estadísticas -->
    <section class="stats">
        <div class="stat-card">
            <h3 class="stat-number">500+</h3>
            <p>Clientes Satisfechos</p>
        </div>
        <div class="stat-card">
            <h3 class="stat-number">2000+</h3>
            <p>Paneles Instalados</p>
        </div>
        <div class="stat-card">
            <h3 class="stat-number">10K+</h3>
            <p>MWh Generados</p>
        </div>
    </section>

    <!-- Proceso -->
    <section class="proceso">
        <h2 class="section-title">Nuestro Proceso</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-dot">01</div>
                <h3>Evaluación</h3>
                <p>Analizamos tu consumo energético y necesidades específicas</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot">02</div>
                <h3>Diseño</h3>
                <p>Creamos un plan personalizado optimizado para tu caso</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot">03</div>
                <h3>Instalación</h3>
                <p>Instalamos tu sistema con profesionales altamente certificados</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot">04</div>
                <h3>Monitoreo</h3>
                <p>Realizamos seguimiento continuo del rendimiento y resultados</p>
            </div>
        </div>
    </section>

    <!-- Galería -->
    <section class="galeria">
        <h2 class="section-title">Proyectos Realizados</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1508833801849-1f0c75f89fa5?w=400&h=300&fit=crop" alt="Instalación Solar 1">
            </div>
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop" alt="Instalación Solar 2">
            </div>
            <div class="gallery-item">
                <img src="https://images.unsplash.com/photo-1509391366360-2e938d440220?w=400&h=300&fit=crop" alt="Instalación Solar 3">
            </div>
        </div>
    </section>

    <!-- Ubicación con Google Maps -->
    <section id="ubicacion" class="ubicacion">
        <h2 class="section-title">Nuestra Ubicación</h2>
        <div class="ubicacion-container">
            <div class="mapa-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8265662969535!2d-77.04054!3d-12.047378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b9d9d9d9d9%3A0x9d9d9d9d9d9d9d9d!2sLima%2C%20Per%C3%BA!5e0!3m2!1ses!2upe!4v1234567890" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="ubicacion-info">
                <h3>Encuentra Nuestra Oficina</h3>
                <div class="info-item">
                    <h4>📍 Dirección</h4>
                    <p>Calle Principal 123, Lima, Perú</p>
                </div>
                <div class="info-item">
                    <h4>📞 Teléfono</h4>
                    <p>+51 1 XXX XXXX</p>
                </div>
                <div class="info-item">
                    <h4>📧 Email</h4>
                    <p>info@autoconsumo.pe</p>
                </div>
                <div class="info-item">
                    <h4>🕐 Horario</h4>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM<br>Sábado: 10:00 AM - 2:00 PM</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
        <h2 class="section-title">Preguntas Frecuentes</h2>
        <div class="faq-container">
            <div class="faq-item">
                <button class="faq-question">¿Cuánto cuesta una instalación solar?</button>
                <div class="faq-answer">
                    <p>El costo varía según el tamaño de tu sistema y consumo. Ofrecemos consultas gratuitas para darte un presupuesto exacto personalizado a tu caso.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">¿Cuánto tiempo dura la instalación?</button>
                <div class="faq-answer">
                    <p>Generalmente entre 1-3 días dependiendo de la complejidad del proyecto. Nuestro equipo trabaja de forma ágil y eficiente.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">¿Necesito permisos especiales?</button>
                <div class="faq-answer">
                    <p>Nos encargamos de toda la tramitología y permisos necesarios. ¡Tú no tienes que preocuparte de nada!</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">¿Qué mantenimiento requieren los paneles?</button>
                <div class="faq-answer">
                    <p>El mantenimiento es mínimo. Recomendamos limpiezas semestrales y revisiones anuales profesionales para asegurar máximo rendimiento.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="contacto">
        <h2 class="section-title">Ponte en Contacto</h2>
        <div class="contacto-container">
            <form class="contacto-form">
                <input type="text" placeholder="Tu nombre" required>
                <input type="email" placeholder="Tu email" required>
                <input type="tel" placeholder="Tu teléfono" required>
                <textarea placeholder="Cuéntanos tu proyecto" rows="5" required></textarea>
                <button type="submit" class="submit-btn">Enviar Mensaje</button>
            </form>
            <div class="contacto-info">
                <div class="info-item">
                    <h4>📍 Ubicación Principal</h4>
                    <p>Lima, Perú</p>
                </div>
                <div class="info-item">
                    <h4>📞 Teléfono</h4>
                    <p>+51 1 XXX XXXX</p>
                </div>
                <div class="info-item">
                    <h4>📱 WhatsApp</h4>
                    <p>+51 XXX XXX XXX</p>
                </div>
                <div class="info-item">
                    <h4>📧 Email</h4>
                    <p>info@autoconsumo.pe</p>
                </div>
                <div class="info-item">
                    <h4>🕐 Horario de Atención</h4>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM<br>Sábado: 10:00 AM - 2:00 PM</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 AUTOCÖNSUMO. Todos los derechos reservados.</p>
            <div class="social-links">
                <a href="#" class="social-icon">Facebook</a>
                <a href="#" class="social-icon">Instagram</a>
                <a href="#" class="social-icon">LinkedIn</a>
            </div>
        </div>
    </footer>

    <script>
        // Navbar Mobile Menu
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger?.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            hamburger.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.style.display = 'none';
                hamburger.classList.remove('active');
            });
        });

        // FAQ Accordions
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                item.classList.toggle('active');
                
                // Cerrar otros items
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });

        // Formulario de contacto
        const contactForm = document.querySelector('.contacto-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
                contactForm.reset();
            });
        }

        // CTA Button
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Animaciones en scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card, .beneficio, .timeline-item, .gallery-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Efecto parallax en hero
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.hero');
            if (hero) {
                const scrolled = window.pageYOffset;
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        console.log('✨ AUTOCÖNSUMO - Página cargada correctamente');
    </script>
</body>
</html>
