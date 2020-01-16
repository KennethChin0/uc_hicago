let list = document.getElementById('mons');
let moveList = document.getElementById('moves');
let newGame = document.getElementById('newGame');

let fourMoves =  document.getElementsByClassName("moves")[0];
let sixMons =  document.getElementsByClassName("team")[0];

let pokemon0 = document.getElementById('0');
let pokemon1 = document.getElementById('1');
let pokemon2 = document.getElementById('2');
let pokemon3 = document.getElementById('3');
let pokemon4 = document.getElementById('4');
let pokemon5 = document.getElementById('5');

let pokemon6 = document.getElementById('6');
let pokemon7 = document.getElementById('7');
let pokemon8 = document.getElementById('8');
let pokemon9 = document.getElementById('9');
let pokemon10 = document.getElementById('10');
let pokemon11 = document.getElementById('11');

let base1 = document.getElementById("base1");
let base2 = document.getElementById("base2");
let base3 = document.getElementById("base3");
let base4 = document.getElementById("base4");
let base5 = document.getElementById("base5");
let base6 = document.getElementById("base6");

let front = document.getElementById("front").children;
let back = document.getElementById("back").children;

let one = document.getElementById("one");
let two = document.getElementById("two");
let tre = document.getElementById("tre");
let fou = document.getElementById("for");
let fiv = document.getElementById("fiv");
let six = document.getElementById("six");

let m0 = document.getElementById("m0");
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");

let screen = document.getElementById("element");
let myName = document.getElementById("myName");
let enName = document.getElementById("enName");
let myHealth = document.getElementById("myHealth");
let enHealth = document.getElementById("enHealth");

let myImg = document.getElementById("my");
let enImg = document.getElementById("en");
let myHealthBar = document.getElementById("myHP");
let enHealthBar = document.getElementById("enHP");

let p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, game, streak = 0;
let t1, t2, t3, t4, t5, t6, tm1, tm2, tm3, tm4;
let s = document.getElementById("streak");
let log = document.getElementById("log");

