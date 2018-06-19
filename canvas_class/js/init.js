// Ce script est déclaré comme un module dans le HTML
// Du coup, on peut importer les fichiers sans s'embêter avec le HTML
// import { Canvas, CanvasEtendu } from './canvas.js';
// import { Fruit } from './fruit.js';

// On instancie les classes canvas et fruit
var canvas = new Canvas(window.innerWidth - 20, window.innerHeight - 20);
var cerise = new Fruit("./images/cerises.jpg", 100, 100, this.canvas.ctx2D);

// On instancie la classe Init qui instancie les autres classes

// var ctx2D = canvas.getContext("2d");

// Déplacement de l'objet

function draw() {
                 
    var dx = 3;
    var dy = 3;
    
    // on écoute l'évenement keydown et on appelle move
    window.addEventListener("keydown", move, false);
      
    function move(e) {
        // console.log("Mooove");
        switch(e.keyCode) {
            case 37:
                cerise.x -= dx;
                console.log("xy");
                // left key pressed
                break;
            case 38:
            cerise.y -= dy;

                // up key pressed
                break;
            case 39:
            cerise.x += dx;

                // right key pressed
                break;
            case 40:
            cerise.y += dy;

                // down key pressed
                break;  
        }   
        e.preventDefault();
        canvas.ctx2D.clearRect(0, 0, canvas.l, canvas.h);
        canvas.ctx2D.drawImage(cerise.img, cerise.x, cerise.y);
        console.log(cerise.x);
    }  
    }
    // setInterval(draw, 500);
    
    window.onload = draw();

