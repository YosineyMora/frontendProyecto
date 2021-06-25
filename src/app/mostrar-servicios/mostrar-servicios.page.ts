import { Component, OnInit } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'app-mostrar-servicios',
  templateUrl: './mostrar-servicios.page.html',
  styleUrls: ['./mostrar-servicios.page.scss'],
})
export class MostrarServiciosPage implements OnInit {
  
  servicios : any[];

  constructor(
    public http: HttpProvider
  ){
  }

  ngOnInit() {
  }

  loadServicio(){
    this.http.cargarServicio().subscribe(
      (res:any) => { 
        console.log("Exito ===", res);
        this.servicios = res;
      },
      (error) =>{
        console.log("Error ===", error);
        console.error(error);
      })
  }

  eliminaServicio(id){
    this.http.deleteServicio(id).subscribe((res:any)=>{
      console.log ("EXITO ===", res)
      this.loadServicio();
      alert('Servicio eliminado exitosamente');
    },(error:any) => {
      console.log("ERROR ===",error);
      alert('No es posible eliminar el servicio');
    })
  }
}