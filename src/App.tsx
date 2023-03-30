import { useState } from 'react'
import './App.css'
import HangmanImage from './hangManImg';
import wordList from './wordList.json'

function App() {

  let random = Math.floor(Math.random() * wordList.length)
  const [wordToGuess, setWordToGuess] = useState(() => { return wordList[random] });
  //creating an arra
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);


  return (
    <>
      <div> hi</div>
      
    </>
  )
}

export default App
