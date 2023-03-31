import { useState, useEffect, useCallback } from 'react'
import './App.css'
import HangmanImage from './HangmanImage';
import HangmanWords from './HangManWords';
import Keyboard from './Keyboard';
import wordList from './wordList.json'


function getWord() {
  return wordList[Math.floor(Math.random() * wordList.length)]
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord);
  //creating an arra
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  let incorrectLetters = guessedLetters.filter(letter => {
    !wordToGuess.includes(letter)
  })

  // because the amount of body parts is 6
  const isLoser = incorrectLetters.length >= 6
  // doc win condition 2 note
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

  // Winning Condtions note 1
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])



  return (
    <div className='main-page'>
      <div className='game-text'>
        {isWinner && "Winner! - Hit 'enter' to refresh and play again"}
        {isLoser && "Nice Try - Hit 'enter' to refresh and try again"}
      </div>
      <HangmanImage numberOfGuesses={incorrectLetters.length} />
      <HangmanWords reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
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
