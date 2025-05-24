import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/game");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 overflow-hidden">
      {/* Outer Wrapper with Rotating Arrow Effect */}
      <div className="relative max-w-3xl w-full text-center p-8 rounded-2xl border border-cyan-500 bg-gradient-to-br from-black via-gray-900 to-black shadow-[0_0_30px_rgba(0,255,255,0.5)]">

        {/* Rotating Arrow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full animate-spin-slow origin-center">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-pink-400 text-2xl drop-shadow-md">
              ➤ 
            </div>
          </div>
        </div>

        {/* Actual Animated Content */}
        <motion.div
          className="relative z-10 space-y-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold  drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Blink Tac Toe
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Welcome to <span className="text-cyan-400 font-semibold">Blink Tac Toe</span> — a fun twist on the classic Tic Tac Toe game where emojis replace Xs and Os, and your oldest moves vanish as you play!
          </motion.p>

          <motion.div
            className="bg-transparent border border-cyan-400 rounded-xl p-6 shadow-lg backdrop-blur-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-4 drop-shadow-md">
              Game Rules 🧾
            </h2>
            <ul className="text-left space-y-2 text-sm md:text-base text-gray-200 leading-relaxed">
              <li>🎮 Choose your emoji category before the game starts.</li>
              <li>⏳ Only 3 emojis per player can be active at once.</li>
              <li>🔁 Your oldest emoji vanishes when you place a new one.</li>
              <li>🏆 Form a line of 3 emojis to win (horizontal, vertical, or diagonal).</li>
            </ul>
          </motion.div>

          <motion.button
            onClick={handleStart}
            className="mt-8 px-10 py-3 bg-gradient-to-br from-pink-500 to-cyan-400 text-white rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,0,255,0.6)]"
            whileTap={{ scale: 0.95 }}
          >
            🚀 Start Game
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
