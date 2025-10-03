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
      <div class="hero-content">
        <h1>NeuroSync Pro</h1>
        <p class="tagline">Think beyond boundaries.</p>
        <p class="description">
          Revolutionary brain-computer interface powered by advanced AI.
          Understand and interpret your brain waves with unprecedented accuracy.
        </p>
        <div class="button-group">
          <a href="#" class="btn btn-primary">Pre-order now</a>
          <a href="#features" class="btn btn-secondary dark">Learn more</a>
        </div>
        <div class="placeholder-visual">
          🧠
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
          <div class="icon">⚡</div>
          <h3>Real-time Analysis</h3>
          <p>Process brain signals instantly with millisecond precision. Our AI adapts to your unique neural patterns.</p>
        </div>
        <div class="feature-card">
          <div class="icon">🎯</div>
          <h3>Adaptive Learning</h3>
          <p>Advanced machine learning that gets better with use. The system learns your intentions over time.</p>
        </div>
        <div class="feature-card">
          <div class="icon">🔒</div>
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
        🔬
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
          <div class="icon">🏥</div>
          <h3>Medical Applications</h3>
          <p>Monitor neurological conditions, track mental health metrics, and support therapeutic interventions.</p>
        </div>
        <div class="feature-card">
          <div class="icon">🎮</div>
          <h3>Mind Control</h3>
          <p>Control devices, applications, and smart home systems with your thoughts. No hands required.</p>
        </div>
        <div class="feature-card">
          <div class="icon">📈</div>
          <h3>Performance Optimization</h3>
          <p>Track cognitive performance, optimize focus states, and enhance meditation practices.</p>
        </div>
        <div class="feature-card">
          <div class="icon">🎨</div>
          <h3>Creative Expression</h3>
          <p>Translate emotions into art, music, and digital experiences in real-time.</p>
        </div>
        <div class="feature-card">
          <div class="icon">💬</div>
          <h3>Communication</h3>
          <p>Assist individuals with speech disabilities to communicate through neural signals.</p>
        </div>
        <div class="feature-card">
          <div class="icon">🔮</div>
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
}

// Initialize app
initializeApp()
setupScrollEffects()
