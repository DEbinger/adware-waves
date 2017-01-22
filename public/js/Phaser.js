(Phaser => {

  const GAME_WIDTH = 547;
  const GAME_HEIGHT = 383;
  const GAME_CONTAINER_ID = 'game';

  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, {preload, create, update});

  function preload() {
    game.load.image('538', 'assets/538.png');
    game.load.image('WOW', 'assets/HS.png');
    game.load.image('Overwatch', 'assets/Overwatch-Origins.png');
    game.load.image('Amazon', 'assets/amazon.png');
    game.load.image('Apple', 'assets/apple.png');
    game.load.image('CW/Arrow', 'assets/arrow.png');
    game.load.image('Drumpf', 'assets/bleh.png');
    game.load.image('Chrome', 'assets/chrome.png');
    game.load.image('Cialis', 'assets/cialis.png');
    game.load.image('CW/CrazyExGirlfriend', 'assets/crazy.png');
    game.load.image('CrownRoyal', 'assets/crown.png');
    game.load.image('Devleague', 'assets/devleague.png');
    game.load.image('Doritos', 'assets/dorito.png');
    game.load.image('Geico', 'assets/geico.png');
    game.load.image('Halo', 'assets/halo.png');
    game.load.image('MarioKart', 'assets/mario.png');
    game.load.image("McDonalds", 'assets/mcd.png');
    game.load.image('NetflixAndChill', 'assets/netflix.png');
    game.load.image('Playstation', 'assets/ps.png');
    game.load.image('Toyota', 'assets/toyota.png');
    game.load.image('Background', 'assets/background.png');
    game.load.image('Computer', 'assets/computer.png');
  }

  let delay = 0;
  let sprite;
  let adObjects;
  let backgroundImage;
  let wsArr = Object.keys(workstation);
  let amtWs = wsArr.length;
  let wsList = {};
  let ranGameOverAni = false;

  function create() {
    adObjects = game.add.group();
    backgroundImage = game.add.sprite(game.world.centerX, game.world.centerY, 'Background');
    backgroundImage.anchor.set(0.5);
    backgroundImage.scale.set(0.66, 0.66);
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
  }

  function wait(callback, sec) {
    const fps = 60;
    if(delay-- === 0) {
      callback();
      delay = fps * sec;
    }
  }

  function spawnAd() {
    let xCoord = [80, 400, 80, 400];
    let yCoord = [60, 60, 300, 300];
    for(let i = 0; i < amtWs; i++) {
      if(workstation[wsArr[i]] === null) {
        workstation[wsArr[i]] = pending.pop();
        let addedWs = game.add.sprite(xCoord[i], yCoord[i], workstation[wsArr[i]].name);
        wsList[workstation[wsArr[i]].name] = addedWs;
        i = amtWs;
      }
    }
  }

  function killAd() {
    for(let i = 0; i < amtWs; i++) {
      if(workstation[wsArr[i]] !== null) {
        if(workstation[wsArr[i]].kill) {
          wsList[workstation[wsArr[i]].name].destroy();
          workstation[wsArr[i]] = null;
        }
      }
    }
  }

  function workstationCrash() {
    for(let i = 0; i < amtWs; i++) {
      if(workstation[wsArr[i]] !== null) {
        if(workstation[wsArr[i]].n === workstation[wsArr[i]].d) {
          let wsToBSOD = wsList[workstation[wsArr[i]].name]; // sprite object
          workstation[wsArr[i]].crash = true;
          // crash screeon for wsToBSOD
        }
      }
    }
  }

  function endGame() {
    let endGame = false;
    let amtCrash = 0;
    for(let i = 0; i < amtWs; i++) {
      if(workstation[wsArr[i]] !== null) {
        if(workstation[wsArr[i]].crash) {
          amtCrash++;
        }
      }
    }
    if(amtCrash === amtWs) {
      ranGameOverAni = true;
      gameOver();
    }
  }

  function gameOver() {
    // do game over animation here
  }

  function update() {
    endGame(); 
    killAd();
    // time dependent actions go in wait();
    wait(() => {
      spawnAd();
    }, timePerAd);
  }

})(window.Phaser);