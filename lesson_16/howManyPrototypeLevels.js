function mainFunction() {
  this.foobars = [];
}

mainFunction.prototype.add = function (func) {
  if (func.a == undefined) {
    return 0;
  }
  this.foobars.push(func);
}

function layersOfInheritance(config) {
  this.a = config.a;
  this.add(this);
  console.log('Length of prototype inheritance ', layersOfInheritance.prototype.foobars.length);
}

layersOfInheritance.prototype = new mainFunction();

const empty = new layersOfInheritance({});
const obj = new layersOfInheritance({ a: 1 });
const obj2 = new layersOfInheritance(obj);
const obj3 = new layersOfInheritance(obj2);
