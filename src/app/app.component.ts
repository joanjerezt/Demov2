///<reference path="persona.ts"/>
import {Component, OnInit} from '@angular/core';
import {PersonaService} from "./persona.service";
import {CoolLocalStorage}         from 'angular2-cool-storage';
import {Persona} from "./persona";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[PersonaService,CoolLocalStorage]

})
export class AppComponent implements OnInit {
  newPersona: Persona  = new Persona();
  personas: Persona  = new Persona();

  constructor(private personaService: PersonaService)
  { this.newPersona = new Persona();
  }
  ngOnInit(): void {
    this.personaService.getAllUsers();

  }
  //title = 'app works!';

}
