import { Ferme } from "./ferme";

export class Parcelle {
    codeParc!:number;
    tracesTerre!:string;
    ferme!:Ferme;
    constructor(){
        this.ferme = new Ferme();
    }
}
