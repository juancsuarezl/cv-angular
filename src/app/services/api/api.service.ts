import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment }  from '../../environments/environment';
//import { Cliente } from '../models/model.interface';
// import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public cliente: Cliente = {
  //   id: 0,
  //   firstName: '',
  //   laststName: '',
  //   email: '',
  //   documentId: 0,
  //   selectedModel: '',
  //   selectedVersion: '',
  //   phone: 0

  // }

  //public baseUrl = 'https://primelinkautos.com/php/';
  public baseUrl = 'http://localhost/api/';
  //baseUrl = environment.baseUrl;

  constructor(public http:HttpClient) { }

  getClientes() {
    return this.http.get(`${this.baseUrl}GetClientes.php`);
  }

  addCliente(cliente: any){
    console.log(cliente);
    return this.http.post(`${this.baseUrl}AddCliente.php`, JSON.stringify(cliente));
  }

  getUsuarios() {
    return this.http.get(`${this.baseUrl}GetUsuarios.php`);
  }

}
