import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() formCanceled = new EventEmitter<boolean>();
  model: any = {};

    constructor(private authService: AuthService) { }

ngOnInit() {
}


register() {
this.authService.register(this.model).subscribe(next => {
  console.log('Registrated successfully');
}, error => {
  console.log('Registration Faild!');
});
}

cancle() {
  this.formCanceled.emit(false);
}


}
