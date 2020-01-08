var list = document.getElementById('mons');
var moveList = document.getElementById('moves');
var pokemon0 = document.getElementById('0');
var pokemon1 = document.getElementById('1');
var pokemon2 = document.getElementById('2');
var pokemon3 = document.getElementById('3');
var pokemon4 = document.getElementById('4');
var pokemon5 = document.getElementById('5');

function Pokemon(poke, abil, m1, m2, m3, m4, gend, hap, hp, atk, def, spa, spd, spe) {
  this.name = poke;
  this.ability = abil;
  this.move1 = m1;
  this.move2 = m2;
  this.move3 = m3;
  this.move4 = m4;
  this.gender = gend;
  this.happiness = hap;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.spa = spa;
  this.spd = spd;
  this.spe = spe;
}
var myTeam = [];
var init = function() {
  if (pokemon0) let p0 = new Pokemon();
}
