console.log('hello');
var nombre;
nombre = 5;
console.log("Nombre: " + nombre);
var error;
var obj;
var prenom;
//yupage Implicite
var nom = "timfa";
var age = 64;
var prenoms;
console.log(prenoms);
var notes = [1, 2, 5, 4, 8];
console.log(notes);
//notes.push('Emard');
function multiplication(nombre1, nombre2) {
    var resultat = nombre1 + " + " + nombre2 + " = " + (nombre1 + nombre2);
    return resultat;
}
var resultat = multiplication(8, 4);
console.log(resultat);
var tableau;
// enumeration
var Semaine;
(function (Semaine) {
    Semaine[Semaine["Lundi"] = 0] = "Lundi";
    Semaine[Semaine["Mardi"] = 1] = "Mardi";
    Semaine[Semaine["Mercredi"] = 2] = "Mercredi";
    Semaine[Semaine["Jeudi"] = 3] = "Jeudi";
    Semaine[Semaine["Vendredi"] = 4] = "Vendredi";
})(Semaine || (Semaine = {}));
var Week;
(function (Week) {
    Week["Lundi"] = "Lundi";
    Week["Mardi"] = "Mardi";
    Week["Mercredi"] = "Mercredi";
    Week["Jeudi"] = "Jeudi";
    Week["Vendredi"] = "Vendredi";
})(Week || (Week = {}));
var jour = Week.Lundi;
console.log(jour);
//POO
var Voiture = /** @class */ (function () {
    function Voiture() {
        //Visibilitésde la propriétés
        this.nbRoues = 4;
        this.moteur = "Soninké";
        this.couleur = "Bleu";
    }
    Voiture.prototype.getMoteur = function () {
        return this.moteur;
    };
    Voiture.prototype.setMoteur = function (valeur, user) {
        if (user.key == "842644") {
            this.moteur = valeur;
        }
    };
    Voiture.help = "Voici la notice de la voiture";
    return Voiture;
}());
var voiture = new Voiture();
console.log(voiture.nbRoues);
console.log(voiture.couleur);
console.log(voiture.getMoteur());
var p1 = {
    prenom: 'Timfa',
    nom: 'Emard',
    description: function () {
        console.log(this.nom + " " + this.prenom);
    }
};
p1.description();
