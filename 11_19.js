var person = {
    firstname: "imi",
    lastname: "simon",
    id: 2000,
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
};

//<script src="myScript.js"></script>
// HTML-ben így kell meghívni 

//<script src="myScript1.js"></script>
//<script src="myScript2.js"></script>


// CONSTRUKTOR
function Person(name, age) {
    this.name = name,
    this.age = age;
    // this.greet = function() {
    //     return 'Hello ' + this.name;
    // }
}

Person.prototype.greet = function () {
    return 'Hello ' + this.name;
}

var boy = new Person("Joe", 12);
//boy.kiir();

console.log(boy.greet())







//
function Gyerek(nev, kor) {
    this.nev = nev;
    this.kor = kor;
}
Gyerek.prototype.bemutatkozik = function(){
    console.log("A nevem " + this.nev);
}
function Ovodas(nev, kor, jel) {
    this.base = Gyerek;
    this.vase(nev, kor);
    this.jel = jel;
}

Ovodas.prototype = new Gyerek();
Ovodas.prototype.miAJeled = function(){
    console.log("A jelem " + this.jel);
}

var Zsofi = new Gyerek("Zsófia", 17);
console.log(Zsofi.bemutatkozik());
var david = new Ovodas("Dávid", S, "perc");
console.log(david.bemutatkozik())
Zsofi.bemutatkozik();

