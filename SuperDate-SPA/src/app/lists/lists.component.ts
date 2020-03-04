import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  users: User[];
  pagination: Pagination;
  likesParam: string;
  constructor(private authservice: AuthService,
    private userService: UserService,
    private root: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.root.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
    });

    this.likesParam = 'Likers';
  }



  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage,
      this.pagination.itemsPerPage, null, this.likesParam).subscribe((users: PaginatedResult<User[]>) => {
        this.users = users.result;
        this.pagination = users.pagination;

      }, error => {
        this.alertify.error(error.error);
      });
  }

  pageChanged(pageNumber: any) {
    this.pagination.currentPage = pageNumber.page;
    this.loadUsers();
  }


}
