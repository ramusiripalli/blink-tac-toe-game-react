import React from 'react';
import { useGame } from '../contexts/GameContext';
import { motion, AnimatePresence } from 'framer-motion';

const GameBoard = () => {
  const { board, currentPlayer, placeEmoji, availableEmoji } = useGame();

  return (
    <div className="space-y-8">
      {/* Game board */}
      <div className={`aspect-square rounded-xl p-6 text-center ${
          currentPlayer.id === 1
            ? 'bg-gradient-to-r from-black to-cyan-500 text-white'
            : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' }`}>
              <h2 className="text-xl font-bold mb-2">
          {currentPlayer.name}'s Turn
        </h2>
        <div className="flex items-center justify-center space-x-3">
          <p className="text-white/90">Your emoji:</p>
          <motion.span 
            className="text-4xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            key={availableEmoji}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            {availableEmoji}
          </motion.span>
        </div>
              
        <div className="grid grid-cols-3 grid-rows-3 h-[400px] w-[400px] gap-4 p-9">
          {board.map((cell, index) => (
            <motion.button
              key={index}
              onClick={() => placeEmoji(index)}
              disabled={cell.emoji !== null}
              className={`relative flex items-center justify-center rounded-xl text-4xl
                ${cell.emoji === null ? 
                  'bg-slate-100 dark:bg-white hover:bg-slate-200 dark:hover:bg-slate-500 cursor-pointer shadow-inner' : 
                  'bg-slate-50 dark:bg-white cursor-default'}`}
              whileHover={{ scale: cell.emoji === null ? 1.05 : 1 }}
              whileTap={{ scale: cell.emoji === null ? 0.95 : 1 }}
              transition={{ duration: 3 }}
            >
              <AnimatePresence mode="wait">
                {cell.emoji && (
                  <motion.span
                    key={`${index}-${cell.emoji}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180, opacity: 0 }}
                    transition={{ type: "spring", damping: 12 }}
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

      {/* Player emoji history */}
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map(playerId => {
          const player = playerId === 1 ? currentPlayer.id === 1 : currentPlayer.id === 2;
          const playerData = playerId === 1 ? 
            { gradient: 'from-blue-500 to-cyan-500', ring: 'ring-blue-400' } : 
            { gradient: 'from-pink-500 to-purple-500', ring: 'ring-pink-400' };
          
          return (
            <motion.div
              key={playerId}
              className={`p-4 rounded-xl transition-all duration-300 ${
                player ? 
                `bg-gradient-to-r ${playerData.gradient} text-white ring-2 ${playerData.ring} ring-offset-2 dark:ring-offset-slate-800` : 
                'bg-slate-100 dark:bg-slate-700'
              }`}
              whileHover={{ scale: 1.02 }}
              animate={player ? { y: [0, -5, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className={`text-sm font-medium mb-2 ${player ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                {playerId === 1 ? 'Player 1' : 'Player 2'}
              </p>
              <div className="flex justify-center space-x-2">
                {Array(3).fill(null).map((_, i) => {
                  const playerObj = playerId === 1 ? currentPlayer.id === 1 : currentPlayer.id === 2;
                  const emojiData = playerObj ? 
                    currentPlayer.placedEmojis[i]?.emoji : 
                    (playerId === 1 ? 
                      (currentPlayer.id === 2 ? currentPlayer.placedEmojis[i]?.emoji : null) : 
                      (currentPlayer.id === 1 ? currentPlayer.placedEmojis[i]?.emoji : null));
                  
                  return (
                    <motion.div
                      key={i}
                      className={`w-12 h-12 flex items-center justify-center rounded-lg backdrop-blur-sm
                        ${emojiData ? 'bg-white/20' : 'bg-white/10'}`}
                      initial={false}
                      animate={emojiData ? { scale: [0.8, 1], rotate: [0, 360] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {emojiData && (
                        <motion.span
                          key={emojiData}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-2xl"
                        >
                          {emojiData}
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