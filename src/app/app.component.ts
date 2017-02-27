import {Component, OnInit} from '@angular/core';
import {PersonaService} from "./persona.service";
import {Persona} from "./persona";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {

  private personas: Persona[] = [];

  constructor(private personaService: PersonaService)
  {
  }

  ngOnInit(): void {
    this.personaService.getUsers()
      .subscribe(data => this.personas = data);
  }

}
