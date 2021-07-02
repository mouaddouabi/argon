import { Emballage } from "./emballage";
import { Lot } from "./lot";
import { Responsable } from "./responsable";
import { Unites } from "./unites";

export class FicheConditionnement {
    codeCondi!:number;
    dateCondi!:Date;
    qteDateCondi!:number;
    humiditeDateCondi!:string;
    responsable!:Responsable ;
    lot!:Lot;
    unites!:Unites[];
    emballage!:Emballage;
    constructor(){
        this.lot= new Lot();
        this.emballage = new Emballage();
        this.unites = new Array<Unites>();
        this.responsable = new Responsable();
    }
}
