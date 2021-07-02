import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BonEntree } from '../bon-entree';
import { BonEntreeService } from '../bon-entree.service';
import { FicheReceptionService } from '../fiche-reception.service';
import { Ficherec } from '../ficherec';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { Lot } from '../lot';
import { LotService } from '../lot.service';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-fiche-bon-entree',
  templateUrl: './fiche-bon-entree.component.html',
  styleUrls: ['./fiche-bon-entree.component.css']
})
export class FicheBonEntreeComponent implements OnInit {

  fournisseur:Fournisseur = new Fournisseur();
  lots!:Lot[] ;
  lott = new Lot();
  bonEntree = new BonEntree();
  ficheRec = new Ficherec();
  fournisseurs!: Observable<Fournisseur[]>;
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  responsablesAppro!:Responsable[];
  fichesBonEntree!: BonEntree[];
  bonEntreePrint!: BonEntree;
  today!:Date;
  constructor(private bonEntreeService:BonEntreeService,private route:Router,
    private fournisseurService:FournisseurService,private lotService:LotService,
    private ficherecService:FicheReceptionService,private responsableService:ResponsableService,private changeDetectorRef: ChangeDetectorRef) { }
  ngOnInit() {
    if(sessionStorage.getItem('user')==null){
      console.log(sessionStorage.getItem('user'));
      this.route.navigate(['login']);
    }
    this.reloadData();
  }
 
  reloadData() {    
    this.fournisseurs = this.fournisseurService.getFournisseurs(); 
    this.bonEntreeService.getBonEntreesList().subscribe(
      data=>{
        console.log(data);
        this.fichesBonEntree = data;
        this.changeDetectorRef.detectChanges();
        const table: any = $("#datatable-basic").DataTable();
      }
    );
    this.today = new Date();
    this.bonEntree = new BonEntree();
    this.lotService.getLotsFR().subscribe(
      data=>{
        console.log(data);
        this.lots = data as Lot[];
      }
    )
    this.responsableService.getResponsablesByType("Responsable approvisionnement").subscribe(
      data =>{
        this.responsablesAppro = data as Responsable[];
        console.log(this.responsablesAppro); 
      }
    )
    this.bonEntreePrint = new BonEntree();
  }
  deleteFicheRec(id:number){
    this.bonEntreeService.deleteBonEntree(id).subscribe(data =>{ 
      console.log(data)
      this.route.navigate(['bonEntrees']);
      setTimeout(() => {
        window.location.reload();
      }, 0);
      this.reloadData();
    },error => console.log(error)
    );
  }
  updateFicheRec(id:number){
   this.idUpdate=id;
    console.log(id);
    this.bonEntreeService.getBonEntree(id).subscribe(data =>{ 
      console.log(data),
      this.bonEntree=new BonEntree(),
      this.bonEntree=data;
    },error => console.log(error));
    this.bonEntreeService.getBonEntree(id).subscribe(data =>{ 
       console.log(data),
       this.bonEntreePrint=new BonEntree(),
       this.bonEntreePrint=data;
     },error => console.log(error));
    this.isAdd=false;
  }
  print(id:number){
     this.bonEntreeService.getBonEntree(id).subscribe(data =>{ 
       console.log(data),
       this.bonEntreePrint=new BonEntree(),
       this.bonEntreePrint=data;
     },error => console.log(error));
     this.isAdd=false;
   }
  onSubmit(){
    console.log(this.isAdd)
    console.log(this.bonEntree);
    if(this.isAdd){
      this.bonEntreeService.createBonEntree(this.bonEntree).subscribe(data => {
        console.log(data)
        this.bonEntree = new BonEntree();
        this.route.navigate( ['bonEntrees']);
        setTimeout(() => {
          window.location.reload();
        }, 0);
        this.reloadData();
      },
      error => console.log(error));
    }else{
      this.bonEntreeService.updateBonEntree(this.bonEntree,this.bonEntree.numBon).subscribe(
        data => {
          console.log(data)
          this.route.navigate(['bonEntrees']);
          setTimeout(() => {
            window.location.reload();
          }, 0);
          this.reloadData();
        },error => console.log(error)
      );
      this.isAdd=true;
      this.idUpdate=0;
    }
  }
  onchange(e:number){
      this.bonEntree.fournisseur=this.fournisseur;
  }
  onchangeLot(lot:Lot){
    this.bonEntree.lot=lot;
    this.ficherecService.findFicheByLot(lot.codeLot).subscribe(
      data=>{
        console.log(data),
        this.ficheRec = data,
        this.bonEntree.fournisseur = this.ficheRec.fournisseur;
        this.bonEntree.total = this.ficheRec.qteLivree;
        console.log(this.bonEntree.fournisseur);
      }
    )
  }
}
