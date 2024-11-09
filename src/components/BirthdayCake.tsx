import React from 'react';

const BirthdayCake = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Cake base */}
      <div className="absolute bottom-0 w-full h-32 bg-pink-200 rounded-lg shadow-lg">
        <div className="absolute bottom-0 w-full h-24 bg-pink-300 rounded-lg" />
        <div className="absolute bottom-0 w-full h-16 bg-pink-400 rounded-lg" />
      </div>
      
      {/* Candles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-32 w-2 h-8 bg-white"
          style={{
            left: `${20 + i * 20}%`,
            transform: `rotate(${(i - 2) * 5}deg)`,
          }}
        >
          <div className="w-2 h-2 rounded-full bg-yellow-500 animate-flicker" 
               style={{ animationDelay: `${i * 0.1}s` }} />
        </div>
      ))}
      
      {/* Decorations */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full animate-float"
          style={{
            backgroundColor: ['#FFD700', '#FF69B4', '#87CEEB'][i % 3],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BirthdayCake;