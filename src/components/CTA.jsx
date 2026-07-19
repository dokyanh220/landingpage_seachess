import { Download } from 'lucide-react';
import '../styles/CTA.css';

export default function CTA() {
  return (
    <section className="cta-section section" id="download">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-card glass-card">
            <div className="cta-emoji" aria-hidden="true">🌊♟️</div>

            <h2 className="cta-title">
              Sẵn sàng chinh phục<br />
              <span className="cta-title-gradient">đại dương cờ vua?</span>
            </h2>

            <p className="cta-description">
              Tải ngay SeaChess và tham gia cộng đồng hàng nghìn kỳ thủ.
              Miễn phí, không quảng cáo, trải nghiệm thuần khiết.
            </p>

            <a href="#" className="btn-cta cta-btn-large" aria-label="Download SeaChess APK for Android">
              <AndroidIcon />
              Download for Android (APK)
              <Download size={20} />
            </a>

            <div className="cta-platforms">
              <span>📱 Android 8.0+</span>
              <span className="cta-platforms-divider"></span>
              <span>🎮 Multiplayer Ready</span>
              <span className="cta-platforms-divider"></span>
              <span>⚡ Lightweight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AndroidIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.523 2.24l1.59-1.59a.5.5 0 0 0-.707-.707l-1.78 1.78A8.93 8.93 0 0 0 12 .5a8.93 8.93 0 0 0-4.626 1.223L5.594.043a.5.5 0 0 0-.707.707l1.59 1.59A8.97 8.97 0 0 0 3 8.5v1h18v-1a8.97 8.97 0 0 0-3.477-6.26zM8.5 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM3 10.5v8a2 2 0 0 0 2 2h1v3a1.5 1.5 0 0 0 3 0v-3h6v3a1.5 1.5 0 0 0 3 0v-3h1a2 2 0 0 0 2-2v-8H3zm-2.5 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm23 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5z" />
    </svg>
  );
}
