import './style.css'

// App initialization
function initializeApp() {
  const app = document.querySelector('#app')

  app.innerHTML = `
    ${createNavigation()}
    ${createHeroSection()}
    ${createAIFeaturesSection()}
    ${createTechnologySection()}
    ${createApplicationsSection()}
    ${createFooterSection()}
  `
}

function createNavigation() {
  return `
    <nav>
      <div class="nav-content">
        <a href="#" class="logo">NeuroSync</a>
        <ul class="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#applications">Applications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  `
}

function createHeroSection() {
  return `
    <section class="hero fade-in">
      <canvas id="brainWaveCanvas" class="brain-wave-canvas"></canvas>
      <div class="particles-bg"></div>
      <div class="hero-content">
        <h1 class="split-text">NeuroSync Pro</h1>
        <p class="tagline reveal-text">Think beyond boundaries.</p>
        <p class="description reveal-text">
          Revolutionary brain-computer interface powered by advanced AI.
          Understand and interpret your brain waves with unprecedented accuracy.
        </p>
        <div class="button-group">
          <a href="#" class="btn btn-primary">Pre-order now</a>
          <a href="#features" class="btn btn-secondary dark">Learn more</a>
        </div>
        <div class="brain-visual">
          <svg class="brain-icon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 30c-15 0-25 10-25 25 0 5-5 10-10 10-10 0-15 8-15 18s5 18 15 18c0 8 5 15 12 18-2 3-3 7-3 11 0 12 8 20 20 20s20-8 20-20c0-4-1-8-3-11 7-3 12-10 12-18 10 0 15-8 15-18s-5-18-15-18c-5 0-10-5-10-10 0-15-10-25-25-25z" fill="none" stroke="url(#brainGradient)" stroke-width="3" stroke-linecap="round"/>
            <circle cx="80" cy="80" r="8" fill="url(#brainGradient)" opacity="0.8">
              <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="120" cy="80" r="8" fill="url(#brainGradient)" opacity="0.8">
              <animate attributeName="r" values="8;10;8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="110" r="8" fill="url(#brainGradient)" opacity="0.8">
              <animate attributeName="r" values="8;10;8" dur="2s" begin="1s" repeatCount="indefinite"/>
            </circle>
            <defs>
              <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#0071e3;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8a2be2;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <div class="wave-ring"></div>
          <div class="wave-ring wave-ring-2"></div>
          <div class="wave-ring wave-ring-3"></div>
        </div>
      </div>
    </section>
  `
}

function createAIFeaturesSection() {
  return `
    <section id="features" class="product-section light">
      <h2>Powered by AI</h2>
      <p class="subtitle">Your mind, decoded with precision.</p>
      <p class="feature-description">
        NeuroSync uses state-of-the-art large language models to interpret complex neural patterns,
        transforming raw brain signals into meaningful insights and actionable commands.
      </p>
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8 L38 24 L54 24 L42 34 L46 50 L32 40 L18 50 L22 34 L10 24 L26 24 Z" fill="none" stroke="url(#iconGradient1)" stroke-width="3" stroke-linejoin="round">
                <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="1.5s" repeatCount="indefinite"/>
              </path>
              <defs>
                <linearGradient id="iconGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#00d4ff"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Real-time Analysis</h3>
          <p>Process brain signals instantly with millisecond precision. Our AI adapts to your unique neural patterns.</p>
        </div>
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="24" fill="none" stroke="url(#iconGradient2)" stroke-width="3"/>
              <circle cx="32" cy="32" r="16" fill="none" stroke="url(#iconGradient2)" stroke-width="2"/>
              <circle cx="32" cy="32" r="8" fill="url(#iconGradient2)"/>
              <path d="M32 8 L32 16 M32 48 L32 56 M8 32 L16 32 M48 32 L56 32" stroke="url(#iconGradient2)" stroke-width="3" stroke-linecap="round"/>
              <defs>
                <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#8a2be2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Adaptive Learning</h3>
          <p>Advanced machine learning that gets better with use. The system learns your intentions over time.</p>
        </div>
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect x="16" y="24" width="32" height="28" rx="4" fill="none" stroke="url(#iconGradient3)" stroke-width="3"/>
              <path d="M24 24 V18 A8 8 0 0 1 40 18 V24" fill="none" stroke="url(#iconGradient3)" stroke-width="3" stroke-linecap="round"/>
              <circle cx="32" cy="38" r="4" fill="url(#iconGradient3)"/>
              <defs>
                <linearGradient id="iconGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#00d4ff"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Privacy First</h3>
          <p>Your neural data stays with you. On-device processing ensures your thoughts remain private.</p>
        </div>
      </div>
      <div class="button-group" style="margin-top: 40px;">
        <a href="#" class="btn btn-primary">Explore AI capabilities</a>
      </div>
    </section>
  `
}

