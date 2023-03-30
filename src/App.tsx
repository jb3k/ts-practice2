import { useState } from 'react'
import './App.css'
import HangmanImage from './HangmanImage';
import HangmanWords from './HangManWords';
import Keyboard from './Keyboard';
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
      <HangmanWords />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard />
      </div>

    </div>
  )
}

export default App
