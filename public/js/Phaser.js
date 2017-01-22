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

  function endGame() {
    if(ws1.Ad.crash === true || ws1.Ad.crash === true || ws1.Ad.crash === true || ws1.Ad.crash === true){
      //run end game animation
    }
  }

  function udpate() {
    loadAd();
  }

})(window.Phaser);