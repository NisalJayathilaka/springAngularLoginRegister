import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-loginsucess',
  templateUrl: './loginsucess.component.html',
  styleUrls: ['./loginsucess.component.css']
})
export class LoginsucessComponent implements OnInit {

  example:User;
  constructor(private router: Router) { 
          const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {example: User};
    this.example = state.example;
  }
  ngOnInit(): void {
  }

}
