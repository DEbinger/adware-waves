

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
}

for(var i = 0; i < 20; i++){
  randomAd();
}

console.log('pending: ', pending);
var sendAdToPhaser = function (obj) {
    var keys = Object.keys(obj);
    var prop = keys[keys.length * Math.random() << 0];
    if(obj[prop] === null){
      obj[prop] = randomAd();
      console.log('prop: ', obj[prop]);
    } else {
      return false;
    }
};


setInterval(function(){sendAdToPhaser(workstation);}, 1000);
sendAdToPhaser(workstation);
