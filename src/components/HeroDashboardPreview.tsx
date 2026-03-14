const soLogo = '/so_logo.svg'

const runtimeStats = [
  { id: 'agents', icon: 'support_agent', value: '3', label: 'Agents Available', sub: 'Registered in Core' },
  { id: 'active', icon: 'play_circle', value: '0', label: 'Tasks In Progress', sub: '0 running · 0 queued' },
  { id: 'running', icon: 'bolt', value: '0', label: 'Running Now', sub: 'Active worker processes' },
  { id: 'waiting', icon: 'hourglass_empty', value: '0', label: 'Waiting Input', sub: 'Blocked on human review' }
]

const activeChannels = [
  {
    id: 'agent-ceo',
    title: 'agent:ceo',
    project: 'Unassigned',
    primaryAgent: 'CEO',
    agents: ['CEO'],
    previewLines: [
      'Hello there! Started to work on your request.'
    ],
    messages: 1,
    updatedAt: 'just now'
  }
]

const botActivity = [
  { id: 'bn-1', name: 'CEO', initials: 'CEO', runs: [320, 2, 2, 20, 2, 2, 32, 67, 2, 112, 78, 2] },
  { id: 'bn-2', name: 'Branch No Todo Agent', initials: 'BN', runs: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 78, 2] },
  { id: 'b5-1', name: 'Builder-5Efa3345-D6…', initials: 'B5', runs: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
]

function agentInitials(name: string) {
  const parts = String(name)
    .trim()
    .split(/[\s_-]+/)
    .filter(Boolean)

  if (parts.length === 0) return '??'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
}

export function HeroDashboardPreview() {
  return (
    <div className="hero-image glass hover-levitate">
      <div className="window-controls">
        <span></span><span></span><span></span>
      </div>
      <div className="dashboard-screen">
        <aside className="dashboard-rail">
          <div className="dashboard-rail-logo">
            <img src={soLogo} alt="Sloppy Logo" className="dashboard-rail-logo-image" />
          </div>
          <div className="dashboard-rail-nav">
            {['dashboard', 'folder', 'monitoring', 'groups', 'settings', 'description'].map((icon, index) => (
              <div key={icon} className={`dashboard-rail-item${index === 0 ? ' is-active' : ''}`}>
                <span className="material-symbols-rounded">{icon}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="dashboard-screen-main">
          <div className="dashboard-screen-status">[&gt;- SECURE_SESSION_ACTIVE // PID: 9284]</div>
          <div className="dashboard-screen-header">
            <h3>Overview</h3>
          </div>
          <div className="dashboard-screen-divider"></div>

          <div className="preview-overview-shell">
            <section className="overview-section">
              <div className="overview-section-header">
                <h2>
                  <span className="material-symbols-rounded">forum</span>
                  Active Channels
                </h2>
                <span className="overview-section-count">{activeChannels.length}</span>
              </div>
              <div className="active-channels-grid">
                {activeChannels.map((channel) => (
                  <div key={channel.id} className="channel-card">
                    <div className="channel-card-head">
                      <span className="channel-card-dot channel-dot-active" />
                      <span className="channel-card-title">{channel.title}</span>
                      <span className="channel-card-project">{channel.project}</span>
                    </div>
                    <div className="channel-card-meta">
                      <span className="material-symbols-rounded">smart_toy</span>
                      <span>{channel.primaryAgent}</span>
                    </div>
                    <div className="channel-card-agents">
                      {channel.agents.map((agent) => (
                        <span key={agent} className="channel-agent-avatar" title={agent}>
                          {agentInitials(agent)}
                        </span>
                      ))}
                    </div>
                    <div className="channel-card-preview">
                      {channel.previewLines.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                    <div className="channel-card-footer">
                      <span className="channel-worker-count">{channel.messages} messages</span>
                      <span className="channel-session-time">Active {channel.updatedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="overview-section">
              <div className="overview-section-header">
                <h2>
                  <span className="material-symbols-rounded">monitoring</span>
                  System Status
                </h2>
              </div>
              <div className="stat-row">
                {runtimeStats.map((stat) => (
                  <div key={stat.id} className="stat-card">
                    <div className="stat-card-icon">
                      <span className="material-symbols-rounded">{stat.icon}</span>
                    </div>
                    <div className="stat-card-value">{stat.value}</div>
                    <div className="stat-card-label">{stat.label}</div>
                    <div className="stat-card-sub">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="overview-section">
              <div className="overview-section-header">
                <h2>
                  <span className="material-symbols-rounded">bar_chart</span>
                  Bot Activity
                  <span className="overview-section-period">Last 14 days</span>
                </h2>
                <span className="overview-section-count">3 bots</span>
              </div>
              <div className="activity-charts-grid">
                {botActivity.map((agent) => {
                  const max = Math.max(...agent.runs, 1)
                  return (
                    <div key={agent.id} className="agent-chart-card chart-card">
                      <div className="chart-header">
                        <div className="agent-chart-title">
                          <span className="channel-agent-avatar agent-chart-avatar">
                            {agent.initials}
                          </span>
                          <h4>{agent.name}</h4>
                        </div>
                      </div>
                      <div className="chart-body">
                        <div className="chart-label">Runs</div>
                        <div className="chart-bars">
                          {agent.runs.map((value, index) => (
                            <div key={`${agent.id}-${index}`} className="chart-bar-wrap">
                              <div
                                className="chart-bar"
                                style={{ height: `${Math.round((value / max) * 100)}%` }}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="chart-x-axis">
                          <span>3/1</span>
                          <span>3/8</span>
                          <span>3/14</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
