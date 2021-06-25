import { Component } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';
import {Router} from '@angular/router';
// import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  email:any;
  password:any;

  constructor(
    public http: HttpProvider,private router:Router
  ){

  }

  IniciarSesion(){
    let data = {
      email : this.email,
      password : this.password,
      
    }
    console.log("Correo"+data.email+"Contraseña"+data.password)

    this.http.iniciarSesion(data.email,data.password).subscribe((res:any)=>{
      console.log ("EXITO ===", res)
      this.email='';
      this.password='';
      this.router.navigate(['/menu']);
      alert('Inicio de Sesión exitosamente');
    },(error:any) => {
      alert('Correo o Contraseña incorrectos');
     
      console.log("ERROR ===",error);
    })
  }
  }

