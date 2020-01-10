var list = document.getElementById('mons');
var moveList = document.getElementById('moves');

var pokemon0 = document.getElementById('0');
var pokemon1 = document.getElementById('1');
var pokemon2 = document.getElementById('2');
var pokemon3 = document.getElementById('3');
var pokemon4 = document.getElementById('4');
var pokemon5 = document.getElementById('5');

var pokemon6 = document.getElementById('6');
var pokemon7 = document.getElementById('7');
var pokemon8 = document.getElementById('8');
var pokemon9 = document.getElementById('9');
var pokemon10 = document.getElementById('10');
var pokemon11 = document.getElementById('11');

var pList0 = pokemon0.innerText.split(",");
var pList1 = pokemon1.innerText.split(",");
var pList2 = pokemon2.innerText.split(",");
var pList3 = pokemon3.innerText.split(",");
var pList4 = pokemon4.innerText.split(",");
var pList5 = pokemon5.innerText.split(",");

var pList6 = pokemon6.innerText.split(",");
var pList7 = pokemon7.innerText.split(",");
var pList8 = pokemon8.innerText.split(",");
var pList9 = pokemon9.innerText.split(",");
var pList10 = pokemon10.innerText.split(",");
var pList11 = pokemon11.innerText.split(",");

var base1 = document.getElementById("base1");
var base2 = document.getElementById("base2");
var base3 = document.getElementById("base3");
var base4 = document.getElementById("base4");
var base5 = document.getElementById("base5");
var base6 = document.getElementById("base6");

var front = document.getElementById("front").children;
var back = document.getElementById("back").children;

pList0 = pList0.concat(base1.innerText.substring(1, base1.innerText.length - 1).split(","));
pList1 = pList1.concat(base2.innerText.substring(1, base2.innerText.length - 1).split(","));
pList2 = pList2.concat(base3.innerText.substring(1, base3.innerText.length - 1).split(","));
pList3 = pList3.concat(base4.innerText.substring(1, base4.innerText.length - 1).split(","));
pList4 = pList4.concat(base5.innerText.substring(1, base5.innerText.length - 1).split(","));
pList5 = pList5.concat(base6.innerText.substring(1, base6.innerText.length - 1).split(","));

pList0.push(front[0].innerText);
pList1.push(front[1].innerText);
pList2.push(front[2].innerText);
pList3.push(front[3].innerText);
pList4.push(front[4].innerText);
pList5.push(front[5].innerText);

pList0.push(back[0].innerText);
pList1.push(back[1].innerText);
pList2.push(back[2].innerText);
pList3.push(back[3].innerText);
pList4.push(back[4].innerText);
pList5.push(back[5].innerText);

var one = document.getElementById("one");
var two = document.getElementById("two");
var tre = document.getElementById("tre");
var fou = document.getElementById("for");
var fiv = document.getElementById("fiv");
var six = document.getElementById("six");

var m0 = document.getElementById("m0");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");

var screen = document.getElementById("element");
var myName = document.getElementById("myName");
var enName = document.getElementById("enName");
var myHealth = document.getElementById("myHealth");
var enHealth = document.getElementById("enHealth");

var p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, game;

var getEnStats = function(e) {
  for (var y = 0; y < mons.children.length; y++) {
    var d = mons.children[y].textContent.split(",");
    if (d[0].toLowerCase().localeCompare(e[0].toLowerCase()) == 0) {
      tar.innerHTML = "<img src=\"/static/icons/" + d[1] + ".png\">" + "<img src=\"/static/icons/" + d[4] + ".png\">";
      if (d[6] > 0) tar.innerHTML = tar.innerHTML + " <b>Power:</b> " + d[2] + " <b>Accuracy:</b> " + d[9] + " <b>PP:</b> " + d[3] + " | " + d[5].replace("$effect_chance", d[6]);
      else if (d[7] > 0)tar.innerHTML = tar.innerHTML + " <b>Power:</b> " + d[2] + " <b>Accuracy:</b> " + d[9] + " <b>PP:</b> " + d[3] + " | " + d[5].replace("$effect_chance", d[7]);
      else if (d[8] > 0)tar.innerHTML = tar.innerHTML + " <b>Power:</b> " + d[2] + " <b>Accuracy:</b> " + d[9] + " <b>PP:</b> " + d[3] + " | " + d[5].replace("$effect_chance", d[8]);
      else tar.innerHTML = tar.innerHTML + " <b>Power:</b> " + d[2] +" <b>Accuracy:</b> " + d[9] +  " <b>PP:</b> " + d[3] + " | " + d[5];
      break;
    }
  }
  return ;
};

