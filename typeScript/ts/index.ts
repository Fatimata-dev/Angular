console.log('hello');
let nombre:number;
nombre = 5;
console.log("Nombre: "+ nombre);


let error: boolean;
let obj: object;
let prenom: string;

//yupage Implicite

let nom = "timfa";
let age : number = 64;

let prenoms: string[];
console.log(prenoms);
let notes: number[] = [1,2,5,4,8];
console.log(notes);
//notes.push('Emard');

function multiplication(nombre1:number, nombre2:number): string{
    const resultat = `${nombre1} + ${nombre2} = ${nombre1 + nombre2}`
    return resultat
}
const resultat = multiplication(8, 4);
console.log(resultat);

let tableau:any;
// enumeration

enum Semaine {
    Lundi,
    Mardi,
    Mercredi,
    Jeudi,
    Vendredi
}
enum Week {
    Lundi = "Lundi",
    Mardi = "Mardi",
    Mercredi = "Mercredi",
    Jeudi = "Jeudi",
    Vendredi = "Vendredi"

}
let jour = Week.Lundi
console.log(jour);

//POO
class Voiture{
    // Declaration des variables/propriétés
    couleur:string;

    //Visibilitésde la propriétés
    public nbRoues:number = 4;
    private moteur = "Soninké";

    constructor(){
        this.couleur = "Bleu"
    }
    getMoteur(){
        return this.moteur
    }
    setMoteur(valeur: string, user:any){
        if(user.key == "842644"){
            this.moteur = valeur;
        }
    }
}
const voiture: Voiture = new Voiture();
console.log(voiture.nbRoues);
console.log(voiture.couleur);

