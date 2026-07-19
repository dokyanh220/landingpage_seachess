import { useEffect, useRef } from 'react';
import { Swords, Trophy, Bot, History, Users } from 'lucide-react';
import '../styles/Features.css';

const features = [
  {
    icon: Swords,
    title: 'Real-time Multiplayer',
    description: 'Chơi online với người chơi khác trên toàn thế giới với độ trễ cực thấp, powered by SignalR. Trải nghiệm mượt mà như đang ngồi đối diện.',
  },
  {
    icon: Trophy,
    title: 'Xếp hạng Elo & Matchmaking',
    description: 'Hệ thống Elo chuyên nghiệp tự động tìm đối thủ ngang tầm. Leo rank từ Beginner đến Grand Master trong hệ thống xếp hạng hấp dẫn.',
  },
  {
    icon: Bot,
    title: 'Đối đầu AI (Stockfish)',
    description: 'Luyện tập với engine cờ vua mạnh nhất thế giới từ cấp độ dễ đến khó. Nâng cao kỹ năng mọi lúc, mọi nơi.',
  },
  {
    icon: History,
    title: 'Replay & Lịch sử trận đấu',
    description: 'Xem lại từng nước đi, phân tích chiến thuật và theo dõi quá trình tiến bộ của bạn qua giao diện trực quan.',
  },
  {
    icon: Users,
    title: 'Kết bạn & Trò chuyện',
    description: 'Thêm bạn bè, theo dõi trạng thái online và gửi lời thách đấu trực tiếp. Xây dựng cộng đồng cờ vua của riêng bạn.',
  },
];

export default function Features() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>

        <h2 className="section-title">Tính năng nổi bật</h2>
        <p className="section-subtitle">
          Mọi thứ bạn cần cho một trải nghiệm cờ vua hoàn hảo trên di động
        </p>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card glass-card"
                ref={(el) => (cardsRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-wrapper">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
