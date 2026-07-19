import { Zap, ChevronRight } from 'lucide-react';
import '../styles/Hero.css';
import mockupHome from '../assets/mockup-home.jpg';
import mockupGame from '../assets/mockup-game.jpg';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Decorative chess pieces */}
      <span className="hero-chess-piece" aria-hidden="true">♛</span>
      <span className="hero-chess-piece" aria-hidden="true">♞</span>
      <span className="hero-chess-piece" aria-hidden="true">♜</span>

      <div className="hero-inner">
        {/* Left: Text Content */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <span className="hero-badge-dot"></span>
            Real-time Multiplayer Chess
          </div>

          <h1 className="hero-title animate-fade-in-up delay-1">
            <span className="hero-title-line">Strategy Meets</span>
            <span className="hero-title-line hero-title-gradient">The Tide 🌊♟️</span>
          </h1>

          <p className="hero-description animate-fade-in-up delay-2">
            Chinh phục đại dương cờ vua! Đấu online thời gian thực,
            leo hạng Elo, luyện tập với AI Stockfish và trở thành
            Grand Master trong cộng đồng SeaChess toàn cầu.
          </p>

          <div className="hero-cta-group animate-fade-in-up delay-3">
            <a href="/app-release.apk" download className="btn-cta" aria-label="Download SeaChess for Android">
              <AndroidIcon />
              Get it on Android
            </a>
            <a href="#features" className="hero-cta-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Khám phá thêm
              <ChevronRight size={18} />
            </a>
          </div>

          <div className="hero-stats animate-fade-in-up delay-4">
            <div className="hero-stat">
              <span className="hero-stat-number">10K+</span>
              <span className="hero-stat-label">Players</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">50K+</span>
              <span className="hero-stat-label">Games Played</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">4.8★</span>
              <span className="hero-stat-label">Rating</span>
            </div>
          </div>
        </div>

        {/* Right: Phone Mockups */}
        <div className="hero-mockups animate-scale-in delay-2">
          <div className="hero-mockup-glow"></div>
          <img
            src={mockupHome}
            alt="SeaChess Home Screen"
            className="hero-mockup-main"
            loading="eager"
          />
          <img
            src={mockupGame}
            alt="SeaChess Game Screen"
            className="hero-mockup-secondary"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

/* Inline Android SVG icon */
function AndroidIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.523 2.24l1.59-1.59a.5.5 0 0 0-.707-.707l-1.78 1.78A8.93 8.93 0 0 0 12 .5a8.93 8.93 0 0 0-4.626 1.223L5.594.043a.5.5 0 0 0-.707.707l1.59 1.59A8.97 8.97 0 0 0 3 8.5v1h18v-1a8.97 8.97 0 0 0-3.477-6.26zM8.5 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM3 10.5v8a2 2 0 0 0 2 2h1v3a1.5 1.5 0 0 0 3 0v-3h6v3a1.5 1.5 0 0 0 3 0v-3h1a2 2 0 0 0 2-2v-8H3zm-2.5 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm23 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5z" />
    </svg>
  );
}
