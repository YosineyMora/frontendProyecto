import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'app-actualizar-servicios',
  templateUrl: './actualizar-servicios.page.html',
  styleUrls: ['./actualizar-servicios.page.scss'],
})
export class ActualizarServiciosPage implements OnInit {

  servicios : any[];

  
  id : any;
  provincia : any;
  canton : any;
  distrito : any;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    public http: HttpProvider
  ){
      this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      })
  }

  ngOnInit() {
  }

  actualizarServicio(){
    let data = {
      provincia : this.provincia,
      canton : this.canton,
      distrito: this.distrito,
    }
    this.http.updateServicio(this.id,data).subscribe((res:any)=>{
      console.log("EXITO ===",res);
      this.router.navigateByUrl('/home');
    },(err:any)=>{
      console.log("ERROR ===",err);
    })
  }

}