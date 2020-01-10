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

var screen = document.getElementById("element");

var p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11;

function Pokemon(poke, abil, m1, m2, m3, m4, gend, hap, hp, atk, def, spa, spd, spe) {
  this.name = poke;
  this.ability = abil;
  this.move1 = m1;
  this.move2 = m2;
  this.move3 = m3;
  this.move4 = m4;
  // Do PP later!!!!
  this.gender = gend;
  this.happiness = hap;
  this.currentHP;
  this.hpStat, this.atkStat, this.defStat, this.spaStat, this.spdStat, this.speStat;
  this.status = "";
  this.sprite = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png"]
  // EVS
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.spa = spa;
  this.spd = spd;
  this.spe = spe;
}

var myTeam = [];
var setup = function() {
  if (pokemon0) {p0 = new Pokemon(pList0[0], pList0[1], pList0[2], pList0[3], pList0[4], pList0[5], pList0[6], pList0[7], pList0[8], pList0[9], pList0[10], pList0[11], pList0[12], pList0[13])};
  if (pokemon1) {p1 = new Pokemon(pList1[0], pList1[1], pList1[2], pList1[3], pList1[4], pList1[5], pList1[6], pList1[7], pList1[8], pList1[9], pList1[10], pList1[11], pList1[12], pList1[13])};
  if (pokemon2) {p2 = new Pokemon(pList2[0], pList2[1], pList2[2], pList2[3], pList2[4], pList2[5], pList2[6], pList2[7], pList2[8], pList2[9], pList2[10], pList2[11], pList2[12], pList2[13])};
  if (pokemon3) {p3 = new Pokemon(pList3[0], pList3[1], pList3[2], pList3[3], pList3[4], pList3[5], pList3[6], pList3[7], pList3[8], pList3[9], pList3[10], pList3[11], pList3[12], pList3[13])};
  if (pokemon4) {p4 = new Pokemon(pList4[0], pList4[1], pList4[2], pList4[3], pList4[4], pList4[5], pList4[6], pList4[7], pList4[8], pList4[9], pList4[10], pList4[11], pList4[12], pList4[13])};
  if (pokemon5) {p5 = new Pokemon(pList5[0], pList5[1], pList5[2], pList5[3], pList5[4], pList5[5], pList5[6], pList5[7], pList5[8], pList5[9], pList5[10], pList5[11], pList5[12], pList5[13])};
  if (pokemon6) {p6 = new Pokemon(pList6[0], pList6[1], pList6[2], pList6[3], pList6[4], pList6[5], pList6[6], pList6[7], pList6[8], pList6[9], pList6[10], pList6[11], pList6[12], pList6[13])};
  if (pokemon7) {p7 = new Pokemon(pList7[0], pList7[1], pList7[2], pList7[3], pList7[4], pList7[5], pList7[6], pList7[7], pList7[8], pList7[9], pList7[10], pList7[11], pList7[12], pList7[13])};
  if (pokemon8) {p8 = new Pokemon(pList8[0], pList8[1], pList8[2], pList8[3], pList8[4], pList8[5], pList8[6], pList8[7], pList8[8], pList8[9], pList8[10], pList8[11], pList8[12], pList8[13])};
  if (pokemon9) {p9 = new Pokemon(pList9[0], pList9[1], pList9[2], pList9[3], pList9[4], pList9[5], pList9[6], pList9[7], pList9[8], pList9[9], pList9[10], pList9[11], pList9[12], pList9[13])};
  if (pokemon10) {p10 = new Pokemon(pList10[0], pList10[1], pList10[2], pList10[3], pList10[4], pList10[5], pList10[6], pList10[7], pList10[8], pList10[9], pList10[10], pList10[11], pList10[12], pList10[13])};
  if (pokemon11) {p11 = new Pokemon(pList11[0], pList11[1], pList11[2], pList11[3], pList11[4], pList11[5], pList11[6], pList11[7], pList11[8], pList11[9], pList11[10], pList11[11], pList11[12], pList11[13])};
  var img = document.createElement("img");
  img.src = p0.sprite;
  img.id="my";
  img.style="position:absolute; left: 3%; bottom: 5%; width: 35%;";
  screen.appendChild(img);
  var imgEN = document.createElement("img");
  imgEN.src = p0.sprite;
  imgEN.id="en";
  imgEN.style="position:absolute; right: 7%; top: 10%; width: 35%;";
  screen.appendChild(imgEN);
};

setup();
console.log(p0);
