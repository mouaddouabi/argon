import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Emballage } from '../emballage';
import { EmballageService } from '../emballage.service';
import { FicheConditionnement } from '../fiche-conditionnement';
import { FicheConditionnementService } from '../fiche-conditionnement.service';
import { Lot } from '../lot';
import { LotService } from '../lot.service';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-fichier-cond',
  templateUrl: './fichier-cond.component.html',
  styleUrls: ['./fichier-cond.component.css']
})
export class FichierCondComponent implements OnInit {

  fichesTab!: FicheConditionnement[];
  fichesCond!: Observable<FicheConditionnement[]>;
  ficheCond:FicheConditionnement = new FicheConditionnement();
  lots!:Lot[];
  emballages!:Emballage[];
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  responsablesqualite!:Responsable[];
  ficheCondPrint!: FicheConditionnement;
  constructor(private ficheCondService: FicheConditionnementService,private router: Router,private route:ActivatedRoute,
              private lotService:LotService,private emballageService:EmballageService,private responsableService:ResponsableService,private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit() {
      if(sessionStorage.getItem('user')==null){
        console.log(sessionStorage.getItem('user'));
        this.router.navigate(['login']);
      }
      this.reloadData();
    }
    reloadData() {     
       this.ficheCondService.getFichesCon().subscribe(
        data=>{
          console.log("first"),
          console.log(data),
          this.fichesCond = data,
          this.fichesTab = data as FicheConditionnement[]; 
          this.ficheCondPrint = new FicheConditionnement();
          this.changeDetectorRef.detectChanges();
          const table: any = $("#datatable-basic").DataTable();
        }
      );
      //ici
      this.lotService.getLotFumNotCond().subscribe(
        data=>{
          console.log("lots");
          console.log(data);
          this.lots=data as Lot[];
          console.log(this.lots);
        }
      );
      this.emballageService.getEmballages().subscribe(
        data=>{
          this.emballages = data as Emballage[];
          console.log(this.emballages);
        }
      )
      this.responsableService.getResponsablesByType("Responsable qualité").subscribe(
        data =>{
          this.responsablesqualite = data as Responsable[];
          console.log(this.responsablesqualite); 
        }
      );
      this.ficheCondPrint = new FicheConditionnement();
    }
    deleteFicheCond(id:number){
      this.ficheCondService.deleteFicheCon(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['fichesConditionnement']);
        setTimeout(() => {
          window.location.reload();
        }, 0); 
        this.ngOnInit();
      },error => console.log(error)
      );
    }
    updateFicheCond(id:number){
      this.idUpdate=id;
      this.ficheCondService.getFicheCon(id).subscribe(data =>{ 
        this.ficheCond=data;
      },error => console.log(error));
      this.ficheCondService.getFicheCon(id).subscribe(data =>{ 
        this.ficheCondPrint = new FicheConditionnement();
        this.ficheCondPrint=data;
        console.log(this.ficheCondPrint);
        
      },error => console.log(error));
      this.isAdd=false;
     // this.router.navigate(['updateFicheCond',id]);
    }
    print(id:number){
      this.ficheCondService.getFicheCon(id).subscribe(data =>{ 
        this.ficheCondPrint = new FicheConditionnement();
        this.ficheCondPrint=data;
      },error => console.log(error));
    }
    onSubmit(){
      console.log(this.isAdd)
      console.log(this.ficheCond);
      if(this.isAdd){
        this.ficheCondService.createFicheCon(this.ficheCond).subscribe(data => {
          console.log("ajouter")
          console.log(data)
          this.ficheCond = new FicheConditionnement();
          this.router.navigate(['fichesConditionnement']);
          setTimeout(() => {
            window.location.reload();
          }, 0); 
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.ficheCondService.updateFicheCon(this.ficheCond,this.ficheCond.codeCondi).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['fichesConditionnement']);
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
    Unites(id:number){
      this.router.navigate(['unites',id])
    }

}
