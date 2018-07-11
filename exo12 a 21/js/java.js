//EXO12



/*var i=1;

while (i<1=0){
i++
console.log(i);

}*/






// var i="";

// for (i=10; i>0; i--) {
// console.log(i);
// }



//EXO13


// for (i=1; i<=10; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

//EXO14

// var somme = 0;
// var i=0;
// var tableau=[];

// tableau[0]=1;
// tableau[1]=2;
// tableau[2]=3;


// for (i=0; i<=2; i++) {
//     somme += tableau[i];

// }

//console.log(somme);

//EXO14

// var tableau =[1,3,2];
// var long = tableau.length;
// var max = 0;

// for (i=0; i<=long; i++){
//     if (tableau[i] > max){
//       max = tableau[i];
//     }    
// }
// console.log(max);



//EXO14

// var tableau =[10, 5, 17];
// var long = tableau.length;
// var min = 1000;

// for (i=0; i<=long; i++){
//     if (tableau[i] < min) {
//     min = tableau[i];
// }
// }
// console.log(min);

//EXO15

// var x = 5;
// var tableau = [5,6,4,5,8,9,7,5,6,4,5,8,9,7,2,5,5,8,4,5];
// var long = tableau.length;
// var occ=0;

// for (i=0; i<=long; i++){
//     if (tableau[i] === x) {
//     occ++;
// }
// }
// console.log(occ);

//EXO16


// var tableau = [6,2,8,1,4];
// var long = tableau.length;
// var temp =0;
// compt=0;


// do {

//     for (i=0; i<=long; i++){
    
//     if (tableau[i] > tableau[i+1]){
//     temp = tableau[i];
//     tableau[i] = tableau[i+1];
//     tableau[i+1] = temp;
// }
// }
//     for (j=long-1; j>0; j--){
    
//     if (tableau[j] > tableau[j+1]){
//     temp = tableau[j];
//     tableau[j] = tableau[j+1];
//     tableau[j+1] = temp;
// }
// }       
// compt++;

// } while (compt<long);

// alert(tableau);




//EXO17

// var res=0;


// for (let i=0; i<=10; i++) {
//     res = 2*i;

//     console.log(res);
// }



// var res=0;
// var nb = prompt("entrer un nombre dont vous voulez afficher la table de multiplication?")


// for (let i=0; i<=10; i++) {
//     res = nb*i;

//     console.log(res);
// }



//EXO18


// var a = prompt("Entrer un entier positif");


//     if (a<=99){
//         var dizaine = a/10;
// dizaine = Math.trunc(dizaine);
    
// } else {
//         var dizaine = (a%100)/10;
// dizaine = Math.trunc(dizaine);

// }

// alert ("Le nombre des dizaines est " +dizaine);



//EXO19

// var L=prompt("Entrer la largeur de votre pièce en mètre");
// var l=prompt("Entrer la largeur de votre pièce en mètre");
// var h=prompt("Entrer la hauteur de votre pièce en mètre");
// var radiateur = 0;

// var surperficie = 0;
// superficie = L*l*h;
// alert ("La superficie de votre pièce est de " +superficie+ "m3"); 

// radiateur=superficie/8;
// radiateur=Math.trunc(radiateur) +1;
// console.log(radiateur);

// alert ("Pour chauffer votre pièce de " +superficie+"m3, il vous faut " +radiateur+" radiateurs");




//EXO20

// var duree = prompt("Nb secondes?");
// var min;
// var h;

// h = Math.floor(duree / 3600);
// min = Math.floor((duree % 3600) / 60);
// sec = Math.floor((duree % 3600) % 60);
// alert("La durée " +duree+ " secondes = " +h+ " heures + " +min+ " minutes + " + sec+ " secondes");
// console.log(min);

//EXO21

// var n=prompt("Entrer un nombre");

// for(i=1; i<=n ; i++){

//     for (j=1; j<=i; j++){
//         document.write(" "+j);
//     }
//     document.write("</br>");
// }