function createTechnologySection() {
  return `
    <section id="technology" class="product-section dark">
      <h2>Advanced Neural Interface</h2>
      <p class="subtitle">Technology that connects with you.</p>
      <div class="placeholder-visual" style="background: linear-gradient(135deg, rgba(0, 113, 227, 0.2), rgba(138, 43, 226, 0.1)); margin-top: 60px;">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="width: 80px; height: 80px;">
          <circle cx="60" cy="60" r="40" fill="none" stroke="url(#techGradient)" stroke-width="3"/>
          <circle cx="60" cy="60" r="30" fill="none" stroke="url(#techGradient)" stroke-width="2" opacity="0.7"/>
          <circle cx="60" cy="60" r="20" fill="none" stroke="url(#techGradient)" stroke-width="2" opacity="0.5"/>
          <line x1="60" y1="20" x2="60" y2="35" stroke="url(#techGradient)" stroke-width="3" stroke-linecap="round"/>
          <line x1="60" y1="85" x2="60" y2="100" stroke="url(#techGradient)" stroke-width="3" stroke-linecap="round"/>
          <line x1="20" y1="60" x2="35" y2="60" stroke="url(#techGradient)" stroke-width="3" stroke-linecap="round"/>
          <line x1="85" y1="60" x2="100" y2="60" stroke="url(#techGradient)" stroke-width="3" stroke-linecap="round"/>
          <circle cx="60" cy="60" r="8" fill="url(#techGradient)">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
          </circle>
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0071e3"/>
              <stop offset="100%" style="stop-color:#8a2be2"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p class="feature-description">
        Non-invasive sensors capture EEG signals with medical-grade accuracy.
        Wireless connectivity and all-day battery life keep you in sync wherever you go.
      </p>
      <div class="button-group">
        <a href="#" class="btn btn-primary">View specifications</a>
        <a href="#" class="btn btn-secondary dark">Watch the keynote</a>
      </div>
    </section>
  `
}

