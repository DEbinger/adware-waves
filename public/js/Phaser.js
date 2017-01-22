(Phaser => {

  const GAME_WIDTH = 500;
  const GAME_HEIGHT = 800;
  const GAME_CONTAINER_ID = 'game';

  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, {preload, create, udpate});



})(window.Phaser);