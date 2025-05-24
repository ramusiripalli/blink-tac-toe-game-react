// src/components/CategorySelection.jsx
import React from 'react';
import { emojiCategories } from '../data/emojiCategories.js';
import { useGame } from '../contexts/GameContext.jsx';

const CategorySelection = () => {
  const { players, selectCategory, startGame } = useGame();

  const handleCategorySelect = (playerId, categoryId) => {
    selectCategory(playerId, categoryId);
  };

  const bothCategoriesSelected =
    players[0]?.category?.id && players[1]?.category?.id;

  return (
    <div className="space-y-10 sm:space-y-12 px-2 sm:px-4">
      <PlayerCategorySelector
        player={players[0]}
        otherPlayerCategory={players[1].category?.id}
        onSelect={handleCategorySelect}
      />

      <PlayerCategorySelector
        player={players[1]}
        otherPlayerCategory={players[0].category?.id}
        onSelect={handleCategorySelect}
      />

      {bothCategoriesSelected && (
        <div className="flex justify-center pt-4">
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-lg sm:text-xl"
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

const PlayerCategorySelector = ({ player, otherPlayerCategory, onSelect }) => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] text-transparent bg-clip-text mb-4 sm:mb-6">
        <span className="text-[#00f0ff]">{player.name}</span>, choose your emoji category:
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {emojiCategories.map((category) => {
          const isSelected = player.category?.id === category.id;
          const isDisabled = otherPlayerCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => !isDisabled && onSelect(player.id, category.id)}
              disabled={isDisabled}
              className={`
                p-3 sm:p-4 rounded-xl border-2 text-center transition-all duration-200
                ${isDisabled
                  ? 'opacity-40 cursor-not-allowed bg-[#ff00c3] border-[#f7f9fa]'
                  : isSelected
                  ? 'bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 border-[#ff00c3] drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                  : 'bg-[#110f2a] border-[#00f0ff] hover:border-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]'}
              `}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 flex justify-center">
                {category.emojis.slice(0, 1).map((emoji, idx) => (
                  <span key={idx}>{emoji}</span>
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white">
                {category.name}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelection;