function Pokemon(poke, abil, m1, m2, m3, m4, gend, hap, hp, atk, def, spa, spd, spe, b1, b2, b3, b4, b5, b6, i, b) {
  this.name = poke;
  this.ability = abil;
  this.move1 = m1;
  this.move2 = m2;
  this.move3 = m3;
  this.move4 = m4;
  // Do PP later!!!!
  this.gender = gend;
  this.happiness = hap;
  this.currentHP = 2 * parseInt(b1) + 141 + hp / 4;
  this.hpStat = this.currentHP;
  this.atkStat = 2 * parseInt(b2) + 36 + atk / 4;
  this.defStat = 2 * parseInt(b3) + 36 + def / 4;
  this.spaStat = 2 * parseInt(b4) + 36 + spa / 4;
  this.spdStat = 2 * parseInt(b5) + 36 + spd / 4;
  this.speStat = 2 * parseInt(b6) + 36 + spe / 4;
  this.status = "";
  this.sprite = [i, b]
  // EVS
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.spa = spa;
  this.spd = spd;
  this.spe = spe;
}

function Game(myCurr, enCurr, myTeam, enTeam) {
  this.weather=[]; //sun, rain, sand, hail
  this.weatherTurnsLeft=[];
  this.turn = 1;
  this.myCurr = myCurr;
  this.enCurr = enCurr;
  this.myTeam = myTeam;
  this.enTeam = enTeam;
}

