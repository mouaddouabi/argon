import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  error!: string;

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.user  = new User();
    this.error  = '';
  }
  onSubmit(){
    console.log(this.user);
    
    this.userService.connect(this.user.email,this.user.password).subscribe(
      data=>{
        console.log(data);
        this.user=data;
        if(this.user==null){
          this.route.navigate(['login']);
          this.user = new User();
          this.error = 'Email ou mot de passe est incorrect'
        }
        else{
          sessionStorage.setItem('user',this.user.nom)
          this.route.navigate(['fichereception']);
          //this.session.store("user",this.user);
        }
      }
    )
  }

}
