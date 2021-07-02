import { BonEntree } from "./bon-entree";
import { FicheConditionnement } from "./fiche-conditionnement";
import { FicheHumidite } from "./fiche-humidite";
import { Fichefumegation } from "./fichefumegation";
import { Ficherec } from "./ficherec";
import { Parcelle } from "./parcelle";
import { Tracabilite } from "./tracabilite";
import { Transport } from "./transport";

export class Lot {
    codeLot!:number;
    variete!:string;
    dateLivraison!:Date;
    etatFraicheur!:string;
    maturite!:string;
    fermentation!:string;
    corpsEtrangers!:string;
    humidite!:string;
    aspectSanitaire!:string;
    numLotAppro!:number;
    dateRecolte!:Date;
    codeLotProduction!:number;
    parcelle!:Parcelle;
    transport!:Transport;
    fichefumegation!:Fichefumegation;
    bonEntree!:BonEntree;
    ficherec!:Ficherec;
    ficheHumidite!:FicheHumidite;
    ficheConditionnement!:FicheConditionnement;
    tracabilite!:Tracabilite
    constructor(){
        this.transport = new Transport();
        this.parcelle = new Parcelle();
    }
}
