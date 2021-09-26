const MAX_SIZE = 8;

class Star {
    constructor() {
        this.pos = Star.newPosition();
        this.prev = this.pos.copy();
        this.color = Star.randomColor();
    }

    update() {
        this.pos.z -= 10;

        if (this.pos.z < 1) {
            this.pos = Star.newPosition();
            this.prev = this.pos.copy();
        }
    }

    render() {
        fill(this.color);
        noStroke();

        let dx = map(this.pos.x / this.pos.z, 0, 1, 0, windowWidth / 2);
        let dy = map(this.pos.y / this.pos.z, 0, 1, 0, windowHeight / 2);
        let r = map(this.pos.z, 0, windowWidth, MAX_SIZE, 0);

        let prev_x = map(this.prev.x / this.prev.z, 0, 1, 0, windowWidth / 2);
        let prev_y = map(this.prev.y / this.prev.z, 0, 1, 0, windowHeight / 2);

        // Tail
        strokeWeight(r);
        stroke(this.color);
        line(dx, dy, prev_x, prev_y);
        this.prev = this.pos.copy();
    }

    static newPosition() {
        return createVector(
            random(-windowWidth, windowWidth),
            random(-windowHeight, windowHeight),
            random(windowWidth)
        );
    }

    static randomColor() {
        let r, g, b;
        r = random(150, 255) * primary[0] / 255;
        g = random(150, 255) * primary[1] / 255;
        b = random(150, 255) * primary[2] / 255;
        alpha = 210;
        return [r, g, b, alpha];
    }
}
