import { Emballage } from "./emballage";
import { FicheFumigation } from "./fiche-fumigation";

export class Operateurs {

    codeOpt!:number;
    id!:number;
    nom: string = "";
    prenom: string = "";
    telephone: string = "";
    adresse: string = "";
    operation!:string;
    ficheFumigation!: FicheFumigation[];
    emballages!:Emballage[];
}
