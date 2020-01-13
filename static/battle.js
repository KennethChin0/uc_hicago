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

var base1 = document.getElementById("base1");
var base2 = document.getElementById("base2");
var base3 = document.getElementById("base3");
var base4 = document.getElementById("base4");
var base5 = document.getElementById("base5");
var base6 = document.getElementById("base6");

var front = document.getElementById("front").children;
var back = document.getElementById("back").children;

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

var myImg = document.getElementById("my");
var enImg = document.getElementById("en");
var myHealthBar = document.getElementById("myHP");
var enHealthBar = document.getElementById("enHP");

var p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, game, streak = 0;
var s = document.getElementById("streak");

var getEnStats = function(e) {
  var out = [];
  // console.log(e);
  var monInfo = document.getElementById(e[0].substring(0, 1).toUpperCase() + e[0].substring(1, e[0].length).toLowerCase()).innerText.split(",");
  var f = monInfo[3];
  var b = monInfo[4];
  var type1 = monInfo[1];
  var type2 = monInfo[2];
  var b1 = monInfo[5];
  var b2 = monInfo[6];
  var b3 = monInfo[7];
  var b4 = monInfo[8];
  var b5 = monInfo[9];
  var b6 = monInfo[10];
  out.push(b1);
  out.push(b2);
  out.push(b3);
  out.push(b4);
  out.push(b5);
  out.push(b6);
  out.push(f);
  out.push(b);
  out.push(type1);
  out.push(type2);
  // console.log(out);
  return out;
};

var getMyTypes = function(e) {
  var out = [];
  var monInfo = document.getElementById(e[0].substring(0, 1).toUpperCase() + e[0].substring(1, e[0].length).toLowerCase()).innerText.split(",");
  var type1 = monInfo[1];
  var type2 = monInfo[2];
  out.push(type1);
  out.push(type2);
  // console.log(out);
  return out;
};

