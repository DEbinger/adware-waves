var adList = [
  {path: "geico"},
  {path: "viagra"},
  {path: "shamwow"},
]

var workstation = {
  ws1Ad: null,
  ws2Ad: null,
  ws3Ad: null,
  ws4Ad: null
}


function randomAd() {
 let ad = adList[Math.floor(Math.random()*adList.length)];
 return ad;
}


var sendAdToPhaser = function (obj) {
    var keys = Object.keys(obj)
    var prop = keys[keys.length * Math.random() << 0]
    if(obj[prop] === null){
      prop = randomAd();
      console.log('prop: ', prop);
    }
};


setInterval(function(){sendAdToPhaser(workstation)}, 500);
