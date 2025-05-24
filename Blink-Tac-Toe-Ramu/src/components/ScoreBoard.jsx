import React from 'react';
import { X } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';

const ScoreBoard = ({ onClose }) => {
  const { players, resetScores } = useGame();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full shadow-xl overflow-hidden"
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <h2 className="text-xl font-bold">Score Board</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {/* Player scores */}
            {players.map((player) => (
              <div 
                key={player.id}
                className={`p-4 rounded-lg ${
                  player.id === 1 ? 
                  'bg-gradient-to-r from-blue-500 to-teal-500' : 
                  'bg-gradient-to-r from-amber-500 to-pink-500'
                } text-white`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{player.name}</h3>
                    {player.category && (
                      <p className="text-sm text-white/80">
                        {player.category.name} emojis
                      </p>
                    )}
                  </div>
                  <div className="text-4xl font-bold">{player.score}</div>
                </div>
                
                {player.category && (
                  <div className="mt-2 flex space-x-2">
                    {player.category.emojis.slice(0, 5).map((emoji, i) => (
                      <span key={i} className="text-xl">{emoji}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Reset scores button */}
            <div className="flex justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetScores}
                className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
              >
                Reset Scores
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScoreBoard;