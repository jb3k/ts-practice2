import './keyboard.css'

const KEYS = ["a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"]

function Keyboard() {

    return (
        <div className="keyboard-container">
            {KEYS.map((key) => {
                return (
                    <button key={key} className='keyboard-letters' >{key}</button>
                )
            })}
        </div>
    )

}


export default Keyboard
