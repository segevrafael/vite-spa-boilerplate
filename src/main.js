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
    ${createTestimonialsSection()}
    ${createExpertQASection()}
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
    <section id="technology" class="product-section dark asymmetric-section">
      <div class="section-content-wrapper">
        <div class="tech-content">
          <h2>Advanced Neural Interface</h2>
          <p class="subtitle">Technology that connects with you.</p>
          <p class="feature-description">
            Non-invasive sensors capture EEG signals with medical-grade accuracy.
            Wireless connectivity and all-day battery life keep you in sync wherever you go.
          </p>
          <div class="tech-specs">
            <div class="spec-item">
              <span class="spec-number">256</span>
              <span class="spec-label">Channels</span>
            </div>
            <div class="spec-item">
              <span class="spec-number">1ms</span>
              <span class="spec-label">Latency</span>
            </div>
            <div class="spec-item">
              <span class="spec-number">24h</span>
              <span class="spec-label">Battery</span>
            </div>
          </div>
          <div class="button-group">
            <a href="#" class="btn btn-primary">View specifications</a>
            <a href="#" class="btn btn-secondary dark">Watch the keynote</a>
          </div>
        </div>
        <div class="tech-visual">
          <div class="placeholder-visual neon-visual">
            <div class="neural-network-viz">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="neural-svg">
                <!-- Central brain core -->
                <circle cx="100" cy="100" r="50" fill="none" stroke="url(#neonGradient)" stroke-width="2" class="pulse-ring-1"/>
                <circle cx="100" cy="100" r="40" fill="none" stroke="url(#neonGradient)" stroke-width="2" opacity="0.7" class="pulse-ring-2"/>
                <circle cx="100" cy="100" r="30" fill="none" stroke="url(#neonGradient)" stroke-width="2" opacity="0.5" class="pulse-ring-3"/>

                <!-- Neural nodes -->
                <circle cx="100" cy="50" r="5" fill="url(#neonGradient)" class="node"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle>
                <circle cx="150" cy="100" r="5" fill="url(#neonGradient)" class="node"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/></circle>
                <circle cx="100" cy="150" r="5" fill="url(#neonGradient)" class="node"><animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="0.5s" repeatCount="indefinite"/></circle>
                <circle cx="50" cy="100" r="5" fill="url(#neonGradient)" class="node"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/></circle>

                <!-- Connection lines -->
                <line x1="100" y1="50" x2="100" y2="70" stroke="url(#neonGradient)" stroke-width="1.5" opacity="0.6"/>
                <line x1="150" y1="100" x2="130" y2="100" stroke="url(#neonGradient)" stroke-width="1.5" opacity="0.6"/>
                <line x1="100" y1="150" x2="100" y2="130" stroke="url(#neonGradient)" stroke-width="1.5" opacity="0.6"/>
                <line x1="50" y1="100" x2="70" y2="100" stroke="url(#neonGradient)" stroke-width="1.5" opacity="0.6"/>

                <!-- Central core with animation -->
                <circle cx="100" cy="100" r="15" fill="url(#neonGradient)" opacity="0.8">
                  <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite"/>
                </circle>

                <defs>
                  <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#00d4ff"/>
                    <stop offset="50%" style="stop-color:#8a2be2"/>
                    <stop offset="100%" style="stop-color:#f88aff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
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

