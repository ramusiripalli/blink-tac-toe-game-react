import React from 'react';
import { X } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';

const ScoreBoard = ({ onClose }) => {
  const { players, resetScores } = useGame();

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 dark:border-slate-700 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden text-white"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/20 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">🎯 Score Board</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 transition"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {players.map((player) => (
            <div
              key={player.id}
              className={`
                p-4 rounded-xl shadow-inner
                ${player.id === 1 
                  ? 'bg-transparent border-4 border-cyan-500 hover:bg-cyan-500'
                  : 'bg-transparen border-4 border-fuchsia-500 hover:bg-fuchsia-500'
                }
                text-white
              `}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{player.name}</h3>
                  {player.category && (
                    <p className="text-sm opacity-90">
                      {player.category.name} emojis
                    </p>
                  )}
                </div>
                <div className="text-4xl font-bold">{player.score}</div>
              </div>
              {player.category && (
                <div className="mt-2 flex gap-2 text-2xl">
                  {player.category.emojis.slice(0, 5).map((emoji, i) => (
                    <span key={i}>{emoji}</span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Reset Button */}
          <div className="flex justify-center pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetScores}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-all"
            >
              🔄 Reset Scores
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScoreBoard;
