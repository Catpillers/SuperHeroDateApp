import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};


  constructor(private authServuce: AuthService) { }

  ngOnInit() {
  }



  login() {
    this.authServuce.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Logging Faild!');
    });
}

loggedIn(){
  const token = localStorage.getItem('token');
  return !!token;
}


loggout(){
  localStorage.removeItem('token');
  console.log('logged out');
}




}
