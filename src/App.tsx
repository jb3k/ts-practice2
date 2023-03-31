import { useState, useEffect, useCallback } from 'react'
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

  let incorrectLetters = guessedLetters.filter(letter => {
    !guessedLetters.includes(letter)
  })

  // because the amount of body parts is 6
  const isLoser = guessedLetters.length >= 6
  // notes on w
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))


  // check doc Keyboard note 1
  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])

  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      let key = e.key
      //if the key press is anything other than the alphabet ignore
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)

    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }

  }, [guessedLetters])


  return (
    <div className='main-page'>
      <div className='game-text'>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </div>
      <HangmanImage numberOfGuesses={incorrectLetters.length} />
      <HangmanWords reveal={wordToGuess} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App
