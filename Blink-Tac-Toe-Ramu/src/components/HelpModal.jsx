import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HelpModal = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white dark:bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        >
          <div className="sticky top-0 bg-white dark:bg-slate-800 p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"
            >
              Welcome to Blink Tac Toe! 🎮
            </motion.h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 space-y-8">
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                🎯 Game Overview
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                A unique twist on classic Tic Tac Toe where emojis vanish and reappear! Play against a friend using your chosen emoji category.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary-700 dark:text-primary-300">Player 1's Turn</h4>
                  <div className="bg-blue-500/20 p-3 rounded-lg animate-pulse">
                    Entire screen tints cyan(blue)
                  </div>
                </div>
                <div className="bg-accent-50 dark:bg-accent-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-accent-700 dark:text-accent-300">Player 2's Turn</h4>
                  <div className="bg-pink-500/20 p-3 rounded-lg animate-pulse">
                    Entire screen tints pink
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                🎲 How to Play
              </h3>
              <ol className="space-y-4 list-decimal list-inside text-slate-600 dark:text-slate-300">
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                >
                  <span className="font-semibold">Choose Your Emoji Category:</span>
                  <p className="mt-1 ml-6">Each player picks a unique set of emojis to play with</p>
                </motion.li>
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                >
                  <span className="font-semibold">Take Turns:</span>
                  <p className="mt-1 ml-6">Place your random emoji on any empty cell when it's your turn</p>
                </motion.li>
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg highlight-warning"
                >
                  <span className="font-semibold">⚠️ Vanishing Rule:</span>
                  <p className="mt-1 ml-6">Only 3 emojis per player allowed! Your oldest emoji vanishes when placing a 4th</p>
                </motion.li>
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                >
                  <span className="font-semibold">Win the Game:</span>
                  <p className="mt-1 ml-6">Get 3 of your emojis in a line (horizontal, vertical, or diagonal)</p>
                </motion.li>
              </ol>
            </motion.section>

            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                💡 Pro Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 dark:text-slate-300">
                <div className="p-4 border border-primary-200 dark:border-primary-700 rounded-lg">
                  <p className="font-medium">🎯 Strategic Placement</p>
                  <p className="mt-2 text-sm">Plan your moves considering which emoji will vanish next!</p>
                </div>
                <div className="p-4 border border-primary-200 dark:border-primary-700 rounded-lg">
                  <p className="font-medium">👀 Watch Opponent's Moves</p>
                  <p className="mt-2 text-sm">Keep track of their emoji positions and timing</p>
                </div>
              </div>
            </motion.section>
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="p-6 border-t border-slate-200 dark:border-slate-700 flex justify-end"
          >
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Let's Play! 🎮
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HelpModal;