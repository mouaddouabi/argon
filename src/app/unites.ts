import { FicheConditionnement } from "./fiche-conditionnement";

export class Unites {
numSerieUnitesInit!:number;
   volumeUnite!:number;
   nbreUnitesCondi!:number;
   numColis!:number;
   nbreBraquettesParColis!:number;
   nbreColis!:number;
   ficheConditionnement!:FicheConditionnement;
   constructor(){
      this.ficheConditionnement = new FicheConditionnement();
   }
}
