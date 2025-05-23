import React from 'react';
import { emojiCategories } from '../data/emojiCategories.js';
import { useGame } from '../contexts/GameContext.jsx';

const CategorySelection = () => {
  const { players, selectCategory } = useGame();

  const handleCategorySelect = (playerId, categoryId) => {
    selectCategory(playerId, categoryId);
  };

  return (
    <div className="space-y-12">
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
    </div>
  );
};

const PlayerCategorySelector = ({ player, otherPlayerCategory, onSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff00c3] text-transparent bg-clip-text mb-6">
        <span className='text-[#00f0ff]'>{player.name}</span>, choose your emoji category:
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {emojiCategories.map((category) => {
          const isSelected = player.category?.id === category.id;
          const isDisabled = otherPlayerCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => !isDisabled && onSelect(player.id, category.id)}
              disabled={isDisabled}
              className={`
                p-4 rounded-xl border-2 text-center transition-all duration-200
                ${isDisabled ? 'opacity-40 cursor-not-allowed bg-[#ff00c3] border-[#f7f9fa]'
                  : isSelected ? 'bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 border-[#ff00c3] drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                  : 'bg-[#110f2a] border-[#00f0ff] hover:border-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]'}
              `}
            >
              <div className="text-3xl mb-2 flex justify-center space-x-2">
                {category.emojis.slice(0, 1).map((emoji, idx) => (
                  <span key={idx}>{emoji}</span>
                ))}
              </div>
              <p className="text-lg font-semibold text-white">{category.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelection;
