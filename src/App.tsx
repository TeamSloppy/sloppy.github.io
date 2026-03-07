import { useEffect } from 'react'
import soLogo from './assets/so_logo.svg'
import './App.css'
import { NotFoundPage } from './components/NotFoundPage'

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

  const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html'
  if (!isHome) {
    return <NotFoundPage />
  }

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
            <a href="#features" className="nav-link">[ Features ↗ ]</a>
            <a href="#docs" className="nav-link">[ Docs ↗ ]</a>
            <a href="https://github.com/TeamSloppy/Sloppy" target="_blank" rel="noreferrer" className="nav-link">[ GitHub ↗ ]</a>
          </div>
          <div className="nav-actions">
            <button className="btn btn-primary hover-levitate">[ Initialize ]</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="hero container">
          <div className="hero-content" style={{ position: 'relative' }}>
            <div className="hud-element" style={{ position: 'absolute', top: '-40px', left: '-20px', color: 'var(--accent-cyan)', fontSize: '0.75rem', opacity: 0.8 }}>LOC: 45.92.11.0 // STATUS: ONLINE</div>
            <div className="hud-element" style={{ position: 'absolute', top: '20px', right: '-40px', color: 'var(--accent-pink)', fontSize: '0.75rem', opacity: 0.8, writingMode: 'vertical-rl' }}>PWR_LEVEL: 98%</div>

            <div className="badge animate-fade-up">[ SYS.UPDATE // SLOPPY ECOSYSTEM V2.0 ]</div>
            <h1 className="hero-title animate-fade-up delay-100">
              <span className="text-gradient">Agentic Ecosystem</span><br />
              [ FOR_MODERN_TEAMS ]
            </h1>
            <p className="hero-description animate-fade-up delay-200">
              Deploy, monitor, and execute auto-routines in real-time.
              Root terminal access to your autonomous workflows.
            </p>
            <div className="hero-cta animate-fade-up delay-300">
              <button className="btn btn-primary btn-large hover-levitate">[ DEPLOY_AGENTS ]</button>
              <button className="btn btn-secondary btn-large hover-levitate">[ READ_DOCS ]</button>
            </div>
          </div>

          {/* Mockup / Dashboard Preview */}
          <div className="hero-image-wrapper animate-fade-up delay-300">
            <div className="hero-image glass hover-levitate">
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
        <section id="features" className="features container" style={{ position: 'relative' }}>
          <div className="hud-element" style={{ position: 'absolute', bottom: '0', left: '20px', color: 'var(--text-secondary)', fontSize: '0.75rem', opacity: 0.5 }}>&gt;&gt; DB_CONN: OK // LATENCY: 12ms</div>
          <div className="section-header scroll-animate">
            <h2 className="section-title">++ CORE_MODULES</h2>
            <p className="section-subtitle">OVERRIDE DEFAULT PROTOCOLS WITH BUILT-IN TOOLS</p>
          </div>

          <div className="features-grid">
            {[
              { title: "SYS.MONITOR", desc: "Real-time telemetry of agent execution streams.", icon: "monitoring" },
              { title: "Project Management", desc: "Organize workflows, track progress, and ship faster.", icon: "folder" },
              { title: "Log Analysis", desc: "Deep dive into execution logs with advanced filtering.", icon: "description" },
              { title: "Agent Configuration", desc: "Tweak parameters and system prompts on the fly.", icon: "settings" },
              { title: "Instant Deployment", desc: "Push your agents to production with a single click.", icon: "rocket_launch" },
              { title: "Secure by Design", desc: "Enterprise-grade security and access controls built-in.", icon: "shield" }
            ].map((feature, i) => (
              <div key={i} className="feature-card glass hover-levitate scroll-animate" style={{ animationDelay: `${(i % 3) * 100}ms` }}>
                <div className="feature-icon-wrapper">
                  <span className="material-symbols-rounded">{feature.icon}</span>
                </div>
                <h3 className="feature-title" style={{ textTransform: 'uppercase' }}>&gt; {feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>// ID_{i}</div>
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
