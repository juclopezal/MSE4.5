import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.component.html',
  styleUrls: ['./ravenclaw.component.css']
})
export class RavenclawComponent implements OnInit {

  //Definición variables
  public listaRav: any;
  character:any;
  Ravenclaw: string ='';
  cantidadR:any;
  CasaRav: any;
  
  constructor(
    private DataService: DataService
  ) { }

  ngOnInit(): void {
    this.getListR();     
  }

    //Obtiene la información que proporciona la api de la casa y la almacena en character
  public getListR(){
    this.DataService.getInfoR()
    .subscribe(respuesta  => {
      this.listaRav = respuesta;
      this.character=this.listaRav; 
      this.cantidadR=this.character.length;  
    });     
  }

}
