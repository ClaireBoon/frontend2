//2.1 constructor object//
function Persoon(name) { 
this.name = name;
}
this.speak = function() {
console.log(“Hoi, mijn naam is” + this.name);
}
var rob = new Persoon(“Rob”); 

//2.2//
Persoon.prototype.walk = function() {}
Persoon.prototype.eat = function() {}
var rob = new Persoon(“Rob”); 

Persoon.speak();
alert(“naam is” + persoon.name);

//2.3//
var Persoon = {
name: “Rob”,
speak: function(),
walk: function(),
eat: function(),
};
console.log(Persoon.name);
console.log(Persoon.speak);
console.log(Persoon.walk);
console.log(Persoon.eat);
