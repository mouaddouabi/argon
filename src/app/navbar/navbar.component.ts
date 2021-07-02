import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  connect:boolean = false;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')==null){
      this.connect = false;
    } 
    else{
      this.connect = true;
    }
   }
   Disconnect(){
    sessionStorage.removeItem('user');
    this.route.navigate(['login']);
  }
}
