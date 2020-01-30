import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';


@Injectable()

export class MemberEditResolver implements Resolve<User>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
      return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
           catchError(error =>{
              this.alertify.error('Propblem in retrieving your data');
              this.rout.navigate(['/members']);
              return of(null);
           })
      )
    }


    constructor(private userService: UserService, 
                private alertify: AlertifyService, 
                private rout: Router, private authService: AuthService){}
}