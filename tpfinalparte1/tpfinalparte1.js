let pantallas=[];
let fuente;
function preload() {
  pantallas[0] = loadImage('assets/bcm.png');
  pantallas[1] = loadImage('assets/bosque.png'); //camino 1
  pantallas[2] = loadImage('assets/perderseenelbosque.png');
  pantallas[3] = loadImage('assets/finalbuenobosque.png');
  pantallas[4] = loadImage('assets/finalmalobosque.png');
  pantallas[5] = loadImage('assets/finalmapa.png');
  pantallas[6] = loadImage('assets/charliesaluda.png');
  pantallas[7] = loadImage('assets/seencuentranconcharlie.png');//lo siguen a charlie
  pantallas[8] = loadImage('assets/picniccharlie.png');
  pantallas[9] = loadImage('assets/montania.png');//camino 2
  pantallas[10] = loadImage('assets/nomnomcamping.png');
  pantallas[11] = loadImage('assets/nomnomfinalmalo.png');
  pantallas[12] = loadImage('assets/finalbueno.png');
  pantallas[13] = loadImage('assets/casa.png');//camino 3
  pantallas[14] = loadImage('assets/saladecasa.png');
  pantallas[15] = loadImage('assets/estonoesunpicnic.png');
  pantallas[16] = loadImage('assets/sentarseenelpiso.png');
  pantallas[17] = loadImage('assets/finalmalocasa.png');
// fuente = loadFont ('/assets/super.ttf');
}


function setup() {
  createCanvas(640, 480);
//  textFont(fuente);
}


function draw() {
  background(50);
  image(pantallas[0], 0, 0, width, height );
  
}

