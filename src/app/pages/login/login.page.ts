import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  mdl_user: string = '';
  mdl_pass: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegar(){

    this.router.navigate(['home'])

  }

}
