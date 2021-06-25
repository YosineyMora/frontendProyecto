import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpProvider {

  headers : HttpHeaders

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello HttpProvider Provider');
    this.headers = new HttpHeaders();
    this.headers.append("Accept",'application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Acces-Control-Allow-Origin','*');
  }

  cargarServicio(){
    return this.http.get('http://localhost:3000/service');
  }

  addServicio(data){
    return this.http.post('http://localhost:3000/service',data);
  }

  deleteServicio(id){
    return this.http.delete('http://localhost:3000/service/'+id);
  }

  updateServicio(id, data){
    return this.http.put('http://localhost:3000/service/'+id,data);
  }

  iniciarSesion(correo,contra){
    //Falta
    return this.http.put('http://localhost:3000/service/'+correo,contra);
  }

  registrarse(data){
    //Falta
    return this.http.post('http://localhost:3000/service',data);
  }
}