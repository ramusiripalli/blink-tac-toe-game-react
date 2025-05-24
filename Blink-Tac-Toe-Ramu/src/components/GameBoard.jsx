import React from 'react';
import { useGame } from '../contexts/GameContext';
import { motion, AnimatePresence } from 'framer-motion';

const GameBoard = () => {
  const { board, currentPlayer, placeEmoji, availableEmoji, winningCombination } = useGame();

  return (
    <div className="flex flex-col items-center space-y-6 sm:space-y-8 px-2 sm:px-4 md:px-6">
      <div
        className={`w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl rounded-xl p-4 sm:p-6 text-center shadow-xl border-4 transition-all duration-300 
          ${
            currentPlayer.id === 1
              ? 'bg-[#091a2e] text-white border-cyan-400 shadow-cyan-500/80'
              : 'bg-[#091a2e] text-white border-[#ff00c3] shadow-[#ff00c3]/80'
          }
        `}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 animate-pulse">
          {currentPlayer.name}'s Turn
        </h2>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
          <p className="text-sm sm:text-base md:text-lg text-white/90">Your emoji:</p>
          <motion.span
            className="text-3xl sm:text-4xl md:text-5xl animate-spin"
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

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full aspect-square">
          {board.map((cell, index) => {
            // Check if this cell is in the winning combination
            const isWinningCell = winningCombination?.includes(index);

            return (
              <motion.button
                key={index}
                onClick={() => placeEmoji(index)}
                disabled={cell.emoji !== null || winningCombination !== null} // disable clicks if game over
                className={`relative flex items-center justify-center aspect-square rounded-lg transition-all duration-300
                  ${
                    cell.emoji === null
                      ? 'bg-slate-100 dark:bg-white hover:bg-slate-300 dark:hover:bg-slate-500 cursor-pointer shadow-inner'
                      : 'bg-white/80 cursor-default'
                  }
                  ${isWinningCell ? 'ring-4 ring-yellow-400 shadow-yellow-400/70' : ''}
                `}
                whileHover={{ scale: cell.emoji === null && !winningCombination ? 1.05 : 1 }}
                whileTap={{ scale: cell.emoji === null && !winningCombination ? 0.95 : 1 }}
              >
                <AnimatePresence mode="wait">
                  {cell.emoji && (
                    <motion.span
                      key={`${index}-${cell.emoji}`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180, opacity: 0 }}
                      transition={{ type: 'spring', damping: 12 }}
                      className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-none overflow-hidden"
                    >
                      {cell.emoji}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Player Panels */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md md:max-w-2xl px-2">
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

          const playerEmojis =
            currentPlayer.id === playerId ? currentPlayer.placedEmojis : [];

          return (
            <motion.div
              key={playerId}
              className={`p-3 sm:p-4 rounded-xl text-center backdrop-blur-md
                ${
                  isActive
                    ? `bg-gradient-to-r ${playerData.gradient} text-white ring-2 ring-offset-2 ${playerData.glow} border`
                    : 'bg-[#0a2b51] text-white ring-0 border border-cyan-500'
                }
              transition-all duration-300`}
              whileHover={isActive ? { scale: 1.02 } : {}}
              animate={isActive ? { y: [0, -3, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className={`text-sm sm:text-md font-semibold mb-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {playerData.label}
              </p>
              <div className="flex justify-center gap-2">
                {Array(3).fill(null).map((_, i) => {
                  const emoji = playerEmojis[i]?.emoji;
                  return (
                    <motion.div
                      key={i}
                      className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg
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
                          className="text-xl sm:text-2xl"
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
