var list = document.getElementById('mons');
var pokemon0 = document.getElementById('pokemon_0');
var pokemon1 = document.getElementById('pokemon_1');
var pokemon2 = document.getElementById('pokemon_2');
var pokemon3 = document.getElementById('pokemon_3');
var pokemon4 = document.getElementById('pokemon_4');
var pokemon5 = document.getElementById('pokemon_5');
var aList = document.getElementById('abils');
var ability0 = document.getElementById('ability_0');
var ability1 = document.getElementById('ability_1');
var ability2 = document.getElementById('ability_2');
var ability3 = document.getElementById('ability_3');
var ability4 = document.getElementById('ability_4');
var ability5 = document.getElementById('ability_5');
var pic0 = document.getElementById('pic_0');
var pic1 = document.getElementById('pic_1');
var pic2 = document.getElementById('pic_2');
var pic3 = document.getElementById('pic_3');
var pic4 = document.getElementById('pic_4');
var pic5 = document.getElementById('pic_5');
var target;
var aTarget, aMon;

var updatePic = function(e, f) {
  // console.log(list.children[0].value.localeCompare(e.target.value));
  // console.log(list.children[0].value);
  // console.log(e.target.value);
  if (f == 0) {
    if (pic0.childElementCount > 0) {
      pic0.removeChild(pic0.children[0]);
    }
    target = pic0;
  }
  if (f == 1) {
    if (pic1.childElementCount > 0) {
      pic1.removeChild(pic1.children[0]);
    }
    target = pic1;
  }
  if (f == 2) {
    if (pic2.childElementCount > 0) {
      pic2.removeChild(pic2.children[0]);
    }
    target = pic2;
  }
  if (f == 3) {
    if (pic3.childElementCount > 0) {
      pic3.removeChild(pic3.children[0]);
    }
    target = pic3;
  }
  if (f == 4) {
    if (pic4.childElementCount > 0) {
      pic4.removeChild(pic4.children[0]);
    }
    target = pic4;
  }
  if (f == 5) {
    if (pic5.childElementCount > 0) {
      pic5.removeChild(pic5.children[0]);
    }
    target = pic5;
  }
  console.log(f);
  for (var i = 0; i < list.childElementCount; i++) {
    if (list.children[i].value.localeCompare(e.target.value.substring(0, 1).toUpperCase() + e.target.value.substring(1, e.target.value.length).toLowerCase()) == 0) {
      var img = document.createElement("img");
      img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i + 1) + ".png";
      target.appendChild(img);
      console.log("FOUND");
      break;
    }
  }
}

var updateAbils = function(e, f) {
  if (f == 0) {
    aTarget = ability0;
    aMon = pokemon0;
  }
  if (f == 1) {
    aTarget = ability1;
    aMon = pokemon1;
  }
  if (f == 2) {
    aTarget = ability2;
    aMon = pokemon2;
  }
  if (f == 3) {
    aTarget = ability3;
    aMon = pokemon3;
  }
  if (f == 4) {
    aTarget = ability4;
    aMon = pokemon4;
  }
  if (f == 5) {
    aTarget = ability5;
    aMon = pokemon5;
  }
  while (aTarget.childElementCount > 0) {
    aTarget.removeChild(aTarget.children[0]);
  }
  for (var i = 0; i < list.childElementCount; i++) {
    if (list.children[i].value.localeCompare(aMon.value.substring(0, 1).toUpperCase() + aMon.value.substring(1, aMon.value.length).toLowerCase()) == 0) {
      var abilities = abils.children[i].textContent.split(",");
      for (var x = 0; x < abilities.length; x++) {
        var option = document.createElement("option");
        option.value = abilities[x];
        option.textContent = abilities[x];

        console.log(e.target);
        aTarget.appendChild(option);

      }
      break;
    }
  }
  //console.log(aMon.value.substring(0, 1).toUpperCase() + aMon.value.substring(1, aMon.value.length).toLowerCase());
  // console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children);
};


pokemon0.addEventListener('input', function(e){updatePic(e, this.id.charAt(e.target.id.length - 1))});
pokemon1.addEventListener('input', function(e){updatePic(e, this.id.charAt(e.target.id.length - 1))});
pokemon2.addEventListener('input', function(e){updatePic(e, this.id.charAt(e.target.id.length - 1))});
pokemon3.addEventListener('input', function(e){updatePic(e, this.id.charAt(e.target.id.length - 1))});
pokemon4.addEventListener('input', function(e){updatePic(e, this.id.charAt(e.target.id.length - 1))});
pokemon5.addEventListener('input', function(e){updatePic(e, this.id.charAt(e.target.id.length - 1))});
// ability0.addEventListener('focus', function(e){updateAbils(e)});
// ability1.addEventListener('focus', function(e){updateAbils(e)});
// ability2.addEventListener('focus', function(e){updateAbils(e)});
// ability3.addEventListener('focus', function(e){updateAbils(e)});
// ability4.addEventListener('focus', function(e){updateAbils(e)});
// ability5.addEventListener('focus', function(e){updateAbils(e)});
pokemon0.addEventListener('input', function(e){updateAbils(e, this.id.charAt(this.id.length - 1))});
pokemon1.addEventListener('input', function(e){updateAbils(e, this.id.charAt(this.id.length - 1))});
pokemon2.addEventListener('input', function(e){updateAbils(e, this.id.charAt(this.id.length - 1))});
pokemon3.addEventListener('input', function(e){updateAbils(e, this.id.charAt(this.id.length - 1))});
pokemon4.addEventListener('input', function(e){updateAbils(e, this.id.charAt(this.id.length - 1))});
pokemon5.addEventListener('input', function(e){updateAbils(e, this.id.charAt(this.id.length - 1))});
