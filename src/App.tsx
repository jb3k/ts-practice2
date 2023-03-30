import { useState } from 'react'
import './App.css'
import HangmanImage from './HangmanImage';
import wordList from './wordList.json'

function App() {

  let random = Math.floor(Math.random() * wordList.length)
  const [wordToGuess, setWordToGuess] = useState(() => { return wordList[random] });
  //creating an arra
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);


  return (
    <div className='main-page'>

      <div className='game-text'> WIN LOSE </div>
      <HangmanImage />

    </div>
  )
}

export default App
