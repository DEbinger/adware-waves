(Phaser => {

  const GAME_WIDTH = 547;
  const GAME_HEIGHT = 383;
  const GAME_CONTAINER_ID = 'game';

  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, {preload, create, update});

  function preload() {
    // game.load.sprite();//workstation1
    // game.load.sprite();//workstation2
    // game.load.sprite();//workstation3
    // game.load.sprite();//workstation4

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
          let wsToKill = wsList[workstation[wsArr[i]].name];
          wsToKill.destroy();
        }
      }
    }
  }

  function workstationCrash() {
    if(ws1.Ad.n === ws1.Ad.d){
      //load ws1 crash screen
      //set ws1 = null
    }
    if(ws2.Ad.n === ws2.Ad.d){
      //load ws2 crash screen
      //set ws2 = null
    }
    if(ws3.Ad.n === ws2.Ad.d){
      //load ws3 crash screen
      //set ws3 = null
    }
    if(ws4.Ad.n === ws4.Ad.d){
      //load ws4 crash screen
      //set ws3 = null
    }
  }

  function endGame() {
    if(ws1.Ad.crash === true && ws2.Ad.crash === true && ws3.Ad.crash === true && ws4.Ad.crash === true){
      //load end game animation....
    }
  }

  function update() {
    wait(() => {
      spawnAd();
      killAd();
    }, timePerAd);

    // killAd();
    // workstationcrash();
    // endGame();
  }

})(window.Phaser);