function Pokemon(poke, abil, m1, m2, m3, m4, gend, hap, hp, atk, def, spa, spd, spe, b1, b2, b3, b4, b5, b6, i, b, type1, type2) {
  this.name = poke;
  this.type = [type1, type2];
  this.ability = abil;
  this.move1;
  this.move2;
  this.move3;
  this.move4;
  var search = (m1.substring(0, 1).toUpperCase() + m1.substring(1).toLowerCase()).split(" ").join('-');
  while (search.includes("[")) {
    var a = search.indexOf("[");
    var b = search.indexOf("]");
    search = search.substring(0, a) + search.substring(b + 1);
    if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);
  }
  // console.log(this.name + ": " + m1 + " " + m2 + " " + m3 + " " + m4 + " ");
  // console.log("1: " + search);
  var moveInfo = document.getElementById(search).innerText.split(";");
  this.move1 = moveInfo;
  search = (m2.substring(0, 1).toUpperCase() + m2.substring(1).toLowerCase()).split(" ").join('-');
  while (search.includes("[")) {
    var a = search.indexOf("[");
    var b = search.indexOf("]");
    search = search.substring(0, a) + search.substring(b + 1);
    if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);
  }
  // console.log("2: " + search);
  moveInfo = document.getElementById(search).innerText.split(";");
  this.move2 = moveInfo;
  search = (m3.substring(0, 1).toUpperCase() + m3.substring(1).toLowerCase()).split(" ").join('-');
  while (search.includes("[")) {
    var a = search.indexOf("[");
    var b = search.indexOf("]");
    search = search.substring(0, a) + search.substring(b + 1);
    if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);
  }
  // console.log("3: " + search);
  moveInfo = document.getElementById(search).innerText.split(";");
  this.move3 = moveInfo;
  search = (m4.substring(0, 1).toUpperCase() + m4.substring(1).toLowerCase()).split(" ").join('-');
  while (search.includes("[")) {
    var a = search.indexOf("[");
    var b = search.indexOf("]");
    search = search.substring(0, a) + search.substring(b + 1);
    if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);
  }
  // console.log("4: " + search);
  moveInfo = document.getElementById(search).innerText.split(";");
  this.move4 = moveInfo;
  // console.log(this.name + ": " + this.move1 + " " + this.move2 + " " + this.move3 + " " + this.move4);
  // Do PP later!!!!
  this.gender = gend;
  this.happiness = hap;
  this.currentHP = 2 * parseInt(b1) + 141 + hp / 4;
  this.hpStat = this.currentHP;
  if (this.name.localeCompare("Shedinja") == 0) {
    this.currentHP = 1;
    this.hpStat = this.currentHP;
  }
  this.atkStat = 2 * parseInt(b2) + 36 + atk / 4;
  this.defStat = 2 * parseInt(b3) + 36 + def / 4;
  this.spaStat = 2 * parseInt(b4) + 36 + spa / 4;
  this.spdStat = 2 * parseInt(b5) + 36 + spd / 4;
  this.speStat = 2 * parseInt(b6) + 36 + spe / 4;
  this.atkMod = 1;
  this.defMod = 1;
  this.spaMod = 1;
  this.spdMod = 1;
  this.speMod = 1;
  this.accMod = 1;
  this.evaMod = 1;
  this.status = [];
  this.sprite = [i, b];
  this.priority = 0;
  this.critical = 1;
  // EVS
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.spa = spa;
  this.spd = spd;
  this.spe = spe;
  //---------------------------------------------------------------------------------------
  this.attack = function(name, target){
    // console.log("PEW");
    var d;
    if (name.localeCompare("Quick-attack") == 0) {
      d = this.calcDam(40, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      // console.log(target.currentHP);
    }
    else if (name.localeCompare("Thunderbolt") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      // console.log(d);
    }
    else if (name.localeCompare("Pound") == 0) {
      d = this.calcDam(40, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Karate-chop") == 0) {
      d = this.calcDam(50, this.atkStat, target, target.defStat * target.defMod, "normal", "fighting", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Double-slap") == 0) {
      d = this.calcDam(15, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Comet-punch") == 0) {
      d = this.calcDam(18, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Mega-punch") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Pay-day") == 0) {
      d = this.calcDam(40, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Fire-punch") == 0) {
      d = this.calcDam(75, this.atkStat, target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Ice-punch") == 0) {
      d = this.calcDam(75, this.atkStat, target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Thunder-punch") == 0) {
      d = this.calcDam(75, this.atkStat, target, target.defStat * target.defMod, "electric", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Scratch") == 0) {
      d = this.calcDam(40, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      console.log(target.currentHP);
    }
    else if (name.localeCompare("Vise-grip") == 0) {
      d = this.calcDam(55, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Razor-wind") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Cut") == 0) {
      d = this.calcDam(50, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fly") == 0) {
      d = this.calcDam(90, this.atkStat, target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Bind") == 0) {
      d = this.calcDam(15, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Slam") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Vine-whip") == 0) {
      d = this.calcDam(45, this.atkStat, target, target.defStat * target.defMod, "grass", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Stomp") == 0) {
      d = this.calcDam(65, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Double-kick") == 0) {
      d = this.calcDam(30, this.atkStat, target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Mega-kick") == 0) {
      d = this.calcDam(120, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Jump-kick") == 0) {
      d = this.calcDam(100, this.atkStat, target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Rolling-kick") == 0) {
      d = this.calcDam(60, this.atkStat, target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Headbutt") == 0) {
      d = this.calcDam(70, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Horn-attack") == 0) {
      d = this.calcDam(65, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fury-attack") == 0) {
      d = this.calcDam(15, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Tackle") == 0) {
      d = this.calcDam(40, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Body-slam") == 0) {
      d = this.calcDam(85, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Wrap") == 0) {
      d = this.calcDam(15, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Take-down") == 0) {
      d = this.calcDam(90, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Thrash") == 0) {
      d = this.calcDam(120, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Double-edge") == 0) {
      d = this.calcDam(120, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Poison-sting") == 0) {
      d = this.calcDam(15, this.atkStat, target, target.defStat * target.defMod, "poison", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Twineedle") == 0) {
      d = this.calcDam(25, this.atkStat, target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Pin-missile") == 0) {
      d = this.calcDam(25, this.atkStat, target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Bite") == 0) {
      d = this.calcDam(60, this.atkStat, target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Acid") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ember") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Flamethrower") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Water-gun") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hydro-pump") == 0) {
      d = this.calcDam(110, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Surf") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ice-beam") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Blizzard") == 0) {
      d = this.calcDam(110, this.spaStat, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Psybeam") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bubble-beam") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Aurora-beam") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hyper-beam") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Peck") == 0) {
      d = this.calcDam(35, this.atkStat, target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Drill-peck") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Submission") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Strength") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Absorb") == 0) {
      d = this.calcDam(20, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mega-drain") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Razor-leaf") == 0) {
      d = this.calcDam(55, this.atkStat, target, target.defStat * target.defMod, "grass", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Solar-beam") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Petal-dance") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fire-spin") == 0) {
      d = this.calcDam(35, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Thunder-shock") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Thunder") == 0) {
      d = this.calcDam(110, this.spaStat, target, target.spdStat * target.spdMod, "thunder", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-throw") == 0) {
      d = this.calcDam(50, this.atkStat, target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Earthquake") == 0) {
      d = this.calcDam(100, this.atkStat, target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Dig") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Confusion") == 0) {
      d = this.calcDam(50, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Psychic") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Quick-attack") == 0) {
      d = this.calcDam(40, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Rage") == 0) {
      d = this.calcDam(20, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Self-destruct") == 0) {
      d = this.calcDam(200, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Egg-bomb") == 0) {
      d = this.calcDam(100, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Lick") == 0) {
      d = this.calcDam(30, this.atkStat, target, target.defStat * target.defMod, "ghost", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Smog") == 0) {
      d = this.calcDam(30, this.spaStat, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sludge") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bone-club") == 0) {
      d = this.calcDam(65, this.atkStat, target, target.defStat * target.defMod, "ground", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fire-blast") == 0) {
      d = this.calcDam(110, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Waterfall") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "water", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Clamp") == 0) {
      d = this.calcDam(35, this.atkStat, target, target.defStat * target.defMod, "water", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Swift") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Skull-bash") == 0) {
      d = this.calcDam(130, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Spike-cannon") == 0) {
      d = this.calcDam(20, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Constrict") == 0) {
      d = this.calcDam(10, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("High-jump-kick") == 0) {
      d = this.calcDam(130, this.atkStat, target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Dream-eater") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Barrage") == 0) {
      d = this.calcDam(15, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Leech-life") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Sky-attack") == 0) {
      d = this.calcDam(140, this.atkStat, target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Bubble") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dizzy-punch") == 0) {
      d = this.calcDam(70, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Crabhammer") == 0) {
      d = this.calcDam(100, this.atkStat, target, target.defStat * target.defMod, "water", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Explosion") == 0) {
      d = this.calcDam(250, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fury-swipes") == 0) {
      d = this.calcDam(18, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Bonemerang") == 0) {
      d = this.calcDam(50, this.atkStat, target, target.defStat * target.defMod, "ground", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Rock-slide") == 0) {
      d = this.calcDam(75, this.atkStat, target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Hyper-fang") == 0) {
      d = this.calcDam(80, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Tri-attack") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Slash") == 0) {
      d = this.calcDam(70, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Struggle") == 0) {
      d = this.calcDam(50, this.atkStat, target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Triple-kick") == 0) {
      d = this.calcDam(10, this.atkStat, target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Thief") == 0) {
      d = this.calcDam(60, this.atkStat, target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Flame-wheel") == 0) {
      d = this.calcDam(60, this.atkStat, target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Snore") == 0) {
      d = this.calcDam(50, this.spaStat, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Aeroblast") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "flying", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Powder-snow") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mach-punch") == 0) {
      d = this.calcDam(40, this.atkStat, target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Feint-attack") == 0) {
      d = this.calcDam(60, this.atkStat, target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Sludge-bomb") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mud-slap") == 0) {
      d = this.calcDam(20, this.spaStat, target, target.spdStat * target.spdMod, "ground", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Octazooka") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Zap-cannon") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Icy-wind") == 0) {
      d = this.calcDam(55, this.spaStat, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bone-rush") == 0) {
      d = this.calcDam(25, this.atkStat, target, target.defStat * target.defMod, "ground", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Outrage") == 0) {
      d = this.calcDam(120, this.atkStat, target, target.defStat * target.defMod, "dragon", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Giga-drain") == 0) {
      d = this.calcDam(75, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rollout") == 0) {
      d = this.calcDam(30, this.spaStat, target, target.spdStat * target.spdMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("False-swipe") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "normal","physical" , 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Spark") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "electric", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fury-cutter") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Steel-wing") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sacred-fire") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dynamic-punch") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Megahorn") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dragon-breath") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "rock", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Pursuit") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rapid-spin") == 0) {
      d = this.calcDam(20, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Iron-tail") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Metal-Claw") == 0) {
      d = this.calcDam(50, this.spaStat, target, target.spdStat * target.spdMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Vital-throw") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hidden-power") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Cross-chop") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Crunch") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Extreme-speed") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ancient-power") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "rock", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Shadow-ball") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "ghost", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Future-sight") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-smash") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Whirlpool") == 0) {
      d = this.calcDam(35, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fake-out") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Uproar") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Heat-wave") == 0) {
      d = this.calcDam(95, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Facade") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Focus-punch") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "fighthing", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Smelling-salts") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Superpower") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Revenge") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Brick-break") == 0) {
      d = this.calcDam(75, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Knock-off") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Eruption") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Secret-power") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dive") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "water", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Arm-thrust") == 0) {
      d = this.calcDam(15, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Luster-purge") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mist-ball") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Blaze-kick") == 0) {
      d = this.calcDam(85, this.spaStat, target, target.spdStat * target.spdMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ice-ball") == 0) {
      d = this.calcDam(30, this.spaStat, target, target.spdStat * target.spdMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Needle-arm") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hyper-voice") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Poison-fang") == 0) {
      d = this.calcDam(50, this.spaStat, target, target.spdStat * target.spdMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Crush-claw") == 0) {
      d = this.calcDam(75, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Blast-burn") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hydro-cannon") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Meteor-mash") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Astonish") == 0) {
      d = this.calcDam(30, this.spaStat, target, target.spdStat * target.spdMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Weather-ball") == 0) {
      d = this.calcDam(50, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Air-cutter") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "flying", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Overheat") == 0) {
      d = this.calcDam(130, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-tomb") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Silver-wing") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "bug", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Water-spout") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Signal-beam") == 0) {
      d = this.calcDam(75, this.spaStat, target, target.spdStat * target.spdMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Shadow-punch") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Extrasensory") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sky-uppercut") == 0) {
      d = this.calcDam(85, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sand-tomb") == 0) {
      d = this.calcDam(35, this.spaStat, target, target.spdStat * target.spdMod, "ground", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Muddy-water") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bullet-seed") == 0) {
      d = this.calcDam(25, this.spaStat, target, target.spdStat * target.spdMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Aerial-ace") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "flying", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Icicle-spear") == 0) {
      d = this.calcDam(25, this.spaStat, target, target.spdStat * target.spdMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dragon-claw") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "dragon", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Frenzy-plant") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bounce") == 0) {
      d = this.calcDam(85, this.spaStat, target, target.spdStat * target.spdMod, "flying", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mud-shot") == 0) {
      d = this.calcDam(55, this.spaStat, target, target.spdStat * target.spdMod, "ground", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Poison-tail") == 0) {
      d = this.calcDam(50, this.spaStat, target, target.spdStat * target.spdMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Covet") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Volt-tackle") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "electric", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Magical-leaf") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Leaf-blade") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-blast") == 0) {
      d = this.calcDam(25, this.spaStat, target, target.spdStat * target.spdMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Shock-wave") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Water-pulse") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Doom-desire") == 0) {
      d = this.calcDam(140, this.spaStat, target, target.spdStat * target.spdMod, "steel", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Psycho-boost") == 0) {
      d = this.calcDam(140, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Wake-up-slap") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hammer-arm") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Brine") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Feint") == 0) {
      d = this.calcDam(30, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Pluck") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("U-turn") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Close-combat") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Payback") == 0) {
      d = this.calcDam(50, this.spaStat, target, target.spdStat * target.spdMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Assurance") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Last-resort") == 0) {
      d = this.calcDam(140, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sucker-punch") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Flare-blitz") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Force-palm") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sura-sphere") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Poison-jab") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dark-pulse") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "dark", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Night-slash") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Aqua-tail") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "water", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Seed-bomb") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Air-slash") == 0) {
      d = this.calcDam(75, this.spaStat, target, target.spdStat * target.spdMod, "flying", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("X-scissor") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bug-buzz") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "bug", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dragon-pulse") == 0) {
      d = this.calcDam(85, this.spaStat, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dragon-rush") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "dragon", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Power-gem") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "rock", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Drain-punch") == 0) {
      d = this.calcDam(75, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Vacuum-wave") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Focus-blast") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "fighting", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Energy-ball") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Brave-bird") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "flying", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Earth-power") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "ground", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Giga-impact") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bullet-punch") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Avalanche") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ice-shard") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Shadow-claw") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Thunder-fang") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "electric", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ice-fang") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fire-fang") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Shadow-sneak") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mud-bomb") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "ground", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Psycho-cut") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Zen-headbutt") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "psychic", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mirror-shot") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "steel", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Flash-cannon") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "steel", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-climb") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Draco-meteor") == 0) {
      d = this.calcDam(130, this.spaStat, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Discharge") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Lava-plume") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Leaf-storm") == 0) {
      d = this.calcDam(130, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Power-whip") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-wrecker") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Cross-poison") == 0) {
      d = this.calcDam(70, this.spaStat, target, target.spdStat * target.spdMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Gunk-shot") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Iron-head") == 0) {
      d = this.calcDam(80, this.spaStat, target, target.spdStat * target.spdMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Magnet-bomb") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Stone-edge") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Chatter") == 0) {
      d = this.calcDam(65, this.spaStat, target, target.spdStat * target.spdMod, "flying", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Judgment") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bug-bite") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Charge-beam") == 0) {
      d = this.calcDam(50, this.spaStat, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Wood-hammer") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Aqua-jet") == 0) {
      d = this.calcDam(40, this.spaStat, target, target.spdStat * target.spdMod, "water", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Attack-order") == 0) {
      d = this.calcDam(90, this.spaStat, target, target.spdStat * target.spdMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Head-smash") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Double-hit") == 0) {
      d = this.calcDam(35, this.spaStat, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Roar-of-time") == 0) {
      d = this.calcDam(150, this.spaStat, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Space-rend") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Magma-storm") == 0) {
      d = this.calcDam(100, this.spaStat, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Seed-flare") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ominous-wind") == 0) {
      d = this.calcDam(60, this.spaStat, target, target.spdStat * target.spdMod, "ghost", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Shadow-force") == 0) {
      d = this.calcDam(120, this.spaStat, target, target.spdStat * target.spdMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
  }
  this.calcDam = function(pow, stat, target, targetStat, type, cat, critRate) {
    var weather, crit, rand, stab, eff, burn, other;
    //weather
    if (type.localeCompare("water") == 0 && game.weather.includes("rain")) weather = 1.5;
    else if (type.localeCompare("fire") == 0 && game.weather.includes("sun")) weather = 1.5;
    else if (type.localeCompare("water") == 0 && game.weather.includes("sun")) weather = .5;
    else if (type.localeCompare("fire") == 0 && game.weather.includes("rain")) weather = .5;
    else weather = 1;
    //crit
    var prob = this.spe * this.critical * this.critRate / 512; //HCC = 4, with FE = 8
    var random_boolean = Math.random() < prob;
    if (random_boolean) crit = 2;
    else crit = 1;
    //rand
    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }
    rand = parseFloat(getRandomFloat(.85,1).toFixed(2));
    //stab
    if ((type.localeCompare(this.type[0]) == 0) || (type.localeCompare(this.type[1]) == 0)) stab = 1.5;
    else stab = 1;
    //effectiveness
    function effCalc(a1, d1, d2) {
      return ((typeEffectiveness[typeIndex(a1)][typeIndex(d1)] / 2) * (typeEffectiveness[typeIndex(a1)][typeIndex(d2)] / 2));
    }
    eff = effCalc(type, target.type[0], target.type[1]);
    //burn
    if (status.includes("burn") && (cat.localeCompare("physical") == 0) && (name.localeCompare("Facade") != 0)) burn = .5;
    else burn = 1;
    //other
    other = 1; //ATM WIP
    var mod = weather * crit * rand * stab * eff * burn * other;
    var dam = (((42 * pow * stat / targetStat) / 50) + 2) * mod;
    return dam;
  }
};

function Game(myCurr, enCurr, myTeam, enTeam) {
  this.weather=[]; //sun, rain, sand, hail
  this.weatherTurnsLeft=[];
  this.myHazards=[];
  this.enHazards=[];
  this.turn = 1;
  this.myCurr = myCurr;
  this.enCurr = enCurr;
  this.myTeam = myTeam;
  this.enTeam = enTeam;
}

var myTeam = [], enTeam = [];
var setup = function() {
  pokemon0 = document.getElementById('0');
  pokemon1 = document.getElementById('1');
  pokemon2 = document.getElementById('2');
  pokemon3 = document.getElementById('3');
  pokemon4 = document.getElementById('4');
  pokemon5 = document.getElementById('5');

  pokemon6 = document.getElementById('6');
  pokemon7 = document.getElementById('7');
  pokemon8 = document.getElementById('8');
  pokemon9 = document.getElementById('9');
  pokemon10 = document.getElementById('10');
  pokemon11 = document.getElementById('11');

  base1 = document.getElementById("base1");
  base2 = document.getElementById("base2");
  base3 = document.getElementById("base3");
  base4 = document.getElementById("base4");
  base5 = document.getElementById("base5");
  base6 = document.getElementById("base6");

  front = document.getElementById("front").children;
  back = document.getElementById("back").children;

  one = document.getElementById("one");
  two = document.getElementById("two");
  tre = document.getElementById("tre");
  fou = document.getElementById("for");
  fiv = document.getElementById("fiv");
  six = document.getElementById("six");

  m0 = document.getElementById("m0");
  m1 = document.getElementById("m1");
  m2 = document.getElementById("m2");
  m3 = document.getElementById("m3");

  // var screen = document.getElementById("element");
  // var myName = document.getElementById("myName");
  // var enName = document.getElementById("enName");
  // var myHealth = document.getElementById("myHealth");
  // var enHealth = document.getElementById("enHealth");

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

  pList0 = pList0.concat(getMyTypes(pList0));
  pList1 = pList1.concat(getMyTypes(pList1));
  pList2 = pList2.concat(getMyTypes(pList2));
  pList3 = pList3.concat(getMyTypes(pList3));
  pList4 = pList4.concat(getMyTypes(pList4));
  pList5 = pList5.concat(getMyTypes(pList5));

  pList6 = pList6.concat(getEnStats(pList6));
  pList7 = pList7.concat(getEnStats(pList7));
  pList8 = pList8.concat(getEnStats(pList8));
  pList9 = pList9.concat(getEnStats(pList9));
  pList10 = pList10.concat(getEnStats(pList10));
  pList11 = pList11.concat(getEnStats(pList11));

  if (pokemon0) {p0 = new Pokemon(pList0[0].charAt(0).toUpperCase() + pList0[0].slice(1), pList0[1], pList0[2], pList0[3], pList0[4], pList0[5], pList0[6], pList0[7], pList0[8], pList0[9], pList0[10], pList0[11], pList0[12], pList0[13], pList0[14], pList0[15], pList0[16], pList0[17], pList0[18], pList0[19], pList0[20], pList0[21], pList0[22], pList0[23])};
  if (pokemon1) {p1 = new Pokemon(pList1[0].charAt(0).toUpperCase() + pList1[0].slice(1), pList1[1], pList1[2], pList1[3], pList1[4], pList1[5], pList1[6], pList1[7], pList1[8], pList1[9], pList1[10], pList1[11], pList1[12], pList1[13], pList1[14], pList1[15], pList1[16], pList1[17], pList1[18], pList1[19], pList1[20], pList1[21], pList1[22], pList1[23])};
  if (pokemon2) {p2 = new Pokemon(pList2[0].charAt(0).toUpperCase() + pList2[0].slice(1), pList2[1], pList2[2], pList2[3], pList2[4], pList2[5], pList2[6], pList2[7], pList2[8], pList2[9], pList2[10], pList2[11], pList2[12], pList2[13], pList2[14], pList2[15], pList2[16], pList2[17], pList2[18], pList2[19], pList2[20], pList2[21], pList2[22], pList2[23])};
  if (pokemon3) {p3 = new Pokemon(pList3[0].charAt(0).toUpperCase() + pList3[0].slice(1), pList3[1], pList3[2], pList3[3], pList3[4], pList3[5], pList3[6], pList3[7], pList3[8], pList3[9], pList3[10], pList3[11], pList3[12], pList3[13], pList3[14], pList3[15], pList3[16], pList3[17], pList3[18], pList3[19], pList3[20], pList3[21], pList3[22], pList3[23])};
  if (pokemon4) {p4 = new Pokemon(pList4[0].charAt(0).toUpperCase() + pList4[0].slice(1), pList4[1], pList4[2], pList4[3], pList4[4], pList4[5], pList4[6], pList4[7], pList4[8], pList4[9], pList4[10], pList4[11], pList4[12], pList4[13], pList4[14], pList4[15], pList4[16], pList4[17], pList4[18], pList4[19], pList4[20], pList4[21], pList4[22], pList4[23])};
  if (pokemon5) {p5 = new Pokemon(pList5[0].charAt(0).toUpperCase() + pList5[0].slice(1), pList5[1], pList5[2], pList5[3], pList5[4], pList5[5], pList5[6], pList5[7], pList5[8], pList5[9], pList5[10], pList5[11], pList5[12], pList5[13], pList5[14], pList5[15], pList5[16], pList5[17], pList5[18], pList5[19], pList5[20], pList5[21], pList5[22], pList5[23])};
  myTeam = [p0, p1, p2, p3, p4, p5];
  if (pokemon6) {p6 = new Pokemon(pList6[0], pList6[1], pList6[2], pList6[3], pList6[4], pList6[5], pList6[6], pList6[7], pList6[8], pList6[9], pList6[10], pList6[11], pList6[12], pList6[13], pList6[14], pList6[15], pList6[16], pList6[17], pList6[18], pList6[19], pList6[20], pList6[21], pList6[22], pList6[23])};
  if (pokemon7) {p7 = new Pokemon(pList7[0], pList7[1], pList7[2], pList7[3], pList7[4], pList7[5], pList7[6], pList7[7], pList7[8], pList7[9], pList7[10], pList7[11], pList7[12], pList7[13], pList7[14], pList7[15], pList7[16], pList7[17], pList7[18], pList7[19], pList7[20], pList7[21], pList7[22], pList7[23])};
  if (pokemon8) {p8 = new Pokemon(pList8[0], pList8[1], pList8[2], pList8[3], pList8[4], pList8[5], pList8[6], pList8[7], pList8[8], pList8[9], pList8[10], pList8[11], pList8[12], pList8[13], pList8[14], pList8[15], pList8[16], pList8[17], pList8[18], pList8[19], pList8[20], pList8[21], pList8[22], pList8[23])};
  if (pokemon9) {p9 = new Pokemon(pList9[0], pList9[1], pList9[2], pList9[3], pList9[4], pList9[5], pList9[6], pList9[7], pList9[8], pList9[9], pList9[10], pList9[11], pList9[12], pList9[13], pList9[14], pList9[15], pList9[16], pList9[17], pList9[18], pList9[19], pList9[20], pList9[21], pList9[22], pList9[23])};
  if (pokemon10) {p10 = new Pokemon(pList10[0], pList10[1], pList10[2], pList10[3], pList10[4], pList10[5], pList10[6], pList10[7], pList10[8], pList10[9], pList10[10], pList10[11], pList10[12], pList10[13], pList10[14], pList10[15], pList10[16], pList10[17], pList10[18], pList10[19], pList10[20], pList10[21], pList10[22], pList10[23])};
  if (pokemon11) {p11 = new Pokemon(pList11[0], pList11[1], pList11[2], pList11[3], pList11[4], pList11[5], pList11[6], pList11[7], pList11[8], pList11[9], pList11[10], pList11[11], pList11[12], pList11[13], pList11[14], pList11[15], pList11[16], pList11[17], pList11[18], pList11[19], pList11[20], pList11[21], pList11[22], pList11[23])};
  enTeam = [p6, p7, p8, p9, p10, p11];
  game = new Game(p0, p6, myTeam, enTeam);
  console.log(game);
  var img = document.createElement("img");
  img.src = p0.sprite[1];
  img.id="my";
  img.style="position:absolute; left: 5%; bottom: 7%; width: 35%;";
  screen.appendChild(img);
  var imgEN = document.createElement("img");
  imgEN.src = p6.sprite[0];
  imgEN.id="en";
  imgEN.style="position:absolute; right: 8%; top: 10%; width: 35%;";
  screen.appendChild(imgEN);
  myName.innerText = p0.name;
  myHealth.innerText = p0.currentHP + "/" + p0.hpStat;
  enName.innerText = p6.name;
  enHealth.innerText = p6.currentHP + "/" + p6.hpStat;
  m0.innerText = p0.move1[0];
  m1.innerText = p0.move2[0];
  m2.innerText = p0.move3[0];
  m3.innerText = p0.move4[0];
  myImg = document.getElementById("my");
  enImg = document.getElementById("en");
  myHealthBar = document.getElementById("myHP");
  enHealthBar = document.getElementById("enHP");
};

setup();

var updateMyCurr = function(e) {
  game.myCurr = e;
  m0.innerText = e.move1[0];
  m1.innerText = e.move2[0];
  m2.innerText = e.move3[0];
  m3.innerText = e.move4[0];
  myName.innerText = e.name;
  myHealth.innerText = e.currentHP + "/" + e.hpStat;
  updateMyCanvas(e);
};
var updateMyCanvas = function(e) {
  myImg.src = e.sprite[1];
};

var updateEnCurr = function(e) {
  console.log(e);
  game.enCurr = e;
  enName.innerText = e.name;
  enHealth.innerText = e.currentHP + "/" + e.hpStat;
  // console.log(e);
  updateEnCanvas(e);
};
var updateEnCanvas = function(e) {
  enImg.src = e.sprite[0];
};

var clearCanvas = function(e) {
  while (screen.childElementCount > 0) {
    screen.removeChild(screen.children[0]);
  }
};

var updateHealthBar = function(e, hb) {
  hb.style = "background-color:limegreen; width:" + Math.round(100 * e.currentHP / e.hpStat) + "%;";
};

var typeEffectiveness = [
[2,2,2,2,2,1,2,0,1,2,2,2,2,2,2,2,2,2,2],
[4,2,1,1,2,4,1,0,4,2,2,2,2,1,4,2,4,1,2],
[2,4,2,2,2,1,4,2,1,2,2,4,1,2,2,2,2,2,2],
[2,2,2,1,1,1,2,1,0,2,2,4,2,2,2,2,2,4,2],
[2,2,0,4,2,4,1,2,4,4,2,1,4,2,2,2,2,2,2],
[2,1,4,2,1,2,4,2,1,4,2,2,2,2,4,2,2,2,2],
[2,1,1,1,2,2,2,1,1,1,2,4,2,4,2,2,4,1,2],
[0,2,2,2,2,2,2,4,2,2,2,2,2,4,2,2,1,2,2],
[2,2,2,2,2,4,2,2,1,1,1,2,1,2,4,2,2,4,2],
[2,2,2,2,2,1,4,2,4,1,1,4,2,2,4,1,2,2,2],
[2,2,2,2,4,4,2,2,2,4,1,1,2,2,2,1,2,2,2],
[2,2,1,1,4,4,1,2,1,1,4,1,2,2,2,1,2,2,2],
[2,2,4,2,0,2,2,2,2,2,4,1,1,2,2,1,2,2,2],
[2,4,2,4,2,2,2,2,1,2,2,2,2,1,2,2,0,2,2],
[2,2,4,2,4,2,2,2,1,1,1,4,2,2,1,4,2,2,2],
[2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,4,2,0,2],
[2,1,2,2,2,2,2,4,2,2,2,2,2,4,2,2,1,1,2],
[2,4,2,1,2,2,2,2,1,1,2,2,2,2,2,4,4,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
var calculateDanger = function(a1, a2, d1, d2) { //0-8
  return ((typeEffectiveness[typeIndex(a1)][typeIndex(d1)] / 2) * (typeEffectiveness[typeIndex(a2)][typeIndex(d1)] / 2)) * ((typeEffectiveness[typeIndex(a1)][typeIndex(d2)] / 2) * (typeEffectiveness[typeIndex(a2)][typeIndex(d2)] / 2));
}
var typeIndex = function(t) {
  switch(t) {
    case "normal": return 0;
    case "fighting": return 1;
    case "flying": return 2;
    case "poison": return 3;
    case "ground": return 4;
    case "rock": return 5;
    case "bug": return 6;
    case "ghost": return 7;
    case "steel": return 8;
    case "fire": return 9;
    case "water": return 10;
    case "grass": return 11;
    case "electric": return 12;
    case "psychic": return 13;
    case "ice": return 14;
    case "dragon": return 15;
    case "dark": return 16;
    case "fairy": return 17;
    default: return 18;
  }
}

function checkTeam(t) {
  var alive = false;
  for (var x = 0; x < t.length; x++) {
    if (t[x].currentHP > 0) {
      alive = true;
      break;
    }
  }
  return alive;
}

var g = document.getElementById("bot").children;
var generateTeam = function(w){
  gen = [];
  info = [];
  for (var x = 0; x < 6; x++) {
    var p = g[Math.floor(Math.random()*g.length)];
    while (gen.includes(p)) p = g[Math.floor(Math.random()*g.length)];
    gen.push(p);
  }
  console.log(gen);

  for (var x = 0; x < 6; x++) {
    temp = [];
    var list = gen[x].innerHTML.split("\n");
    // console.log(list);
    var poke = list[0];
    var ability = list[1].split("Ability: ")[1].trim().split("/")[Math.floor(Math.random()*list[1].split("Ability: ")[1].trim().split("/").length)].trim();
    var mo0 = list[2].split(/-(.+)/)[1].trim().split("/")[Math.floor(Math.random()*list[2].split(/-(.+)/)[1].trim().split("/").length)].trim();
    var mo1 = list[3].split(/-(.+)/)[1].trim().split("/")[Math.floor(Math.random()*list[3].split(/-(.+)/)[1].trim().split("/").length)].trim();
    var mo2 = list[4].split(/-(.+)/)[1].trim().split("/")[Math.floor(Math.random()*list[4].split(/-(.+)/)[1].trim().split("/").length)].trim();
    var mo3 = list[5].split(/-(.+)/)[1].trim().split("/")[Math.floor(Math.random()*list[5].split(/-(.+)/)[1].trim().split("/").length)].trim();
    var gend = ["male", "female"][Math.floor(Math.random()*["male", "female"].length)];
    var hap = 255;
    var po0 = w;
    var po1 = w;
    var po2 = w;
    var po3 = w;
    var po4 = w;
    var po5 = w;
    temp.push(poke);
    temp.push(ability);
    temp.push(mo0);
    temp.push(mo1);
    temp.push(mo2);
    temp.push(mo3);
    temp.push(gend);
    temp.push(hap);
    temp.push(po0);
    temp.push(po1);
    temp.push(po2);
    temp.push(po3);
    temp.push(po4);
    temp.push(po5);
    info.push(temp);
  }
  pokemon6.innerText = info[0].join(",");
  pokemon7.innerText = info[1].join(",");
  pokemon8.innerText = info[2].join(",");
  pokemon9.innerText = info[3].join(",");
  pokemon10.innerText = info[4].join(",");
  pokemon11.innerText = info[5].join(",");
}

var update = function(e) {
  var enOptions = [game.enCurr.move1, game.enCurr.move2, game.enCurr.move3, game.enCurr.move4]; //[m1, m2, m3, m4, enTeam[0], enTeam[1], enTeam[2], enTeam[3], enTeam[4], enTeam[5]]
  if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
  if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
  if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
  if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
  if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
  if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
//id|name|type|power|pp|priority|class|category|desc|ailment|ailChance|statChanges|
//critRate|drain|flinch|healing|statChance|minTurns|maxTurns|minHits|maxHits|accuracy
  var factor = [];
  var multiplier = 1.1;
  for (var i = 0; i < enOptions.length; i++) {
    if (i < 4) {
      // console.log();
      factor.push(calculateDanger(enOptions[i][1], "None", game.myCurr.type[0], game.myCurr.type[1]) * multiplier);
    }
    else {
      if (1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], game.enCurr.type[0], game.enCurr.type[1]) >= 2) break;
      else if (enOptions[i] == game.enCurr) factor.push(0);
      else factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
    }
  }
  var max = factor.indexOf(Math.max(...factor));
  var swap = false;
  if (max > 3) swap = true;
  // console.log(enTeam);
  // console.log(factor);
  if (game.myCurr.speStat > game.enCurr.speStat) {
    var mySmack = true;
    var enSmack = true;
    if (e instanceof Pokemon) {
      updateMyCurr(e);
      mySmack = false;
    }
    if (swap) {
      updateEnCurr(enOptions[max]);
      enSmack = false;
    } //Check for swap
    if (mySmack) game.myCurr.attack(e.innerText, game.enCurr);
    if (game.enCurr.currentHP > 0) {
      if (enSmack) game.enCurr.attack(enOptions[max][0], game.myCurr);
    }
    else {
      enOptions = [];
      if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
      if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
      if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
      if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
      if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
      if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
      factor = [];
      for (var i = 0; i < enOptions.length; i++) {
          factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
      }
      max = factor.indexOf(Math.max(...factor));
      if (!checkTeam(enTeam)) {
        streak++;
        clearCanvas();
        generateTeam(84);
        setup();
        s.innerText = "Streak: " + streak;
        return;
      }
      console.log("max: " + max + ", " + enOptions[max]);
      console.log(enOptions);
      updateEnCurr(enOptions[max]);
    }
  }
  else if (game.myCurr.speStat < game.enCurr.speStat) {
    var mySmack = true;
    var enSmack = true;
    if (swap) {
      updateEnCurr(enOptions[max]);
      enSmack = false;
    }
    if (e instanceof Pokemon) {
      updateMyCurr(e);
      mySmack = false;
    }
    if (enSmack) game.enCurr.attack(enOptions[max][0], game.myCurr);
    if (mySmack) game.myCurr.attack(e.innerText, game.enCurr);
    if (game.enCurr.currentHP <= 0) {
      enOptions = [];
      if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
      if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
      if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
      if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
      if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
      if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
      factor = [];
      for (var i = 0; i < enOptions.length; i++) {
          factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
      }
      max = factor.indexOf(Math.max(...factor));
      if (!checkTeam(enTeam)) {
        streak++;
        clearCanvas();
        generateTeam(84);
        setup();
        s.innerText = "Streak: " + streak;
        return;
      }
      console.log("max: " + max + ", " + enOptions[max]);
      updateEnCurr(enOptions[max]);
    }
  }
  else { //tied speed
    var random_boolean = Math.random() >= 0.5;
    if (random_boolean) {
      var mySmack = true;
      var enSmack = true;
      if (e instanceof Pokemon) {
        updateMyCurr(e);
        mySmack = false;
      }
      if (swap) {
        updateEnCurr(enOptions[max]);
        enSmack = false;
      } //Check for swap
      if (mySmack) game.myCurr.attack(e.innerText, game.enCurr);
      if (game.enCurr.currentHP > 0) {
        if (enSmack) game.enCurr.attack(enOptions[max][0], game.myCurr);
      }
      else {
        enOptions = [];
        if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
        if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
        if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
        if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
        if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
        if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
        factor = [];
        for (var i = 0; i < enOptions.length; i++) {
            factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
        }
        max = factor.indexOf(Math.max(...factor));
        if (!checkTeam(enTeam)) {
          streak++;
          clearCanvas();
          generateTeam(84);
          setup();
          s.innerText = "Streak: " + streak;
          return;
        }
        console.log("max: " + max + ", " + enOptions[max]);
        updateEnCurr(enOptions[max]);
      }
    }
    else {
      var mySmack = true;
      var enSmack = true;
      if (swap) {
        updateEnCurr(enOptions[max]);
        enSmack = false;
      }
      if (e instanceof Pokemon) {
        updateMyCurr(e);
        mySmack = false;
      }
      if (enSmack) game.enCurr.attack(enOptions[max][0], game.myCurr);
      if (mySmack) game.myCurr.attack(e.innerText, game.enCurr);
      if (game.enCurr.currentHP <= 0) {
        enOptions = [];
        if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
        if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
        if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
        if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
        if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
        if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
        factor = [];
        for (var i = 0; i < enOptions.length; i++) {
            factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
        }
        max = factor.indexOf(Math.max(...factor));
        if (!checkTeam(enTeam)) {
          streak++;
          clearCanvas();
          generateTeam(84);
          setup();
          s.innerText = "Streak: " + streak;
          return;
        }
        console.log("max: " + max + ", " + enOptions[max]);
        updateEnCurr(enOptions[max]);
      }
    }
  }
  updateMyCurr(game.myCurr);
  updateEnCurr(game.enCurr);
  updateHealthBar(game.myCurr, myHealthBar);
  updateHealthBar(game.enCurr, enHealthBar);
};


m0.addEventListener("click", function(e){update(this)});
m1.addEventListener("click", function(e){update(this)});
m2.addEventListener("click", function(e){update(this)});
m3.addEventListener("click", function(e){update(this)});

one.addEventListener("click", function(e){update(p0)});
two.addEventListener("click", function(e){update(p1)});
tre.addEventListener("click", function(e){update(p2)});
fou.addEventListener("click", function(e){update(p3)});
fiv.addEventListener("click", function(e){update(p4)});
six.addEventListener("click", function(e){update(p5)});

s.innerText = "Streak: " + streak;
