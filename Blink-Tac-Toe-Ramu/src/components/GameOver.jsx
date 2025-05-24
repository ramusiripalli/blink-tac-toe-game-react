import React, { useState, useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const GameOver = () => {
  const { players, resetGame } = useGame();
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  const winner = players[0].score > players[1].score ? players[0] :
                 players[1].score > players[0].score ? players[1] : null;

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlayAgain = () => resetGame(true);
  const handleNewGame = () => resetGame(false);

  return (
    <div className="flex items-center justify-center h-[60vh] sm:h-[50vh] px-4 relative overflow-hidden">
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        numberOfPieces={250}
        recycle={true}
        gravity={0.25}
      />

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
        className="bg-[#120b41] backdrop-blur-md border border-white shadow-xl rounded-xl px-5 py-6 max-w-sm w-full text-center"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
          {winner ? `${winner.name} Wins! 🎉` : "It's a Tie!"}
        </h2>

        <p className="text-sm text-white mb-3">
          {winner ? `with the ${winner.category?.name} emojis` : "Both players gave it their all!"}
        </p>

        <div className="flex justify-center text-3xl gap-3 mb-4">
          {winner?.category?.emojis.slice(0, 2).map((emoji, i) => (
            <span key={i}>{emoji}</span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 text-white px-4 py-2 rounded-md shadow hover:bg-cyan-600 transition"
            onClick={handlePlayAgain}
          >
            🔁 Play Again
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 text-white px-4 py-2 rounded-md shadow hover:bg-pink-600 transition"
            onClick={handleNewGame}
          >
            🆕 New Game
          </motion.button>
        </div>

        <p className="text-slate-300 text-lg mt-4">
          <ol>
            <li className='text-[#00f0ff] font-bold'>Score - Player 1 : {players[0].score}</li>
            <li className='text-[#ff00c3] font-bold'>Score - Player 2 : {players[1].score}</li>
          </ol>
        </p>
      </motion.div>
    </div>
  );
};

export default GameOver;
