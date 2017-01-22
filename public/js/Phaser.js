(Phaser => {

  const GAME_WIDTH = 500;
  const GAME_HEIGHT = 800;
  const GAME_CONTAINER_ID = 'game';

  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, {preload, create, udpate});

  function preload() {
    game.load.sprite();//workstation1
    game.load.sprite();//workstation2
    game.load.sprite();//workstation3
    game.load.sprite();//workstation4
  }

  function create() {

  }

  function loadAd() {
    if(tracker.ws1Ad !== null){
      //create workstation 1 ad
      //load texd
      //load
    }
    if(tracker.ws2Ad !== null){
      //create workstation 2 ad
      //load text
    }
    if(tracker.ws3Ad !== null){
      //create workstation 3 ad
      //load text
    }
    if(tracker.ws4Ad !== null){
      //creaete workstation 4 ad
      //load text
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

  function function_name(argument) {
    // body...
  }

  function udpate() {
    loadAd();
  }

})(window.Phaser);