import './words.css'

type HangManWordProp = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}


function HangmanWords({ guessedLetters, wordToGuess, reveal = false }: HangManWordProp) {

    return (
        <div className="word-container">
            {wordToGuess.split('').map((letter, i) => (
                <span style={{ borderBottom: ".1em solid black" }} key={i}>
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal
                                    ? "visible"
                                    : "hidden",
                            color:
                                !guessedLetters.includes(letter) && reveal ? "red" : "green",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </ div>
    )

}


export default HangmanWords