function createTestimonialsSection() {
  return `
    <section id="testimonials" class="product-section dark">
      <h2>Trusted by Innovators</h2>
      <p class="subtitle">Real experiences from our early adopters</p>

      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#avatarGradient1)"/>
                <text x="50" y="60" font-size="32" fill="#fff" text-anchor="middle" font-weight="600">DS</text>
                <defs>
                  <linearGradient id="avatarGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0071e3"/>
                    <stop offset="100%" style="stop-color:#00d4ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="testimonial-info">
              <h4>Dr. Sarah Mitchell</h4>
              <p class="testimonial-role">Neuroscientist, Stanford University</p>
            </div>
            <div class="rating">★★★★★</div>
          </div>
          <p class="testimonial-text">"As a researcher in cognitive neuroscience, I'm impressed by the signal clarity and low latency. NeuroSync has transformed how we conduct brain-computer interface studies. The 256-channel array captures unprecedented detail."</p>
          <p class="testimonial-meta">Verified Purchase • March 2024</p>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#avatarGradient2)"/>
                <text x="50" y="60" font-size="32" fill="#fff" text-anchor="middle" font-weight="600">JC</text>
                <defs>
                  <linearGradient id="avatarGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8a2be2"/>
                    <stop offset="100%" style="stop-color:#f88aff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="testimonial-info">
              <h4>James Chen</h4>
              <p class="testimonial-role">Software Engineer, Tech Enthusiast</p>
            </div>
            <div class="rating">★★★★★</div>
          </div>
          <p class="testimonial-text">"I've been using NeuroSync for 3 months to control my smart home setup. The accuracy is mind-blowing - literally! The adaptive learning really does get better over time. Battery life easily lasts the full day."</p>
          <p class="testimonial-meta">Verified Purchase • February 2024</p>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#avatarGradient3)"/>
                <text x="50" y="60" font-size="32" fill="#fff" text-anchor="middle" font-weight="600">MP</text>
                <defs>
                  <linearGradient id="avatarGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1bffc2"/>
                    <stop offset="100%" style="stop-color:#00d4ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="testimonial-info">
              <h4>Maria Patel</h4>
              <p class="testimonial-role">Clinical Psychologist</p>
            </div>
            <div class="rating">★★★★★</div>
          </div>
          <p class="testimonial-text">"I use NeuroSync with patients for neurofeedback therapy. The real-time analysis and visualization capabilities are exceptional. My patients see measurable improvements in focus and anxiety management."</p>
          <p class="testimonial-meta">Verified Purchase • January 2024</p>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#avatarGradient4)"/>
                <text x="50" y="60" font-size="32" fill="#fff" text-anchor="middle" font-weight="600">AK</text>
                <defs>
                  <linearGradient id="avatarGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f88aff"/>
                    <stop offset="100%" style="stop-color:#8a2be2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="testimonial-info">
              <h4>Alex Kim</h4>
              <p class="testimonial-role">Professional Gamer & Streamer</p>
            </div>
            <div class="rating">★★★★★</div>
          </div>
          <p class="testimonial-text">"Game-changer for competitive gaming. Being able to monitor my focus states during tournaments has improved my performance significantly. The device is comfortable even during 8-hour sessions."</p>
          <p class="testimonial-meta">Verified Purchase • March 2024</p>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#avatarGradient5)"/>
                <text x="50" y="60" font-size="32" fill="#fff" text-anchor="middle" font-weight="600">RB</text>
                <defs>
                  <linearGradient id="avatarGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0071e3"/>
                    <stop offset="100%" style="stop-color:#8a2be2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="testimonial-info">
              <h4>Dr. Robert Barnes</h4>
              <p class="testimonial-role">Neurologist, Mayo Clinic</p>
            </div>
            <div class="rating">★★★★★</div>
          </div>
          <p class="testimonial-text">"The medical-grade accuracy is remarkable for a consumer device. We're using NeuroSync in our sleep disorder clinic for at-home monitoring. The data quality rivals equipment costing 10x more."</p>
          <p class="testimonial-meta">Verified Purchase • December 2023</p>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="url(#avatarGradient6)"/>
                <text x="50" y="60" font-size="32" fill="#fff" text-anchor="middle" font-weight="600">LW</text>
                <defs>
                  <linearGradient id="avatarGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#00d4ff"/>
                    <stop offset="100%" style="stop-color:#1bffc2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="testimonial-info">
              <h4>Lisa Wang</h4>
              <p class="testimonial-role">Meditation Instructor & Wellness Coach</p>
            </div>
            <div class="rating">★★★★★</div>
          </div>
          <p class="testimonial-text">"NeuroSync has revolutionized my meditation practice and teaching. Seeing real-time feedback on brain states helps my students reach deeper meditative states faster. The privacy-first approach is essential for this work."</p>
          <p class="testimonial-meta">Verified Purchase • February 2024</p>
        </div>
      </div>
    </section>
  `
}

