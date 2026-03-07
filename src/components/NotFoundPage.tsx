import { GlitchText } from "./GlitchText/GlitchText";
import soLogo from "../assets/so_logo.svg";

export function NotFoundPage() {
    return (
        <div className="app-wrapper">
            <div className="glow-bg"></div>

            <nav className="navbar glass-nav">
                <div className="container nav-container">
                    <div className="nav-logo">
                        <img src={soLogo} alt="Sloppy Logo" className="logo-icon" />
                        <span className="logo-text">Sloppy</span>
                    </div>
                    <div className="nav-links">
                        <a href="/" className="nav-link">[ Home ↗ ]</a>
                    </div>
                </div>
            </nav>

            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
                <GlitchText text="404" />
                <div style={{ marginTop: '20px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>PAGE_NOT_FOUND</div>
                <a href="/" className="btn btn-primary" style={{ marginTop: '30px' }}>[ RETURN_TO_BASE ]</a>
            </main>
        </div>
    );
}
