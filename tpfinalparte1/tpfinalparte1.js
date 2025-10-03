let pantallas=[];
let Flechita;
let fuente;
let pantallaactual=0;
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
  fuente = loadFont ('/assets/fuente.ttf');
  Flechita= loadImage('/assets/flecha-correcta.png');
}


function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  textSize(36)
    text('holaaaa', 10, 50);
}


function draw() {
  console.log("X:", mouseX, "Y:", mouseY);
  background(50);
  image(pantallas[pantallaactual], 0, 0, width, height );
  //boton
  if (pantallaactual===0) {
    rectMode(CENTER)
      text('ESCANDALOSOS',200,50);
      rect(640/2, 250, 100, 50);
    fill(0);
    rect(100, 250, 100, 50);
    rect(540, 250, 100, 50);
    //textSize(20);
    //text("Reiniciar", 325, 215);
    if (pantallaactual===2){
      image(Flechita,565,437);
      
    }
  }
}
function mousePressed() {
  if (pantallaactual===0) {
    if (mouseX > 49 && mouseX < 149 && mouseY > 225 && mouseY < 275) {
      pantallaactual=2;
    } else if (mouseX > 266 && mouseX < 369 && mouseY > 225 && mouseY < 275) {
      pantallaactual=13;
    }
    else if (mouseX > 490 && mouseX < 600 && mouseY > 225 && mouseY < 275) {
      pantallaactual=9;
    }
  }
}

  
}


