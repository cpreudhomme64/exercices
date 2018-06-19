class Chapitre {

  constructor (texteTitre, texteParagraphe) {
      this.monTitre = texteTitre;
      this.monParagraphe = texteParagraphe;
   }
   Creerchapitre () {

      var maDiv = document.createElement("div");
      var monTitre = document.createElement("h1");
      var monParagraphe = document.createElement("p");
      monTitre.innerText =  this.monTitre;
      monParagraphe.innerText = this.monParagraphe;

      maDiv.appendChild(monTitre);
      maDiv.appendChild(monParagraphe);
      document.body.appendChild(maDiv);
   }
}

var chapitre1 = new Chapitre("Bienvenue !", "Bienvenue sur mon site ! Plein de lorem ipsum...");
chapitre1.Creerchapitre();

var chapitre2 = new Chapitre("Chapitre 1 : un chapitre pour débuter", "Paragraphe chapitre 1");
chapitre2.Creerchapitre();

var chapitre3 = new Chapitre("Chapitre 2 : encore un chapitre", "Paragraphe chapitre 2");
chapitre3.Creerchapitre();

var chapitre4 = new Chapitre("Chapitre 3 : un autre chapitre", "Paragraphe chapitre 3");
chapitre4.Creerchapitre();



// var maDiv = document.createElement("div");
// var monTitre = document.createElement("h1");
// var monParagraphe = document.createElement("p");
// monTitre.innerText = "Bienvenue !";
// monParagraphe.innerText = "Bienvenue sur mon site ! Plein de lorem ipsum...";
// maDiv.appendChild(monTitre);
// maDiv.appendChild(monParagraphe);
// document.body.appendChild(maDiv);

// var maDiv1 = document.createElement("div");
// var monTitre1 = document.createElement("h1");
// var monParagraphe1 = document.createElement("p");
// monTitre1.innerText = "Chapitre 1 : un chapitre pour débuter";
// monParagraphe1.innerText = "Paragraphe chapitre 1";
// maDiv1.appendChild(monTitre1);
// maDiv1.appendChild(monParagraphe1);
// document.body.appendChild(maDiv1);

// var maDiv3 = document.createElement("div");
// var monTitre3 = document.createElement("h1");
// var monParagraphe3 = document.createElement("p");
// monTitre3.innerText = "Chapitre 2 : un autre chapitre";
// monParagraphe3.innerText = "Paragraphe chapitre 2";
// maDiv3.appendChild(monTitre3);
// maDiv3.appendChild(monParagraphe3);
// document.body.appendChild(maDiv3);

// var maDiv4 = document.createElement("div");
// var monTitre4 = document.createElement("h1");
// var monParagraphe4 = document.createElement("p");
// monTitre4.innerText = "Chapitre 3 : encore un chapitre";
// monParagraphe4.innerText = "Paragraphe chapitre 3";
// maDiv4.appendChild(monTitre4);
// maDiv4.appendChild(monParagraphe4);
// document.body.appendChild(maDiv4);