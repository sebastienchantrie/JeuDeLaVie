// Code en amélioration //
"use strict"
let map = [
  [false, true, false, false, false, false],
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, false, false, true],
  [false, false, false, false, false],
];
let map2;
/* On va crée une fonction qui imbriquera toute la logique de notre jeu et l'englober dans un set interval pour la relancer toute les
secondes.

On va définir une variable map2 qui sera vide par défaut
Ensuite on va pushé une copie de toute les cases , une par une , dans map2

Ensuite on va rentrer dans les boucles pour itéré le tableau
et on va lancer la fonction controlAround qui prend en parametre X et Y

ControlAround = Cette fonction va lancer 3 fonctions qui vont controler le nombre de case true en haut , au milieu et en bas et return
le nombre de case true

la variable celresult va s'incrémenté du nombre de céllule true renvoyé par ControlAround

Ensuite on lance la fonction lookingForChangeState qui prend en arguments X y et celresult
Cette fonction va appliquer les changements en fonction des régles du jeu de la vie

Ensuite on va définir que map est égal a map2 pour l'affichage.

Lorsque la fonction va se relancer , map2 va se vidé de nouveau et l'opération se relancera a l'infini

*/
setInterval(
function gameLogic() {
  map2 = [];
  for ( let x = 0 ; x < map.length ; x++) {
    map2.push(map[x].slice());
  }
  let x = 0;
  while (x < map.length) {
    let y = 0;
    while (y < map[x].length) {
      const celresult = controlAround(x, y);
      lookingForChangeState(x, y, celresult);
      y++;
    }
    x++;
  }
  map = map2;
  console.log(map);
},1000);

function controlAround(x, y) {
  let celresult = 0;
  celresult += controlTopLane(x, y);
  celresult += controlMidLane(x, y);
  celresult += controlBotLane(x, y);
  return(celresult);
}

function controlTopLane(x, y) {
  let cel = 0;
  cel += controlCellule(x - 1, y - 1);
  cel += controlCellule(x - 1, y);
  cel += controlCellule(x - 1, y + 1);
  return(cel);
}

function controlMidLane(x, y) {
  let cel = 0;
  cel += controlCellule(x, y - 1);
  cel += controlCellule(x, y + 1);
  return(cel);
}

function controlBotLane(x, y) {
    let cel = 0;
    cel += controlCellule(x + 1, y - 1);
    cel += controlCellule(x + 1, y);
    cel += controlCellule(x + 1, y + 1);
    return(cel);
}

function controlCellule(x, y) {
  if (x < 0) x = map.length - 1;
  else if (x >= map.length) x = 0;
  if (y < 0) y = map[x].length - 1;
  else if (y >= map[x].length) y = 0;

  if (map[x][y]) return (1)
  return (0);
}

function lookingForChangeState(x, y, celresult) {

  if (map[x][y]) {
    if (celresult == 2 || celresult == 3) map2[x][y] = true;
    else map2[x][y] = false;
  }
  else {
    if (celresult == 3) map2[x][y] = true;
    else map2[x][y] = false;
  }
}