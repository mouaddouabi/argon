import { Lot } from "./lot";
import { Responsable } from "./responsable";

export class FicheHumidite {
    codeOpHumidite!:number;
    dateOp!:Date;
    codeLotPro!:number;
    humidite!:number;
    numChRefroidissement!:number;
    remarque!:string;
    mesuresCor!:number;
    responsable!:Responsable;
    lot!:Lot;
}
