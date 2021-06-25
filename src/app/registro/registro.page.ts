import { Component, OnInit } from '@angular/core';

import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: any;
	telefono : any;
	nomUser : any;
	contrasena : any;
	
  constructor(
    public http: HttpProvider
  ){
    
  }

  Registrarse(){
    let data = {
      nombre : this.nombre,
      telefono : this.telefono,
      nomUser : this.nomUser,
      contrasena: this.contrasena,
    }
    console.log(data.nombre+" "+data.telefono+" "+data.nomUser+" "+data.contrasena)
    this.http.registrarse(data).subscribe((res:any)=>{
      console.log ("EXITO ===", res)
      this.nombre='';
      this.telefono='';
      this.nomUser='';
      this.nomUser='';
      this.contrasena='';
      alert('Registro  exitosamente');
    },(error:any) => {
      alert('No fue posible registrarse ');
      console.log("ERROR ===",error);
    })

  }

}
