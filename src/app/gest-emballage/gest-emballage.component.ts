import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Emballage } from '../emballage';
import { EmballageService } from '../emballage.service';
import { FicheMaterieEmb } from '../fiche-materie-emb';
import { FicheMaterieEmbService } from '../fiche-materie-emb.service';
import { Operateurs } from '../operateurs';
import { OperateursService } from '../operateurs.service';

@Component({
  selector: 'app-gest-emballage',
  templateUrl: './gest-emballage.component.html',
  styleUrls: ['./gest-emballage.component.css']
})
export class GestEmballageComponent implements OnInit {

  id!:number;
  ficheMat:FicheMaterieEmb = new FicheMaterieEmb();
  emballages!:Observable<Emballage[]>;
  emballage = new Emballage();
  idUpdate = 0;
  isAdd = true;
  operateurs!:Operateurs[];
  constructor(private route: Router,private router:ActivatedRoute,private emballageService:EmballageService,private ficheService:FicheMaterieEmbService,private operateurService:OperateursService
    ,private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')==null){
      console.log(sessionStorage.getItem('user'));
      this.route.navigate(['login']);
    }
    this.reloadData();
  }
  
  reloadData() {
    this.id = this.router.snapshot.params['id'];
    this.ficheService.getFicheMatEmb(this.id).subscribe(
      data=>{
        console.log(data),
        this.ficheMat=data;
        this.emballage= new Emballage();
        this.changeDetectorRef.detectChanges();
        const table: any = $("#datatable-basic").DataTable();
      }
    );
    this.emballageService.getEmballagesFiche(this.id).subscribe(
      data=>{
        console.log(data);
        this.emballages = data;
      }
    )
    this.operateurService.getOperateursByType("Emballage").subscribe(
      data=>{
        console.log(data);
        this.operateurs = data as Operateurs[];
      }
    )
  }
  deleteEmballage(id:number){
    this.emballageService.deleteEmballage(id).subscribe(data =>{ 
      console.log(data)
      this.route.navigate(['gestEmballages/',this.id]);
      setTimeout(() => {
        window.location.reload();
      }, 0); 
      this.reloadData();
    },error => console.log(error)
    );
  }
  updateEmballage(id:number){
    this.idUpdate=id;
    console.log(id);
    this.emballageService.getEmballage(id).subscribe(data =>{ 
      console.log(data),
      this.emballage=new Emballage(),
      this.emballage=data;
    },error => console.log(error));
    this.isAdd=false;
  }
  onSubmit(){
    console.log(this.isAdd)
    this.emballage.ficheMaterieEmb = this.ficheMat;
    if(this.isAdd){
      console.log(this.emballage);
      this.emballageService.createEmballage(this.emballage).subscribe(data => {
        console.log(data);
        this.ficheMat = new FicheMaterieEmb();
        this.route.navigate( ['gestEmballages/',this.id]);
        setTimeout(() => {
          window.location.reload();
        }, 0); 
        this.reloadData();
      },
      error => console.log(error));
    }else{
      this.emballageService.updateEmballage(this.emballage,this.emballage.codeEmb).subscribe(
        data => {
          console.log(data)
          this.route.navigate( ['gestEmballages/',this.id]);
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
