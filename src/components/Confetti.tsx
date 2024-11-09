import React from 'react';

const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            backgroundColor: ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98'][
              Math.floor(Math.random() * 4)
            ],
            width: '8px',
            height: '8px',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;