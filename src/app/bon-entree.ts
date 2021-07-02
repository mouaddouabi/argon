import { Fournisseur } from "./fournisseur";
import { Lot } from "./lot";
import { Responsable } from "./responsable";

export class BonEntree {
    numBon!:number;
    date!:Date;
    total!:number;
    decision!:string;
    remarqueBon!:string;
    fournisseur!:Fournisseur;
    lot!:Lot;
    responsable!:Responsable;
    constructor(){
        this.fournisseur = new Fournisseur();
        this.lot= new Lot();
        this.responsable = new Responsable();
    }
}
