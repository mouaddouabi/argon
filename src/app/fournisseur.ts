import { Ferme } from "./ferme";

export class Fournisseur {
    id!:number;
    public codeFr:number=0;
    nom: string = "";
    prenom: string = "";
    telephone: string = "";
    adresse: string = "";
    region:String="";
    ferme!:Ferme[];
    constructor(){
        this.ferme = new Array <Ferme>();
    }
}
