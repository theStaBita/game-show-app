// Treehouse FSJS Techdegree - Project 4 - OOP Game App - Phrase.js

//GLOBAL VARIABLES
let userChoice = document.querySelector('chosen');

//TOP-LEVEL FUNCTIONS
function displayPhrase() {
    let randomPhrase = Game.phrases.random();
    document.createElement('<div id = "phrase" class = "section"></div>')
    let phraseLetters = randomPhrase.split();
    for (i=0;i<phraseLetters.length;i+=1){
        document.createElement(`<li class = 'hide letter ${phraseLetters[i]}'></li>`)
    };
};


//Creates a letter box based on the letter the player chooses
function displayLetter(chosenLetter) {
    document.createElement(`<li>${chosenLetter}</li>`)
};

//CLASSES
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        //Pull the phrase generated by game.getRandomPhrase()
        let phrase = this.phrase;
        //Split the phrase string into an array of individual letters
        let phraseLetters = phrase.split("");
        //Select all of the list elements
        let ul = document.querySelectorAll("ul");
        //For each phrase letter, create a list item
        for (let i=0;i<phraseLetters.length;i+=1){
            let letter = document.createElement("li");
            //If there is a space in the phrase, hide that letter box
            if (phraseLetters[i] === " "){
                letter.innerText = `${phraseLetters[i]}`;
                letter.setAttribute('class', 'hide space');
            //Otherwise, fill the letter box with the letter in the phrase
            } else {
                letter.innerText = phraseLetters[i];
                letter.setAttribute('class','hide letter ' + phraseLetters[i]);
            };
            ul[0].appendChild(letter);
        };
    }

    checkLetter(){if (letter in phrase) {displayLetter(userChoice)}}
    showMatchedLetter(){}
};