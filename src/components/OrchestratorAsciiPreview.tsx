import { OrchestratorAsciiArt } from './OrchestratorAsciiArt'

const soLogo = '/so_logo.svg'
const railIcons = ['terminal', 'deployed_code', 'frame_inspect', 'monitoring', 'memory', 'settings']
const statusLines = [
  '[ source.asset ] orchestrator.png',
  '[ render.mode ] grayscale -> ascii',
  '[ output.stream ] terminal/live',
  '[ animation.state ] signal drift enabled'
]
const renderModes = ['EDGE DENSITY', 'SCANLINE MIX', 'GLYPH PULSE']

export function OrchestratorAsciiPreview() {
  return (
    <div className="hero-image glass hover-levitate">
      <div className="window-controls">
        <span></span><span></span><span></span>
      </div>

      <div className="dashboard-screen orchestrator-screen">
        <aside className="dashboard-rail">
          <div className="dashboard-rail-logo">
            <img src={soLogo} alt="Sloppy Logo" className="dashboard-rail-logo-image" />
          </div>
          <div className="dashboard-rail-nav">
            {railIcons.map((icon, index) => (
              <div key={icon} className={`dashboard-rail-item${index === 0 ? ' is-active' : ''}`}>
                <span className="material-symbols-rounded">{icon}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="dashboard-screen-main orchestrator-screen-main">
          <div className="dashboard-screen-status">[ ASCII_RENDER_PIPELINE // ACTIVE ]</div>
          <div className="dashboard-screen-header orchestrator-screen-header">
            <h3>Orchestrator</h3>
            <span className="orchestrator-screen-kicker">640x640 PNG {'->'} animated terminal render</span>
          </div>
          <div className="dashboard-screen-divider"></div>

          <div className="orchestrator-layout">
            <section className="orchestrator-terminal-panel">
              <div className="orchestrator-terminal-head">
                <span>renderer://orchestrator</span>
                <span>responsive ascii stream</span>
              </div>
              <OrchestratorAsciiArt />
            </section>

            <aside className="orchestrator-sidebar">
              <div className="orchestrator-sidebar-block">
                <div className="orchestrator-sidebar-label">STATUS FEED</div>
                <div className="orchestrator-status-feed">
                  {statusLines.map((line) => (
                    <div key={line} className="orchestrator-status-line">{line}</div>
                  ))}
                </div>
              </div>

              <div className="orchestrator-sidebar-block orchestrator-metrics">
                <div className="orchestrator-metric-card">
                  <span className="orchestrator-metric-value">06</span>
                  <span className="orchestrator-metric-label">Frame States</span>
                </div>
                <div className="orchestrator-metric-card">
                  <span className="orchestrator-metric-value">AUTO</span>
                  <span className="orchestrator-metric-label">Columns</span>
                </div>
                <div className="orchestrator-metric-card">
                  <span className="orchestrator-metric-value">PNG</span>
                  <span className="orchestrator-metric-label">Input Type</span>
                </div>
              </div>

              <div className="orchestrator-sidebar-block">
                <div className="orchestrator-sidebar-label">RENDER MODES</div>
                <div className="orchestrator-mode-list">
                  {renderModes.map((mode) => (
                    <div key={mode} className="orchestrator-mode-chip">{mode}</div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
