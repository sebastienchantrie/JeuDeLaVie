let nbtab;
let btnclick = document.getElementById('createtab');
let btnread = document.getElementById('btnread');
let btnpause = document.getElementById('btnpause');
let mylogictab = [];
let map = [];
let comptaffiche = document.getElementById('nbgen');
let compt = 0 ;
let bodytab = document.getElementById('gameoflife');
let mousedown = false;
let cell;
let logicgame;
let isClicked;
let rulesbtn = document.getElementById('btnrules');
let btnback = document.getElementById('btnback');
canClick = true;
let rules = document.getElementById('rules')
/* Enlevez parenthese , coherence syntax , nouvelle pratique */
btnclick.addEventListener("click", () => {
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");
  if (document.getElementById('32').checked) nbtab = 32;
  else if (document.getElementById('64').checked) nbtab = 64;
  else nbtab = 128;
  for (let i = 0; i < nbtab; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < nbtab; j++) {
      let cell = document.createElement("td");
      cell.classList.add('false');
      cell.id = `cell-${i}-${j}`
      if (nbtab === 32) {
        cell.classList.add('mini');
        bodytab.classList.add('col-lg-8');
        bodytab.classList.add('littlemargin');
      }
      else if (nbtab === 64) {
        cell.classList.add('middle');
        bodytab.classList.add('col-lg-6');
        bodytab.classList.add('middlemargin');
      } else {
        cell.classList.add("big");
        bodytab.classList.add('col-lg-8');
        bodytab.classList.add('bigmargin');
      }
      row.appendChild(cell);

      /* Fonction au click sur la céllule la rends false ou true */ 
      cell.addEventListener('click', (e) => {
        if (canClick) {
          if (cell.classList[0] == "false") cell.classList.replace("false", "true");
          else cell.classList.replace("true", "false");
        }
      })
      /* Fonction qui permet de rester appuyer sur la souris pour changer l'état des cases */
      document.addEventListener('mousedown', (e) => {
        if (canClick) {
          bodytab.onmousedown = () => {
            mousedown = true;
            console.log(mousedown);
          }
          cell.onmouseover = () => {
            if(mousedown == true) {
              if (cell.classList[0] == "false") cell.classList.replace("false", "true");
              else cell.classList.replace("true", "false");
            };
          }
          bodytab.onmouseup = () => {
            mousedown = false;
            console.log(mousedown);
          };
        }
      });
    }
  tblBody.appendChild(row);
  let move = document.getElementById('move');
  move.classList.add('move');
  tbl.appendChild(tblBody);
  bodytab.appendChild(tbl);
  tbl.setAttribute("border", "2");
  }
});

btnrules.addEventListener('click', () => {
rules.style.opacity = '1';
rules.style.zIndex = '5';
})


btnback.addEventListener('click' , () => {
  rules.style.opacity = '0';
  rules.style.zIndex = '-5';
})

/* Crée un tableau multi dimensionnel du meme nombre de case que le tableau HTML et le remplis de false */
function createtab(mylogictab) {
  if (document.getElementById('32').checked) nbtab = 32;
  else if (document.getElementById('64').checked) nbtab = 64; 
  else nbtab = 128;
  for (let i = 0; i < nbtab; i++) {
    let arr = [];
    for (let y = 0; y < nbtab ; y++) {
      arr[y] = false;
    }
    mylogictab[i] = arr;
  }
  return mylogictab;
}
isClicked = false;
btnread.addEventListener('click' , () => {
  canClick = false;
  /* On stock le résultat de la fonction createtab dans une variable */
  if(!isClicked) {
    logicgame = setInterval(() => {
      map = createtab(mylogictab);
      map2 = [];
      for ( let x = 0 ; x < map.length ; x++) {
        for ( let y = 0 ; y < map.length ; y++) {
          let cell = document.getElementById(`cell-${x}-${y}`)
          if (cell.classList[0] == 'true') map[x][y] = true;
        }
      }
        for ( let x = 0 ; x < map.length ; x++) {
          map2.push(map[x].slice());
        }
        let x = 0;
        while (x < map.length) {
          let y = 0;
            while (y < map.length) {
              const celresult = controlAround(x, y);
              lookingForChangeState(x, y, celresult);
              y++;
            }
          x++;
        }
      map = map2;
      compt++;
      comptaffiche.innerHTML = compt;
      ChangeDisplay();
    },50)
    isClicked = true;
  }
});
function controlAround(x, y) {
  let celresult = 0;
  celresult += controlTopLane(x, y);
  celresult += controlMidLane(x, y);
  celresult += controlBotLane(x, y);
  return celresult;
}
function controlTopLane(x, y) {
  let cel = 0;
  cel += controlCellule(x - 1, y - 1);
  cel += controlCellule(x - 1, y);
  cel += controlCellule(x - 1, y + 1);
  return cel;
}
function controlMidLane(x, y) {
  let cel = 0;
  cel += controlCellule(x, y - 1);
  cel += controlCellule(x, y + 1);
  return cel;
}
function controlBotLane(x, y) {
    let cel = 0;
    cel += controlCellule(x + 1, y - 1);
    cel += controlCellule(x + 1, y);
    cel += controlCellule(x + 1, y + 1);
    return cel;
}
function controlCellule(x, y) {
  if (x < 0) x = map.length - 1;
  else if (x >= map.length) x = 0;
  if (y < 0) y = map[x].length - 1;
  else if (y >= map[x].length) y = 0;
  if (map[x][y]) return 1
  return 0;
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

function ChangeDisplay (cell) {
  for ( let x = 0 ; x < map2.length ; x++) {
    for ( let y = 0 ; y < map2.length ; y++) {
      let cell = document.getElementById(`cell-${x}-${y}`)
      if (map2[x][y] == false && cell.classList[0] == 'true') {
        cell.classList.replace('true' ,'false');
      } 
      else if (map2[x][y] == true && cell.classList[0] == 'false') {
        cell.classList.replace('false' ,'true');
      }
    }
  }
} 
/* Fonction clearinterval / breakgame */
btnpause.addEventListener("click", (e) => {
    clearInterval(logicgame);
    isClicked = false;
    canClick = true;
  });

// rester appuyer sur la souris et modifier
// A mettre au debut
//let t0 = performance.now();

// A mettre à la fin
//var t1 = performance.now();
//console.log((t1 - t0) + "ms");

