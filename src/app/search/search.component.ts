import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public listaA: any;
  lista:any;
  All: string ='';
  h:any;
  CasaAll: any;
  filterListas='';
  
  constructor(
    private DataService: DataService
  ) { }
  
  filterAll='';
  
  ngOnInit(): void {
    this.getListA();     
  }

  public getListA(){
    this.DataService.getInfoA()
    .subscribe(respuesta  => {
      this.listaA = respuesta;
      this.lista=this.listaA;   
    });     
  }
}

