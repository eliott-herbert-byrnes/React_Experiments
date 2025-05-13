# Assembly: Endgame

**Assembly: Endgame** is a fun and interactive word-guessing game inspired by Hangman, with a programming twist. Your mission is to guess the hidden programming-related word within 8 attempts. Each incorrect guess brings you one step closer to the dreaded Assembly language!

## 🎮 Features

- **Interactive Gameplay**: Players guess letters to reveal the hidden word.
- **Programming Language Shield**: A visual representation of programming languages shields you from Assembly. Each wrong guess eliminates one language from the lineup.
- **Dynamic Confetti Celebration**: Win the game and trigger an animated confetti celebration.
- **Accessible Keyboard Input**: Clickable on-screen keyboard for easy interaction.
- **Responsive Game Status**: Instant feedback after each guess, including farewells from fallen languages.
- **Replayability**: Start a new game at any time with the *New Game* button.
- **ARIA and Accessibility**: Live region updates and accessible controls for screen readers.

## 🛠️ Tech Stack

- **React**: Core application logic and UI rendering.
- **Vite**: Fast local development environment.
- **clsx**: Conditional className utility for clean styling logic.
- **react-confetti**: Adds a fun visual win effect.

## 📝 How It Works

1. A random word is selected from a pool of programming-related terms.
2. The player clicks on letters to guess the word.
3. Every incorrect guess removes one "language chip" from the safety buffer.
4. The game ends when:
   - The player successfully guesses all letters (win).
   - The player runs out of guesses (lose).

## 💡 Key Components

### `languageElements`

A row of "chips" representing various programming languages. Incorrect guesses eliminate languages from left to right.

### `letterElements`

The current word displayed with correctly guessed letters revealed. Unrevealed letters remain blank.

### `keyboardElements`

An interactive on-screen keyboard that visually indicates correct and incorrect guesses.

### Game States

- **Win**: Player guesses the word. Confetti triggers and congratulatory message is shown.
- **Lose**: Player fails to guess the word in time. A message warns about facing Assembly.
- **Ongoing**: Players continue guessing, with real-time feedback and status updates.


