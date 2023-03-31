import './image.css'

const HEAD = (
    <div className='head' />
)
const BODY = (
    <div className='body' />
)
const L_ARM = (
    <div className='left-arm' />
)
const R_ARM = (
    <div className='right-arm' />
)
const L_LEG = (
    <div className='left-leg' />
)
const R_LEG = (
    <div className='right-leg' />
)

type HangmanImageProp = {
    numberOfGuesses: number
}

const BODY_PARTS = [HEAD, BODY, R_ARM, L_ARM, R_LEG, L_LEG]


function HangmanImage({ numberOfGuesses }: HangmanImageProp) {


    return (
        <>
            <div className='page'>
                {BODY_PARTS.slice(0, numberOfGuesses)}
                <div className="headbar"></div>
                <div className="topbar"></div>
                <div className="midbar"></div>
                <div className="bottombar"></div>
            </div>
        </>
    )
}


export default HangmanImage
