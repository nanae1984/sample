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
    var cnv = createCanvas(900, 700);
    cnv.parent=('content');
    cnv.style('display', 'block');
    cnv.position(150,200);

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
    
   