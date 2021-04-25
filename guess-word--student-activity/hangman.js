var programing_languages=[
"python",
"javascript",
"c",
"json",
"HTML",
"cSharp",
"php",
"ruby",
"sql",
"golang",
"kotlin",
"mogodb",
"java",
"css"
];
let answer='';
let maxWrong= 6;
let mistakes=0;
let guessed=[];
let wordStatus=null;
function randomWord (){
  answer=programing_languages[Math.floor(Math.random()*programing_languages.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}
function handleGuess(chosenLetter){
  guessed.indexOf(chosenLetter)===-1?guessed.push(chosenLetter):null;
  document.getElement(chosenLetter).setAttribute('disabled',true);
  if(answer.indexOf(chosenLetter)>=0){
   guessedWord();
   checkIfGameWon();

   }
else if (answer.indexOf(chosenLetter)===-1){
  mistakes++;
  updateMistakes();
  checkIfGameLost();
  updateHangmanPicture();

}
}
function updateHangmanPicture(){
  document.getElementById('hangmanpic').src='./images/'+mistakes+'.jpg';
}
function checkIfGameWon(){
  if (wordStatus===answer) {
 document.getElementById('wordSpotLight').innerHTML='the answer was:'+answer;
 document.getElementById('keyboard').innerHTML='you lost';
  }
}
function guessedWord(){
wordStatus=answer.split('').map(letter=>(guessed.indexOf(letter)>=0?
letter:"_")).join('');
document.getElementById('wordSpotLight').innerHTML=wordStatus;
}
function updateMistakes(){
  document.getElementById('mistakes').innerHTML=mistakes;
}
function reset(){
mistakes=0;
guessed=[];
document.getElementById('hangmanpic').src='./images/0.jpg';
randomWord();
guessedWord();
updateMistakes();
generateButtons();
}
document.getElementById('maxwrong').innerHTML=maxWrong;
randomWord();
guessedWord();
generateButtons();

