import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   user = new User();
   getUser = this.user;
  constructor(private regiserService:RegisterService ) { }

  ngOnInit(): void {
  }

  loginUser(){
     this.regiserService.userLogin(this.user).subscribe(
       data => console.log(data.userName),
       error => console.log("exception")
     )
    
  }
}
