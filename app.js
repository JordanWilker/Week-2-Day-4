let pHealth = 100
let cHealth = 100
let pTextHealth = document.getElementById("player-health")
let cTextHealth = document.getElementById("cpu-health")
let pAnnounce = document.getElementById("player-announce")
let cAnnounce = document.getElementById("cpu-announce")
let attPunch = document.getElementById("attack-punch")
let attStab = document.getElementById("attack-stab")
let attBomb = document.getElementById("attack-bomb")
let resButton = document.getElementById("restart-button")
let startButton = document.getElementById("start-button")

var cpuInterval;



function startGame(){
    CPUbehave()
    startButton.setAttribute("hidden","")
    attBomb.removeAttribute("disabled")
    attStab.removeAttribute("disabled")
    attPunch.removeAttribute("disabled")
}
function cpuLoss(){
    cTextHealth.innerText = `${cHealth}`
}

function playerLoss(){
    pTextHealth.innerText = `${pHealth}`
}

function ReenableP(){
    attPunch.removeAttribute("disabled")
}
function ReenableS(){
    attStab.removeAttribute("disabled")
}
function ReenableB(){
    attBomb.removeAttribute("disabled")
}
function pPunch(){
    cHealth = cHealth - 3
    console.log(cHealth);
    cpuLoss()
    pAnnounce.innerText = `You Used Punch`
    attPunch.setAttribute("disabled","")
    setTimeout(ReenableP,2000)
    endGame()
}
function pStab(){
    cHealth = cHealth - 7
    console.log(cHealth);
    cpuLoss()
    pAnnounce.innerText = `You Used Stab`
    attStab.setAttribute("disabled","")
    setTimeout(ReenableS,0)
    endGame()
}

function pBomb(){
    cHealth = cHealth - 10
    console.log(cHealth);
    cpuLoss()
    pAnnounce.innerText = `You Used Bomb`
    attBomb.setAttribute("disabled","")
    setTimeout(ReenableB,0)
    endGame()    
}

function CPUattack(){
    let cpuAttack = Math.floor(Math.random()*3)
    if(cpuAttack == 0){
        pHealth = pHealth-3
        cAnnounce.innerText = `The CPU punched you`
        console.log("punch");
        playerLoss()
    }else if(cpuAttack == 1){
        pHealth = pHealth -7
        cAnnounce.innerText = `The CPU slammed you`
        console.log("slam");
        playerLoss()
    }else{
        pHealth = pHealth-10
        cAnnounce.innerText = `The CPU Fireballed you`
        console.log("fireball");
        playerLoss()
    }
    endGame()
}
function CPUbehave(){
    cpuInterval = setInterval(CPUattack,2500)
}

function endGame(){
    if(pHealth<=0||cHealth<=0){
        pAnnounce.innerText = `Game Over`
        cAnnounce.innerText = `Game Over`
        attPunch.setAttribute("disabled","")
        attStab.setAttribute("disabled","")
        attBomb.setAttribute("disabled","")
        clearInterval(cpuInterval)
        resButton.removeAttribute("hidden")
        if(pHealth <= 0 ){
            pAnnounce.innerText = `Game Over, You Lost`
            cAnnounce.innerText = `Game Over, You Win`
        }else {
            cAnnounce.innerText = `Game Over, You Lost`
            pAnnounce.innerText = `Game Over, You Win`
        }

    }
    
}
function restartGame(){
    pHealth=100
    cHealth=100
    resButton.setAttribute("hidden","")
    CPUbehave()
    playerLoss()
    cpuLoss()
    attPunch.removeAttribute("disabled")
    attStab.removeAttribute("disabled")
    attBomb.removeAttribute("disabled")
}


