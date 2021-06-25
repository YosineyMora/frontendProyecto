import { Component, OnInit } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.page.html',
  styleUrls: ['./crear-servicio.page.scss'],
})
export class CrearServicioPage {

  id_tipo : any;
  id_user : any;
  decripcion : any;
  provincia : any;
  canton : any;
  distrito : any;

  constructor(
    public http: HttpProvider
  ){
    
  }

    CrearServicio(){
      let data = {
        id_tipo : this.id_tipo,
        id_user : this.id_user,
        decripcion : this.decripcion,
        provincia: this.provincia,
        canton : this.canton,
        distrito : this.distrito,
      }
  
      this.http.addServicio(data).subscribe((res:any)=>{
        console.log ("EXITO ===", res)
        this.id_tipo='';
        this.id_user='';
        this.decripcion='';
        this.provincia='';
        this.canton='';
        this.distrito='';
        alert('Servicio agregado exitosamente');
      },(error:any) => {
        alert('No fue posible agregar el Servicio');
        console.log("ERROR ===",error);
      })
    }
}