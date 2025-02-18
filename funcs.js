function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createPlayer(){
    const playerBall = Bodies.circle(randomIntFromInterval(30, max_x), 10, 13, 15)
    playerBall.restitution = 0.9 // bounciness

    return playerBall
}