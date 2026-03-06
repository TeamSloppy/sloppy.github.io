import { useEffect } from 'react'
import soLogo from './assets/so_logo.svg'
import './App.css'

function App() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-wrapper">
      <div className="glow-bg"></div>

      {/* Navigation (Toolbar) */}
      <nav className="navbar glass-nav">
        <div className="container nav-container">
          <div className="nav-logo">
            <img src={soLogo} alt="Sloppy Logo" className="logo-icon" />
            <span className="logo-text">Sloppy</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#docs" className="nav-link">Docs</a>
            <a href="https://github.com/TeamSloppy/Sloppy" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          </div>
          <div className="nav-actions">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="hero container">
          <div className="hero-content">
            <div className="badge animate-fade-up">Introducing Sloppy Agentic Ecosystem</div>
            <h1 className="hero-title animate-fade-up delay-100">
              The <span className="text-gradient">Agentic Ecosystem</span><br />
              for Modern Teams
            </h1>
            <p className="hero-description animate-fade-up delay-200">
              Deploy, monitor, and interact with your AI agents in real-time.
              Sloppy gives you the ultimate control over your autonomous workflows.
            </p>
            <div className="hero-cta animate-fade-up delay-300">
              <button className="btn btn-primary btn-large hover-lift">Start Deploying</button>
              <button className="btn btn-secondary btn-large hover-lift">Read Documentation</button>
            </div>
          </div>

          {/* Mockup / Dashboard Preview */}
          <div className="hero-image-wrapper animate-fade-up delay-300">
            <div className="hero-image glass hover-lift">
              <div className="window-controls">
                <span></span><span></span><span></span>
              </div>
              <div className="dashboard-skeleton">
                <div className="skeleton-sidebar"></div>
                <div className="skeleton-main">
                  <div className="skeleton-header"></div>
                  <div className="skeleton-cards">
                    <div className="skeleton-card"></div>
                    <div className="skeleton-card"></div>
                    <div className="skeleton-card"></div>
                  </div>
                  <div className="skeleton-chart"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features container">
          <div className="section-header scroll-animate">
            <h2 className="section-title">Everything you need</h2>
            <p className="section-subtitle">Powerful tools built directly into the ecosystem</p>
          </div>

          <div className="features-grid">
            {[
              { title: "Real-time Monitoring", desc: "Watch your agents execute tasks as they happen.", icon: "monitoring" },
              { title: "Project Management", desc: "Organize workflows, track progress, and ship faster.", icon: "folder" },
              { title: "Log Analysis", desc: "Deep dive into execution logs with advanced filtering.", icon: "description" },
              { title: "Agent Configuration", desc: "Tweak parameters and system prompts on the fly.", icon: "settings" },
              { title: "Instant Deployment", desc: "Push your agents to production with a single click.", icon: "rocket_launch" },
              { title: "Secure by Design", desc: "Enterprise-grade security and access controls built-in.", icon: "shield" }
            ].map((feature, i) => (
              <div key={i} className="feature-card glass hover-lift scroll-animate" style={{ animationDelay: `${(i % 3) * 100}ms` }}>
                <div className="feature-icon-wrapper">
                  <span className="material-symbols-rounded">{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="nav-logo">
              <img src={soLogo} alt="Sloppy Logo" className="logo-icon" />
              <span className="logo-text">Sloppy</span>
            </div>
            <p className="footer-text">© {new Date().getFullYear()} Team Sloppy. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
