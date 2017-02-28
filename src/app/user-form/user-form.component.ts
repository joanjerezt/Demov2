import { Component, OnInit } from '@angular/core';
import {Persona} from "../persona";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {PersonaService} from "../persona.service";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  persona: Persona = new Persona();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private personaService: PersonaService
  ) {
    this.form = formBuilder.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      apellido: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      edad: []
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['_id'];

      this.title = id ? 'Editar usuario' : 'Nuevo usuario';

      if (!id)
        return;

      this.personaService.getUser(id)
        .subscribe(
          user => this.persona = user,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
      userValue = this.form.value;

    if (userValue.id){
      result = this.personaService.updateUser(userValue);
    } else {
      result = this.personaService.addUser(userValue);
    }

    result.subscribe(data => this.router.navigate(['users']));
  }

}
