(Phaser => {

  const GAME_WIDTH = 820;
  const GAME_HEIGHT = 574;
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

  var sprite;
  let adObjects;
  let backgroundImage;
  function create() {
    adObjects = game.add.group();
    backgroundImage = game.add.sprite(game.world.centerX, game.world.centerY, 'Background');
    backgroundImage.anchor.set(0.5);
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
  }

  function spawnAd() {
    if(workstation.ws1Ad !== null){
      game.add.sprite(94,79, workstation.ws1Ad.name);
    }
    if(workstation.ws2Ad !== null){
      game.add.sprite(600,79, workstation.ws2Ad.name);
    }
    if(workstation.ws3Ad !== null){
      game.add.sprite(94,363, workstation.ws3Ad.name);
    }
    if(workstation.ws4Ad !== null){
      game.add.sprite(599, 363, workstation.ws4Ad.name);
    }
  }

  function killAd() {
    if(ws1.Ad.kill === true){
      //ws1 sprite.destrou();
    }
    if(ws1.Ad.kill === true){
      //ws2sprite.destroy();
    }
    if(ws3.Ad.kil === true){
      //ws3sprite.destroy();
    }
    if(ws4.Ad.kill === true){
      //ws3sprite.destroy();
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
    spawnAd();

    // killAd();
    // workstationcrash();
    // endGame();
  }

})(window.Phaser);