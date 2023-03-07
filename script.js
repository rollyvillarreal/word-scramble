// game score
var score = 0;


const words = [
    {
        word: "addition",
        hint: " the process of adding numbers"
    },
    {
        word: "meeting",
        hint: " Event in which people come together"
    },
    {
        word: "far",
        hint: " a long long way to run"
    },
    {
        word: "roses",
        hint: " stop and smell them once in a while"
    },
    {
        word: "door",
        hint: " dont let it hit you on the way out"

    },
]
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b")
inputField = document.querySelector("input")
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime =>  {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--; // decrement maxTime by -1
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert (`Time off! ${userWord.toUpperCase()} was the correct word`);
        initGame(); // calling initGame function, so the game restart

    }, 1000);
}





const initGame = () => {
    initTimer(30); //calling initTimer function w passing 30 as maxTime value
    let randomObj = words[Math.floor(Math.random() * words.length)] //getting random object from words
    let wordArray = randomObj.word.split(""); //splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j =  Math.floor(Math.random() * (i + 1)); //getting random number
        //shuffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); //passing shuffled word as word text
    hintText.innerText = randomObj.hint;//passing random object hint as hint test
    correctWord = randomObj.word.toLowerCase(); //passing random word to correctWord
    inputField.value = "";
    inputField.setAttribute("maxlength",correctWord.length); // setting input maxlength attr value to word length
    
    
}
initGame()

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); //getting user value
    if(!userWord) return alert("Please enter a word check");
    if(userWord !== correctWord) return alert (`OopsieDoodle! ${userWord} is not the correct word`);
    alert (`Congrats! ${userWord.toUpperCase()} is the correct word`);
    initGame();
    

}

   //score fuction
function player_score (userWord, correctWord) {
if (userWord = correctWord)
return score +1
}
    



refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);



// add score to "score" input field
document.getElementById("score").value = score;
