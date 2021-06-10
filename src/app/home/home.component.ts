

import { Component, OnInit } from '@angular/core';
import { shcool } from '../shcool.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shcools$: shcool[]=[];
  title = 'MSE4';
  myimage:string = "assets/img/background.jpg";
  show:boolean=true;

  constructor(
    private dataService: DataService,
        private router: Router
    ){}

  ngOnInit () {
    
  }
}