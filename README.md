# blink-tac-toe-game-react
A playful twist on the classic Tic Tac Toe game featuring emojis, vanishing moves, and dynamic gameplay.

# 🟡 Blink Tac Toe 🎮

**Blink Tac Toe** is a two-player emoji-based game inspired by Tic Tac Toe, developed as part of a frontend challenge by [Darban.ai](https://darban.ai). This fun twist introduces a vanishing rule and playful emoji categories, emphasizing creative UI logic and clean code.

---

## ✨ Features

- 🎮 Emoji categories instead of Xs and Os
- ⏳ **Vanishing Rule**: Only 3 emojis per player on the board at a time
- 🔁 **FIFO Logic**: The oldest emoji disappears when a new one is placed
- 🎯 Win detection (horizontal, vertical, diagonal)
- 🔄 Replay support
- 📱 Responsive for desktop & mobile
- 🆘 Built-in help section for first-time players

---

## 🚀 Tech Stack

- **Framework**: React.js (with Hooks)
- **Styling**: CSS / Tailwind (or your choice)
- **Deployment**: [Vercel](https://vercel.com), [Netlify](https://netlify.com) or GitHub Pages

---

## 🎨 Emoji Categories

Players choose from fun emoji themes like:

- 🐶 Animals: `🐶 🐱 🐵 🐰`
- 🍕 Food: `🍕 🍟 🍔 🍩`
- ⚽ Sports: `⚽ 🏀 🏈 🎾`

*(You can also define your own!)*

---

## 🧠 Vanishing Logic

When a player places their **4th emoji**, the **oldest one** disappears automatically using FIFO logic. The cell it was in becomes **reusable**, but the **new emoji cannot go on the same spot** immediately.

---

## 📦 How to Run Locally

```bash
git clone
