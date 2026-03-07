import { GlitchText } from "./GlitchText/GlitchText";
import soLogo from "../assets/so_logo.svg";

interface ErrorPageProps {
    error?: Error;
    resetErrorBoundary?: () => void;
}

export function ErrorPage({ error, resetErrorBoundary }: ErrorPageProps) {
    return (
        <div className="app-wrapper">
            <div className="glow-bg"></div>

            <nav className="navbar glass-nav">
                <div className="container nav-container">
                    <div className="nav-logo">
                        <img src={soLogo} alt="Sloppy Logo" className="logo-icon" />
                        <span className="logo-text">Sloppy</span>
                    </div>
                </div>
            </nav>

            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', position: 'relative' }}>
                <GlitchText text="ERROR" style={{ color: 'var(--accent-pink)', fontSize: '72px' }} />
                <div style={{ marginTop: '20px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '600px', padding: '0 20px' }}>
                    <div style={{ marginBottom: '10px' }}>SYSTEM_FAILURE_DETECTED</div>
                    {error && (
                        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '4px', border: '1px solid var(--accent-pink)', color: 'var(--accent-pink)', fontSize: '12px', textAlign: 'left', overflow: 'auto', maxHeight: '200px' }}>
                            {error.message}
                        </div>
                    )}
                    {resetErrorBoundary && (
                        <button
                            onClick={resetErrorBoundary}
                            className="btn btn-primary"
                            style={{ marginTop: '20px' }}
                        >
                            [ REBOOT_SYSTEM ]
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
}
