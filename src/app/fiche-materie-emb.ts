import { Emballage } from "./emballage";
import { Operateurs } from "./operateurs";
import { Responsable } from "./responsable";

export class FicheMaterieEmb {
    codeEmbg!:number;
    date!:Date;
    emballages!:Emballage[];
    responsable!:Responsable;
    constructor(){
        this.emballages = new Array<Emballage>();
        this.responsable=new Responsable();
    }
}
