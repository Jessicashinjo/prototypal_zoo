function Animal(name) {
  this.name = name;
}

function Panthera(name) {
  this.genusName = 'Panthera';
}

Panthera.prototype = new Animal(name);

function Canis(name){
  Animal.call(this, name);
  this.genusName = 'Canis';
}

Canis.prototype = new Animal();

function Tigris(name) {
  this.speciesName = 'Tiger';
}

Tigris.prototype = new Panthera();

function Leo (name){
  this.speciesName = 'Lion';
}

Leo.prototype = new Panthera();

function Dirus(name) {
  Canis.call(this, name);
  this.speciesName = 'Dire Wolf';
}

Dirus.prototype = new Canis();

function Latrans(name) {
  this.speciesName = 'Coyote';
}

Latrans.prototype = new Canis();


var direwolf = new Dirus('Ghost');
console.log("name", direWolf.name);
console.log("genus", direWolf.genusName);
console.log("species", direWolf.species);
