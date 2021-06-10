import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-slytherin',
  templateUrl: './slytherin.component.html',
  styleUrls: ['./slytherin.component.css']
})
export class SlytherinComponent implements OnInit {
 //Definiciónvariables
  public listaSly: any;
  character:any;
  Slytherin: string ='';
  cantidadR:any;
  CasaGry: any;
  
  constructor(
    private DataService: DataService
  ) { }

  ngOnInit(): void {
    this.getListS();     
  }

    //Obtiene la información que proporciona la api de la casa y la almacena en character
  public getListS(){
    this.DataService.getInfoS()
    .subscribe(respuesta  => {
      this.listaSly = respuesta;
      this.character=this.listaSly; 
      this.cantidadR=this.character.length;  
    });     
  }

}
