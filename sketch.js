var red_val=50;
var green_val=100;
var blue_val=150;

function setup() {
    createCanvas(800, 700);
    background(0);
    
}

function draw() {
    
    noStroke();
    
    fill((red_val%255),(green_val%255),(blue_val%255),50);
    ellipse(mouseX,mouseY,25,25);
    red_val+=random(10);
    green_val+=random(20);
    blue_val+=random(30);
    
    line(400,350,random(800),random(700));
    stroke(red_val%255);
    
}

function mousePressed(){
    background(0);
}
