var level = 50; // leave it at 50 for now to make things go faster
var pending = [];
var numOfAd;
var timePerAd;
var workstation = {
  ws1Ad: null,
  ws2Ad: null,
  ws3Ad: null,
  ws4Ad: null
};

calcTimePerAd();

for(let i = 0; i < numOfAd; i++) {
  pending.push(adList[Math.floor(Math.random()*adList.length)]);
}

function calcTimePerAd() {
  numOfAd = 5 + 5 * level;
  timePerAd = 300 / numOfAd;
  timePerAd = Math.floor(timePerAd);
}