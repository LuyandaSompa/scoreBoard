let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let homeScoreCount = 0
let guestScoreCount = 0

homeScore.textContent = homeScoreCount

guestScore.textContent = guestScoreCount


function add1home (){
    homeScoreCount+=1;
    homeScore.textContent = homeScoreCount
}
function add2home (){
    homeScoreCount+=2;
    homeScore.textContent = homeScoreCount
}
function add3home (){
    homeScoreCount+=3;
    homeScore.textContent = homeScoreCount
}

//guest scores
function add1guest (){
    guestScoreCount+=1;
    guestScore.textContent = guestScoreCount
}

function add2guest (){
    guestScoreCount+=2;
    guestScore.textContent = guestScoreCount
}

function add3guest (){
    guestScoreCount+=3;
    guestScore.textContent = guestScoreCount
}



