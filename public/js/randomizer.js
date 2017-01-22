

var pending = [];

var workstation = {
  ws1Ad: null,
  ws2Ad: null,
  ws3Ad: null,
  ws4Ad: null
};

function randomAd() {
 let ad = adList[Math.floor(Math.random()*adList.length)];
 pending.push(ad);
 return ad;
}

for(var i = 0; i < 20; i++){
  randomAd();
}

var sendAdToPhaser = function (obj) {
    var keys = Object.keys(obj);
    var prop = keys[Math.floor(Math.random() * keys.length)];
    if(obj[prop] === null){
      obj[prop] = randomAd();
    } else {
      return false;
    }
};


setInterval(function(){
  sendAdToPhaser(workstation);
}, 1000);