import './words.css'

function HangmanWords() {

    const test = "test"
    let guessedLetters = []
    return (
        <div className="word-container">
            {test.split('').map((letter, i) => (
                <span style={{ borderBottom: ".1em solid black" }} key={i}>
                    <span className="right-letter">{letter} </span>
                </span>
            ))}
        </ div>
    )

}


export default HangmanWords
