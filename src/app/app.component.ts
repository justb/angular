import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes,ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  color='green';
  
  
  
}
console.log(ActivatedRoute);

