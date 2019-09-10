"use strict"

const map = [
  [false, true, false, false, false],
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
];

/*
if (y-1 < 0) y = 4
if (y > 4) y=0
*/

//setInterval(
  
  function launchGameOfLife() {
  let x = 3;
  let y = 3;
  console.log(map[x][y])
  let celresult = 0;
  //selectCase(x, y);
  celresult += controlAround(x, y);
  lookingForChangeState(celresult, x, y)
}
launchGameOfLife(); 
//300);
/*
function selectCase(x, y) {
  while (x < map.length) {
    y++;
    //controlAround(x, y);
    //lookingForChangeState();
    if (y >= map.length) {
      y = 0;
      x++;
    }
    console.log(x, y)
  }
}
*/
function controlAround(x, y) {
  let celresult = 0;
  celresult += controlTopLane(x, y);
  celresult += controlMidLane(x, y);
  celresult += controlBotLane(x, y);
  console.log(celresult)
  return(celresult);
}
  
function controlTopLane(x, y) {
  let cel = 0;
  if (map[x - 1][y - 1]) cel++;
  if (map[x - 1][y]) cel++;
  if (map[x - 1][y + 1]) cel++;
  console.log("top:" + cel);
  return(cel);
}


function controlMidLane(x, y) {
  let cel = 0;
  if (map[x][y - 1]) cel++;
  if (map[x][y + 1]) cel++;
  console.log("mid:" + cel);
  return(cel);
}

function controlBotLane(x, y) {
    let cel = 0;
    if (map[x + 1][y - 1]) cel++;
    if (map[x + 1][y]) cel++;
    if (map[x + 1][y + 1]) cel++;
    console.log("bot:" + cel);
    return(cel);
}

function lookingForChangeState(celresult, x, y) {
  if (map[x][y]) {
    if(celresult == 2 || celresult == 3) {
      map[x][y] == true // A LA PROCHAINE GENERATION MAIS COMMENT DIRE CA ? 
      console.log("vrai stay vrai")
    }
    else {map[x][y] == false // A LA PROCHAINE GENERATION MAIS COMMENT DIRE CA ?
      console.log("vrai stay vrai")} 
  } 
  else {
    if (celresult == 3) {
      map[x][y] == true // A LA PROCHAINE GENERATION MAIS COMMENT DIRE CA ? 
      console.log("faux deviens vrai")
    } 
    else { map[x][y] == false 
      console.log("faux reste faux")

    } // A LA PROCHAINE GENERATION MAIS COMMENT DIRE CA ?
  }

}
  const debug = true;



/* Rappel de la consigne:
 * Une cellule vide à l'étape n − 1 et ayant exactement 3 voisins sera occupée à l'étape suivante. (naissance liée à un environnement optimal)
 * Une cellule occupée à l'étape n − 1 et ayant 2 ou 3 voisins sera maintenue à l'étape n sinon elle est vidée. (destruction par désertification ou surpopulation)
 * Le jeu est lancé via: launchGameOfLife();
 * La map est une variable globale (c'est d'ailleur la seule autorisée) de type boolean[][]
 * La carte se mets à jour toute les une seconde
 * Exemple de déclaration:
 * 
const map = [
  [false, true, false, false, false],
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
];
 * Les fonction ne peuvent pas faire plus de 30 lignes (bonus: 25 lignes)
 * Les lignes ne peuvent pas faire plus de 130 caracteres (bonus: 80 caracteres)
 */

/*




/*
--> On définis les changement d'état
  --> On regarde si la case est true ou false a l'état n  
        -->Si false   
        --> On regarde la valeur de nb , si il est egal a 3 , false devient true  
        --> Sinon false reste false   
          
        -->Si true     
          --> On regarde la valeur de nb , si il est égal a 2 ou 3 , true reste true     
          --> Sinon true deviens false     
  
        --> Regarder si la cellule doit mourrir.   
  --> Regarder si elle dois vivre.    

  --> Penser a l'affichage !!!

    // Ci dessous vous pouvez trouvez un exemple de code qui pourra être utilisé pour tester votre programme.
  const map = [
      [false, true, false, false, false],
      [false, false, true, false, false],
      [false, true, true, true, false],
      [false, false, true, false, false],
      [false, false, false, false, false],
  ];
  const debug = true;
  
  
  launchGameOfLife();
  



> On lance la partie

--> On regarde chaque element du tableau  
  --> On compte le nombre de cellule autour  
    --> Controle la ligne du haut 
    --> Controle la ligne sur laquelle on se trouve  
    --> Controle la ligne du bas  
 */









































































/*

function launchGameOfLife() {
  let x = 0;
  let y = 0;
  lookCase(x, y);
  checkCellule(x, y, nb);
  lookingForChangeState(y, x, nb);
}

function lookCase(y, x) {
  for (x; x < map.length; x++) {
    if (x == map.length) {
      x = 0;
      y++;
    }
    if (y == map.length + 1)
    return (y, x);
  }
}


function controlAround(y, x) {
  let nb = 0;
  nb += controlTopLane(y, x);
  if (nb >= 3 ) return (nb);
  nb += controlMidLane(y, x);
  if (nb >= 3 ) return (nb);
  nb += controlBotLane(y, x);
  return (nb);
}

function controlTopLane(y, x) {
  let nb = 0;
  if (map[y + 1][x -1]) nb++;
  if (map[y + 1][x]) nb++;
  if (map[y + 1][x + 1]) nb++;
  return (nb);
}

function controlMidLane(y, x) {
  let nb = 0;
  if (map[y][x - 1]) nb++;
  if (map[y][x + 1]) nb++;
  return (nb);
}

function controlBotLane(y, x) {
  let nb = 0;
  if (map[y - 1][x - 1]) nb++;
  if (map[y - 1][x]) nb++;
  if (map[y - 1][x + 1]) nb++;
  return (nb);
}

function lookingForChangeState(y, x,nb) {
  let a = 6;
  let b = 6;

  if ( a != y || b != x) {
    if (map[y][x]) {
      if (nb < 2 ) map[x][y] = false;
      // Ajouter des trucs
    } else {
      if (map[y][x] == false) {
        if (nb == 3) map[y][x] == true;
      }
    }
  a = map[y];
  b = map[x];
  }
}

  
  
  
  function gameOfTalk() {
    let players = [
          { name: "JenFreud", humeur: true },
          { name: "Yves", humeur: false },
          { name: "Chrtrouduque", humeur: false }
    ];
  
      conversation(p[0], p[2]);
  }
  
  function conversation(p1, p2) {
    salutation(p1);
      commentCaVa(p2);
  }
  
  function parler(p, str) {
    console.log(p.name + 'dit: ' + str);
  }
  
  function salutation(p) {
      parler(p, "Salut");
      parler(p, "Comment ca va ?");
  }
  
  function commentCaVa(p) {
    if (p.humeur)
        parler(p, "Comme un interné psy");
      else {
        parler(p, "Plus rien ne va quand j'apprena pour cette Carla");
        parler(p, "Elle etait la, puis le suca et le morda");
    }
  }
  
  gameOfTalk();
  */