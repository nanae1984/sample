/* 
   2Dgraphics
 */


var geisha;
var man;

function preload() {
  
    geisha = loadImage("geisha.jpg");
    man = loadImage("man.jpg");


}

function setup() {
    createCanvas(900, 900);

}

function draw() {
    background(0);
    
  
if (mouseX > width/2){
    //right
    image(geisha, width/2, 0, width/2, height );

} else {
    //left
     image(man, 0, 0, width/2, height );
}
    

}
    
   