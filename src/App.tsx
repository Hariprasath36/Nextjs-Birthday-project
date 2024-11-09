import React, { useState } from 'react';
import { Send, Camera } from 'lucide-react';
import Confetti from './components/Confetti';
import AudioPlayer from './components/AudioPlayer';
import BirthdayCake from './components/BirthdayCake';

function App() {
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
      <Confetti />
      <AudioPlayer />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center mb-12">
            <span className="block text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-pulse">
              Happy Birthday!
            </span>
          </h1>

          <BirthdayCake />

          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="relative group mb-8">
              <img
                src={photo}
                alt="Birthday celebration"
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform group-hover:scale-[1.02]"
              />
              <button
                className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                aria-label="Change photo"
              >
                <Camera className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="space-y-6">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your birthday message here..."
                className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none h-32"
              />

              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Birthday Wishes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;