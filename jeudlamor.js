// Game logic
console.debug = () => {};

class GameOfLife {
  constructor(initialMap) {
    console.debug("start constructor");
    this.map = initialMap;
    this.cycle = 0;

    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.update = this.update.bind(this);
    console.debug("end constructor");
  }

  start() {
    this.update();
    setTimeout(this.start, 1000);
  }

  pause() {
    // TODO: write pause system
  }

  update() {
    this.cycle++;
    this.map2 = this.map.map((arr) => arr.slice());
    let x = -1;
    while (++x < this.map.length) {
      let y = -1;
      while (++y < this.map[x].length) this.applyLifeCycle(x, y);
    }
    this.map = this.map2;
    this.print();
  };

  print() {
    console.log("Cycle", this.cycle);
    let x = -1;
    while (++x < this.map.length) {
      let y = -1;
      let line = "";
      while (++y < this.map[x].length) line += (this.map[x][y]) ? "x" : ".";
      console.log(line);
    }
    console.log("\n");
  };

  applyLifeCycle(x, y) {
    const mates = this.checkCelluleAround(x, y);

    if (this.checkCelluleState(x, y)) {
      if (mates < 2 || mates > 3) this.map2[x][y] = false;
    } else {
      if (mates === 3) this.map2[x][y] = true;
    }
  };

  checkCelluleAround(x, y) {
    let res = 0;
    if (this.checkCelluleState(x - 1, y - 1)) res++;
    if (this.checkCelluleState(x, y - 1)) res++;
    if (this.checkCelluleState(x + 1, y - 1)) res++;
    if (this.checkCelluleState(x - 1, y)) res++;
    if (this.checkCelluleState(x + 1, y)) res++;
    if (this.checkCelluleState(x - 1, y + 1)) res++;
    if (this.checkCelluleState(x, y + 1)) res++;
    if (this.checkCelluleState(x + 1, y + 1)) res++;
    return (res);
  };

  checkCelluleState(x, y) {
    const lengthY = this.map.length;
    if (y < 0) y += lengthY;
    else if (y >= lengthY) y -= lengthY;

    const lengthX = this.map[y].length;
    if (x < 0) x += lengthX;
    else if (x >= lengthX) x -= lengthX;
    
    return (this.map[x][y]);
  };
}

// Programme launcher
const launch = function startGameOfLife(map) {
  const game = new GameOfLife(map);
  game.print();
  game.start();
};


// Launch it
launch([
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, true, false, false, false, false,  false],
  [false, false, false, false, true, true, true, false, false, false, false],
  [false, false, false, false, false, true, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
]);