import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() registerMode: boolean;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  RegiseterToggle() {
    this.registerMode = true;
  }


  onFormCanceled(event: boolean){
   this.registerMode = event;
  }

}