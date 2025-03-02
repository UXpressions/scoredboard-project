// button id="home-1"
// button id="away-1"

let homeScore = 0;
let awayScore = 0;
let homeScoreboard = document.getElementById('home-team-score');
let awayScoreboard = document.getElementById('away-team-score');

function homeAddOne(){
    homeScore += 1;
    homeScoreboard.textContent = homeScore;
}

function homeAddTwo(){
    homeScore += 2;
    homeScoreboard.textContent = homeScore;
}

function homeAddThree(){
    homeScore += 3;
    homeScoreboard.textContent = homeScore;
}

function awayAddOne(){
    awayScore += 1;
    awayScoreboard.textContent = awayScore;
}


function awayAddTwo(){
    awayScore += 2;
    awayScoreboard.textContent = awayScore;
}


function awayAddThree(){
    awayScore += 3;
    awayScoreboard.textContent = awayScore;
}



console.log(homeScore);
console.log(awayScore);