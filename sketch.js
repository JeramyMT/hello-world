function setup() {
  createCanvas(640,480);
  background(200,230,210);
}

function draw() {
  // ellipse(50, 50, 80, 80);
  // rect(150, 150, 80, 80);
  // rect(1, 1, 80, 80);

  // test of push pop()
// ellipse(0, 50, 33, 33);  // Left circle
//
// push();  // Start a new drawing state
// strokeWeight(4);
// fill(204, 153, 0);
// translate(50, 0);
// ellipse(0, 50, 33, 33);  // Middle circle
// translate(100,0);
// strokeWeight(8);
// ellipse(0, 50, 33, 33);
// pop();  // Restore original state
//
// ellipse(100, 50, 33, 33);  // Right circle

//neck
fill(175,150,50);
rect(155,120,40,30);
//head
strokeWeight(2);
quad(145,80,205,80,195,130,155,130);
//left arm
quad(100,150,130,150,90,275,70,275);
quad(220,150,250,150,270,275,250,275);
//body
push();
translate(0,50); // move whole thing down 50
strokeWeight(5);
fill(30,35,34);
quad(100,100,200,100,185,225,115,225); // left side
translate(50,0);
quad(100,100,200,100,185,225,115,225); // right side
fill(200,200,210);
translate(-5,0);
quad(100,100,160,100,145,225,115,225); // center piece
//buttons
strokeWeight(0.4);
fill(240,240,240);
ellipse(130,120,7,7);
translate(0,20);
ellipse(130,120,7,7);
translate(0,20);
ellipse(130,120,7,7);
translate(0,20);
ellipse(130,120,7,7);
translate(0,20);
ellipse(130,120,7,7);
//shirt line
line(130,20,130,141);
//bowtie
quad(120,25,140,35,140,25,120,35);
//hat
fill(30,35,34);
rect(105,-110,50,40);
rect(85,-70,90,20);
//eyes
ellipse(120,-40,10,10);
ellipse(140,-40,10,10);
//mouth (arc(x,y,radius,radius,radius,PI, CHORD)
arc(130, -15, 20, 15, 0, PI, CHORD);
//nose
triangle(130,-37,132,-20,128,-20);
// Naming
   push();
   textAlign(LEFT);
   textSize(20);
   textFont("Georgia");
   text("A Self-Portrait, by Jeramy Parker", 250, 27);
   pop();






}
