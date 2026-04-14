/**
 * Name: Jeethesh Pallinti
 * Date: 04.14.2026
 * CSC 372-01
 * * This is the main App component that manages the game state,
 * the computer's shuffle logic, and coordinates the sub-components.
 */

import { useState, useEffect } from 'react';
import PlayerThrow from './components/player-throw';
import ComputerThrow from './components/computer-throw';
import ResultDisplay from './components/result-display';
import ScoreBoard from './components/score-board';
import ResetButton from './components/reset-button';

/**
 * Main functional component for the application.
 * @return {JSX.Element} The rendered game application.
 */
function App() {
  let [playerChoice, setPlayerChoice] = useState(null);
  let [computerChoice, setComputerChoice] = useState('?');
  let [result, setResult] = useState('');
  let [isAnimating, setIsAnimating] = useState(false);
  let [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  let choices = ['rock', 'paper', 'scissors'];

  /**
   * Handles the player's selection and starts the computer's shuffle.
   * @param {string} choice - The item selected by the player.
   */
  function handlePlay(choice) {
    if (isAnimating) return; // Prevent clicking while animating

    setPlayerChoice(choice);
    setResult('');
    setComputerChoice('?');
    setIsAnimating(true);
  }

  // Effect to handle the shuffle animation
  useEffect(() => {
    let interval;
    let timer;

    if (isAnimating) {
      // Shuffle images every 500ms
      interval = setInterval(() => {
        let randomIdx = Math.floor(Math.random() * choices.length);
        setComputerChoice(choices[randomIdx]);
      }, 500);

      // Stop after 3 seconds
      timer = setTimeout(() => {
        clearInterval(interval);
        determineWinner();
      }, 3000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isAnimating]);

  /**
   * Selects final computer throw and calculates the game outcome.
   */
  function determineWinner() {
    let finalComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(finalComputerChoice);
    setIsAnimating(false);

    if (playerChoice === finalComputerChoice) {
      setResult('tie');
      setScore((prev) => ({ ...prev, ties: prev.ties + 1 }));
    } else if (
      (playerChoice === 'rock' && finalComputerChoice === 'scissors') ||
      (playerChoice === 'paper' && finalComputerChoice === 'rock') ||
      (playerChoice === 'scissors' && finalComputerChoice === 'paper')
    ) {
      setResult('win');
      setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else {
      setResult('lose');
      setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
    }
  }

  /**
   * Resets the entire game state and scores.
   */
  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice('?');
    setResult('');
    setScore({ wins: 0, losses: 0, ties: 0 });
  }

  return (
    <div id="game-container">
      <h1>Rock, Paper, Scissors</h1>
      
      <main>
        <PlayerThrow 
          onSelect={handlePlay} 
          selected={playerChoice} 
        />
        
        <ComputerThrow 
          choice={computerChoice} 
          animating={isAnimating} 
        />
        
        <ResultDisplay outcome={result} />
        
        <ScoreBoard score={score} />
        
        <ResetButton onReset={resetGame} />
      </main>
    </div>
  );
}

export default App;