import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';


@Injectable()

export class MembersDetailResolver implements Resolve<User[]>{
  pageNumber = 1;
  pageSize = 5;


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(
      catchError(error => {
        this.alertify.error('Propblem in retrieving data');
        this.rout.navigate(['/home']);
        return of(null);
      })
    );
  }


  constructor(private userService: UserService, private alertify: AlertifyService, private rout: Router) { }
}