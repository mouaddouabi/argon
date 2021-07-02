import { Lot } from "./lot";
import { Operateurs } from "./operateurs";
import { Responsable } from "./responsable";

export class Fichefumegation {
    codeFumigation!:number;
    dateFum!:Date;
    heureDFum!:Date;
    heureFinFum!:Date;
    dureeFum!:number;
    tauxPhosphine!:number;
    tStockage!:number;
    humiditeStockage!:number;
    lot!:Lot;
    responsable!:Responsable;
    operateurs!:Operateurs[];
}
