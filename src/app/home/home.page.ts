import { Component } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  servicios : any[];
  
  constructor(
    public http: HttpProvider
  ){

  }

}