var myTeam = [], enTeam = [];
var setup = function() {
  if (pokemon0) {p0 = new Pokemon(pList0[0].charAt(0).toUpperCase() + pList0[0].slice(1), pList0[1], pList0[2], pList0[3], pList0[4], pList0[5], pList0[6], pList0[7], pList0[8], pList0[9], pList0[10], pList0[11], pList0[12], pList0[13], pList0[14], pList0[15], pList0[16], pList0[17], pList0[18], pList0[19], pList0[20], pList0[21])};
  if (pokemon1) {p1 = new Pokemon(pList1[0].charAt(0).toUpperCase() + pList1[0].slice(1), pList1[1], pList1[2], pList1[3], pList1[4], pList1[5], pList1[6], pList1[7], pList1[8], pList1[9], pList1[10], pList1[11], pList1[12], pList1[13], pList1[14], pList1[15], pList1[16], pList1[17], pList1[18], pList1[19], pList1[20], pList1[21])};
  if (pokemon2) {p2 = new Pokemon(pList2[0].charAt(0).toUpperCase() + pList2[0].slice(1), pList2[1], pList2[2], pList2[3], pList2[4], pList2[5], pList2[6], pList2[7], pList2[8], pList2[9], pList2[10], pList2[11], pList2[12], pList2[13], pList2[14], pList2[15], pList2[16], pList2[17], pList2[18], pList2[19], pList2[20], pList2[21])};
  if (pokemon3) {p3 = new Pokemon(pList3[0].charAt(0).toUpperCase() + pList3[0].slice(1), pList3[1], pList3[2], pList3[3], pList3[4], pList3[5], pList3[6], pList3[7], pList3[8], pList3[9], pList3[10], pList3[11], pList3[12], pList3[13], pList3[14], pList3[15], pList3[16], pList3[17], pList3[18], pList3[19], pList3[20], pList3[21])};
  if (pokemon4) {p4 = new Pokemon(pList4[0].charAt(0).toUpperCase() + pList4[0].slice(1), pList4[1], pList4[2], pList4[3], pList4[4], pList4[5], pList4[6], pList4[7], pList4[8], pList4[9], pList4[10], pList4[11], pList4[12], pList4[13], pList4[14], pList4[15], pList4[16], pList4[17], pList4[18], pList4[19], pList4[20], pList4[21])};
  if (pokemon5) {p5 = new Pokemon(pList5[0].charAt(0).toUpperCase() + pList5[0].slice(1), pList5[1], pList5[2], pList5[3], pList5[4], pList5[5], pList5[6], pList5[7], pList5[8], pList5[9], pList5[10], pList5[11], pList5[12], pList5[13], pList5[14], pList5[15], pList5[16], pList5[17], pList5[18], pList5[19], pList5[20], pList5[21])};
  myTeam = [p0, p1, p2, p3, p4, p5];
  if (pokemon6) {p6 = new Pokemon(pList6[0], pList6[1], pList6[2], pList6[3], pList6[4], pList6[5], pList6[6], pList6[7], pList6[8], pList6[9], pList6[10], pList6[11], pList6[12], pList6[13], pList6[14], pList6[15], pList6[16], pList6[17], pList6[18], pList6[19], pList6[20], pList6[21])};
  if (pokemon7) {p7 = new Pokemon(pList7[0], pList7[1], pList7[2], pList7[3], pList7[4], pList7[5], pList7[6], pList7[7], pList7[8], pList7[9], pList7[10], pList7[11], pList7[12], pList7[13])};
  if (pokemon8) {p8 = new Pokemon(pList8[0], pList8[1], pList8[2], pList8[3], pList8[4], pList8[5], pList8[6], pList8[7], pList8[8], pList8[9], pList8[10], pList8[11], pList8[12], pList8[13])};
  if (pokemon9) {p9 = new Pokemon(pList9[0], pList9[1], pList9[2], pList9[3], pList9[4], pList9[5], pList9[6], pList9[7], pList9[8], pList9[9], pList9[10], pList9[11], pList9[12], pList9[13])};
  if (pokemon10) {p10 = new Pokemon(pList10[0], pList10[1], pList10[2], pList10[3], pList10[4], pList10[5], pList10[6], pList10[7], pList10[8], pList10[9], pList10[10], pList10[11], pList10[12], pList10[13])};
  if (pokemon11) {p11 = new Pokemon(pList11[0], pList11[1], pList11[2], pList11[3], pList11[4], pList11[5], pList11[6], pList11[7], pList11[8], pList11[9], pList11[10], pList11[11], pList11[12], pList11[13])};
  enTeam = [p6, p7, p8, p9, p10, p11];
  game = new Game(p0, p6, myTeam, enTeam);
  var img = document.createElement("img");
  img.src = p0.sprite[1];
  img.id="my";
  img.style="position:absolute; left: 5%; bottom: 7%; width: 35%;";
  screen.appendChild(img);
  var imgEN = document.createElement("img");
  imgEN.src = p0.sprite[0];
  imgEN.id="en";
  imgEN.style="position:absolute; right: 8%; top: 10%; width: 35%;";
  screen.appendChild(imgEN);
  myName.innerText = p0.name;
  myHealth.innerText = p0.currentHP + "/" + p0.hpStat;
  m0.innerText = p0.move1;
  m1.innerText = p0.move2;
  m2.innerText = p0.move3;
  m3.innerText = p0.move4;
  // one.className = "btn btn-light disabled";
  //one.innerText = p0.name;
  //two.innerText = p1.name;
  //tre.innerText = p2.name;
  //fou.innerText = p3.name;
  //fiv.innerText = p4.name;
  //six.innerText = p5.name;
};

setup();

myImg = document.getElementById("my");
enImg = document.getElementById("en");
var updateMyCurr = function(e) {
  game.myCurr = e;
  m0.innerText = e.move1;
  m1.innerText = e.move2;
  m2.innerText = e.move3;
  m3.innerText = e.move4;
  myName.innerText = e.name;
  myHealth.innerText = e.currentHP + "/" + e.hpStat;
  updateMyCanvas(e);
};
var updateMyCanvas = function(e) {
  myImg.src = e.sprite[1];
  console.log(e);
};


var update = function(e) {
  updateMyCurr(e);
};


// let health = document.getElementById("health")
// health.value -= 10;

console.log(base1);

m0.addEventListener("click", function(e){});
m1.addEventListener("click", function(e){});
m2.addEventListener("click", function(e){});
m3.addEventListener("click", function(e){});

one.addEventListener("click", function(e){update(p0)});
two.addEventListener("click", function(e){update(p1)});
tre.addEventListener("click", function(e){update(p2)});
fou.addEventListener("click", function(e){update(p3)});
fiv.addEventListener("click", function(e){update(p4)});
six.addEventListener("click", function(e){update(p5)});