let getEnStats = function(e) {
  let out = [];
  // console.log(e);
  let monInfo = document.getElementById(e[0].substring(0, 1).toUpperCase() + e[0].substring(1, e[0].length).toLowerCase()).innerText.split(",");
  let f = monInfo[3];
  let b = monInfo[4];
  let type1 = monInfo[1];
  let type2 = monInfo[2];
  let b1 = monInfo[5];
  let b2 = monInfo[6];
  let b3 = monInfo[7];
  let b4 = monInfo[8];
  let b5 = monInfo[9];
  let b6 = monInfo[10];
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

let getMyTypes = function(e) {
  let out = [];
  let monInfo = document.getElementById(e[0].substring(0, 1).toUpperCase() + e[0].substring(1, e[0].length).toLowerCase()).innerText.split(",");
  let type1 = monInfo[1];
  let type2 = monInfo[2];
  out.push(type1);
  out.push(type2);
  // console.log(out);
  return out;
};

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function endGame() {
  while (fourMoves.childElementCount > 0) {
    fourMoves.removeChild(fourMoves.children[0]);
  }
  while (sixMons.childElementCount > 0) {
    sixMons.removeChild(sixMons.children[0]);
  }
  let b = document.createElement("button");
  b.innerText = "Go back!";
  b.className = "btn btn-primary";
  b.type = "button";
  b.style = "position:absolute; left:50%; top:35%; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);";
  b.addEventListener('click', function(e){location.replace("http://127.0.0.1:5000/chooseteam")});
  newGame.appendChild(b);
  return;
}

function Pokemon(poke, abil, m1, m2, m3, m4, gend, hap, hp, atk, def, spa, spd, spe, b1, b2, b3, b4, b5, b6, i, b, type1, type2) {
  this.name = poke;
  this.type = [type1, type2];
  this.ability = abil;
  this.move1;
  this.move2;
  this.move3;
  this.move4;
  let search = (m1.substring(0, 1).toUpperCase() + m1.substring(1).toLowerCase()).split(" ").join('-');
  if (search.length == 0 || search.trim().length == 0) this.move1 = null;
  else {
    while (search.includes("[")) {
      let a = search.indexOf("[");
      let b = search.indexOf("]");
      search = search.substring(0, a) + search.substring(b + 1);
      if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);
    }
    // console.log(this.name + ": " + m1 + " " + m2 + " " + m3 + " " + m4 + " ");
    // console.log("1: " + search);
    let moveInfo = document.getElementById(search).innerText.split(";");
    this.move1 = moveInfo;
  }
  search = (m2.substring(0, 1).toUpperCase() + m2.substring(1).toLowerCase()).split(" ").join('-');
  if (search.length == 0 || search.trim().length == 0) this.move2 = null;
  else {
    while (search.includes("[")) {
      let a = search.indexOf("[");
      let b = search.indexOf("]");
      search = search.substring(0, a) + search.substring(b + 1);
      if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);
    }
    // console.log("2: " + search);
    moveInfo = document.getElementById(search).innerText.split(";");
    this.move2 = moveInfo;
  }
  search = (m3.substring(0, 1).toUpperCase() + m3.substring(1).toLowerCase()).split(" ").join('-');
  if (search.length == 0 || search.trim().length == 0) this.move3 = null;
  else {
    while (search.includes("[")) {
      let a = search.indexOf("[");
      let b = search.indexOf("]");
      search = search.substring(0, a) + search.substring(b + 1);
      if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);
    }
    // console.log("3: " + search);
    moveInfo = document.getElementById(search).innerText.split(";");
    this.move3 = moveInfo;
  }
  search = (m4.substring(0, 1).toUpperCase() + m4.substring(1).toLowerCase()).split(" ").join('-');
  if (search.length == 0 || search.trim().length == 0) this.move4 = null;
  else {
    while (search.includes("[")) {
      let a = search.indexOf("[");
      let b = search.indexOf("]");
      search = search.substring(0, a) + search.substring(b + 1);
      if (search.charAt(search.length - 1) == "-") search = search.substring(0, search.length - 1);
    }
    // console.log("4: " + search);
    moveInfo = document.getElementById(search).innerText.split(";");
    this.move4 = moveInfo;
  }
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
  this.conTurns = 0;
  this.sleepTurns = 0;
  this.transition = 0;
  // EVS
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.spa = spa;
  this.spd = spd;
  this.spe = spe;
  //---------------------------------------------------------------------------------------
  this.inflictType = function(status, chance, target) {
    var c = getRandomFloat(0, 100);
    // console.log(c + " : " + chance);
    if (c < chance) {
      if (status.localeCompare("burn") == 0) {
        if (!target.status.includes("burn") && !target.status.includes("poison") && !target.status.includes("sleep") && !target.status.includes("freeze") && !target.status.includes("para")) {
          if (!target.type.includes("fire")) {
            target.status.push(status);
            addToLog(target.name + " was badly burned!");
          }
        }
      }
      if (status.localeCompare("para") == 0) {
        if (!target.status.includes("burn") && !target.status.includes("poison") && !target.status.includes("sleep") && !target.status.includes("freeze") && !target.status.includes("para")) {
          if (!target.type.includes("electric") && !target.type.includes("ground")) {
            target.status.push(status);
            addToLog(target.name + " was paralyzed! It may be unable to move!");
          }
        }
      }
      if (status.localeCompare("con") == 0) {
        target.status.push(status);
        addToLog(target.name + " was confused!");
      }
      // if (status.localeCompare("bad_poison") == 0) {
      //   if (!target.type.includes("poison") && !target.type.includes("steel")) {
      //     target.status.push(status);
      //     addToLog(target.name + " was badly poisoned!"); //
      //   }
      // }
      if (status.localeCompare("poison") == 0) {
        if (!target.status.includes("burn") && !target.status.includes("poison") && !target.status.includes("sleep") && !target.status.includes("freeze") && !target.status.includes("para")) {
          if (!target.type.includes("poison") && !target.type.includes("steel")) {
            target.status.push(status);
            addToLog(target.name + " was poisoned!"); //
          }
        }
      }
      if (status.localeCompare("sleep") == 0) {
        if (!target.status.includes("burn") && !target.status.includes("poison") && !target.status.includes("sleep") && !target.status.includes("freeze") && !target.status.includes("para")) {
          target.status.push(status);
          sleepTurns = Math.round(getRandomFloat(1, 3));
          addToLog(target.name + " fell asleep!");
        }
      }
      if (status.localeCompare("infat") == 0) {
        target.status.push(status);
        addToLog(target.name + " fell in love!"); //
      }
      if (status.localeCompare("freeze") == 0) {
        if (!target.status.includes("burn") && !target.status.includes("poison") && !target.status.includes("sleep") && !target.status.includes("freeze") && !target.status.includes("para")) {
        if (!target.type.includes("ice")) {
            target.status.push(status);
            addToLog(target.name + " was frozen solid!");
          }
        }
      }
      if (status.localeCompare("leech") == 0) {
        target.status.push(status);
        addToLog(target.name + " was seeded!"); //
      }
    }
  };
  this.inflict = function(status, chance, target) {
    if (getRandomFloat(0, 100) < chance) {
      target.status.push(status);
      if (status.localeCompare("burn") == 0) addToLog(target.name + " was badly burned!");
      if (status.localeCompare("para") == 0) addToLog(target.name + " was paralyzed! It may be unable to move!");
      if (status.localeCompare("con") == 0) addToLog(target.name + " was confused!");
      if (status.localeCompare("bad_poison") == 0) addToLog(target.name + " was badly poisoned!"); //
      if (status.localeCompare("poison") == 0) addToLog(target.name + " was poisoned!"); //
      if (status.localeCompare("sleep") == 0) addToLog(target.name + " fell asleep!");
      if (status.localeCompare("infat") == 0) addToLog(target.name + " fell in love!"); //
      if (status.localeCompare("freeze") == 0) addToLog(target.name + " was frozen solid!");
      if (status.localeCompare("leech") == 0) addToLog(target.name + " was seeded!"); //
    }
  };
  this.attack = function(name, target, e){
    // console.log(e);

    if (e == null) return;
    let d;
    if (target.transition != 0) {
      addToLog(this.name + " missed!");
      return;
    }
    if (this.status.includes("sleep")) {
      if (this.sleepTurns > 0) {
        addToLog(this.name + " is fast asleep!");
        this.sleepTurns--;
        return;
      }
      else this.status.splice(this.status.indexOf("sleep"), 1);
    }
    if (this.status.includes("para") && getRandomFloat(0, 1) < .245) {
      addToLog(this.name + " is paralyzed! It can't move!");
      return;
    }
    if (this.status.includes("freeze")) {
      if (getRandomFloat(0, 1) < .2) {
        addToLog(this.name + " thawed out!");
        this.status.splice(this.status.indexOf("freeze"), 1);
      }
      else {
        addToLog(this.name + " is frozen solid!");
        return;
      }
    }
    if (this.status.includes("con")) {
      if (this.conTurns > 0) {
        addToLog(this.name + " is confused...");
        this.conTurns--;
        if (getRandomFloat(0, 1) < .5) {
          addToLog(this.name + " hit itself in confusion!");
          this.currentHP -= (this.atkStat / (16 * this.hpStat));
          return;
        }
      }
      else {
        this.status.splice(this.status.indexOf("con"), 1);
        addToLog(this.name + " snapped out of confusion!");
      }
    }
    if (this.status.includes("infat")) {
      addToLog(this.name + " is in love with foe's " + target.name + "!");
      if (getRandomFloat(0, 1) < .5) {
        addToLog(this.name + " is immobilized by love!");
        return;
      }
    }
    addToLog(this.name + " used " + name + ".");
    if (name.localeCompare("Quick-attack") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Thunderbolt") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Electro-ball") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Pound") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Karate-chop") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "fighting", 2);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Double-slap") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(15, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Comet-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(18, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Mega-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Pay-day") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fire-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP -= Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Ice-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP -= Math.round(d);
      this.inflictType("freeze", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Thunder-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "electric", "physical", 1);
      target.currentHP -= Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Scratch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Vice-grip") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(55, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Razor-wind") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Cut") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fly") == 0) {
      if (this.transition == 0) {
        this.transition = 1;
        addToLog(this.name + " flew up high!");
      }
      else {
        this.transition = 0;
        if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
          addToLog(this.name + (" missed!"));
          return;
        }
        d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
        target.currentHP -= Math.round(d);
      }
    }
    else if (name.localeCompare("Bind") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(15, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Slam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Vine-whip") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(45, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Stomp") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Double-kick") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(30, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      var x;
      for (x = 0; x < 2; x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Mega-kick") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Jump-kick") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Rolling-kick") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Headbutt") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Horn-attack") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fury-attack") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(15, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Tackle") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Body-slam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(85, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      this.inflictType("para", 30, target);
    }
    else if (name.localeCompare("Wrap") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(15, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Take-down") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 4);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Thrash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Double-edge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 4);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Poison-sting") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(15, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "poison", "physical", 1);
      target.currentHP -= Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Twineedle") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(25, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      var x;
      for (x = 0; x < 2; x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Pin-missile") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(25, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Bite") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Acid") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(target + "'s Sp.Def. fell!'");
        target.spdMod -= .245;
      }
    }
    else if (name.localeCompare("Ember") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Flamethrower") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Water-gun") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hydro-pump") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(110, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Surf") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ice-beam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("freeze", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Blizzard") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(110, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("freeze", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Psybeam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (d > 0) this.inflictType("con", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Bubble-beam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(target + "'s Speed fell!'");
        target.speMod -= .245;
      }
    }
    else if (name.localeCompare("Aurora-beam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(target + "'s Attack fell!'");
        target.atkMod -= .245;
      }
    }
    else if (name.localeCompare("Hyper-beam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Peck") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(35, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Drill-peck") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Submission") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 4);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Strength") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Absorb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(20, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.currentHP += Math.round(d * parseInt(e[12]) / 100);
    }
    else if (name.localeCompare("Mega-drain") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.currentHP += Math.round(d * parseInt(e[12]) / 100);
    }
    else if (name.localeCompare("Razor-leaf") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(55, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 2);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Solar-beam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Petal-dance") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fire-spin") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(35, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Thunder-shock") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Thunder") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(110, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "thunder", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Rock-throw") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Earthquake") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ground", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Dig") == 0) {
      if (this.transition == 0) {
        this.transition = 1;
        addToLog(this.name + " burrowed underground!");
      }
      else {
        this.transition = 0;
        if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
          addToLog(this.name + (" missed!"));
          return;
        }
        d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ground", "physical", 1);
        target.currentHP -= Math.round(d);
      }
    }
    else if (name.localeCompare("Confusion") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Psychic") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(target + "'s Sp.Def. fell!'");
        target.spdMod -= .245;
      }
    }
    else if (name.localeCompare("Rage") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(20, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Self-destruct") == 0) {
      this.currentHP = 0;
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(200, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Egg-bomb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Lick") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(30, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ghost", "physical", 1);
      target.currentHP -= Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Smog") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(30, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Sludge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Bone-club") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ground", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fire-blast") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(110, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Waterfall") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "water", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Clamp") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(35, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "water", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Swift") == 0) {
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Skull-bash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(130, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      addToLog(this.name + ("'s Defense rose!"));
      this.defMod += .245;
    }
    else if (name.localeCompare("Spike-cannon") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(20, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Constrict") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(10, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("High-jump-kick") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        this.currentHP -= this.hpStat / 2;
        return;
      }
      d = this.calcDam(130, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Dream-eater") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      if (target.status.includes("sleep")) {
        d = this.calcDam(100, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
        target.currentHP = target.currentHP - Math.round(d);
        this.currentHP += Math.round(d / 2);
      }
      else addToLog("It had no effect!");
    }
    else if (name.localeCompare("Barrage") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(15, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Leech-life") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP -= Math.round(d);
      this.currentHP += Math.round(d / 2);
    }
    else if (name.localeCompare("Sky-attack") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(140, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Bubble") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(this.name + ("'s Defense fell!"));
        target.speMod -= .245;
      }
    }
    else if (name.localeCompare("Dizzy-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      this.inflictType("con", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Crabhammer") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "water", "physical", 2);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Explosion") == 0) {
      this.currentHP = 0;
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(250, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Fury-swipes") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(18, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Bonemerang") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ground", "physical", 1);
      var x;
      for (x = 0; x < 2; x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Rock-slide") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Hyper-fang") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Tri-attack") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
      this.inflictType("burn", parseInt(e[9]), target);
      this.inflictType("freeze", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Slash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 2);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Struggle") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP -= Math.round(d);
      this.currentHP -= this.hpStat / 4;
    }
    else if (name.localeCompare("Triple-kick") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(10, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      var x;
      for (x = 0; x < 3; x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Thief") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Flame-wheel") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP -= Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Snore") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Aeroblast") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "flying", "special", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Powder-snow") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("freeze", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Mach-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Feint-attack") == 0) {
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Sludge-bomb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Mud-slap") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(20, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ground", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.accMod -= .245;
      addToLog(target.name + "'s Accuracy fell!'");
    }
    else if (name.localeCompare("Octazooka") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.accMod -= .245;
        addToLog(target.name + "'s Accuracy fell!'");
      }
    }
    else if (name.localeCompare("Zap-cannon") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Icy-wind") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(55, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.speMod -= .245;
        addToLog(target.name + "'s Speed fell!'");
      }
    }
    else if (name.localeCompare("Bone-rush") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(25, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ground", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Outrage") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dragon", "physical", 1);
      target.currentHP -= Math.round(d);
    }
    else if (name.localeCompare("Giga-drain") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.currentHP += Math.round(d / 2);
    }
    else if (name.localeCompare("Grass-knot") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rollout") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(30, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("False-swipe") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical" , 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Spark") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "electric", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Fury-cutter") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Steel-wing") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(this.name + "'s Defense rose!");
        this.defMod += .245;
      }
    }
    else if (name.localeCompare("Sacred-fire") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Dynamic-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("con", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Megahorn") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dragon-breath") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Pursuit") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rapid-spin") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(20, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Iron-tail") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(target.name + "'s Defense fell!");
        target.defMod -= .245;
      }
    }
    else if (name.localeCompare("Metal-Claw") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(this.name + "'s Attack rose!");
        this.atkMod += .245;
      }
    }
    else if (name.localeCompare("Vital-throw") == 0) {
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hidden-power") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Cross-chop") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Crunch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(target.name + "'s Defense fell!");
        target.defMod -= .245;
      }
    }
    else if (name.localeCompare("Extreme-speed") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ancient-power") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "rock", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(this.name + "'s Attack rose!");
        addToLog(this.name + "'s Defense rose!");
        addToLog(this.name + "'s Sp.Atk. rose!");
        addToLog(this.name + "'s Sp.Def. rose!");
        addToLog(this.name + "'s Speed rose!");
        this.atkMod += .245;
        this.defMod += .245;
        this.spaMod += .245;
        this.spdMod += .245;
        this.speMod += .245;
      }
    }
    else if (name.localeCompare("Shadow-ball") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ghost", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(target.name + "'s Sp.Def. fell!");
        target.spdMod -= .245;
      }
    }
    else if (name.localeCompare("Future-sight") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-smash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Whirlpool") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(35, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fake-out") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Uproar") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Heat-wave") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(95, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Facade") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      if (this.status.length > 0) d = d * 2;
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Focus-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighthing", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Smelling-salts") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Superpower") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.atkMod -= .245;
      this.defMod -= .245;
      addToLog(this.name + "'s Attack fell!");
      addToLog(this.name + "'s Defense fell!");
    }
    else if (name.localeCompare("Revenge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Brick-break") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Knock-off") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Eruption") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Secret-power") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dive") == 0) {
      if (this.transition == 0) {
        this.transition = 1;
        addToLog(this.name + " dove underwater!");
      }
      else {
        this.transition = 0;
        if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
          addToLog(this.name + (" missed!"));
          return;
        }
        d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "water", "physical", 1);
        target.currentHP = target.currentHP - Math.round(d);
      }
    }
    else if (name.localeCompare("Arm-thrust") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(15, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Luster-purge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < 50) {
        target.spdMod -= .245;
        addToLog(target.name + "'s Sp.Def. fell!");
      }
    }
    else if (name.localeCompare("Mist-ball") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < 50) {
        target.spdMod -= .245;
        addToLog(target.name + "'s Sp.Def. fell!");
      }
    }
    else if (name.localeCompare("Blaze-kick") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(85, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Ice-ball") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(30, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Needle-arm") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hyper-voice") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Poison-fang") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Crush-claw") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < 50) {
        target.defMod -= .245;
        addToLog(target.name + "'s Defense fell!");
      }
    }
    else if (name.localeCompare("Blast-burn") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hydro-cannon") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Meteor-mash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        this.atkMod += .245;
        addToLog(this.name + "'s Attack rose!");
      }
    }
    else if (name.localeCompare("Astonish") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(30, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Weather-ball") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Air-cutter") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "flying", "special", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Overheat") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(130, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.spaMod -= .495;
      addToLog(this.name + "'s Sp.Atk. fell!");
    }
    else if (name.localeCompare("Rock-tomb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.speMod -= .245;
      addToLog(target.name + "'s Speed. fell!");
    }
    else if (name.localeCompare("Silver-wing") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "bug", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Water-spout") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Signal-beam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("con", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Shadow-punch") == 0) {
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Extrasensory") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sky-uppercut") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(85, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sand-tomb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(35, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ground", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Muddy-water") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.accMod += .245;
        addToLog(target.name + "'s Accuracy rose!");
      }
    }
    else if (name.localeCompare("Bullet-seed") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(25, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Aerial-ace") == 0) {
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Icicle-spear") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(25, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Dragon-claw") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dragon", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Frenzy-plant") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bounce") == 0) {
      if (this.transition == 0) {
        this.transition = 1;
        addToLog(this.name + " burrowed underground!");
      }
      else {
        this.transition = 0;
        if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
          addToLog(this.name + (" missed!"));
          return;
        }
        d = this.calcDam(85, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
        target.currentHP = target.currentHP - Math.round(d);
        this.inflictType("para", parseInt(e[9]), target);
      }
    }
    else if (name.localeCompare("Mud-shot") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(55, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ground", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.speMod -= .245;
      addLog(target.name + "'s Speed fell!");
    }
    else if (name.localeCompare("Poison-tail") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "poison", "physical", 2);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Covet") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Volt-tackle") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "electric", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 3);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Magical-leaf") == 0) {
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Leaf-blade") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-blast") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(25, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Shock-wave") == 0) {
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Water-pulse") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("con", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Doom-desire") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(140, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "steel", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Psycho-boost") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(140, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.spaMod -= .495;
      addLog(this.name + "'s Sp.Atk. fell!");
    }
    else if (name.localeCompare("Wake-up-slap") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      if (target.status.includes("sleep")) target.status.splice(target.status.indexOf("sleep"), 1);
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Hammer-arm") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.speMod -= .245;
      addToLog(this.name + "'s Speed fell!");
    }
    else if (name.localeCompare("Brine") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      if (target.currentHP <= target.hpStat / 2) d = d * 2;
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Feint") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(30, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Pluck") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("U-turn") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Close-combat") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.defMod -= .245;
      this.spdMod -= .245;
      addToLog(this.name + "'s Defense fell!");
      addToLog(this.name + "'s Sp.Def. fell!");
    }
    else if (name.localeCompare("Payback") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Assurance") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Last-resort") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(140, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sucker-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Flare-blitz") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fire", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 3);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Force-palm") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Aura-sphere") == 0) {
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fighting", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Poison-jab") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Dark-pulse") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "dark", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Night-slash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Aqua-tail") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "water", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Seed-bomb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Air-slash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "flying", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("X-scissor") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bug-buzz") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "bug", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.spdMod -= .245;
        addToLog(target.name + "'s Sp.Def. fell!");
      }
    }
    else if (name.localeCompare("Dragon-pulse") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(85, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dragon-rush") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dragon", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Power-gem") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "rock", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Drain-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.currentHP += Math.round(d / 2);
    }
    else if (name.localeCompare("Vacuum-wave") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fighting", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Focus-blast") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fighting", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.spdMod -= .245;
        addToLog(target.name + "'s Sp.Def. fell!");
      }
    }
    else if (name.localeCompare("Energy-ball") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.spdMod -= .245;
        addToLog(target.name + "'s Sp.Def. fell!");
      }
    }
    else if (name.localeCompare("Brave-bird") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 3);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Earth-power") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ground", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.spdMod -= .245;
        addToLog(target.name + "'s Sp.Def. fell!");
      }
    }
    else if (name.localeCompare("Giga-impact") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bullet-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Avalanche") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ice-shard") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Shadow-claw") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ghost", "physical", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Thunder-fang") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "electric", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Ice-fang") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("freeze", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Fire-fang") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Shadow-sneak") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mud-bomb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ground", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.accMod -= .245;
        addToLog(target.name + "'s Accuracy fell!");
      }
    }
    else if (name.localeCompare("Psycho-cut") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "psychic", "physical", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Zen-headbutt") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "psychic", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Mirror-shot") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "steel", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.accMod -= .245;
        addToLog(target.name + "'s Accuracy fell!");
      }
    }
    else if (name.localeCompare("Flash-cannon") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "steel", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.spdMod -= .245;
        addToLog(target.name + "'s Sp.Def. fell!");
      }
    }
    else if (name.localeCompare("Rock-climb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Draco-meteor") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(130, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.spaMod -= .495;
      addToLog(this.name + "'s Sp.Atk. fell!");
    }
    else if (name.localeCompare("Discharge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Lava-plume") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Leaf-storm") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(130, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.spaMod -= .495;
      addToLog(this.name + "'s Sp.Atk. fell!");
    }
    else if (name.localeCompare("Power-whip") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Rock-wrecker") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Cross-poison") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Gunk-shot") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "poison", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Iron-head") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Magnet-bomb") == 0) {
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "steel", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Stone-edge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Chatter") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "flying", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("con", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Judgment") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Bug-bite") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Charge-beam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < 50) {
        addToLog(this.name + "'s Sp.Atk. rose!");
        this.spaMod += .245;
      }
    }
    else if (name.localeCompare("Wood-hammer") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 3);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Aqua-jet") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "water", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Attack-order") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Head-smash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Double-hit") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(35, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      var x;
      for (x = 0; x < 2; x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Roar-of-time") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(150, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Spacial-rend") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "dragon", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Magma-storm") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Seed-flare") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.spdMod -= .495;
        addToLog(target.name + "'s Sp.Def. fell!");
      }
    }
    else if (name.localeCompare("Ominous-wind") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ghost", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        addToLog(this.name + "'s Attack rose!");
        addToLog(this.name + "'s Defense rose!");
        addToLog(this.name + "'s Sp.Atk. rose!");
        addToLog(this.name + "'s Sp.Def. rose!");
        addToLog(this.name + "'s Speed rose!");
        this.atkMod += .245;
        this.defMod += .245;
        this.spaMod += .245;
        this.spdMod += .245;
        this.speMod += .245;
      }
    }
    else if (name.localeCompare("Shadow-force") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Psyshock") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.defStat * target.defMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Venoshock") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "poison", "special", 1);
      if (target.status.includes("poison")) d = d * 2;
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Smack-down") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "rock", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Storm-throw") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 6);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Flame-burst") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sludge-wave") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(95, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("poison", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Synchronoise") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Flame-charge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.speMod += .245;
      addToLog(this.name + "'s Speed rose!");
    }
    else if (name.localeCompare("Low-sweep") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Acid-spray") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.spdMod -= .495;
      addToLog(target.name + "'s Sp.Def. fell!");
    }
    else if (name.localeCompare("Foul-play") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(95, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dark", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Round") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Echoed-voice") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Chip-away") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Clear-smog") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "poison", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.atkMod = 1;
      target.accMod = 1;
      target.defMod = 1;
      target.evaMod = 1;
      target.spaMod = 1;
      target.spdMod = 1;
      target.speMod = 1;
      addToLog(target.name + "'s stat changes were reset!");
    }
    else if (name.localeCompare("Stored-power") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(20, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Scald") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Hex") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ghost", "special", 1);
      if (target.status.length > 0) d = d * 2;
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Sky-drop") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Circle-throw") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Incinerate") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Acrobatics") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(55, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "flying", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Retaliate") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Inferno") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Water-pledge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "water", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fire-pledge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Grass-pledge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Volt-switch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Struggle-bug") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "bug", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.spaMod -= .245;
      addToLog(target.name + "'s Sp.Atk. fell!");
    }
    else if (name.localeCompare("Bulldoze") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ground", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.speMod -= .245;
      addToLog(target.name + "'s Speed fell!");
    }
    else if (name.localeCompare("Frost-breath") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 6);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dragon-tail") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dragon", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Electroweb") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(55, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "electric", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.speMod -= .245;
      addToLog(target.name + "'s Speed fell!");
    }
    else if (name.localeCompare("Wild-charge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "electric", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 4);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Drill-run") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ground", "physical", 2);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Dual-chop") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "dragon", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Heart-stamp") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(60, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "psychic", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Horn-leech") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.currentHP += Math.round(d / 2);
    }
    else if (name.localeCompare("Sacred-sword") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Razor-shell") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "water", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < 50) {
        target.defMod -= .245;
        addToLog(target.name + "'s Defense fell!");
      }
    }
    else if (name.localeCompare("Leaf-tornado") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "grass", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.accMod -= .245;
        addToLog(target.name + "'s Accuracy fell!");
      }
    }
    else if (name.localeCompare("Steamroller") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Night-daze") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(85, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "dark", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.accMod -= .245;
        addToLog(target.name + "'s Accuracy fell!");
      }
    }
    else if (name.localeCompare("Psystrike") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.spaStat * this.spaMod, target, target.defStat * target.defMod, "psychic", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Tail-slap") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(25, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      var x;
      for (x = 0; x < getRandomFloat(parseInt(e[18]), parseInt(e[19])); x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Hurricane") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(110, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "flying", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("con", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Head-charge") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "normal", "physical", 1);
      if (d >= target.hpStat) this.currentHP -= Math.round(target.currentHP / 3);
      else this.currentHP -= Math.round(d / 4);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Gear-grind") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "steel", "physical", 1);
      var x;
      for (x = 0; x < 2; x++) {
        target.currentHP -= Math.round(d);
      }
      addToLog("It hit " + (x + 1) + " time(s)!");
    }
    else if (name.localeCompare("Searing-shot") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("burn", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Techno-blast") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(120, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Relic-song") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(75, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Secret-sword") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(85, this.spaStat * this.spaMod, target, target.defStat * target.defMod, "fighting", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Glaciate") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(65, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.speMod -= .245;
      addToLog(target.name + "'s Speed fell!");
    }
    else if (name.localeCompare("Bolt-strike") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(130, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "electric", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Blue-flare") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(130, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fiery-dance") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        this.spaMod += .245;
        addToLog(this.name + "'s Sp.Atk. rose!");
      }
    }
    else if (name.localeCompare("Freeze-shock") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(140, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Ice-burn") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(140, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Snarl") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(55, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "dark", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      target.spaMod -= .245;
      addToLog(target.name + "'s Sp.Atk. fell!");
    }
    else if (name.localeCompare("Icicle-crash") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(85, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ice", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("V-create") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(180, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fire", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.speMod -= .245;
      this.defMod -= .245;
      this.spdMod -= .245;
      addToLog(this.name + "'s Speed fell!");
      addToLog(this.name + "'s Defense fell!");
      addToLog(this.name + "'s Sp.Def. fell!");
    }
    else if (name.localeCompare("Fusion-flare") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fire", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Fusion-bolt") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(100, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "electric", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Swords-dance") == 0) {
      this.atkMod += .5;
      addToLog(this.name + "'s Attack rose!");
    }
    else if (name.localeCompare("Sand-attack") == 0) {
      target.accMod -= .25;
      addToLog(target.name + "'s Accuracy fell!");
    }
    else if (name.localeCompare("Tail-whip") == 0) {
      target.defMod -= .25;
      addToLog(target.name + "'s Defense fell!");
    }
    else if (name.localeCompare("Leer") == 0) {
      target.defMod -= .25;
      addToLog(target.name + "'s Defense fell!");
    }
    else if (name.localeCompare("Growl") == 0) {
      target.atkMod -= .25;
      addToLog(target.name + "'s Attack fell!");
    }
    else if (name.localeCompare("Sing") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("sleep", 100, target);
    }
    else if (name.localeCompare("Supersonic") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("con", 100, target);
    }
    else if (name.localeCompare("Confuse-ray") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("con", 100, target);
    }
    else if (name.localeCompare("Teeter-dance") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("con", 100, target);
    }
    else if (name.localeCompare("Poison-powder") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("poison", 100, target);
    }
    else if (name.localeCompare("Stun-spore") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("para", 100, target);
    }
    else if (name.localeCompare("Sleep-powder") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("sleep", 100, target);
    }
    else if (name.localeCompare("Dark-void") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("sleep", 100, target);
    }
    else if (name.localeCompare("Grass-whistle") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("sleep", 100, target);
    }
    else if (name.localeCompare("String-shot") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      target.speMod -= .25;
      addToLog(target.name + "'s Speed fell!");
    }
    else if (name.localeCompare("Thunder-wave") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("para", 100, target);
    }
    else if (name.localeCompare("Toxic") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("poison", 100, target);
    }
    else if (name.localeCompare("Hypnosis") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("sleep", 100, target);
    }
    else if (name.localeCompare("Meditate") == 0) {
      this.atkMod += .25;
      addToLog(this.name + "'s Attack rose!");
    }
    else if (name.localeCompare("Agility") == 0) {
      this.speMod += .5;
      addToLog(this.name + "'s Speed rose!");
    }
    else if (name.localeCompare("Autotomize") == 0) {
      this.speMod += .5;
      addToLog(this.name + "'s Speed rose!");
    }
    else if (name.localeCompare("Tail-glow") == 0) {
      this.spaMod += .75;
      addToLog(this.name + "'s Sp.Atk. rose!");
    }
    else if (name.localeCompare("Howl") == 0) {
      this.atkMod += .25;
      addToLog(this.name + "'s Attack rose!");
    }
    else if (name.localeCompare("Bulk-up") == 0) {
      this.defMod += .25;
      this.atkMod += .25;
      addToLog(this.name + "'s Attack rose!");
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Work-up") == 0) {
      this.spaMod += .25;
      this.atkMod += .25;
      addToLog(this.name + "'s Attack rose!");
      addToLog(this.name + "'s Sp.Atk. rose!");
    }
    else if (name.localeCompare("Heal-bell") == 0) {
      this.status = [];
      addToLog(this.name + " cured itself!");
    }
    else if (name.localeCompare("Coil") == 0) {
      this.accMod += .25;
      this.atkMod += .25;
      this.defMod += .25;
      addToLog(this.name + "'s Attack rose!");
      addToLog(this.name + "'s Defense rose!");
      addToLog(this.name + "'s Accuracy rose!");
    }
    else if (name.localeCompare("Quiver-dance") == 0) {
      this.spaMod += .25;
      this.spdMod += .25;
      this.speMod += .25;
      addToLog(this.name + "'s Sp.Atk. rose!");
      addToLog(this.name + "'s Sp.Def. rose!");
      addToLog(this.name + "'s Speed rose!");
    }
    else if (name.localeCompare("Hone-claws") == 0) {
      this.accMod += .25;
      this.atkMod += .25;
      addToLog(this.name + "'s Attack rose!");
      addToLog(this.name + "'s Accuracy rose!");
    }
    else if (name.localeCompare("Calm-mind") == 0) {
      this.spaMod += .25;
      this.spdMod += .25;
      addToLog(this.name + "'s Sp.Atk. rose!");
      addToLog(this.name + "'s Sp.Def. rose!");
    }
    else if (name.localeCompare("Dragon-dance") == 0) {
      this.speMod += .25;
      this.atkMod += .25;
      addToLog(this.name + "'s Attack rose!");
      addToLog(this.name + "'s Speed rose!");
    }
    else if (name.localeCompare("Shift-gear") == 0) {
      this.speMod += .5;
      this.atkMod += .25;
      addToLog(this.name + "'s Attack rose!");
      addToLog(this.name + "'s Speed rose!");
    }
    else if (name.localeCompare("Psycho-shift") == 0) {
      var te = this.status;
      this.status = target.status;
      target.status = te;
      addToLog(this.name + " " + target.name + " swapped statuses!");
    }
    else if (name.localeCompare("Screech") == 0) {
      target.defMod -= .5;
      addToLog(target.name + "'s Defense fell!");
    }
    else if (name.localeCompare("Metal-sound") == 0) {
      target.spdMod -= .5;
      addToLog(target.name + "'s Sp.Def. fell!");
    }
    else if (name.localeCompare("Recover") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Heal-order") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Roost") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Slack-off") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Milk-drink") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Morning-sun") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Synthesis") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Moonlight") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Harden") == 0) {
      this.defMod += .25;
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Cotton-guard") == 0) {
      this.defMod += .75;
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Defend-order") == 0) {
      this.defMod += .25;
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Rock-polish") == 0) {
      this.speMod += .5;
      addToLog(this.name + "'s Speed rose!");
    }
    else if (name.localeCompare("Nasty-plot") == 0) {
      this.spaMod += .5;
      addToLog(this.name + "'s Sp.Atk. rose!");
    }
    else if (name.localeCompare("Smokescreen") == 0) {
      target.accMod -= .25;
      addToLog(target.name + "'s Accuracy fell!");
    }
    else if (name.localeCompare("Barrier") == 0) {
      this.defMod += .5;
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Withdraw") == 0) {
      this.defMod += .25;
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Defense-curl") == 0) {
      this.defMod += .25;
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Light-screen") == 0) {
      this.spdMod += .25;
      addToLog(this.name + "'s Sp.Def. rose!");
    }
    else if (name.localeCompare("Reflect") == 0) {
      this.defMod += .25;
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Amnesia") == 0) {
      this.spdMod += .5;
      addToLog(this.name + "'s Sp.Def. rose!");
    }
    else if (name.localeCompare("Kinesis") == 0) {
      target.accMod -= .25;
      addToLog(target.name + "'s Accuracy fell!");
    }
    else if (name.localeCompare("Soft-boiled") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Wish") == 0) {
      this.currentHP += Math.round(this.hpStat / 2);
      addToLog(this.name + " regained health!");
    }
    else if (name.localeCompare("Feather-dance") == 0) {
      target.defMod -= .5;
      addToLog(target.name + "'s Defense fell!");
    }
    else if (name.localeCompare("Glare") == 0) {
      this.inflictType("para", 100, target);
    }
    else if (name.localeCompare("Poison-gas") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("poison", 100, target);
    }
    else if (name.localeCompare("Lovely-kiss") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("sleep", 100, target);
    }
    else if (name.localeCompare("Spore") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      if (!target.type.includes("grass")) this.inflictType("sleep", 100, target);
    }
    else if (name.localeCompare("Flash") == 0) {
      target.accMod -= .25;
      addToLog(target.name + "'s Accuracy fell!");
    }
    else if (name.localeCompare("Acid-armor") == 0) {
      this.defMod += .5;
      addToLog(this.name + "'s Defense rose!");
    }
    else if (name.localeCompare("Rest") == 0) {
      if (!this.status.includes("sleep")) {
        this.status = ["sleep"];
        this.sleepTurns = 3;
        this.currentHP = this.hpStat;
        addToLog(target.name + "fell asleep and regained its health!");
      }
      else addToLog("But it failed!");
    }
    else if (name.localeCompare("Sharpen") == 0) {
      this.atkMod += .25;
      addToLog(this.name + "'s Attack rose!");
    }
    else if (name.localeCompare("Belly-drum") == 0) {
      if (this.currentHP > this.hpStat / 2) {
        this.atkMod = 3;
        addToLog(this.name + "'s Attack is maxed out!");
      }
      addToLog("But it failed!");
    }
    else if (name.localeCompare("Sandstorm") == 0) {
      game.weather = ["sand"];
      game.weatherTurnsLeft = 5;
      addToLog(this.name + " whipped up a sandstorm!");
    }
    else if (name.localeCompare("Rain-dance") == 0) {
      game.weather = ["rain"];
      game.weatherTurnsLeft = 5;
      addToLog(this.name + " started a downpour!");
    }
    else if (name.localeCompare("Sunny-day") == 0) {
      game.weather = ["sun"];
      game.weatherTurnsLeft = 5;
      addToLog(this.name + " made it sunny!");
    }
    else if (name.localeCompare("Sunny-day") == 0) {
      game.weather = ["hail"];
      game.weatherTurnsLeft = 5;
      addToLog(this.name + " made it hail!");
    }
    else if (name.localeCompare("Will-o-wisp") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      this.inflictType("burn", 100, target);
    }
    else if (name.localeCompare("Fell-stinger") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(50, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (target.currentHP <= 0) this.atkMod += .5;
    }
    else if (name.localeCompare("Phantom-force") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "ghost", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Noble-roar") == 0) {
      target.atkMod -= .25;
      target.spaMod -= .25;
      addToLog(target.name + "'s Attack fell!");
      addToLog(target.name + "'s Sp.Atk. fell!");
    }
    else if (name.localeCompare("Petal-blizzard") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "grass", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Freeze-dry") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(70, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "ice", "special", 1);
      if (target.type.includes("water")) d = d * 4;
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Disarming-voice") == 0) {
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fairy", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Play-rough") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(90, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fairy", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.atkMod -= .245;
        addToLog(target.name + "'s Attack fell!");
      }
    }
    else if (name.localeCompare("Fairy-wind") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fairy", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Moonblast") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(95, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fairy", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
      if (getRandomFloat(0, 100) < parseInt(e[15])) {
        target.spaMod -= .245;
        addToLog(target.name + "'s Sp.Atk. fell!");
      }
    }
    else if (name.localeCompare("Boomburst") == 0) {
      d = this.calcDam(140, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "normal", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Play-nice") == 0) {
      target.atkMod -= .25;
      addToLog(target.name + "'s Attack fell!");
    }
    else if (name.localeCompare("Confide") == 0) {
      target.spaMod -= .25;
      addToLog(target.name + "'s Sp.Atk. fell!");
    }
    else if (name.localeCompare("Venom-drench") == 0) {
      if (target.status.includes("poison")) {
        target.atkMod -= .25;
        target.spaMod -= .25;
        target.speMod -= .25;
        addToLog(target.name + "'s Attack fell!");
        addToLog(target.name + "'s Sp.Atk. fell!");
        addToLog(target.name + "'s Speed fell!");
      }
    }
    else if (name.localeCompare("Dazzling-gleam") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(80, this.spaStat * this.spaMod, target, target.spdStat * target.spdMod, "fairy", "special", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Baby-doll-eyes") == 0) {
      target.atkMod -= .25;
      addToLog(target.name + "'s Attack fell!");
    }
    else if (name.localeCompare("Nuzzle") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(20, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "electric", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.inflictType("para", parseInt(e[9]), target);
    }
    else if (name.localeCompare("Infestation") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(20, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "bug", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
    }
    else if (name.localeCompare("Power-up-punch") == 0) {
      if (getRandomFloat(0, 100 / this.accMod) > parseInt(e[20])) {
        addToLog(this.name + (" missed!"));
        return;
      }
      d = this.calcDam(40, this.atkStat * (this.atkMod + .25), target, target.defStat * target.defMod, "fighting", "physical", 1);
      target.currentHP = target.currentHP - Math.round(d);
      this.atkMod += .245;
      addToLog(this.name + "'s Attack rose!");
    }
    else addToLog("But it failed!");
  }
  this.calcDam = function(pow, stat, target, targetStat, type, cat, critRate) {
    let weather, crit, rand, stab, eff, burn, other;
    //weather
    if (type.localeCompare("water") == 0 && game.weather.includes("rain")) weather = 1.5;
    else if (type.localeCompare("fire") == 0 && game.weather.includes("sun")) weather = 1.5;
    else if (type.localeCompare("water") == 0 && game.weather.includes("sun")) weather = .5;
    else if (type.localeCompare("fire") == 0 && game.weather.includes("rain")) weather = .5;
    else weather = 1;
    //crit
    let prob = this.spe * this.critical * this.critRate / 512; //HCC = 4, with FE = 8
    let random_boolean = Math.random() < prob;
    if (random_boolean) {crit = 2; addToLog("A critical hit!");}
    else crit = 1;
    //rand
    rand = parseFloat(getRandomFloat(.85,1).toFixed(2));
    //stab
    if ((type.localeCompare(this.type[0]) == 0) || (type.localeCompare(this.type[1]) == 0)) stab = 1.5;
    else stab = 1;
    //effectiveness
    function effCalc(a1, d1, d2) {
      let temp = ((typeEffectiveness[typeIndex(a1)][typeIndex(d1)] / 2) * (typeEffectiveness[typeIndex(a1)][typeIndex(d2)] / 2));
      if (temp == 0) addToLog("It doesn't affect the opposing " + target.name + "...");
      else if (temp < 1) addToLog("It's not very effective...");
      else if (temp > 1) addToLog("It's super effective!");
      return temp;
    }
    eff = effCalc(type, target.type[0], target.type[1]);
    //burn
    if (status.includes("burn") && (cat.localeCompare("physical") == 0) && (name.localeCompare("Facade") != 0)) burn = .5;
    else burn = 1;
    //other
    other = 1; //ATM WIP
    let mod = weather * crit * rand * stab * eff * burn * other;
    let dam = (((42 * pow * stat / targetStat) / 50) + 2) * mod;
    return dam;
  }
};

function Game(myCurr, enCurr, myTeam, enTeam) {
  this.weather=[]; //sun, rain, sand, hail
  this.weatherTurnsLeft=0;
  this.myHazards=[];
  this.enHazards=[];
  this.turn = 1;
  this.myCurr = myCurr;
  this.enCurr = enCurr;
  this.myTeam = myTeam;
  this.enTeam = enTeam;
}

let updateHealthBar = function(e, hb) {
  hb.style = "background-color:limegreen; width:" + Math.round(100 * e.currentHP / e.hpStat) + "%;";
};

let myTeam = [], enTeam = [];
let setup = function() {
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

  // let screen = document.getElementById("element");
  // let myName = document.getElementById("myName");
  // let enName = document.getElementById("enName");
  // let myHealth = document.getElementById("myHealth");
  // let enHealth = document.getElementById("enHealth");

  if (pokemon0 !== null) var pList0 = pokemon0.innerText.split(",");
  if (pokemon1 !== null) var pList1 = pokemon1.innerText.split(",");
  if (pokemon2 !== null) var pList2 = pokemon2.innerText.split(",");
  if (pokemon3 !== null) var pList3 = pokemon3.innerText.split(",");
  if (pokemon4 !== null) var pList4 = pokemon4.innerText.split(",");
  if (pokemon5 !== null) var pList5 = pokemon5.innerText.split(",");

  let pList6 = pokemon6.innerText.split(",");
  let pList7 = pokemon7.innerText.split(",");
  let pList8 = pokemon8.innerText.split(",");
  let pList9 = pokemon9.innerText.split(",");
  let pList10 = pokemon10.innerText.split(",");
  let pList11 = pokemon11.innerText.split(",");

  if (typeof pList0 !== 'undefined')pList0 = pList0.concat(base1.innerText.substring(1, base1.innerText.length - 1).split(","));
  if (typeof pList1 !== 'undefined')pList1 = pList1.concat(base2.innerText.substring(1, base2.innerText.length - 1).split(","));
  if (typeof pList2 !== 'undefined')pList2 = pList2.concat(base3.innerText.substring(1, base3.innerText.length - 1).split(","));
  if (typeof pList3 !== 'undefined')pList3 = pList3.concat(base4.innerText.substring(1, base4.innerText.length - 1).split(","));
  if (typeof pList4 !== 'undefined')pList4 = pList4.concat(base5.innerText.substring(1, base5.innerText.length - 1).split(","));
  if (typeof pList5 !== 'undefined') pList5 = pList5.concat(base6.innerText.substring(1, base6.innerText.length - 1).split(","));

  if (typeof pList0 !== 'undefined')pList0.push(front[0].innerText);
  if (typeof pList1 !== 'undefined')pList1.push(front[1].innerText);
  if (typeof pList2 !== 'undefined')pList2.push(front[2].innerText);
  if (typeof pList3 !== 'undefined')pList3.push(front[3].innerText);
  if (typeof pList4 !== 'undefined')pList4.push(front[4].innerText);
  if (typeof pList5 !== 'undefined') pList5.push(front[5].innerText);

  if (typeof pList0 !== 'undefined')pList0.push(back[0].innerText);
  if (typeof pList1 !== 'undefined')pList1.push(back[1].innerText);
  if (typeof pList2 !== 'undefined')pList2.push(back[2].innerText);
  if (typeof pList3 !== 'undefined')pList3.push(back[3].innerText);
  if (typeof pList4 !== 'undefined')pList4.push(back[4].innerText);
  if (typeof pList5 !== 'undefined') pList5.push(back[5].innerText);

  if (typeof pList0 !== 'undefined')pList0 = pList0.concat(getMyTypes(pList0));
  if (typeof pList1 !== 'undefined')pList1 = pList1.concat(getMyTypes(pList1));
  if (typeof pList2 !== 'undefined')pList2 = pList2.concat(getMyTypes(pList2));
  if (typeof pList3 !== 'undefined')pList3 = pList3.concat(getMyTypes(pList3));
  if (typeof pList4 !== 'undefined')pList4 = pList4.concat(getMyTypes(pList4));
  if (typeof pList5 !== 'undefined') pList5 = pList5.concat(getMyTypes(pList5));

  pList6 = pList6.concat(getEnStats(pList6));
  pList7 = pList7.concat(getEnStats(pList7));
  pList8 = pList8.concat(getEnStats(pList8));
  pList9 = pList9.concat(getEnStats(pList9));
  pList10 = pList10.concat(getEnStats(pList10));
  pList11 = pList11.concat(getEnStats(pList11));

  myTeam = []
  enTeam = []
  if (pokemon0 !== null) {p0 = new Pokemon(pList0[0].charAt(0).toUpperCase() + pList0[0].slice(1), pList0[1], pList0[2], pList0[3], pList0[4], pList0[5], pList0[6], pList0[7], pList0[8], pList0[9], pList0[10], pList0[11], pList0[12], pList0[13], pList0[14], pList0[15], pList0[16], pList0[17], pList0[18], pList0[19], pList0[20], pList0[21], pList0[22], pList0[23]); myTeam.push(p0);};
  if (pokemon1 !== null) {p1 = new Pokemon(pList1[0].charAt(0).toUpperCase() + pList1[0].slice(1), pList1[1], pList1[2], pList1[3], pList1[4], pList1[5], pList1[6], pList1[7], pList1[8], pList1[9], pList1[10], pList1[11], pList1[12], pList1[13], pList1[14], pList1[15], pList1[16], pList1[17], pList1[18], pList1[19], pList1[20], pList1[21], pList1[22], pList1[23]); myTeam.push(p1);};
  if (pokemon2 !== null) {p2 = new Pokemon(pList2[0].charAt(0).toUpperCase() + pList2[0].slice(1), pList2[1], pList2[2], pList2[3], pList2[4], pList2[5], pList2[6], pList2[7], pList2[8], pList2[9], pList2[10], pList2[11], pList2[12], pList2[13], pList2[14], pList2[15], pList2[16], pList2[17], pList2[18], pList2[19], pList2[20], pList2[21], pList2[22], pList2[23]); myTeam.push(p2);};
  if (pokemon3 !== null) {p3 = new Pokemon(pList3[0].charAt(0).toUpperCase() + pList3[0].slice(1), pList3[1], pList3[2], pList3[3], pList3[4], pList3[5], pList3[6], pList3[7], pList3[8], pList3[9], pList3[10], pList3[11], pList3[12], pList3[13], pList3[14], pList3[15], pList3[16], pList3[17], pList3[18], pList3[19], pList3[20], pList3[21], pList3[22], pList3[23]); myTeam.push(p3);};
  if (pokemon4 !== null) {p4 = new Pokemon(pList4[0].charAt(0).toUpperCase() + pList4[0].slice(1), pList4[1], pList4[2], pList4[3], pList4[4], pList4[5], pList4[6], pList4[7], pList4[8], pList4[9], pList4[10], pList4[11], pList4[12], pList4[13], pList4[14], pList4[15], pList4[16], pList4[17], pList4[18], pList4[19], pList4[20], pList4[21], pList4[22], pList4[23]); myTeam.push(p4);};
  if (pokemon5 !== null) {p5 = new Pokemon(pList5[0].charAt(0).toUpperCase() + pList5[0].slice(1), pList5[1], pList5[2], pList5[3], pList5[4], pList5[5], pList5[6], pList5[7], pList5[8], pList5[9], pList5[10], pList5[11], pList5[12], pList5[13], pList5[14], pList5[15], pList5[16], pList5[17], pList5[18], pList5[19], pList5[20], pList5[21], pList5[22], pList5[23]); myTeam.push(p5);};

  if (pokemon6 !== null) {p6 = new Pokemon(pList6[0], pList6[1], pList6[2], pList6[3], pList6[4], pList6[5], pList6[6], pList6[7], pList6[8], pList6[9], pList6[10], pList6[11], pList6[12], pList6[13], pList6[14], pList6[15], pList6[16], pList6[17], pList6[18], pList6[19], pList6[20], pList6[21], pList6[22], pList6[23]); enTeam.push(p6);};
  if (pokemon7 !== null) {p7 = new Pokemon(pList7[0], pList7[1], pList7[2], pList7[3], pList7[4], pList7[5], pList7[6], pList7[7], pList7[8], pList7[9], pList7[10], pList7[11], pList7[12], pList7[13], pList7[14], pList7[15], pList7[16], pList7[17], pList7[18], pList7[19], pList7[20], pList7[21], pList7[22], pList7[23]); enTeam.push(p7);};
  if (pokemon8 !== null) {p8 = new Pokemon(pList8[0], pList8[1], pList8[2], pList8[3], pList8[4], pList8[5], pList8[6], pList8[7], pList8[8], pList8[9], pList8[10], pList8[11], pList8[12], pList8[13], pList8[14], pList8[15], pList8[16], pList8[17], pList8[18], pList8[19], pList8[20], pList8[21], pList8[22], pList8[23]); enTeam.push(p8);};
  if (pokemon9 !== null) {p9 = new Pokemon(pList9[0], pList9[1], pList9[2], pList9[3], pList9[4], pList9[5], pList9[6], pList9[7], pList9[8], pList9[9], pList9[10], pList9[11], pList9[12], pList9[13], pList9[14], pList9[15], pList9[16], pList9[17], pList9[18], pList9[19], pList9[20], pList9[21], pList9[22], pList9[23]); enTeam.push(p9);};
  if (pokemon10 !== null) {p10 = new Pokemon(pList10[0], pList10[1], pList10[2], pList10[3], pList10[4], pList10[5], pList10[6], pList10[7], pList10[8], pList10[9], pList10[10], pList10[11], pList10[12], pList10[13], pList10[14], pList10[15], pList10[16], pList10[17], pList10[18], pList10[19], pList10[20], pList10[21], pList10[22], pList10[23]); enTeam.push(p10);};
  if (pokemon11 !== null) {p11 = new Pokemon(pList11[0], pList11[1], pList11[2], pList11[3], pList11[4], pList11[5], pList11[6], pList11[7], pList11[8], pList11[9], pList11[10], pList11[11], pList11[12], pList11[13], pList11[14], pList11[15], pList11[16], pList11[17], pList11[18], pList11[19], pList11[20], pList11[21], pList11[22], pList11[23]); enTeam.push(p11);};
  game = new Game(myTeam[0], enTeam[0], myTeam, enTeam);
  // console.log(game);
  let img = document.createElement("img");
  img.src = myTeam[0].sprite[1];
  img.id="my";
  img.style="position:absolute; left: 8%; bottom: 12%; width: 35%;";
  screen.appendChild(img);
  let imgEN = document.createElement("img");
  imgEN.src = enTeam[0].sprite[0];
  imgEN.id="en";
  imgEN.style="position:absolute; right: 8%; top: 8%; width: 35%;";
  screen.appendChild(imgEN);
  myName.innerText = myTeam[0].name;
  myHealth.innerText = myTeam[0].currentHP + "/" + myTeam[0].hpStat;
  enName.innerText = enTeam[0].name;
  enHealth.innerText = enTeam[0].currentHP + "/" + enTeam[0].hpStat;
  if (myTeam[0] !== null && myTeam[0].move1 !== null) m0.innerText = myTeam[0].move1[0];
  if (myTeam[0] !== null && myTeam[0].move2 !== null) m1.innerText = myTeam[0].move2[0];
  if (myTeam[0] !== null && myTeam[0].move3 !== null) m2.innerText = myTeam[0].move3[0];
  if (myTeam[0] !== null && myTeam[0].move4 !== null) m3.innerText = myTeam[0].move4[0];
  myImg = document.getElementById("my");
  enImg = document.getElementById("en");
  myHealthBar = document.getElementById("myHP");
  enHealthBar = document.getElementById("enHP");
  updateHealthBar(game.myCurr, myHealthBar);
  updateHealthBar(game.enCurr, enHealthBar);
};

setup();

let updateMyCurr = function(e) {
  game.myCurr = e;
  if (e.move1 !== null) m0.innerText = e.move1[0];
  else m0.innerText = "";
  if (e.move2 !== null) m1.innerText = e.move2[0];
  else m1.innerText = "";
  if (e.move3 !== null) m2.innerText = e.move3[0];
  else m2.innerText = "";
  if (e.move4 !== null) m3.innerText = e.move4[0];
  else m3.innerText = "";
  myName.innerText = e.name;
  myHealth.innerText = e.currentHP + "/" + e.hpStat;
  updateMyCanvas(e);
};
let updateMyCanvas = function(e) {
  myImg.src = e.sprite[1];
};

let updateEnCurr = function(e) {
  game.enCurr = e;
  enName.innerText = e.name;
  enHealth.innerText = e.currentHP + "/" + e.hpStat;
  updateEnCanvas(e);
};
let updateEnCanvas = function(e) {
  enImg.src = e.sprite[0];
};

let clearCanvas = function() {
  while (screen.childElementCount > 0) {
    screen.removeChild(screen.children[0]);
  }
};

let clearLog = function() {
  log.innerHTML = "";
}

let addToLog = function(e) {
  // console.log(e);
  log.innerHTML += e + "<br>";
}

let typeEffectiveness = [
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
let calculateDanger = function(a1, a2, d1, d2) { //0-8
  return ((typeEffectiveness[typeIndex(a1)][typeIndex(d1)] / 2) * (typeEffectiveness[typeIndex(a2)][typeIndex(d1)] / 2)) * ((typeEffectiveness[typeIndex(a1)][typeIndex(d2)] / 2) * (typeEffectiveness[typeIndex(a2)][typeIndex(d2)] / 2));
}
let typeIndex = function(t) {
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
  updateEnCurr(game.enCurr);
  updateHealthBar(game.enCurr, enHealthBar);
  let alive = false;
  for (let x = 0; x < t.length; x++) {
    if (t[x].currentHP > 0) {
      alive = true;
      break;
    }
  }
  return alive;
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

let myOptions = [];

function switchIn(e) {
  // console.log(e);
  updateMyCurr(e);
  updateHealthBar(game.myCurr, myHealthBar);
  while (sixMons.childElementCount > 0) {
    sixMons.removeChild(sixMons.children[0]);
  }
  one = t1;
  two = t2;
  tre = t3;
  fou = t4;
  fiv = t5;
  six = t6;
  m0 = tm1;
  m1 = tm2;
  m2 = tm3;
  m3 = tm4;
  if (one !== null) sixMons.appendChild(one);
  if (two !== null) sixMons.appendChild(two);
  if (tre !== null) sixMons.appendChild(tre);
  if (fou !== null) sixMons.appendChild(fou);
  if (fiv !== null) sixMons.appendChild(fiv);
  if (six !== null) sixMons.appendChild(six);
  fourMoves.appendChild(tm1);
  fourMoves.appendChild(tm2);
  fourMoves.appendChild(tm3);
  fourMoves.appendChild(tm4);
  myOptions = [];
}

let g = document.getElementById("bot").children;
let generateTeam = function(w){
  gen = [];
  info = [];
  for (let x = 0; x < 6; x++) {
    let p = g[Math.floor(Math.random()*g.length)];
    while (gen.includes(p)) p = g[Math.floor(Math.random()*g.length)];
    gen.push(p);
  }
  // console.log(gen);

  for (let x = 0; x < 6; x++) {
    temp = [];
    let list = gen[x].innerHTML.split("\n");
    // console.log(list);
    let poke = list[0];
    let ability = list[1].split("Ability: ")[1].trim().split("/")[Math.floor(Math.random()*list[1].split("Ability: ")[1].trim().split("/").length)].trim();
    let mo0 = list[2].split(/-(.+)/)[1].trim().split("/")[Math.floor(Math.random()*list[2].split(/-(.+)/)[1].trim().split("/").length)].trim();
    let mo1 = list[3].split(/-(.+)/)[1].trim().split("/")[Math.floor(Math.random()*list[3].split(/-(.+)/)[1].trim().split("/").length)].trim();
    let mo2 = list[4].split(/-(.+)/)[1].trim().split("/")[Math.floor(Math.random()*list[4].split(/-(.+)/)[1].trim().split("/").length)].trim();
    let mo3 = list[5].split(/-(.+)/)[1].trim().split("/")[Math.floor(Math.random()*list[5].split(/-(.+)/)[1].trim().split("/").length)].trim();
    let gend = ["male", "female"][Math.floor(Math.random()*["male", "female"].length)];
    let hap = 255;
    let po0 = w;
    let po1 = w;
    let po2 = w;
    let po3 = w;
    let po4 = w;
    let po5 = w;
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

function startNewGame() {
  while (newGame.childElementCount > 0) {
    newGame.removeChild(newGame.children[0]);
  }
  streak++;
  clearCanvas();
  generateTeam(84);
  setup();
  s.innerText = "Streak: " + streak;
}

let update = function(e) {
  clearLog();
  var myP = -10;
  var enP = -10;
  if (e instanceof Pokemon) {
    if (e == game.myCurr) {
      addToLog(e.name + " is already in the battle!");
      return;
    }
    if (e.currentHP <= 0)  {
      addToLog(e.name + " is unable to battle...");
      return;
    }
  }
  var enOptions = [game.enCurr.move1, game.enCurr.move2, game.enCurr.move3, game.enCurr.move4]; //[m1, m2, m3, m4, enTeam[0], enTeam[1], enTeam[2], enTeam[3], enTeam[4], enTeam[5]]
  if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
  if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
  if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
  if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
  if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
  if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
//id|name|type|power|pp|priority|class|category|desc|ailment|ailChance|statChanges|
//critRate|drain|flinch|healing|statChance|minTurns|maxTurns|minHits|maxHits|accuracy
  let factor = [];
  let multiplier = getRandomFloat(1.1, 1.3);
  for (let i = 0; i < enOptions.length; i++) {
    if (i < 4) {
      if ((enOptions[i][6].localeCompare("heal") == 0)) {
        if (game.enCurr.currentHP < game.enCurr.hpStat * 2 / 3) multiplier = 1.5;
        else multiplier = 0;
      }
      else if ((enOptions[i][6].localeCompare("unique") == 0)) multiplier = getRandomFloat(.5, 2);
      else if ((enOptions[i][6].localeCompare("ailment") == 0) || (enOptions[i][6].localeCompare("whole-field-effect") == 0)) {
        if (game.myCurr.status.length > 0) multiplier = 0;
        if (game.weather.length > 0) multiplier = 0;
      }
      else if (enOptions[i][6].localeCompare("field-effect") == 0) {
        if (game.myHazards.length == 1) multiplier * 1.25;
        else if (game.myHazards.length > 1) multiplier * .9 / game.myCurr.myHazards.length;
      }
      else if (enOptions[i][5].localeCompare("status") == 0) {
        // let buff = (game.enCurr.atkMod - 1) + (game.enCurr.defMod - 1) + (game.enCurr.spaMod - 1) + (game.enCurr.spdMod - 1) + (game.enCurr.speMod - 1) + (game.enCurr.accMod - 1) + (game.enCurr.evaMod - 1);
        multiplier = getRandomFloat(0, 1);
      }
      factor.push(calculateDanger(enOptions[i][1], "None", game.myCurr.type[0], game.myCurr.type[1]) * multiplier);
    }
    else {
      if (1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], game.enCurr.type[0], game.enCurr.type[1]) >= 2) break;
      else if (enOptions[i] == game.enCurr) factor.push(0);
      else factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
    }
  }
  var max = indexOfMax(factor);
  let swap = false;
  if (max > 3) {
    swap = true;
  }
  else {
    enP = enOptions[max][4];
  }
  if (!(e instanceof Pokemon)) {
  if (e.id.localeCompare("m0") == 0) myP = game.myCurr.move1[4];
    else if (e.id.localeCompare("m1") == 0) myP = game.myCurr.move2[4];
    else if (e.id.localeCompare("m2") == 0) myP = game.myCurr.move3[4];
    else if (e.id.localeCompare("m3") == 0) myP = game.myCurr.move4[4];
  }
  // console.log(enP);
  // console.log(myP);
  if (myP == enP) {
    if (game.myCurr.speStat * game.myCurr.speMod > game.enCurr.speStat * game.enCurr.speMod) {
      let mySmack = true;
      let enSmack = true;
      if (e instanceof Pokemon) {
        game.myCurr.atkMod = 1;
        game.myCurr.defMod = 1;
        game.myCurr.spaMod = 1;
        game.myCurr.spdMod = 1;
        game.myCurr.speMod = 1;
        game.myCurr.accMod = 1;
        game.myCurr.evaMod = 1;
        addToLog("Come back, " + game.myCurr.name + "!  Go, " + e.name + "!");
        updateMyCurr(e);
        mySmack = false;
      }
      if (swap) {
        game.enCurr.atkMod = 1;
        game.enCurr.defMod = 1;
        game.enCurr.spaMod = 1;
        game.enCurr.spdMod = 1;
        game.enCurr.speMod = 1;
        game.enCurr.accMod = 1;
        game.enCurr.evaMod = 1;
        addToLog("Opponent withdrew " + game.enCurr.name + " and sent out " + enOptions[max].name + ".");
        updateEnCurr(enOptions[max]);
        enSmack = false;
      } //Check for swap
      if (mySmack) {
        var m;
        if (game.myCurr.move1 !== null && (e.innerText.localeCompare(game.myCurr.move1[0]) == 0)) m = game.myCurr.move1;
        if (game.myCurr.move2 !== null && (e.innerText.localeCompare(game.myCurr.move2[0]) == 0)) m = game.myCurr.move2;
        if (game.myCurr.move3 !== null && (e.innerText.localeCompare(game.myCurr.move3[0]) == 0)) m = game.myCurr.move3;
        if (game.myCurr.move4 !== null && (e.innerText.localeCompare(game.myCurr.move4[0]) == 0)) m = game.myCurr.move4;
        game.myCurr.attack(e.innerText, game.enCurr, m);
      }
      if (game.enCurr.currentHP > 0) {
        if (enSmack) {game.enCurr.attack(enOptions[max][0], game.myCurr, enOptions[max]);}
        if (game.myCurr.currentHP <= 0) {
          addToLog(game.myCurr.name + " fainted.");
          updateMyCurr(game.myCurr);
          updateEnCurr(game.enCurr);
          updateHealthBar(game.myCurr, myHealthBar);
          updateHealthBar(game.enCurr, enHealthBar);
          if (typeof myTeam[0] !== 'undefined' && myTeam[0].currentHP > 0) myOptions.push(myTeam[0]);
          if (typeof myTeam[1] !== 'undefined' && myTeam[1].currentHP > 0) myOptions.push(myTeam[1]);
          if (typeof myTeam[2] !== 'undefined' && myTeam[2].currentHP > 0) myOptions.push(myTeam[2]);
          if (typeof myTeam[3] !== 'undefined' && myTeam[3].currentHP > 0) myOptions.push(myTeam[3]);
          if (typeof myTeam[4] !== 'undefined' && myTeam[4].currentHP > 0) myOptions.push(myTeam[4]);
          if (typeof myTeam[5] !== 'undefined' && myTeam[5].currentHP > 0) myOptions.push(myTeam[5]);
          if (myOptions.length <= 0) {
            addToLog("You are out of usable Pokemon...");
            addToLog("GAME OVER");
            endGame();
            return;
          }
          addToLog("Choose your next Pokemon...");
          t1 = one;
          t2 = two;
          t3 = tre;
          t4 = fou;
          t5 = fiv;
          t6 = six;
          tm1 = m0;
          tm2 = m1;
          tm3 = m2;
          tm4 = m3;
          while (fourMoves.childElementCount > 0) {
            fourMoves.removeChild(fourMoves.children[0]);
          }
          while (sixMons.childElementCount > 0) {
            sixMons.removeChild(sixMons.children[0]);
          }
          for (let x = 0; x < myOptions.length; x++) {
            let b = document.createElement("button");
            b.innerHTML = "<img src = \'" + (myOptions[x].sprite[0]) + "\' style=\"position:absolute; right:0; top:0; width:5vw;\">";
            b.className = "btn btn-light";
            b.style= "position:relative; width:5vw; height:5vw; padding:0; font-size:1vw;";
            if (myOptions[x] === p0) b.addEventListener('click', function(e) {switchIn(p0)});
            if (myOptions[x] === p1) b.addEventListener('click', function(e) {switchIn(p1)});
            if (myOptions[x] === p2) b.addEventListener('click', function(e) {switchIn(p2)});
            if (myOptions[x] === p3) b.addEventListener('click', function(e) {switchIn(p3)});
            if (myOptions[x] === p4) b.addEventListener('click', function(e) {switchIn(p4)});
            if (myOptions[x] === p5) b.addEventListener('click', function(e) {switchIn(p5)});
            sixMons.appendChild(b);
          }
          return;
        }
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
        for (let i = 0; i < enOptions.length; i++) {
            factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
        }
        max = indexOfMax(factor);
        // console.log("max: " + max + ", " + enOptions);
        if (!checkTeam(enTeam)) {
          addToLog("You have defeated opponent #" + (streak + 1) + "!");
          let b = document.createElement("button");
          b.innerText = "Next Battle!";
          b.className = "btn btn-primary";
          b.type = "button";
          b.style = "position:absolute; left:50%; top:35%; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);";
          b.addEventListener('click', function(e){startNewGame()});
          newGame.appendChild(b);
          return;
        }
        addToLog("Opponent's " + game.enCurr.name + " fainted.");
        addToLog("Opponent sent in " + enOptions[max].name + "!");
        updateEnCurr(enOptions[max]);
      }
    }
    else if (game.myCurr.speStat * game.myCurr.speMod < game.enCurr.speStat * game.enCurr.speMod) {
      let mySmack = true;
      let enSmack = true;
      if (swap) {
        game.enCurr.atkMod = 1;
        game.enCurr.defMod = 1;
        game.enCurr.spaMod = 1;
        game.enCurr.spdMod = 1;
        game.enCurr.speMod = 1;
        game.enCurr.accMod = 1;
        game.enCurr.evaMod = 1;
        addToLog("Opponent withdrew " + game.enCurr.name + " and sent out " + enOptions[max].name + ".");
        updateEnCurr(enOptions[max]);
        enSmack = false;
      }
      if (e instanceof Pokemon) {
        game.myCurr.atkMod = 1;
        game.myCurr.defMod = 1;
        game.myCurr.spaMod = 1;
        game.myCurr.spdMod = 1;
        game.myCurr.speMod = 1;
        game.myCurr.accMod = 1;
        game.myCurr.evaMod = 1;
        addToLog("Come back, " + game.myCurr.name + "!  Go, " + e.name + "!");
        updateMyCurr(e);
        mySmack = false;
      }
      if (enSmack) {game.enCurr.attack(enOptions[max][0], game.myCurr, enOptions[max]);}
      if (game.myCurr.currentHP <= 0) {
        addToLog(game.myCurr.name + " fainted.");
        updateMyCurr(game.myCurr);
        updateEnCurr(game.enCurr);
        updateHealthBar(game.myCurr, myHealthBar);
        updateHealthBar(game.enCurr, enHealthBar);
        if (typeof myTeam[0] !== 'undefined' && myTeam[0].currentHP > 0) myOptions.push(myTeam[0]);
        if (typeof myTeam[1] !== 'undefined' && myTeam[1].currentHP > 0) myOptions.push(myTeam[1]);
        if (typeof myTeam[2] !== 'undefined' && myTeam[2].currentHP > 0) myOptions.push(myTeam[2]);
        if (typeof myTeam[3] !== 'undefined' && myTeam[3].currentHP > 0) myOptions.push(myTeam[3]);
        if (typeof myTeam[4] !== 'undefined' && myTeam[4].currentHP > 0) myOptions.push(myTeam[4]);
        if (typeof myTeam[5] !== 'undefined' && myTeam[5].currentHP > 0) myOptions.push(myTeam[5]);
        if (myOptions.length <= 0) {
          addToLog("You are out of usable Pokemon...");
          addToLog("GAME OVER");
          endGame();
          return;
        }
        addToLog("Choose your next Pokemon...");
        t1 = one;
        t2 = two;
        t3 = tre;
        t4 = fou;
        t5 = fiv;
        t6 = six;
        tm1 = m0;
        tm2 = m1;
        tm3 = m2;
        tm4 = m3;
        while (fourMoves.childElementCount > 0) {
          fourMoves.removeChild(fourMoves.children[0]);
        }
        while (sixMons.childElementCount > 0) {
          sixMons.removeChild(sixMons.children[0]);
        }
        for (let x = 0; x < myOptions.length; x++) {
          let b = document.createElement("button");
          b.innerHTML = "<img src = \'" + (myOptions[x].sprite[0]) + "\' style=\"position:absolute; right:0; top:0; width:5vw;\">";
          b.className = "btn btn-light";
          b.style= "position:relative; width:5vw; height:5vw; padding:0; font-size:1vw;";
          if (myOptions[x] === p0) b.addEventListener('click', function(e) {switchIn(p0)});
          if (myOptions[x] === p1) b.addEventListener('click', function(e) {switchIn(p1)});
          if (myOptions[x] === p2) b.addEventListener('click', function(e) {switchIn(p2)});
          if (myOptions[x] === p3) b.addEventListener('click', function(e) {switchIn(p3)});
          if (myOptions[x] === p4) b.addEventListener('click', function(e) {switchIn(p4)});
          if (myOptions[x] === p5) b.addEventListener('click', function(e) {switchIn(p5)});
          sixMons.appendChild(b);
        }
        return;
      }
      if (mySmack) {
        var m;
        if (game.myCurr.move1 !== null && (e.innerText.localeCompare(game.myCurr.move1[0]) == 0)) m = game.myCurr.move1;
        if (game.myCurr.move2 !== null && (e.innerText.localeCompare(game.myCurr.move2[0]) == 0)) m = game.myCurr.move2;
        if (game.myCurr.move3 !== null && (e.innerText.localeCompare(game.myCurr.move3[0]) == 0)) m = game.myCurr.move3;
        if (game.myCurr.move4 !== null && (e.innerText.localeCompare(game.myCurr.move4[0]) == 0)) m = game.myCurr.move4;
        game.myCurr.attack(e.innerText, game.enCurr, m);
      }
      if (game.enCurr.currentHP <= 0) {
        enOptions = [];
        if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
        if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
        if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
        if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
        if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
        if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
        factor = [];
        for (let i = 0; i < enOptions.length; i++) {
            factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
        }
        max = indexOfMax(factor);
        // console.log("max: " + max + ", " + enOptions);
        if (!checkTeam(enTeam)) {
          addToLog("You have defeated opponent #" + (streak + 1) + "!");
          let b = document.createElement("button");
          b.innerText = "Next Battle!";
          b.className = "btn btn-primary";
          b.type = "button";
          b.style = "position:absolute; left:50%; top:35%; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);";
          b.addEventListener('click', function(e){startNewGame()});
          newGame.appendChild(b);
          return;
        }
        addToLog("Opponent's " + game.enCurr.name + " fainted.");
        addToLog("Opponent sent in " + enOptions[max].name + "!");
        updateEnCurr(enOptions[max]);
      }
    }
    else { //tied speed
      let random_boolean = Math.random() >= 0.5;
      if (random_boolean) {
        let mySmack = true;
        let enSmack = true;
        if (e instanceof Pokemon) {
          game.myCurr.atkMod = 1;
          game.myCurr.defMod = 1;
          game.myCurr.spaMod = 1;
          game.myCurr.spdMod = 1;
          game.myCurr.speMod = 1;
          game.myCurr.accMod = 1;
          game.myCurr.evaMod = 1;
          addToLog("Come back, " + game.myCurr.name + "!  Go, " + e.name + "!");
          updateMyCurr(e);
          mySmack = false;
        }
        if (swap) {
          game.enCurr.atkMod = 1;
          game.enCurr.defMod = 1;
          game.enCurr.spaMod = 1;
          game.enCurr.spdMod = 1;
          game.enCurr.speMod = 1;
          game.enCurr.accMod = 1;
          game.enCurr.evaMod = 1;
          addToLog("Opponent withdrew " + game.enCurr.name + " and sent out " + enOptions[max].name + ".");
          updateEnCurr(enOptions[max]);
          enSmack = false;
        } //Check for swap
        if (mySmack) {
          var m;
          if (game.myCurr.move1 !== null && (e.innerText.localeCompare(game.myCurr.move1[0]) == 0)) m = game.myCurr.move1;
          if (game.myCurr.move2 !== null && (e.innerText.localeCompare(game.myCurr.move2[0]) == 0)) m = game.myCurr.move2;
          if (game.myCurr.move3 !== null && (e.innerText.localeCompare(game.myCurr.move3[0]) == 0)) m = game.myCurr.move3;
          if (game.myCurr.move4 !== null && (e.innerText.localeCompare(game.myCurr.move4[0]) == 0)) m = game.myCurr.move4;
          game.myCurr.attack(e.innerText, game.enCurr, m);
        }
        if (game.enCurr.currentHP > 0) {
          if (enSmack) {game.enCurr.attack(enOptions[max][0], game.myCurr, enOptions[max]);}
          if (game.myCurr.currentHP <= 0) {
            addToLog(game.myCurr.name + " fainted.");
            updateMyCurr(game.myCurr);
            updateEnCurr(game.enCurr);
            updateHealthBar(game.myCurr, myHealthBar);
            updateHealthBar(game.enCurr, enHealthBar);
            if (typeof myTeam[0] !== 'undefined' && myTeam[0].currentHP > 0) myOptions.push(myTeam[0]);
            if (typeof myTeam[1] !== 'undefined' && myTeam[1].currentHP > 0) myOptions.push(myTeam[1]);
            if (typeof myTeam[2] !== 'undefined' && myTeam[2].currentHP > 0) myOptions.push(myTeam[2]);
            if (typeof myTeam[3] !== 'undefined' && myTeam[3].currentHP > 0) myOptions.push(myTeam[3]);
            if (typeof myTeam[4] !== 'undefined' && myTeam[4].currentHP > 0) myOptions.push(myTeam[4]);
            if (typeof myTeam[5] !== 'undefined' && myTeam[5].currentHP > 0) myOptions.push(myTeam[5]);
            if (myOptions.length <= 0) {
              addToLog("You are out of usable Pokemon...");
              addToLog("GAME OVER");
              endGame();
              return;
            }
            addToLog("Choose your next Pokemon...");
            t1 = one;
            t2 = two;
            t3 = tre;
            t4 = fou;
            t5 = fiv;
            t6 = six;
            tm1 = m0;
            tm2 = m1;
            tm3 = m2;
            tm4 = m3;
            while (fourMoves.childElementCount > 0) {
              fourMoves.removeChild(fourMoves.children[0]);
            }
            while (sixMons.childElementCount > 0) {
              sixMons.removeChild(sixMons.children[0]);
            }
            for (let x = 0; x < myOptions.length; x++) {
              let b = document.createElement("button");
              b.innerHTML = "<img src = \'" + (myOptions[x].sprite[0]) + "\' style=\"position:absolute; right:0; top:0; width:5vw;\">";
              b.className = "btn btn-light";
              b.style= "position:relative; width:5vw; height:5vw; padding:0; font-size:1vw;";
              if (myOptions[x] === p0) b.addEventListener('click', function(e) {switchIn(p0)});
              if (myOptions[x] === p1) b.addEventListener('click', function(e) {switchIn(p1)});
              if (myOptions[x] === p2) b.addEventListener('click', function(e) {switchIn(p2)});
              if (myOptions[x] === p3) b.addEventListener('click', function(e) {switchIn(p3)});
              if (myOptions[x] === p4) b.addEventListener('click', function(e) {switchIn(p4)});
              if (myOptions[x] === p5) b.addEventListener('click', function(e) {switchIn(p5)});
              sixMons.appendChild(b);
            }
            return;
          }
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
          for (let i = 0; i < enOptions.length; i++) {
              factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
          }
          max = indexOfMax(factor);
          if (!checkTeam(enTeam)) {
            addToLog("You have defeated opponent #" + (streak + 1) + "!");
            let b = document.createElement("button");
            b.innerText = "Next Battle!";
            b.className = "btn btn-primary";
            b.type = "button";
            b.style = "position:absolute; left:50%; top:35%; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);";
            b.addEventListener('click', function(e){startNewGame()});
            newGame.appendChild(b);
            return;
          }
          addToLog("Opponent's " + game.enCurr.name + " fainted.");
          addToLog("Opponent sent in " + enOptions[max].name + "!");
          updateEnCurr(enOptions[max]);
        }
      }
      else {
        let mySmack = true;
        let enSmack = true;
        if (swap) {
          game.enCurr.atkMod = 1;
          game.enCurr.defMod = 1;
          game.enCurr.spaMod = 1;
          game.enCurr.spdMod = 1;
          game.enCurr.speMod = 1;
          game.enCurr.accMod = 1;
          game.enCurr.evaMod = 1;
          addToLog("Opponent withdrew " + game.enCurr.name + " and sent out " + enOptions[max].name + ".");
          updateEnCurr(enOptions[max]);
          enSmack = false;
        }
        if (e instanceof Pokemon) {
          game.myCurr.atkMod = 1;
          game.myCurr.defMod = 1;
          game.myCurr.spaMod = 1;
          game.myCurr.spdMod = 1;
          game.myCurr.speMod = 1;
          game.myCurr.accMod = 1;
          game.myCurr.evaMod = 1;
          addToLog("Come back, " + game.myCurr.name + "!  Go, " + e.name + "!");
          updateMyCurr(e);
          mySmack = false;
        }
        if (enSmack) {game.enCurr.attack(enOptions[max][0], game.myCurr, enOptions[max]);}
        if (game.myCurr.currentHP <= 0) {
          addToLog(game.myCurr.name + " fainted.");
          updateMyCurr(game.myCurr);
          updateEnCurr(game.enCurr);
          updateHealthBar(game.myCurr, myHealthBar);
          updateHealthBar(game.enCurr, enHealthBar);
          if (typeof myTeam[0] !== 'undefined' && myTeam[0].currentHP > 0) myOptions.push(myTeam[0]);
          if (typeof myTeam[1] !== 'undefined' && myTeam[1].currentHP > 0) myOptions.push(myTeam[1]);
          if (typeof myTeam[2] !== 'undefined' && myTeam[2].currentHP > 0) myOptions.push(myTeam[2]);
          if (typeof myTeam[3] !== 'undefined' && myTeam[3].currentHP > 0) myOptions.push(myTeam[3]);
          if (typeof myTeam[4] !== 'undefined' && myTeam[4].currentHP > 0) myOptions.push(myTeam[4]);
          if (typeof myTeam[5] !== 'undefined' && myTeam[5].currentHP > 0) myOptions.push(myTeam[5]);
          if (myOptions.length <= 0) {
            addToLog("You are out of usable Pokemon...");
            addToLog("GAME OVER");
            endGame();
            return;
          }
          addToLog("Choose your next Pokemon...");
          t1 = one;
          t2 = two;
          t3 = tre;
          t4 = fou;
          t5 = fiv;
          t6 = six;
          tm1 = m0;
          tm2 = m1;
          tm3 = m2;
          tm4 = m3;
          while (fourMoves.childElementCount > 0) {
            fourMoves.removeChild(fourMoves.children[0]);
          }
          while (sixMons.childElementCount > 0) {
            sixMons.removeChild(sixMons.children[0]);
          }
          for (let x = 0; x < myOptions.length; x++) {
            let b = document.createElement("button");
            b.innerHTML = "<img src = \'" + (myOptions[x].sprite[0]) + "\' style=\"position:absolute; right:0; top:0; width:5vw;\">";
            b.className = "btn btn-light";
            b.style= "position:relative; width:5vw; height:5vw; padding:0; font-size:1vw;";
            if (myOptions[x] === p0) b.addEventListener('click', function(e) {switchIn(p0)});
            if (myOptions[x] === p1) b.addEventListener('click', function(e) {switchIn(p1)});
            if (myOptions[x] === p2) b.addEventListener('click', function(e) {switchIn(p2)});
            if (myOptions[x] === p3) b.addEventListener('click', function(e) {switchIn(p3)});
            if (myOptions[x] === p4) b.addEventListener('click', function(e) {switchIn(p4)});
            if (myOptions[x] === p5) b.addEventListener('click', function(e) {switchIn(p5)});
            sixMons.appendChild(b);
          }
          return;
        }
        if (mySmack) {
          var m;
          if (game.myCurr.move1 !== null && (e.innerText.localeCompare(game.myCurr.move1[0]) == 0)) m = game.myCurr.move1;
          if (game.myCurr.move2 !== null && (e.innerText.localeCompare(game.myCurr.move2[0]) == 0)) m = game.myCurr.move2;
          if (game.myCurr.move3 !== null && (e.innerText.localeCompare(game.myCurr.move3[0]) == 0)) m = game.myCurr.move3;
          if (game.myCurr.move4 !== null && (e.innerText.localeCompare(game.myCurr.move4[0]) == 0)) m = game.myCurr.move4;
          game.myCurr.attack(e.innerText, game.enCurr, m);
        }
        if (game.enCurr.currentHP <= 0) {
          enOptions = [];
          if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
          if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
          if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
          if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
          if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
          if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
          factor = [];
          for (let i = 0; i < enOptions.length; i++) {
              factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
          }
          max = indexOfMax(factor);
          if (!checkTeam(enTeam)) {
            addToLog("You have defeated opponent #" + (streak + 1) + "!");
            let b = document.createElement("button");
            b.innerText = "Next Battle!";
            b.className = "btn btn-primary";
            b.type = "button";
            b.style = "position:absolute; left:50%; top:35%; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);";
            b.addEventListener('click', function(e){startNewGame()});
            newGame.appendChild(b);
            return;
          }
          addToLog("Opponent's " + game.enCurr.name + " fainted.");
          addToLog("Opponent sent in " + enOptions[max].name + "!");
          updateEnCurr(enOptions[max]);
        }
      }
    }
  }
  else if (myP > enP) {
    let mySmack = true;
    let enSmack = true;
    if (swap) {
      game.enCurr.atkMod = 1;
      game.enCurr.defMod = 1;
      game.enCurr.spaMod = 1;
      game.enCurr.spdMod = 1;
      game.enCurr.speMod = 1;
      game.enCurr.accMod = 1;
      game.enCurr.evaMod = 1;
      addToLog("Opponent withdrew " + game.enCurr.name + " and sent out " + enOptions[max].name + ".");
      updateEnCurr(enOptions[max]);
      enSmack = false;
    }
    if (e instanceof Pokemon) {
      game.myCurr.atkMod = 1;
      game.myCurr.defMod = 1;
      game.myCurr.spaMod = 1;
      game.myCurr.spdMod = 1;
      game.myCurr.speMod = 1;
      game.myCurr.accMod = 1;
      game.myCurr.evaMod = 1;
      addToLog("Come back, " + game.myCurr.name + "!  Go, " + e.name + "!");
      updateMyCurr(e);
      mySmack = false;
    }
    if (mySmack) {
      var m;
      if (game.myCurr.move1 !== null && (e.innerText.localeCompare(game.myCurr.move1[0]) == 0)) m = game.myCurr.move1;
      if (game.myCurr.move2 !== null && (e.innerText.localeCompare(game.myCurr.move2[0]) == 0)) m = game.myCurr.move2;
      if (game.myCurr.move3 !== null && (e.innerText.localeCompare(game.myCurr.move3[0]) == 0)) m = game.myCurr.move3;
      if (game.myCurr.move4 !== null && (e.innerText.localeCompare(game.myCurr.move4[0]) == 0)) m = game.myCurr.move4;
      game.myCurr.attack(e.innerText, game.enCurr, m);
    }
    if (game.enCurr.currentHP <= 0) {
      enOptions = [];
      if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
      if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
      if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
      if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
      if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
      if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
      factor = [];
      for (let i = 0; i < enOptions.length; i++) {
          factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
      }
      max = indexOfMax(factor);
      if (!checkTeam(enTeam)) {
        addToLog("You have defeated opponent #" + (streak + 1) + "!");
        let b = document.createElement("button");
        b.innerText = "Next Battle!";
        b.className = "btn btn-primary";
        b.type = "button";
        b.style = "position:absolute; left:50%; top:35%; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);";
        b.addEventListener('click', function(e){startNewGame()});
        newGame.appendChild(b);
        return;
      }
      addToLog("Opponent's " + game.enCurr.name + " fainted.");
      addToLog("Opponent sent in " + enOptions[max].name + "!");
      updateEnCurr(enOptions[max]);
      updateHealthBar(game.enCurr, enHealthBar);
      return;
    }
    if (enSmack) {game.enCurr.attack(enOptions[max][0], game.myCurr, enOptions[max]);}
    if (game.myCurr.currentHP <= 0) {
      addToLog(game.myCurr.name + " fainted.");
      updateMyCurr(game.myCurr);
      updateEnCurr(game.enCurr);
      updateHealthBar(game.myCurr, myHealthBar);
      updateHealthBar(game.enCurr, enHealthBar);
      if (typeof myTeam[0] !== 'undefined' && myTeam[0].currentHP > 0) myOptions.push(myTeam[0]);
      if (typeof myTeam[1] !== 'undefined' && myTeam[1].currentHP > 0) myOptions.push(myTeam[1]);
      if (typeof myTeam[2] !== 'undefined' && myTeam[2].currentHP > 0) myOptions.push(myTeam[2]);
      if (typeof myTeam[3] !== 'undefined' && myTeam[3].currentHP > 0) myOptions.push(myTeam[3]);
      if (typeof myTeam[4] !== 'undefined' && myTeam[4].currentHP > 0) myOptions.push(myTeam[4]);
      if (typeof myTeam[5] !== 'undefined' && myTeam[5].currentHP > 0) myOptions.push(myTeam[5]);
      if (myOptions.length <= 0) {
        addToLog("You are out of usable Pokemon...");
        addToLog("GAME OVER");
        endGame();
        return;
      }
      addToLog("Choose your next Pokemon...");
      t1 = one;
      t2 = two;
      t3 = tre;
      t4 = fou;
      t5 = fiv;
      t6 = six;
      tm1 = m0;
      tm2 = m1;
      tm3 = m2;
      tm4 = m3;
      while (fourMoves.childElementCount > 0) {
        fourMoves.removeChild(fourMoves.children[0]);
      }
      while (sixMons.childElementCount > 0) {
        sixMons.removeChild(sixMons.children[0]);
      }
      for (let x = 0; x < myOptions.length; x++) {
        let b = document.createElement("button");
        b.innerHTML = "<img src = \'" + (myOptions[x].sprite[0]) + "\' style=\"position:absolute; right:0; top:0; width:5vw;\">";
        b.className = "btn btn-light";
        b.style= "position:relative; width:5vw; height:5vw; padding:0; font-size:1vw;";
        if (myOptions[x] === p0) b.addEventListener('click', function(e) {switchIn(p0)});
        if (myOptions[x] === p1) b.addEventListener('click', function(e) {switchIn(p1)});
        if (myOptions[x] === p2) b.addEventListener('click', function(e) {switchIn(p2)});
        if (myOptions[x] === p3) b.addEventListener('click', function(e) {switchIn(p3)});
        if (myOptions[x] === p4) b.addEventListener('click', function(e) {switchIn(p4)});
        if (myOptions[x] === p5) b.addEventListener('click', function(e) {switchIn(p5)});
        sixMons.appendChild(b);
      }
      return;
    }
  }
  else if (myP < enP) {
    let mySmack = true;
    let enSmack = true;
    if (swap) {
      game.enCurr.atkMod = 1;
      game.enCurr.defMod = 1;
      game.enCurr.spaMod = 1;
      game.enCurr.spdMod = 1;
      game.enCurr.speMod = 1;
      game.enCurr.accMod = 1;
      game.enCurr.evaMod = 1;
      addToLog("Opponent withdrew " + game.enCurr.name + " and sent out " + enOptions[max].name + ".");
      updateEnCurr(enOptions[max]);
      enSmack = false;
    }
    if (e instanceof Pokemon) {
      game.myCurr.atkMod = 1;
      game.myCurr.defMod = 1;
      game.myCurr.spaMod = 1;
      game.myCurr.spdMod = 1;
      game.myCurr.speMod = 1;
      game.myCurr.accMod = 1;
      game.myCurr.evaMod = 1;
      addToLog("Come back, " + game.myCurr.name + "!  Go, " + e.name + "!");
      updateMyCurr(e);
      mySmack = false;
    }
    if (enSmack) {game.enCurr.attack(enOptions[max][0], game.myCurr, enOptions[max]);}
    if (game.myCurr.currentHP <= 0) {
      addToLog(game.myCurr.name + " fainted.");
      updateMyCurr(game.myCurr);
      updateEnCurr(game.enCurr);
      updateHealthBar(game.myCurr, myHealthBar);
      updateHealthBar(game.enCurr, enHealthBar);
      if (typeof myTeam[0] !== 'undefined' && myTeam[0].currentHP > 0) myOptions.push(myTeam[0]);
      if (typeof myTeam[1] !== 'undefined' && myTeam[1].currentHP > 0) myOptions.push(myTeam[1]);
      if (typeof myTeam[2] !== 'undefined' && myTeam[2].currentHP > 0) myOptions.push(myTeam[2]);
      if (typeof myTeam[3] !== 'undefined' && myTeam[3].currentHP > 0) myOptions.push(myTeam[3]);
      if (typeof myTeam[4] !== 'undefined' && myTeam[4].currentHP > 0) myOptions.push(myTeam[4]);
      if (typeof myTeam[5] !== 'undefined' && myTeam[5].currentHP > 0) myOptions.push(myTeam[5]);
      if (myOptions.length <= 0) {
        addToLog("You are out of usable Pokemon...");
        addToLog("GAME OVER");
        endGame();
        return;
      }
      addToLog("Choose your next Pokemon...");
      t1 = one;
      t2 = two;
      t3 = tre;
      t4 = fou;
      t5 = fiv;
      t6 = six;
      tm1 = m0;
      tm2 = m1;
      tm3 = m2;
      tm4 = m3;
      while (fourMoves.childElementCount > 0) {
        fourMoves.removeChild(fourMoves.children[0]);
      }
      while (sixMons.childElementCount > 0) {
        sixMons.removeChild(sixMons.children[0]);
      }
      for (let x = 0; x < myOptions.length; x++) {
        let b = document.createElement("button");
        b.innerHTML = "<img src = \'" + (myOptions[x].sprite[0]) + "\' style=\"position:absolute; right:0; top:0; width:5vw;\">";
        b.className = "btn btn-light";
        b.style= "position:relative; width:5vw; height:5vw; padding:0; font-size:1vw;";
        if (myOptions[x] === p0) b.addEventListener('click', function(e) {switchIn(p0)});
        if (myOptions[x] === p1) b.addEventListener('click', function(e) {switchIn(p1)});
        if (myOptions[x] === p2) b.addEventListener('click', function(e) {switchIn(p2)});
        if (myOptions[x] === p3) b.addEventListener('click', function(e) {switchIn(p3)});
        if (myOptions[x] === p4) b.addEventListener('click', function(e) {switchIn(p4)});
        if (myOptions[x] === p5) b.addEventListener('click', function(e) {switchIn(p5)});
        sixMons.appendChild(b);
      }
      return;
    }
    if (mySmack) {
      var m;
      if (game.myCurr.move1 !== null && (e.innerText.localeCompare(game.myCurr.move1[0]) == 0)) m = game.myCurr.move1;
      if (game.myCurr.move2 !== null && (e.innerText.localeCompare(game.myCurr.move2[0]) == 0)) m = game.myCurr.move2;
      if (game.myCurr.move3 !== null && (e.innerText.localeCompare(game.myCurr.move3[0]) == 0)) m = game.myCurr.move3;
      if (game.myCurr.move4 !== null && (e.innerText.localeCompare(game.myCurr.move4[0]) == 0)) m = game.myCurr.move4;
      game.myCurr.attack(e.innerText, game.enCurr, m);
    }
    if (game.enCurr.currentHP <= 0) {
      enOptions = [];
      if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
      if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
      if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
      if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
      if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
      if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
      factor = [];
      for (let i = 0; i < enOptions.length; i++) {
          factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
      }
      max = indexOfMax(factor);
      if (!checkTeam(enTeam)) {
        addToLog("You have defeated opponent #" + (streak + 1) + "!");
        let b = document.createElement("button");
        b.innerText = "Next Battle!";
        b.className = "btn btn-primary";
        b.type = "button";
        b.style = "position:absolute; left:50%; top:35%; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);";
        b.addEventListener('click', function(e){startNewGame()});
        newGame.appendChild(b);
        return;
      }
      addToLog("Opponent's " + game.enCurr.name + " fainted.");
      addToLog("Opponent sent in " + enOptions[max].name + "!");
      updateEnCurr(enOptions[max]);
    }
  }
  if (game.myCurr.status.includes("burn")) {
    game.myCurr.currentHP -= Math.round(game.myCurr.hpStat / 12);
    addToLog(game.myCurr.name + " was hurt by its burn.");
  }
  if (game.myCurr.status.includes("poison")) {
    game.myCurr.currentHP -= Math.round(game.myCurr.hpStat / 12);
    addToLog(game.myCurr.name + " was hurt by poison.");
  }
  if (game.enCurr.status.includes("burn")) {
    game.enCurr.currentHP -= Math.round(game.enCurr.hpStat / 12);
    addToLog(game.enCurr.name + " was hurt by its burn.");
  }
  if (game.enCurr.status.includes("poison")) {
    game.enCurr.currentHP -= Math.round(game.enCurr.hpStat / 12);
    addToLog(game.enCurr.name + " was hurt by poison.");
  }
  if (game.enCurr.currentHP <= 0) {
    enOptions = [];
    if (enTeam[0].currentHP > 0) enOptions.push(enTeam[0]);
    if (enTeam[1].currentHP > 0) enOptions.push(enTeam[1]);
    if (enTeam[2].currentHP > 0) enOptions.push(enTeam[2]);
    if (enTeam[3].currentHP > 0) enOptions.push(enTeam[3]);
    if (enTeam[4].currentHP > 0) enOptions.push(enTeam[4]);
    if (enTeam[5].currentHP > 0) enOptions.push(enTeam[5]);
    factor = [];
    for (let i = 0; i < enOptions.length; i++) {
        factor.push(1 / calculateDanger(game.myCurr.type[0], game.myCurr.type[1], enOptions[i].type[0], enOptions[i].type[1]));
    }
    max = indexOfMax(factor);
    if (!checkTeam(enTeam)) {
      addToLog("You have defeated opponent #" + (streak + 1) + "!");
      let b = document.createElement("button");
      b.innerText = "Next Battle!";
      b.className = "btn btn-primary";
      b.type = "button";
      b.style = "position:absolute; left:50%; top:35%; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);";
      b.addEventListener('click', function(e){startNewGame()});
      newGame.appendChild(b);
      return;
    }
    addToLog("Opponent's " + game.enCurr.name + " fainted.");
    addToLog("Opponent sent in " + enOptions[max].name + "!");
    updateEnCurr(enOptions[max]);
  }
  if (game.myCurr.currentHP <= 0) {
    addToLog(game.myCurr.name + " fainted.");
    updateMyCurr(game.myCurr);
    updateEnCurr(game.enCurr);
    updateHealthBar(game.myCurr, myHealthBar);
    updateHealthBar(game.enCurr, enHealthBar);
    if (typeof myTeam[0] !== 'undefined' && myTeam[0].currentHP > 0) myOptions.push(myTeam[0]);
    if (typeof myTeam[1] !== 'undefined' && myTeam[1].currentHP > 0) myOptions.push(myTeam[1]);
    if (typeof myTeam[2] !== 'undefined' && myTeam[2].currentHP > 0) myOptions.push(myTeam[2]);
    if (typeof myTeam[3] !== 'undefined' && myTeam[3].currentHP > 0) myOptions.push(myTeam[3]);
    if (typeof myTeam[4] !== 'undefined' && myTeam[4].currentHP > 0) myOptions.push(myTeam[4]);
    if (typeof myTeam[5] !== 'undefined' && myTeam[5].currentHP > 0) myOptions.push(myTeam[5]);
    if (myOptions.length <= 0) {
      addToLog("You are out of usable Pokemon...");
      addToLog("GAME OVER");
      endGame();
      return;
    }
    addToLog("Choose your next Pokemon...");
    t1 = one;
    t2 = two;
    t3 = tre;
    t4 = fou;
    t5 = fiv;
    t6 = six;
    tm1 = m0;
    tm2 = m1;
    tm3 = m2;
    tm4 = m3;
    while (fourMoves.childElementCount > 0) {
      fourMoves.removeChild(fourMoves.children[0]);
    }
    while (sixMons.childElementCount > 0) {
      sixMons.removeChild(sixMons.children[0]);
    }
    for (let x = 0; x < myOptions.length; x++) {
      let b = document.createElement("button");
      b.innerHTML = "<img src = \'" + (myOptions[x].sprite[0]) + "\' style=\"position:absolute; right:0; top:0; width:5vw;\">";
      b.className = "btn btn-light";
      b.style= "position:relative; width:5vw; height:5vw; padding:0; font-size:1vw;";
      if (myOptions[x] === p0) b.addEventListener('click', function(e) {switchIn(p0)});
      if (myOptions[x] === p1) b.addEventListener('click', function(e) {switchIn(p1)});
      if (myOptions[x] === p2) b.addEventListener('click', function(e) {switchIn(p2)});
      if (myOptions[x] === p3) b.addEventListener('click', function(e) {switchIn(p3)});
      if (myOptions[x] === p4) b.addEventListener('click', function(e) {switchIn(p4)});
      if (myOptions[x] === p5) b.addEventListener('click', function(e) {switchIn(p5)});
      sixMons.appendChild(b);
    }
    return;
  }
  if (game.myCurr.atkMod < 0) game.myCurr.atkMod = 0.1;
  if (game.myCurr.defMod < 0) game.myCurr.defMod = 0.1;
  if (game.myCurr.spaMod < 0) game.myCurr.spaMod = 0.1;
  if (game.myCurr.spdMod < 0) game.myCurr.spdMod = 0.1;
  if (game.myCurr.speMod < 0) game.myCurr.speMod = 0.1;
  if (game.myCurr.accMod < 0) game.myCurr.accMod = 0.1;
  if (game.myCurr.evaMod < 0) game.myCurr.evaMod = 0.1;
  if (game.myCurr.atkMod > 3) game.myCurr.atkMod = 3;
  if (game.myCurr.defMod > 3) game.myCurr.defMod = 3;
  if (game.myCurr.spaMod > 3) game.myCurr.spaMod = 3;
  if (game.myCurr.spdMod > 3) game.myCurr.spdMod = 3;
  if (game.myCurr.speMod > 3) game.myCurr.speMod = 3;
  if (game.myCurr.accMod > 3) game.myCurr.accMod = 3;
  if (game.myCurr.evaMod > 3) game.myCurr.evaMod = 3;
  if (game.enCurr.atkMod < 0) game.enCurr.atkMod = 0.1;
  if (game.enCurr.defMod < 0) game.enCurr.defMod = 0.1;
  if (game.enCurr.spaMod < 0) game.enCurr.spaMod = 0.1;
  if (game.enCurr.spdMod < 0) game.enCurr.spdMod = 0.1;
  if (game.enCurr.speMod < 0) game.enCurr.speMod = 0.1;
  if (game.enCurr.accMod < 0) game.enCurr.accMod = 0.1;
  if (game.enCurr.evaMod < 0) game.enCurr.evaMod = 0.1;
  if (game.enCurr.atkMod > 3) game.enCurr.atkMod = 3;
  if (game.enCurr.defMod > 3) game.enCurr.defMod = 3;
  if (game.enCurr.spaMod > 3) game.enCurr.spaMod = 3;
  if (game.enCurr.spdMod > 3) game.enCurr.spdMod = 3;
  if (game.enCurr.speMod > 3) game.enCurr.speMod = 3;
  if (game.enCurr.accMod > 3) game.enCurr.accMod = 3;
  if (game.enCurr.evaMod > 3) game.enCurr.evaMod = 3;
  if (game.myCurr.currentHP > game.myCurr.hpStat) game.myCurr.currentHP = game.myCurr.hpStat;
  if (game.enCurr.currentHP > game.enCurr.hpStat) game.enCurr.currentHP = game.enCurr.hpStat;
  updateMyCurr(game.myCurr);
  updateEnCurr(game.enCurr);
  updateHealthBar(game.myCurr, myHealthBar);
  updateHealthBar(game.enCurr, enHealthBar);
  if (game.weatherTurnsLeft > 0) game.weatherTurnsLeft--;
  else if (game.weather.length > 0) game.weather = [];
  if (game.myCurr.transition != 0) update(e);
};


m0.addEventListener("click", function(e){update(this)});
m1.addEventListener("click", function(e){update(this)});
m2.addEventListener("click", function(e){update(this)});
m3.addEventListener("click", function(e){update(this)});

if (one !== null) one.addEventListener("click", function(e){update(myTeam[0])});
if (two !== null) two.addEventListener("click", function(e){update(myTeam[1])});
if (tre !== null) tre.addEventListener("click", function(e){update(myTeam[2])});
if (fou !== null) fou.addEventListener("click", function(e){update(myTeam[3])});
if (fiv !== null) fiv.addEventListener("click", function(e){update(myTeam[4])});
if (six !== null) six.addEventListener("click", function(e){update(myTeam[5])});

s.innerText = "Streak: " + streak;
