import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   user = new User();
   msg:string = ''
  constructor(private regiserService:RegisterService, private router: Router ) { }

  ngOnInit(): void {
  }

  loginUser(){
     this.regiserService.userLogin(this.user).subscribe(
       data => {console.log(data.userName);
          this.router.navigate(['/loginsucess'])},
       error => {console.log("exception");
        this.msg = "Invalid userName or Password"
      }
     )
  }


}
