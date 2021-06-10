import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shcool } from './shcool.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrlH ='http://hp-api.herokuapp.com/api/characters/house/Hufflepuff';
  apiUrlR ='http://hp-api.herokuapp.com/api/characters/house/Ravenclaw';
  apiUrlS ='http://hp-api.herokuapp.com/api/characters/house/Slytherin';
  apiUrlG ='http://hp-api.herokuapp.com/api/characters/house/Gryffindor';
  apiUrlA ='http://hp-api.herokuapp.com/api/characters';
  

  constructor(private _http: HttpClient) { }

  getInfoH () {
    return this._http.get<shcool[]>(this.apiUrlH)
  }
  getInfoR () {
    return this._http.get<shcool[]>(this.apiUrlR)
  }
  getInfoS () {
    return this._http.get<shcool[]>(this.apiUrlS)
  }
  getInfoG () {
    return this._http.get<shcool[]>(this.apiUrlG)
  }
  getInfoA () {
    return this._http.get<shcool[]>(this.apiUrlA)
  }
}
