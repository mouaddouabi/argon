import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FicheConditionnement } from '../fiche-conditionnement';
import { FicheConditionnementService } from '../fiche-conditionnement.service';
import { Unites } from '../unites';
import { UnitesService } from '../unites.service';

@Component({
  selector: 'app-unites',
  templateUrl: './unites.component.html',
  styleUrls: ['./unites.component.css']
})
export class UnitesComponent implements OnInit {

  
  id!:number;
  ficheCond:FicheConditionnement = new FicheConditionnement();
  unite = new Unites();
  unites!:Unites[];
  idUpdate = 0;
  isAdd = true;
  constructor(private route: Router,private router:ActivatedRoute,private unitService:UnitesService,private ficheCondService:FicheConditionnementService,private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')==null){
      console.log(sessionStorage.getItem('user'));
      this.route.navigate(['login']);
    }
    this.reloadData();
  }
  
  reloadData() {
    this.id = this.router.snapshot.params['id'];
    this.ficheCondService.getFicheCon(this.id).subscribe(
      data=>{
        console.log(data),
        this.ficheCond=data;
        this.unites = this.ficheCond.unites;
        this.unite= new Unites();
        this.changeDetectorRef.detectChanges();
        const table: any = $("#datatable-basic").DataTable();
      }
    );
  }
  deleteUnites(id:number){
    this.unitService.deleteUnites(id).subscribe(data =>{ 
      console.log(data)
      this.route.navigate(['unites/',this.id]);
      setTimeout(() => {
        window.location.reload();
      }, 0); 
      this.reloadData();
    },error => console.log(error)
    );
  }
  updateUnites(id:number){
    this.idUpdate=id;
    console.log(id);
    this.unitService.getUnites(id).subscribe(data =>{ 
      console.log(data),
      this.unite=new Unites(),
      this.unite=data;
    },error => console.log(error));
    this.isAdd=false;
  }
  onSubmit(){
    console.log(this.isAdd)
    this.unite.ficheConditionnement = this.ficheCond;
    if(this.isAdd){
      console.log(this.unite);
      this.unitService.createUnites(this.unite).subscribe(data => {
        console.log(data);
        this.ficheCond = new FicheConditionnement();
        this.route.navigate( ['unites',this.id]);
        setTimeout(() => {
          window.location.reload();
        }, 0); 
        this.reloadData();
      },
      error => console.log(error));
    }else{
      this.unitService.updateUnites(this.unite,this.unite.numSerieUnitesInit).subscribe(
        data => {
          console.log(data)
          this.route.navigate( ['unites/',this.id]);
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
