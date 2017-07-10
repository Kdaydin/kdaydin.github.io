function setup() {
    createCanvas(800, 700);
}

function draw() {
    background(0);
    ellipse(mouseX,mouseY,random(50),random(50));
    stroke(250,0,150);
    fill(150,100,120);
}
