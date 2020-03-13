import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { Message } from '../_models/message';
import { AuthService } from '../_services/auth.service';


@Injectable()

export class MessagesResolver implements Resolve<Message[]>{
  pageNumber = 1;
  pageSize = 5;
  messageContainer = 'Unread';


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Message[]> {
    return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(
      catchError(error => {
        this.alertify.error('Propblem in retrieving messages');
        this.rout.navigate(['/home']);
        return of(null);
      })
    );
  }


  constructor(private userService: UserService,
    private alertify: AlertifyService, private rout: Router, private authService: AuthService) { }
}