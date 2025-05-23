import React from 'react';
import CategorySelection from './CategorySelection.jsx';

const GameContainer = () => {
  return (
    <div className="w-full max-w-md md:max-w-xl bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white rounded-t-2xl">
        <h1 className="text-3xl font-bold">Blink Tac Toe</h1>
      </div>

      {/* Placeholder for game content */}
      <div className="p-6">
        <p className="text-center text-gray-500 dark:text-gray-300">
          <CategorySelection />
        </p>
      </div>
    </div>
  );
};

export default GameContainer;
