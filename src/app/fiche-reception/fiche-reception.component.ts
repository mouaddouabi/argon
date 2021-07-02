import { NonNullAssert } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FicheReceptionService } from '../fiche-reception.service';
import { Ficherec } from '../ficherec';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Ferme } from '../ferme';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';


@Component({
  selector: 'app-fiche-reception',
  templateUrl: './fiche-reception.component.html',
  styleUrls: ['./fiche-reception.component.css']
})
export class FicheReceptionComponent implements OnInit {
  fournisseurs!: Fournisseur[];
  fournisseur:Fournisseur = new Fournisseur();
  respo :Responsable = new Responsable();
  respo2 :Responsable= new Responsable();
  firstname:any;
  today!:Date;
  varietes:string[] = ["Aguellid","Ahardane","Botfeggous","Bouijjou","Bouittob","Bourhare",
            "Bouslikhène","Bouzeggar","Bousthantmi","Iklane","Jihel","Malt-EIbaid","Mejhoul",
            "Mest-AIi","Oum-Nhal","Outoukdim","Sair-Layalate"];
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  responsablesAppro!:Responsable[];
  responsablesqualite!:Responsable[];
  isCorps_etrangers = false;
  public ficheRec:Ficherec = new Ficherec();
  ferme: Ferme = new Ferme();
  fichesRec!: Ficherec[];
  fichePrint:Ficherec = new Ficherec();
  constructor(private ficherecservice: FicheReceptionService,private router: Router,private route:ActivatedRoute,
    private fournisseurService:FournisseurService,private responsableService:ResponsableService,private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit() {
      if(sessionStorage.getItem('user')==null){
        console.log(sessionStorage.getItem('user'));
        this.router.navigate(['login']);
        alert("Veuillez Connectez d'abord !!!");
      }
      this.reloadData();
    }
    reloadData() {     
      this.ficherecservice.getFichesRec().subscribe(
        data=>{
          console.log(data);
          this.fichesRec =data;
          this.changeDetectorRef.detectChanges();
          const table: any = $("#datatable-basic").DataTable();
        }
      )
      this.today = new Date();
      console.log(this.today);
      
      this.fournisseurService.getFournisseurs().subscribe(
        data=>{
          console.log(data);
          this.fournisseurs = data as Fournisseur[];
        }
      )
      this.ficheRec = new Ficherec();
      this.responsableService.getResponsablesByType("Responsable qualité").subscribe(
        data =>{
          this.responsablesqualite = data as Responsable[];
          console.log(this.responsablesqualite); 
        }
      );
      this.responsableService.getResponsablesByType("Responsable approvisionnement").subscribe(
        data =>{
          this.responsablesAppro = data as Responsable[];
          console.log(this.responsablesAppro); 
        }
      )
      this.ficheRec.responsable[0] = new Responsable();
      this.ficheRec.responsable[1] = new Responsable();
      this.fichePrint.responsable[0] = new Responsable();
      this.fichePrint.responsable[1] = new Responsable();
    }
    deleteFicheRec(id:number){
      this.ficherecservice.deleteFicheRec(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['fichereception']);
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
      this.ficherecservice.getFicheRec(id).subscribe(data =>{ 
        console.log(data),
        this.ficheRec=new Ficherec(),
        this.ficheRec=data as Ficherec; 
        this.respo = (this.ficheRec.responsable[0].fonctionRespo =="Responsable approvisionnement")? this.ficheRec.responsable[0] :this.ficheRec.responsable[1];
        this.respo2 = (this.ficheRec.responsable[1].fonctionRespo =="Responsable qualité")? this.ficheRec.responsable[1] :this.ficheRec.responsable[0];
        console.log(this.respo);
        console.log(this.respo2);
        this.ficheRec.responsable[0] = this.respo;
        this.ficheRec.responsable[1] = this.respo2;
        console.log(this.ficheRec);
        
      },error => console.log(error));
      this.ficherecservice.getFicheRec(id).subscribe(
        data=>{
          this.fichePrint = new Ficherec();
          this.fichePrint = data as Ficherec;
          this.respo = (this.fichePrint.responsable[0].fonctionRespo =="Responsable approvisionnement")? this.fichePrint.responsable[0] :this.fichePrint.responsable[1];
          this.respo2 = (this.fichePrint.responsable[1].fonctionRespo =="Responsable qualité")? this.fichePrint.responsable[1] :this.fichePrint.responsable[0];
          console.log(this.respo);
          console.log(this.respo2);
          this.fichePrint.responsable[0] = this.respo;
          this.fichePrint.responsable[1] = this.respo2;
        }
      )
      this.isAdd=false;
    }
    print(id:number){
      this.ficherecservice.getFicheRec(id).subscribe(
        data=>{
          this.fichePrint = new Ficherec();
          this.fichePrint = data as Ficherec;
          this.respo = (this.fichePrint.responsable[0].fonctionRespo =="Responsable approvisionnement")? this.fichePrint.responsable[0] :this.fichePrint.responsable[1];
          this.respo2 = (this.fichePrint.responsable[1].fonctionRespo =="Responsable qualité")? this.fichePrint.responsable[1] :this.fichePrint.responsable[0];
          console.log(this.respo);
          console.log(this.respo2);
          this.fichePrint.responsable[0] = this.respo;
          this.fichePrint.responsable[1] = this.respo2;
        }
      )
    }
    onSubmit(){
      console.log(this.isAdd)
      if(this.isAdd){
        this.ficherecservice.createFicheRec(this.ficheRec).subscribe(data => {
          console.log(data)
          this.ficheRec = new Ficherec();
          this.router.navigate( ['fichereception']);
          setTimeout(() => {
            window.location.reload();
          }, 0);
          this.reloadData();
        },
        error => console.log(error));
      }else{
        console.log(this.ficheRec);
        this.ficherecservice.updateFicheRec(this.ficheRec,this.ficheRec.codeRecep).subscribe(
          data => {
            console.log(data)
            setTimeout(() => {
              window.location.reload();
            }, 0);
            this.router.navigate(['fichereception']);
            this.reloadData();
          },error => console.log(error)
        );
        this.isAdd=true;
        this.idUpdate=0;
      }
    }
}
