function Automobile(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function fourWheeler(make,model,year,isoffRoadeCapable){
  Automobile.call(this,make,model,year);
  this.isoffRoadeCapable = isoffRoadeCapable;
}

fourWheeler.prototype = Object.create(Automobile.prototype);
fourWheeler.prototype.constructor  = fourWheeler;

var myJeep = new fourWheeler('Jeep', 'Wrangler', 2024, true)

console.log(myJeep)