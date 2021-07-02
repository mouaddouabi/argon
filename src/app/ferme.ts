import { Fournisseur } from "./fournisseur";

export class Ferme {
    codeFerme!:number;
    region!:string;
    fournisseur!:Fournisseur;
    constructor(){
        this.fournisseur = new Fournisseur();
    }
}
