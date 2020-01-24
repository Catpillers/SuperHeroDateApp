import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() formCanceled = new EventEmitter<boolean>();
  model: any = {};

    constructor(private authService: AuthService, private alertify: AlertifyService) { }

ngOnInit() {
}


register() {
this.authService.register(this.model).subscribe(next => {
  this.alertify.success('Registrated successfully');
}, error => {
  this.alertify.error(error);
});
}

cancle() {
  this.formCanceled.emit(false);
}


}
