import { Mail } from 'lucide-react';
import '../styles/Footer.css';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} alt="SeaChess" className="footer-logo-img" />
              <span className="footer-logo-text">SeaChess</span>
            </div>
            <p className="footer-brand-description">
              Ứng dụng cờ vua trực tuyến thời gian thực trên di động.
              Strategy Meets The Tide. 🌊♟️
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="mailto:contact@seachess.app" className="footer-social-link" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-column-title">Sản phẩm</h4>
            <ul className="footer-links">
              <li><a href="#features" className="footer-link">Tính năng</a></li>
              <li><a href="#download" className="footer-link">Tải xuống</a></li>
              <li><a href="#" className="footer-link">Changelog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="footer-column-title">Tài nguyên</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Hướng dẫn chơi</a></li>
              <li><a href="#" className="footer-link">API Docs</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-column-title">Liên hệ</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Về chúng tôi</a></li>
              <li><a href="#" className="footer-link">Liên hệ</a></li>
              <li><a href="#" className="footer-link">Chính sách</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 SeaChess. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
