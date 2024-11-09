import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePlay}
        className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Toggle music"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-pink-500" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-500" />
        )}
      </button>
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/music/preview/mixkit-happy-birthday-tune-527.mp3"
        loop
      />
    </div>
  );
};

export default AudioPlayer;