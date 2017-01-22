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
let amazonMsg = ['Free 2 Day shipping! (unless you live in Hawaii...then fuck you', 'We are massively upside down in our investments, but mask the quarterly losses by conflating investor\'s capital with our "profits"', 'Also, we steal all your personal information and spending habits and sell them to 3rd parties. Doing it now in fact, Thanks!'];
let appleMsg = ['Probably wouldn\'t have lost if you used a Macbook Pro 2016 version', 'Have you tried our new "iWhatever"? It\'s the same thing as last year, only more expensive and now requires a Dongle! #innovative', 'You don\'t actually want personalization, let us dictate what you can do.'];
let arrowMsg = ['I will find you', 'you WILL pay for what you\'ve done', 'I\'ve killed friends, you\'re computer means nothing to me'];
let nincompoopMsg = ['You couldn\'t beat me, you know, I\'m like, a smart person', 'I\'d only accept these results if I won anyway', 'Even though the totally biased lamestream media made this totally rigged. I won, I won so hugely'];
let chromeMsg = ['I know you lost', 'but look on the bright side', 'Just be glad this isn\'t IE'];
let cialisMsg = ['Will you be ready?', 'Turns out, no', 'Should have taken Cialis'];
let gfMsg = ['Who dis bitch?!', 'I know you didn\'t just like that girls photo on IG', 'Don\'t leave me, I\'m pregnant'];
let crownMsg = ['For every king...', '...a mentor.', 'For every King...a Crown'];
let devMsg = ['Apply','Bind', 'Call'];
let doritosMsg = ['Eat Doritos', 'Because your Americanized palette is so desensitized by sugar', 'you have to uppercut your mouth with an atomic bomb of artificial flavors just so you don\'t recognize you are living an oversaturated undervalued existence'];
let geicoMsg = ['Save 15% on insurance by switching', 'from Geico', 'in 15 minutes or less! How Progressive'];
let haloMsg = ['ooooooooooOOOOOoooooohhhhhh...', 'OOOoooooooOOOooooohhhhhh', 'ooooooohhhOOOOhhh'];
let marioMsg = ['It\'s a-Me!', 'Mario!','Whooooo-AH'];
let mickyDsMsg = ['It\'s Fresh','You\'ll love it','I swear!'];
let netflixMsg = ['What movie do you want to play in the background while you two get busy?'];
let playstationMsg = ['Live in Your World,','Play in Ours', 'It only does EVERYTHING'];
let toyotaMsg = ['Nothing More American than buying a Toyota'];

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




