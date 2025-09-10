// Felipe Ceniceros -- 94211/6
// https://youtu.be/BDnZtb5RJ3o
// COMI: MATI (CRACK)






// variables
let imagen;
let espacio = 32;
let modoColor = false;

// carga la imagen  (loadImage como en el tp3 )
function preload() {
  imagen = loadImage("referencia.jpg");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);

  // muestra la imagen IZQ
  image(imagen, 0, 0, width / 2, height);

  // dibuja los circulos DER
  dibujosCirculos(400, 0, width / 2, height);
}

// Dibuja una grilla de círculos (dos for anidados)
function dibujosCirculos(x, y, ancho, alto) {
  for (let i = x; i < x + ancho; i += espacio) {     //columnas
    for (let j = y; j < y + alto; j += espacio) {    // ilas
      let distancia = dist(mouseX, mouseY, i, j);    //distancia al mouse
      let tamano = calcularTamano(distancia);        //convierte distancia a tamaño

      if (modoColor) {
        fill(random(255), random(255), random(255)); // colores al azar
      } else {
        fill(0); //negro
      }

      noStroke();
      ellipse(i, j, tamano, tamano);
    }
  }
}

// devolvia el tamaño de las pelotitas
function calcularTamano(d) {
  // alejaba el mouse y se achican los circulos
  return map(d, 50, 500, espacio, -4);
}


// c = color random  y r = restet

function keyPressed() {
  if (key === 'c' || key === 'C') {
    modoColor = !modoColor;
  }
  if (key === 'r' || key === 'R') {
    espacio = 32;
    modoColor = false;
  }
}

// click y cambio el tamaño de los circulos
function mousePressed() {
  if (mouseX > width / 2) {
    espacio = random(10, 40);
  }
}
