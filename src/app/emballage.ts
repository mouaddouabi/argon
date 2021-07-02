import { FicheConditionnement } from "./fiche-conditionnement";
import { FicheMaterieEmb } from "./fiche-materie-emb";
import { Operateurs } from "./operateurs";

export class Emballage {
   codeEmb!:number;
   frEmb!:string ;
   codeFrEmb!:number;
   numLotEmb!:number;
   typeEmb!:string;
   volumeUnite!:number;
   condStockage!:string;
   dateCond!:number;
   lavageSechageEmb!:string;
   actionsCor!:string;
   ficheMaterieEmb!:FicheMaterieEmb;
   operateur!:Operateurs;
   ficheConditionnement!:FicheConditionnement;
   constructor(){
      this.codeEmb=0;
      this.ficheMaterieEmb = new FicheMaterieEmb();
      this.operateur= new Operateurs();
   }
}
