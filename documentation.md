Getting Started / Installation:

1. create template
    - npm create vite
    - itll ask you a series of questions on what kind of project you want to run... pick react, and typescript.

2. install packages
    - npm install
    - npm run dev (to start server)

3. to get to the server just copy and past url given after running


* Important Note - make sure when creating components in TS, you make .tsx files (not .ts)

Hangman App 
1. download a list a words that we can use for the game..
2. create a list of guessed letters as an array 
3. create three different components for each part of the game
    - hangman image
    - guessed words
    - keyboard



Hangman Image
1. first create the stand
2. create body parts individually inside a variable
    - you want to do this because you want to conditionally render each part depending on wrong guesses

    Logic:
    1. Going to need a function that counts the number of guesses if the guess is wrong.
    2. pass that function in the form of a prop to the Hangman image component
        - to pass this, you need to create a type in the hangman image component that defines the prop you are passing in
        - when putting the prop as a param, you need to follow the object with the type of prop you created.
            - EX: ({ numberOfGuesses }: HangmanImageProp)
    3. create an array of all the body parts, so that you can slice them based on the number of wrong guesses that you passed in to the component
    4. conditional that if you get to the end of the body parts arr, you lose (this will actually be in the main app)


Game Words
1. first create place for the words
    - map through the word you are trying to guess
    - add bottom borders and spacing to make nicer

    Logic:
    1. Have a random word generator function that goes thru a list of words from .json file
        - you are going to pass this word in as a prop to this component. 
    2. create state of guessed letters and pass that in as a prop to the word component which is going to be an array of letters
    3. 
    
    TSX:
    1. Going to split the word the player is trying to guess to get all the letters in their own individual column
    2. Map thru the split letters from the word to render all the letters
    3. create two tags to represent the border at the bottom of each letter and the actual letter
    4. access visibility method two cases: visible & hidden
        - visible: You want to make the letter visible if the game is either over and they dont have any more tries, or if the letter that you guessed is in the word to guess
        - hidden, if you haven't guessed the word or the game is not over yet and there are still more tries.
    5. If the letter is included in the word, then you want to reveal it and make it green, if not at the end of the game, you revel the letter as red. 



Keyboard 
1. make an array of all the letters in the alphabet
2. map thru the letters of the arr, to render all of the letters in the alphabet 
3. add logic on click / press of the letter guessed.

* Important Note - CSS module is different from a css file. In order to use you need to make the file a name.module.css file. 
    - CSS modules is a popular css architecture for modular and resuable css styling. It allows you to write each component or module has its own css file that defines its style in a scope and isolated way avoiding css conflicts and naming collisions
    - Each CSS module file is transformed into a unqiue class name by the build tool ensuring that css styles only apply to the corresponding component or module. 


    Logic:
    1. Pass in two arrays as props:
        - an array of the right guesses
        - an array of the wrong guesses
    2. Depending on which of the letters you choose is right or wrong, will vary the style of the letter
        - if it is right, it will be blue
        - if it is wrong, it will be more transparent
    3. Pass in function that will add the character as a guessed letter
        - once a letter is guessed, it will be disabled so you can no longer choose that letter.
    4. lastly, you want to have a variable that disables the letter after each guess whether it is right or wrong

    TSX:
    1. make grid, to line up the keys
    2. map thru the array of all the letters in the alphabet
        - create two arrays that will hold the right or wrong letters
        - render buttons that will get added to either array after each click / press

    Notes:
    1. needed to use the useCallback method because when the component first renders, it has an empty array because that is the default value. So everytime we call the function, it re-renders based on the mounted version (which is the empty array). We want to update the hanlder function everytime our letter changes. If you use a function then the whole component re-renders everytime the handler function is run, but you only want the handler function to run when you add to the guessed letters. 



Winning Conditions:
1. Create two arrays that contain the right letters and wrong letters
    - Loser if they reach the max number of guesses
    - winner if they reach the letter before the max number of guesses
        - every(): tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

    

    Notes: 
    1. This use effect is there to refresh the game once you finish by hitting the return key.