function createApplicationsSection() {
  return `
    <section id="applications" class="product-section light">
      <h2>Endless Possibilities</h2>
      <p class="subtitle">From healthcare to human enhancement.</p>
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8 L32 20 M20 14 L24 18 M44 14 L40 18" stroke="url(#iconGradient4)" stroke-width="3" stroke-linecap="round"/>
              <rect x="16" y="20" width="32" height="36" rx="4" fill="none" stroke="url(#iconGradient4)" stroke-width="3"/>
              <line x1="24" y1="30" x2="40" y2="30" stroke="url(#iconGradient4)" stroke-width="2"/>
              <line x1="24" y1="38" x2="40" y2="38" stroke="url(#iconGradient4)" stroke-width="2"/>
              <line x1="24" y1="46" x2="32" y2="46" stroke="url(#iconGradient4)" stroke-width="2"/>
              <defs>
                <linearGradient id="iconGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#00d4ff"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Medical Applications</h3>
          <p>Monitor neurological conditions, track mental health metrics, and support therapeutic interventions.</p>
        </div>
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="28" width="40" height="24" rx="4" fill="none" stroke="url(#iconGradient5)" stroke-width="3"/>
              <circle cx="28" cy="40" r="6" fill="none" stroke="url(#iconGradient5)" stroke-width="2"/>
              <path d="M38 34 L44 40 L38 46" fill="none" stroke="url(#iconGradient5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="18" y1="20" x2="22" y2="28" stroke="url(#iconGradient5)" stroke-width="2" stroke-linecap="round"/>
              <line x1="46" y1="20" x2="42" y2="28" stroke="url(#iconGradient5)" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="iconGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#8a2be2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Mind Control</h3>
          <p>Control devices, applications, and smart home systems with your thoughts. No hands required.</p>
        </div>
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <polyline points="8,40 20,32 28,36 36,24 44,28 56,16" fill="none" stroke="url(#iconGradient6)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M48 16 L56 16 L56 24" fill="none" stroke="url(#iconGradient6)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="iconGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#00d4ff"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Performance Optimization</h3>
          <p>Track cognitive performance, optimize focus states, and enhance meditation practices.</p>
        </div>
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 32 Q12 12, 32 12 T52 32 Q52 52, 32 52 T12 32" fill="none" stroke="url(#iconGradient7)" stroke-width="3"/>
              <circle cx="32" cy="20" r="3" fill="url(#iconGradient7)"/>
              <circle cx="44" cy="32" r="3" fill="url(#iconGradient7)"/>
              <circle cx="32" cy="44" r="3" fill="url(#iconGradient7)"/>
              <circle cx="20" cy="32" r="3" fill="url(#iconGradient7)"/>
              <defs>
                <linearGradient id="iconGradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#8a2be2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Creative Expression</h3>
          <p>Translate emotions into art, music, and digital experiences in real-time.</p>
        </div>
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 48 Q16 32, 24 32 Q20 32, 20 24 Q20 16, 28 16 Q28 24, 24 24 Q32 24, 32 16" fill="none" stroke="url(#iconGradient8)" stroke-width="3" stroke-linecap="round"/>
              <path d="M48 16 Q48 32, 40 32 Q44 32, 44 40 Q44 48, 36 48 Q36 40, 40 40 Q32 40, 32 48" fill="none" stroke="url(#iconGradient8)" stroke-width="3" stroke-linecap="round"/>
              <defs>
                <linearGradient id="iconGradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#00d4ff"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Communication</h3>
          <p>Assist individuals with speech disabilities to communicate through neural signals.</p>
        </div>
        <div class="feature-card">
          <div class="icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect x="16" y="24" width="32" height="28" rx="2" fill="none" stroke="url(#iconGradient9)" stroke-width="3"/>
              <line x1="24" y1="32" x2="40" y2="32" stroke="url(#iconGradient9)" stroke-width="2"/>
              <line x1="24" y1="40" x2="40" y2="40" stroke="url(#iconGradient9)" stroke-width="2"/>
              <path d="M28 12 L32 18 L36 12" fill="none" stroke="url(#iconGradient9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="32" y1="18" x2="32" y2="24" stroke="url(#iconGradient9)" stroke-width="2"/>
              <defs>
                <linearGradient id="iconGradient9" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#8a2be2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3>Research Platform</h3>
          <p>Accelerate neuroscience research with open APIs and development tools.</p>
        </div>
      </div>
      <div class="button-group" style="margin-top: 60px;">
        <a href="#" class="btn btn-primary">Get started</a>
        <a href="#" class="btn btn-secondary">Developer docs</a>
      </div>
    </section>
  `
}

function createFooterSection() {
  return `
    <footer id="contact" class="footer finisher-header" style="width: 100%; height: 400px; position: relative;">
      <div class="footer-content">
        <h2>Get in Touch</h2>
        <p>Ready to enhance your cognitive potential?</p>
        <div class="button-group">
          <a href="#" class="btn btn-primary">Contact Sales</a>
          <a href="#" class="btn btn-secondary dark">Join Waitlist</a>
        </div>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
        <p class="copyright">&copy; 2025 NeuroSync. All rights reserved.</p>
      </div>
    </footer>
  `
}

