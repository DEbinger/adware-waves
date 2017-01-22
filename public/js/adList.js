var adList = [


];

function addAd (path, name, loaded){
  var newAd = {

    path : path,
    name : name,
    n: null,
    d: null,
    kill : false,
    crash : false,
    loaded : loaded};

  adList.push(newAd);

}
let _538Msg = ['odds were not in your favor', 'I can\'t say I didn\'t see this coming', '0% chance I don\'t steal your personal info'];
let wowMsg = ['WOW you suck at this'];
let overwatchMsg = ['We are over watching you try and fail', 'my ultimate is charging!', 'my ultimate is ready!'];
let amazonMsg = [''];
let appleMsg = [''];
let arrowMsg = ['I will find you', 'you WILL pay for what you\'ve done', 'I\'ve killed friends, you\'re computer means nothing to me'];
let nincompoopMsg = [''];
let chromeMsg = [''];
let cialisMsg = [''];
let gfMsg = [''];
let crownMsg = [''];
let devMsg = [''];
let doritosMsg = [''];
let geicoMsg = [''];
let haloMsg = [''];
let marioMsg = [''];
let mickyDsMsg = [''];
let netflixMsg = [''];
let playstationMsg = [''];
let toyotaMsg = [''];

addAd('../assets/538.png','538',_538Msg);
addAd('../assets/HS.png','WOW',wowMsg);
addAd('../assets/Overwatch-Origins.png','Overwatch',overwatchMsg);
addAd('../assets/amazon.png','Amazon',amazonMsg);
addAd('../assets/apple.png','Apple',appleMsg);
addAd('../assets/arrow.png','CW/Arrow',arrowMsg);
addAd('../assets/bleh.png','Drumpf',nincompoopMsg);
addAd('../assets/chrome.png','Chrome',chromeMsg);
addAd('../assets/cialis.png','Cialis',['']);
addAd('../assets/crazy.png','CW/CrazyExGirlfriend',gfMsg);
addAd('../assets/crown.png','CrownRoyal',crownMsg);
addAd('../assets/devleague.png','Devleague',devMsg);
addAd('../assets/dorito.png','Doritos',doritosMsg);
addAd('../assets/geico.png','Geico',geicoMsg);
addAd('../assets/halo.png','Halo',haloMsg);
addAd('../assets/mario.png','MarioKart',marioMsg);
addAd('../assets/mcd.png','McDonalds',mickyDsMsg);
addAd('../assets/netflix.png','NetflixAndChill',netflixMsg);
addAd('../assets/ps.png','Playstation',playstationMsg);
addAd('../assets/toyota.png','Toyota',toyotaMsg);




