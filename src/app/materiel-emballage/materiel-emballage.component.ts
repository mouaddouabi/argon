import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FicheMaterieEmb } from '../fiche-materie-emb';
import { FicheMaterieEmbService } from '../fiche-materie-emb.service';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-materiel-emballage',
  templateUrl: './materiel-emballage.component.html',
  styleUrls: ['./materiel-emballage.component.css']
})
export class MaterielEmballageComponent implements OnInit {

  
  fichesTab!: FicheMaterieEmb[];
  fichesMatEmb!: Observable<FicheMaterieEmb[]>;
  ficheMatEmb:FicheMaterieEmb = new FicheMaterieEmb();
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  responsablesqualite!:Responsable[];
  ficheMatEmbPrint!: FicheMaterieEmb;
  constructor(private ficheMatService: FicheMaterieEmbService,private router: Router,private route:ActivatedRoute,private responsableService:ResponsableService,private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit() {
      if(sessionStorage.getItem('user')==null){
        console.log(sessionStorage.getItem('user'));
        this.router.navigate(['login']);
      }
      this.reloadData();
    }
   
    reloadData() {     
       this.ficheMatService.getFichesMatEmb().subscribe(
        data=>{
          console.log(data),
          this.fichesMatEmb = data,
          this.fichesTab = data as FicheMaterieEmb[]; 
          this.changeDetectorRef.detectChanges();
          const table: any = $("#datatable-basic").DataTable();
        }
      );
      this.responsableService.getResponsablesByType("Responsable qualité").subscribe(
        data =>{
          this.responsablesqualite = data as Responsable[];
          console.log(this.responsablesqualite); 
        }
      );
      this.ficheMatEmbPrint = new FicheMaterieEmb();
    }
    deleteFicheCond(id:number){
      this.ficheMatService.deleteFicheMatEmb(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['matsemb']);
        setTimeout(() => {
          window.location.reload();
        }, 0); 
        this.ngOnInit();
      },error => console.log(error)
      );
    }
    updateFicheCond(id:number){
      this.idUpdate=id;
      console.log(id);
      this.ficheMatService.getFicheMatEmb(id).subscribe(data =>{ 
        this.ficheMatEmb=data;
      },error => console.log(error));
      this.isAdd=false;
      this.ficheMatService.getFicheMatEmb(id).subscribe(data =>{ 
        this.ficheMatEmbPrint = new FicheMaterieEmb();
        this.ficheMatEmbPrint=data;
      },error => console.log(error));
      //this.router.navigate(['updateFicheEmb',id]);
    }
    print(id:number){
      this.ficheMatService.getFicheMatEmb(id).subscribe(data =>{ 
        this.ficheMatEmbPrint = new FicheMaterieEmb();
        this.ficheMatEmbPrint=data;
      },error => console.log(error));
    }
    addEmballages(id:number){
      this.router.navigate(['gestEmballages',id])
    }
    onSubmit(){
      console.log(this.isAdd)
      if(this.isAdd){
        this.ficheMatService.createFicheMatEmb(this.ficheMatEmb).subscribe(data => {
          console.log("ajouter")
          console.log(data)
          this.ficheMatEmb = new FicheMaterieEmb();
          this.router.navigate(['matsemb']);
          setTimeout(() => {
            window.location.reload();
          }, 0); 
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.ficheMatService.updateFicheMatEmb(this.ficheMatEmb,this.ficheMatEmb.codeEmbg).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['matsemb']);
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
}
