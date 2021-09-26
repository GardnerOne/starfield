const NUM_STARS = 5000;

let stars = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < NUM_STARS; i++) {
        stars.push(new Star());
    }
}

function draw() {
    background(dark);
    translate(windowWidth/2, windowHeight/2);

    for (let star of stars) {
        star.render();
        star.update();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
