function scoreSystem(you, cpu) {
    if(you == 0) {
        document.querySelector("#score-cpu").innerHTML = cpu;
    } else if(cpu == 0) {
        document.querySelector("#score-you").innerHTML = you;
    } else {
        return;
    }
}

function stopGame() {
    document.querySelector("#stop").onclick = () => {
        window.location.reload();
    };
}

function startGame() {
    stopGame();
    const scoreYou = document.querySelector("#score-you");
    const scoreCpu = document.querySelector("#score-cpu");
    const main = document.querySelector("main");
    const playGame = setInterval(() => {
        const balloon = document.createElement("div");
        balloon.setAttribute("class", "balloon");
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const topDistance = Math.floor(Math.random() * 100);
        const leftDistance = Math.floor(Math.random() * 100);
        const dist = 95;
        balloon.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        if(balloon.style.left > `${dist}%` || balloon.style.top > `${dist}%`) {
            balloon.style.top = `calc(${topDistance}% - 3.2em)`;
            balloon.style.left = `calc(${leftDistance}% - 3.2em)`;
        } else {
            balloon.style.top = `${topDistance}%`;
            balloon.style.left = `${leftDistance}%`;
        }
        main.appendChild(balloon);
        balloon.onclick = () => {
            let you = parseInt(scoreYou.innerHTML);
            you++;
            scoreSystem(you, 0);
            main.removeChild(balloon);
        }
        hideBalloon(balloon, main, scoreCpu);
    }, 700);
}

function hideBalloon(balloon, main, scoreCpu) {
    setTimeout(() => {
        main.removeChild(balloon);
        let cpu = parseInt(scoreCpu.innerHTML);
        cpu++;
        scoreSystem(0, cpu);
    }, 1600);
}

document.querySelector("#start").onclick = () => {
    startGame();
};
