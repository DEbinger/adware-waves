// const nextAd = pending[0];
// const adPostion1 = pending[1];
// const adPostion2 = pending[2];
// const adPostion3 = pending[3];

let nextContainer = document.getElementById('next');

nextContainer.innerHTML = `<img src="public/${pending[0].path}"><img>`;
const adPostion1 = document.createElement('div');

let backlogContainer= document.getElementById('backlog');

let adPostion1Container = document.createElement('div');
adPostion1Container.id = "adPostion1";
backlogContainer.appendChild(adPostion1Container);
adPostion1Container.innerHTML = `<img src="public/${pending[1].path}" style="height: 100px; width: 100px;"><img>`;



let adPostion2Container = document.createElement('div');
adPostion2Container.id = "adPostion2";
backlogContainer.appendChild(adPostion2Container);
adPostion2Container.innerHTML = `<img src="public/${pending[2].path}" style="height: 100px; width: 100px;"><img>`;


let adPostion3Container = document.createElement('div');
adPostion3Container.id = "adPostion3";
backlogContainer.appendChild(adPostion3Container);
adPostion3Container.innerHTML = `<img src="public/${pending[3].path}" style="height: 100px; width: 100px;"><img>`;