function setupBrainWaveAnimation() {
  const canvas = document.getElementById('brainWaveCanvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = 600

  const waves = []
  const numWaves = 5

  for (let i = 0; i < numWaves; i++) {
    waves.push({
      y: canvas.height / 2,
      length: 0.01 + i * 0.003,
      amplitude: 20 + i * 10,
      frequency: 0.01 + i * 0.002,
      phase: i * Math.PI / 4,
      speed: 0.02 + i * 0.005,
      opacity: 0.15 - i * 0.02
    })
  }

  let increment = 0

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    increment += 0.02

    waves.forEach((wave, index) => {
      ctx.beginPath()
      ctx.strokeStyle = `rgba(0, 113, 227, ${wave.opacity})`
      ctx.lineWidth = 2

      for (let i = 0; i < canvas.width; i++) {
        const y = wave.y + Math.sin(i * wave.length + increment * wave.speed + wave.phase) * wave.amplitude
        if (i === 0) {
          ctx.moveTo(i, y)
        } else {
          ctx.lineTo(i, y)
        }
      }

      ctx.stroke()
    })

    requestAnimationFrame(animate)
  }

  animate()

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
  })
}

function createParticles() {
  const particlesContainer = document.querySelector('.particles-bg')
  if (!particlesContainer) return

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.top = Math.random() * 100 + '%'
    particle.style.animationDelay = Math.random() * 10 + 's'
    particle.style.animationDuration = (10 + Math.random() * 20) + 's'
    particlesContainer.appendChild(particle)
  }
}

function setupParallax() {
  let ticking = false

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset

        // Parallax for hero content
        const heroContent = document.querySelector('.hero-content')
        if (heroContent) {
          heroContent.style.transform = `translateY(${scrolled * 0.4}px)`
          heroContent.style.opacity = 1 - scrolled / 500
        }

        // Parallax for brain wave canvas
        const canvas = document.getElementById('brainWaveCanvas')
        if (canvas) {
          canvas.style.transform = `translateY(${scrolled * 0.2}px)`
        }

        // Parallax for sections
        document.querySelectorAll('.product-section').forEach((section, index) => {
          const rect = section.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * 0.05
            section.style.transform = `translateY(${offset}px)`
          }
        })

        ticking = false
      })

      ticking = true
    }
  })
}

function setupScrollEffects() {
  // Navigation scroll effect
  const nav = document.querySelector('nav')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href !== '#') {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    })
  })

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
      }
    })
  }, observerOptions)

  // Observe all sections except hero
  document.querySelectorAll('.product-section').forEach(section => {
    observer.observe(section)
  })

  // Observe feature cards for stagger animation
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
    observer.observe(card)
  })
}

function initializeFinisherHeader() {
  // Wait for the script to be loaded
  if (typeof FinisherHeader === 'undefined') {
    setTimeout(initializeFinisherHeader, 100)
    return
  }

  new FinisherHeader({
    "count": 90,
    "size": {
      "min": 1,
      "max": 329,
      "pulse": 0.7
    },
    "speed": {
      "x": {
        "min": 0,
        "max": 0.4
      },
      "y": {
        "min": 0,
        "max": 0.1
      }
    },
    "colors": {
      "background": "#2f2f2f",
      "particles": [
        "#ffffff",
        "#87ddfe",
        "#acaaff",
        "#1bffc2",
        "#f88aff"
      ]
    },
    "blending": "screen",
    "opacity": {
      "center": 0,
      "edge": 0.4
    },
    "skew": -0.7,
    "shapes": [
      "c",
      "s",
      "t"
    ]
  })
}

// Initialize app
initializeApp()
setupBrainWaveAnimation()
createParticles()
setupParallax()
setupScrollEffects()
initializeFinisherHeader()