function createExpertQASection() {
  return `
    <section id="expert-qa" class="product-section light">
      <div class="expert-header">
        <div class="expert-profile">
          <div class="expert-avatar">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" fill="url(#expertGradient)" stroke="url(#expertStroke)" stroke-width="2"/>
              <text x="50" y="60" font-size="28" fill="#fff" text-anchor="middle" font-weight="700">Dr.N</text>
              <defs>
                <linearGradient id="expertGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#00d4ff"/>
                </linearGradient>
                <linearGradient id="expertStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00d4ff"/>
                  <stop offset="100%" style="stop-color:#8a2be2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="expert-info">
            <h3>Ask the Expert</h3>
            <h4>Dr. Emily Nakamura, Ph.D.</h4>
            <p class="expert-credentials">Chief Neuroscientist at NeuroSync | 15+ years in BCI Research</p>
            <p class="expert-bio">Former MIT researcher specializing in neural signal processing and brain-computer interfaces. Published 40+ peer-reviewed papers on EEG analysis and cognitive neuroscience.</p>
          </div>
        </div>
      </div>

      <div class="qa-grid">
        <div class="qa-item">
          <div class="question">
            <svg class="qa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="url(#qaGradient)" stroke-width="2"/>
              <text x="12" y="17" font-size="14" fill="url(#qaGradient)" text-anchor="middle" font-weight="700">Q</text>
              <defs>
                <linearGradient id="qaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0071e3"/>
                  <stop offset="100%" style="stop-color:#00d4ff"/>
                </linearGradient>
              </defs>
            </svg>
            <h4>How accurate is NeuroSync compared to medical-grade EEG equipment?</h4>
          </div>
          <div class="answer">
            <p><strong>Dr. Nakamura:</strong> NeuroSync achieves 94-97% accuracy compared to clinical EEG systems, which is exceptional for a consumer device. Our 256-channel array and 1ms latency rival equipment used in research labs. The key difference is in surgical-grade systems, but for non-invasive BCI applications, NeuroSync meets or exceeds medical standards for signal quality.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="question">
            <svg class="qa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="url(#qaGradient)" stroke-width="2"/>
              <text x="12" y="17" font-size="14" fill="url(#qaGradient)" text-anchor="middle" font-weight="700">Q</text>
            </svg>
            <h4>Is it safe to use every day? Are there any health risks?</h4>
          </div>
          <div class="answer">
            <p><strong>Dr. Nakamura:</strong> Absolutely safe. NeuroSync only reads electrical signals - it doesn't emit any radiation or electrical stimulation. We've conducted extensive safety testing and received FDA clearance as a Class II medical device. Daily use is not only safe but recommended for optimal adaptive learning. Think of it like wearing headphones, but instead of playing sound, it's listening to your brain.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="question">
            <svg class="qa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="url(#qaGradient)" stroke-width="2"/>
              <text x="12" y="17" font-size="14" fill="url(#qaGradient)" text-anchor="middle" font-weight="700">Q</text>
            </svg>
            <h4>How does the AI "learn" my brain patterns?</h4>
          </div>
          <div class="answer">
            <p><strong>Dr. Nakamura:</strong> Our proprietary neural network analyzes your unique brain signature over the first few weeks. Everyone's brain patterns are different - like fingerprints. The AI builds a personalized model of your neural activity, learning to distinguish between different mental states (focus, relaxation, specific intentions). This happens entirely on-device, so your neural data never leaves NeuroSync. The more you use it, the better it understands you.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="question">
            <svg class="qa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="url(#qaGradient)" stroke-width="2"/>
              <text x="12" y="17" font-size="14" fill="url(#qaGradient)" text-anchor="middle" font-weight="700">Q</text>
            </svg>
            <h4>Can I really control devices with my thoughts?</h4>
          </div>
          <div class="answer">
            <p><strong>Dr. Nakamura:</strong> Yes! But let me clarify how it works. You're not "thinking words" at devices. Instead, you learn to generate specific mental patterns - like imagining hand movements or focusing attention. After calibration (usually 20-30 minutes), you can trigger commands reliably. Current users achieve 85-95% accuracy for basic commands within a week. Complex control takes practice, similar to learning a musical instrument.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="question">
            <svg class="qa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="url(#qaGradient)" stroke-width="2"/>
              <text x="12" y="17" font-size="14" fill="url(#qaGradient)" text-anchor="middle" font-weight="700">Q</text>
            </svg>
            <h4>What about data privacy? Can anyone read my thoughts?</h4>
          </div>
          <div class="answer">
            <p><strong>Dr. Nakamura:</strong> This is our most common concern, and I understand why. Let me be crystal clear: NeuroSync cannot "read thoughts" in the way you imagine. It detects electrical patterns associated with brain states, not specific thoughts or memories. All processing happens locally on the device - nothing is transmitted to the cloud. Your neural data is encrypted end-to-end and you have complete control over deletion. We're GDPR and HIPAA compliant.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="question">
            <svg class="qa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="url(#qaGradient)" stroke-width="2"/>
              <text x="12" y="17" font-size="14" fill="url(#qaGradient)" text-anchor="middle" font-weight="700">Q</text>
            </svg>
            <h4>How long does it take to see results?</h4>
          </div>
          <div class="answer">
            <p><strong>Dr. Nakamura:</strong> It depends on your use case. For simple applications like meditation tracking or focus monitoring, you'll see meaningful data from day one. For device control, expect basic functionality within 3-5 days of daily use, with proficiency developing over 2-3 weeks. Clinical applications like neurofeedback therapy typically show measurable improvements within 4-6 weeks of regular sessions. The key is consistency - the device learns faster with regular use.</p>
          </div>
        </div>
      </div>

      <div class="expert-cta">
        <p>Have more questions? Our neuroscience team is here to help.</p>
        <button class="btn btn-primary" onclick="openContactModal()">Ask an Expert</button>
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
          <button class="btn btn-primary" onclick="openContactModal()">Contact Sales</button>
          <button class="btn btn-secondary dark" onclick="openContactModal()">Join Waitlist</button>
        </div>
        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
        <p class="copyright">&copy; 2025 NeuroSync. All rights reserved.</p>
      </div>
    </footer>

    <!-- Contact Modal -->
    <div id="contactModal" class="modal">
      <div class="modal-content">
        <button class="modal-close" onclick="closeContactModal()">&times;</button>
        <h2>Contact Us</h2>
        <p class="modal-subtitle">Experience the future of neural technology</p>
        <form class="contact-form" onsubmit="handleContactSubmit(event)">
          <div class="form-group">
            <input type="text" id="name" required placeholder=" ">
            <label for="name">Full Name</label>
          </div>
          <div class="form-group">
            <input type="email" id="email" required placeholder=" ">
            <label for="email">Email Address</label>
          </div>
          <div class="form-group">
            <input type="tel" id="phone" placeholder=" ">
            <label for="phone">Phone (Optional)</label>
          </div>
          <div class="form-group">
            <textarea id="message" rows="4" required placeholder=" "></textarea>
            <label for="message">Message</label>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Send Message</button>
        </form>
      </div>
    </div>
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

  // Observe testimonial cards
  document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`
    observer.observe(card)
  })

  // Observe Q&A items
  document.querySelectorAll('.qa-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
    observer.observe(item)
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

// Modal functions
window.openContactModal = function() {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
  }
}

window.closeContactModal = function() {
  const modal = document.getElementById('contactModal')
  if (modal) {
    modal.style.display = 'none'
    document.body.style.overflow = ''
  }
}

window.handleContactSubmit = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = {
    name: form.querySelector('#name').value,
    email: form.querySelector('#email').value,
    phone: form.querySelector('#phone').value,
    message: form.querySelector('#message').value
  }

  console.log('Form submitted:', formData)
  alert('Thank you for your interest! We\'ll be in touch soon.')
  closeContactModal()
  form.reset()
}

// Close modal on outside click
window.addEventListener('click', function(event) {
  const modal = document.getElementById('contactModal')
  if (event.target === modal) {
    closeContactModal()
  }
})

// Initialize app
initializeApp()
setupBrainWaveAnimation()
createParticles()
setupParallax()
setupScrollEffects()
initializeFinisherHeader()
