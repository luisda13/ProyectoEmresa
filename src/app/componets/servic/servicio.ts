import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductoIntefaes} from '../modules/productoIntefas';


@Injectable({
  providedIn: 'root'
})

export class ServicioPersona {

  // Creamos la persona
//   persona: ProductoIntefaes;
    persona: number;
  // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
  @Output()
  personaEmitter = new EventEmitter<number>();


  constructor() {
      
   }

  // Cambiamos el atributo this.persona y llamamos a cambioPersona().
  setPersona(nuevaPersona: number) {
    this.persona = nuevaPersona;
    this.cambiosPersona();
  }

  // Emitimos los cambio de this.persona.
  cambiosPersona() {
    this.personaEmitter.emit(this.persona);
  }
}