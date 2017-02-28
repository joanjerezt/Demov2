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

  deleteUser(user){
    if (confirm("Are you sure you want to delete " + user.nombre + "?")) {
      var index = this.personas.indexOf(user);
      this.personas.splice(index, 1);

      this.personaService.deleteUser(user._id)
        .subscribe(null,
          err => {
            alert("Could not delete persona.");
            // Revert the view back to its original state
            this.personas.splice(index, 0, user);
          });
    }
  }

}
