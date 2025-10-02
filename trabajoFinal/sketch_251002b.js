let pantallas=[];
function preload(){
  mb.push( loadImage('' 0
  mb[1] = loadImage('');     //indice 1    //otra manera de carga
  mb.push( loadImage('') );  //indice 2
}


function setup() {
  createCanvas(640,480);
}


function draw() {
  background(50);
 image( pantalla[0], 0, 0 );
 image( pantalla[1], 0, 0 );
 image( pantalla[2], 0, 0 );
  

}
