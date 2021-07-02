import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';
import * as $ from "jquery";
import "datatables.net"
import "datatables.net-bs4"

@Component({
  selector: 'app-gestion-responsable',
  templateUrl: './gestion-responsable.component.html',
  styleUrls: ['./gestion-responsable.component.css']
})
export class GestionResponsableComponent implements OnInit {

  responsables!: Responsable[];
  fonctions = ["Responsable qualité","Responsable approvisionnement","Responsable de production et qualité"];
  firstname:any;
  id:number=0;
  idUpdate = 0;
  isAdd = true;

  public responsable:Responsable = new Responsable();

  constructor(private responsableservice: ResponsableService,private router: Router,private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit() {
      if(sessionStorage.getItem('user')==null){
        console.log(sessionStorage.getItem('user'));
        this.router.navigate(['login']);
      }
      this.reloadData();
    }
   
    reloadData() {     
      this.responsableservice.getResponsables().subscribe(
        data=>{
          console.log(data);
          this.responsables = data as Responsable[];
          this.changeDetectorRef.detectChanges();
          const table: any = $("#datatable-basic").DataTable();
        }
      )
      this.responsable = new Responsable();
    }
    deleteResponsable(id:number){
      this.responsableservice.deleteResponsable(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['responsables']);
        setTimeout(() => {
          window.location.reload();
        }, 0); 
        this.reloadData(); 
      },error => console.log(error)
      );
    }
    updateResponsable(id:number){
      this.idUpdate=id;
      console.log(id);
      this.responsableservice.getResponsable(id).subscribe(data =>{ 
        console.log(data),
        this.responsable=new Responsable(),
        this.responsable=data;
      },error => console.log(error));
      this.isAdd=false;
    }
    onSubmit(){
      console.log(this.isAdd)
      if(this.isAdd){
        this.responsableservice.createResponsable(this.responsable).subscribe(data => {
          console.log(data)
          this.responsable = new Responsable();
          this.router.navigate( ['responsables']);
          setTimeout(() => {
            window.location.reload();
          }, 0); 
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.responsableservice.updateResponsable(this.responsable,this.responsable.id).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['responsables']);
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
