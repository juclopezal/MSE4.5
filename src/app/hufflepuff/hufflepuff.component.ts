import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.css']
})
export class HufflepuffComponent implements OnInit {

  //Definición variables
  public listaHuf: any;
  character:any;
  Hufflepuff: string ='';
  cantidadR:any;
  CasaHuf: any;
  
  constructor(
    private DataService: DataService
  ) { }

  ngOnInit(): void {
    this.getListH();     
  }
  //Obtiene la información que proporciona la api de la casa y la almacena en character
  public getListH(){
    this.DataService.getInfoH()
    .subscribe(respuesta  => {
      this.listaHuf = respuesta;
      this.character=this.listaHuf;
      this.cantidadR=this.character.length;    
    });     
  }
  
}