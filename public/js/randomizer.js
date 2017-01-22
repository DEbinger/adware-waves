var level = 1;
var pending = [];
var workstation = {
  ws1Ad: null,
  ws2Ad: null,
  ws3Ad: null,
  ws4Ad: null
};
var numOfAd = 5 + 5 * level;
var timePerAd = 300 / numOfAd;

for(let i = 0; i < numOfAd; i++) {
  pending.push(adList[Math.floor(Math.random()*adList.length)]);
}

var sendAdToPhaser = function () {
  for(key in workstation) {
    if(workstation[key] === null){
      workstation[key] = pending.pop();
      return false;
    }
  }
};

setInterval(sendAdToPhaser, timePerAd);