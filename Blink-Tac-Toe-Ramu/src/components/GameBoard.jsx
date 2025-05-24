import React from 'react';
import { useGame } from '../contexts/GameContext';
import { motion, AnimatePresence } from 'framer-motion';

const GameBoard = () => {
  const { board, currentPlayer, placeEmoji, availableEmoji } = useGame();

  return (
    <div className="space-y-8 flex flex-col items-center">
      {/* Game board */}
      <div
        className={`rounded-xl p-6 text-center shadow-xl border-4 transition-all duration-300 ${
          currentPlayer.id === 1
            ? 'bg-[#091a2e] to-black text-white border-cyan-400 shadow-cyan-500/80'
            : 'bg-[#091a2e] text-white border-[#ff00c3] shadow-[#ff00c3]/80'
        }`}
      >
        <h2 className="text-xl font-bold mb-3 animate-pulse">
          {currentPlayer.name}'s Turn
        </h2>

        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-white/90">Your emoji:</p>
          <motion.span
            className="text-4xl animate-spin"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            key={availableEmoji}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            {availableEmoji}
          </motion.span>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 h-[400px] w-[400px] gap-4 p-4">
          {board.map((cell, index) => (
            <motion.button
              key={index}
              onClick={() => placeEmoji(index)}
              disabled={cell.emoji !== null}
              className={`relative flex items-center justify-center rounded-xl text-4xl transition-all duration-300
                ${cell.emoji === null
                  ? 'bg-slate-100 dark:bg-white hover:bg-slate-300 dark:hover:bg-slate-500 cursor-pointer shadow-inner'
                  : 'bg-white/80 cursor-default'}`}
              whileHover={{ scale: cell.emoji === null ? 1.05 : 1 }}
              whileTap={{ scale: cell.emoji === null ? 0.95 : 1 }}
            >
              <AnimatePresence mode="wait">
                {cell.emoji && (
                  <motion.span
                    key={`${index}-${cell.emoji}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180, opacity: 0 }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {cell.emoji}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Player panels */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
        {[1, 2].map((playerId) => {
          const isActive = currentPlayer.id === playerId;
          const playerData = {
            1: {
              label: 'Player 1',
              gradient: 'from-cyan-500 to-cyan-600',
              glow: 'ring-cyan-400 shadow-cyan-400/30',
            },
            2: {
              label: 'Player 2',
              gradient: 'from-pink-400 to-purple-500',
              glow: 'ring-pink-400 shadow-pink-400/30',
            },
          }[playerId];

          const playerEmojis = currentPlayer.id === playerId
            ? currentPlayer.placedEmojis
            : [];

          return (
            <motion.div
              key={playerId}
              className={`p-4 rounded-xl text-center backdrop-blur-md bg-[#0c2541] ${
                isActive
                  ? `bg-gradient-to-r ${playerData.gradient} text-white ring-2 ring-offset-2 ${playerData.glow} border`
                  : 'bg-[#0a2b51] text-white ring-0 border border-cyan-500'
              } transition-all duration-300`}
              whileHover={isActive ? { scale: 1.02 } : {}}
              animate={isActive ? { y: [0, -3, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className={`text-md font-semibold mb-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {playerData.label}
              </p>
              <div className="flex justify-center gap-2">
                {Array(3).fill(null).map((_, i) => {
                  const emoji = playerEmojis[i]?.emoji;
                  return (
                    <motion.div
                      key={i}
                      className={`w-12 h-12 flex items-center justify-center rounded-lg
                        ${emoji ? 'bg-white/20' : 'bg-white/5'}`}
                      initial={false}
                      animate={emoji ? { scale: [0.8, 1], rotate: [0, 360] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {emoji && (
                        <motion.span
                          key={emoji}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-2xl"
                        >
                          {emoji}
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
