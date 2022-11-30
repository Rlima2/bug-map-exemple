import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  loginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { Email, Password } = this.form;

  }

  reloadPage(): void {
    window.location.reload();
  }
}
