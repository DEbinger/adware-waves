var level = 50; // leave it at 50 for now to make things go faster
var pending = [];
var numOfAd = 5 + 5 * level;
var timePerAd;
var workstation = {
  ws1Ad: null,
  ws2Ad: null,
  ws3Ad: null,
  ws4Ad: null
};

for(let i = 0; i < numOfAd; i++) {
  pending.push(adList[Math.floor(Math.random()*adList.length)]);
}

function calcTimePerAd() {
  timePerAd = 300 / numOfAd;
  timePerAd = Math.floor(timePerAd);
}

calcTimePerAd();