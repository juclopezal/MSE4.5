import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.css']
})
export class GryffindorComponent {
  //definición variables
  public listaGry: any;
  character:any;
  Gryffindor: string ='';
  cantidadR:any;
  CasaGry: any;
  
  constructor(
    private DataService: DataService
  ) { }

  ngOnInit(): void {
    this.getListG();     
  }
  //Obtiene la información que proporciona la api de la casa y la almacena en character
  public getListG(){
    this.DataService.getInfoG()
    .subscribe(respuesta  => {
      this.listaGry = respuesta;
      this.character=this.listaGry;
      this.cantidadR=this.character.length;       
    });     
  }
}
