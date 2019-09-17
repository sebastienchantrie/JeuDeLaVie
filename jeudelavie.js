// Code en améliration //

"use strict"

let map = [
  [false, true, false, false, false, false],
  [false, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, false, false, true],
  [false, false, false, false, false],
];
let map2;

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