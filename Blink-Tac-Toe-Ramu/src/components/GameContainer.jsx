import React, { useState, useEffect } from 'react';
import { Moon, Sun, HelpCircle, Trophy, Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { useGame } from '../contexts/GameContext.jsx';
import { useNavigate } from 'react-router-dom';
import CategorySelection from './CategorySelection.jsx';
import GameBoard from './GameBoard.jsx';
import GameOver from './GameOver.jsx';
import HelpModal from './HelpModal.jsx';
import ScoreBoard from './ScoreBoard.jsx';


const GameContainer = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { phase, scores, currentPlayer } = useGame();
  const [showHelp, setShowHelp] = useState(() => {
    const hasSeenHelp = localStorage.getItem('hasSeenHelp');
    return !hasSeenHelp;
  });
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    if (!showHelp) {
      localStorage.setItem('hasSeenHelp', 'true');
    }
  }, [showHelp]);

  const getBackgroundColor = () => {
    if (phase !== 'playing') return '';
    return currentPlayer.id === 1 
      ? 'bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10'
      : 'bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/10 dark:to-purple-500/10';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  dark:from-[#FF9933] dark:via-white dark:to-[#138808] from-black via-[#0f172a] to-black flex items-center justify-center p-4 transition-all duration-500">
      <div className={`w-full max-w-md md:max-w-2xl  border-4 border-cyan-400  dark:bg-white backdrop-blur-xl rounded-2xl  overflow-hidden transition-all duration-500 ${getBackgroundColor()}` }
      >
        {/* Header */}
        <div className="p-8 text-[#00f0ff]">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold hover:text-[#ff00c3] transition-colors  animate-pulse">
              Blink Tac Toe
            </h1>
            <div className="flex items-center space-x-3">
              <button
                 onClick={() => navigate("/")}
                 className="p-2 rounded-full hover:bg-[#00f0ff] text-white transition-all bg-gradient-to-br from-cyan-500 to-blue-500 hover:shadow-[0_0_12px_rgba(0,255,255,0.6)] animate-pulse"
                  aria-label="Go to Home" title='Go to Home'
               >
                   <Home size={24} />
               </button>
                
              <button 
                onClick={() => setShowScores(true)}
                className="p-2 rounded-full hover:bg-[#541453] transition-colors"
                aria-label="Show scores" title="Show scores"
              >
                <Trophy size={24} />
              </button>
              <button 
                onClick={() => setShowHelp(true)}
                className="p-2 rounded-full hover:bg-[#541453] transition-colors"
                aria-label="Show help" title="Show help"
              >
                <HelpCircle size={24} />
              </button>
              <button 
                onClick={toggleTheme} title='change theme'
                className="p-2 rounded-full hover:bg-[#541453] transition-colors"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Score display */}
        <div className="bg-transparent border-t border-[#00f0ff] py-3 px-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="text-xl text-[#00f0ff] font-semibold">Player 1 :</span>
              <span className="text-xl text-[#00f0ff] font-bold">{scores[0]}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl text-[#ff00c3] font-semibold">Player 2 :</span>
              <span className="text-xl text-[#ff00c3] font-bold">{scores[1]}</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-6">
          {phase === 'category-selection' && <CategorySelection />}
          {phase === 'playing' && <GameBoard />}
          {phase === 'game-over' && <GameOver />}
        </div>
      </div>

      {/* Modals */}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {showScores && <ScoreBoard onClose={() => setShowScores(false)} />}
    </div>
  );
};

export default GameContainer;
