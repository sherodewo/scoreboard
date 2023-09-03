let periodElementDisplay = document.getElementById('period-el');
let scoreLeftElementDisplay = document.getElementById('score-left');
let scoreRightElementDisplay = document.getElementById('score-right');
let foulLeftElementDisplay = document.getElementById('foul-left');
let foulRightElementDisplay = document.getElementById('foul-right');
let timeOutLeftElementDisplay = document.getElementById('timeOutLeft');
let timeOutRightElementDisplay = document.getElementById('timeOutRight');

let period = 0;
let scoreLeft = 0;
let scoreRight = 0;
let foulLeft = 0;
let foulRight = 0;
let timeOutLeft = 0;
let timeOutRight = 0;


// adding game periods
function add1Period() {
    periodElementDisplay.textContent = period += 1;
};

// adding score to left
function add1ScoreLeft() {
    scoreLeftElementDisplay.textContent = scoreLeft += 1;
}

function add2ScoreLeft() {
    scoreLeftElementDisplay.textContent = scoreLeft += 2;
}

function add3ScoreLeft() {
    scoreLeftElementDisplay.textContent = scoreLeft += 3;
}

// adding score right
function add1ScoreRight() {
    scoreRightElementDisplay.textContent = scoreRight += 1;
}

function add2ScoreRight() {
    scoreRightElementDisplay.textContent = scoreRight += 2;
}

function add3ScoreRight() {
    scoreRightElementDisplay.textContent = scoreRight += 3;
}

// adding foul
function add1FoulLeft() {
    foulLeftElementDisplay.textContent = foulLeft += 1;
}

function add1FoulRight() {
    foulRightElementDisplay.textContent = foulRight += 1;
}

// adding time-out counts
function add1TimeOutLeft() {
    timeOutLeftElementDisplay.textContent = timeOutLeft += 1;
}

function addTimeOutRight() {
    timeOutRightElementDisplay.textContent = timeOutRight += 1;
}


// Function for countdown timer
let countdownTimerElementDisplay = document.getElementById('timer_count');

const startingMinutes = 10;
let time = startingMinutes * 60;

let isPaused = true;

var timer = setInterval(() => {
    if(!isPaused) {
        const minute = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownTimerElementDisplay.textContent = `${minute}:${seconds}`;
        time--;
    }
}, 1000);

function startTimer(){
    isPaused = false;
}

function pauseTimer(){
    isPaused = true;
}

function resetTimer() {
    countdownTimerElementDisplay.textContent = '10:00';
    time = startingMinutes * 60;
    isPaused = true;
}

// new game refresh
function newGame() {
    period = 0;
    scoreLeft = 0;
    scoreRight = 0;
    foulLeft = 0;
    foulRight = 0;
    timeOutLeft = 0;
    timeOutRight = 0;
    // for timer
    time = startingMinutes * 60;
    isPaused = true;

    periodElementDisplay.textContent = period;
    scoreLeftElementDisplay.textContent = scoreLeft;
    scoreRightElementDisplay.textContent = scoreRight;
    foulLeftElementDisplay.textContent = foulLeft;
    foulRightElementDisplay.textContent = foulRight;
    timeOutLeftElementDisplay.textContent = timeOutLeft;
    timeOutRightElementDisplay.textContent = timeOutRight;
    countdownTimerElementDisplay.textContent = '10:00';
}