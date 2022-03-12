import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import productos from '../../../assets/productList.json';
import {ServicioPersona} from '../servic/servicio';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  

 
  @Output()
  emisor = new EventEmitter();
  todosProductos:Array<any> = productos;
  constructor(private router: Router,private servicio: ServicioPersona) { 

  }
  
  ngOnInit(): void { 
  
  }

   detalle(id:any,puerta:boolean): void {

     if(puerta){
      
      this.servicio.setPersona(id);
      console.log
      this.emisor.emit(id);
    this.router.navigate([id]);
    }
  }

}
