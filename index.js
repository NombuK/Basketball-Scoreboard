//HOME

let homeBtn = document.getElementById("home-btns")
let homeScore = 0

function addOneHome() {
    homeScore += 1
    homeBtn.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeBtn.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeBtn.textContent = homeScore
}

//VISITORS

let visitorBtn = document.getElementById("visitor-btns")
let visitorScore = 0

function addOneVisit() {
    visitorScore += 1
     visitorBtn.textContent = visitorScore
}

function addTwoVisit() {
    visitorScore += 2
     visitorBtn.textContent = visitorScore
}

function addThreeVisit() {
    visitorScore += 3
     visitorBtn.textContent = visitorScore
}

//FOULS
//HOME FOULS
let hFouls = document.getElementById("Hfouls")
let Hfoul = 0

function addOneHfouls() {
    Hfoul += 1
    hFouls.textContent = Hfoul
}

function addTwoHfouls() {
    Hfoul += 2
    hFouls.textContent = Hfoul
}

function addThreeHfouls() {
    Hfoul += 3
    hFouls.textContent = Hfoul
}

//VISITOR FOULS

let vFouls = document.getElementById("Vfouls")
let Vfoul = 0
let foulScore

function addOneVfouls() {
    Vfoul += 1
    vFouls.textContent = Vfoul
}

function addTwoVfouls() {
    Vfoul += 2
    vFouls.textContent = Vfoul
}

function addThreeVfouls() {
    Vfoul += 3
    vFouls.textContent = Vfoul
}

if (Vfoul === 3) {
    homeScore += 1
}else if (Vfoul > 3) {
    let foulScore = Math.floor(Vfoul / 3)
    homeScore += foulScore
}

//INDIVIDUAL FOULS

let individualHomeFoul = document.getElementById("individualHF")
let hMsg = document.getElementById("Hfoul-msg")
let individualHF = 0

function addOneHF() {
    individualHF += 1
    individualHomeFoul.textContent = individualHF
    if (individualHF < 6) {
        hMsg.textContent = "H-Player: " + (6-individualHF) + " fouls remaining"
    } else if (individualHF === 6) {
        hMsg.textContent = "H-Player: DISQUALIFIED"
    }
}

let individualVisitorFoul = document.getElementById("individualVF")
let vMsg = document.getElementById("Vfoul-msg")
let individualVF = 0

function addOneVF() {
    individualVF += 1
    individualVisitorFoul.textContent =individualVF
    if (individualVF < 6) {
        vMsg.textContent = "V-Player: " + (6-individualVF) + " fouls remaining"
    } else if (individualVF === 6) {
        vMsg.textContent = "V-Player: DISQUALIFIED"
    }
}

//PERIOD
let periodBtn = document.getElementById("reset")
let hScore = document.getElementById("scores")
let vScore = document.getElementById("score")
let period = 0

function addOnePeriod() {
    period += 1;
    periodBtn.textContent = period
    
    let homeBonus = Math.floor(Vfoul / 3)
    let visitorBonus = Math.floor(Hfoul / 3)
    
    homeScore += homeBonus
    visitorScore += visitorBonus
    
    homeBtn.textContent = homeScore
    visitorBtn.textContent = visitorScore

    let periodHomeScore = document.createElement("div")
    periodHomeScore.textContent = "Period: " + period + " Home: " + homeScore
    hScore.appendChild(periodHomeScore)

    let periodVisitorScore = document.createElement("div")
    periodVisitorScore.textContent = "Period: " + period + " Visitor:" + visitorScore
    vScore.appendChild(periodVisitorScore)

    homeScore = 0
    visitorScore = 0

    homeBtn.textContent = "888"
    visitorBtn.textContent = "888"

    Hfoul = 0
    Vfoul = 0
    individualHF = 0
    individualVF = 0
    
    hFouls.textContent = "00"
    vFouls.textContent = "00"
    individualHomeFoul.textContent = "00"
    individualVisitorFoul.textContent = "00"
    
    hMsg.textContent = "H-Player: Can still play"
    vMsg.textContent = "V-Player: Can still play"
}
