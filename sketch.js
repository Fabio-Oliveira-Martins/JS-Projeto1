let cor;
let trianguloX;
let trianguloY;
let angulo = 0;

function setup() {
  createCanvas(400, 400);
  background(color(100, 0, 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  trianguloX = [0, 0, 0];
  trianguloY = [random(height), random(height), random(height)];
}

function draw() {
  fill(cor);

  for (let contador = 0; contador < trianguloX.length; contador++) {
    let x = trianguloX[contador];
    let y = trianguloY[contador];
    push(); // Inicia um novo ambiente de desenho
    translate(x, y); // Move o ponto de origem para a posição do triângulo
    rotate(angulo); // Rotaciona o ambiente de desenho
    triangle(0, 0, -25, 50, 25, 50); // Desenha o triângulo
    pop(); // Restaura o ambiente de desenho anterior
    trianguloX[contador] += random(0, 3);
    trianguloY[contador] += random(-3, 3);

    if (trianguloX[contador] > width) {
      trianguloX[contador] = 0;
      trianguloY[contador] = random(height);
    }
  }

  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    angulo += 0.05; // Aumenta o ângulo de rotação
  }
}