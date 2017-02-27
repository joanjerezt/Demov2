import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {Persona}                     from './persona';
import {Observable} from "rxjs";

@Injectable()
export class PersonaService {
  personas: Persona[] = [];
  persona: Persona = new Persona();
  private API: "http://localhost:3001";

  constructor(private http: Http){
  }

  // Simulate GET /todos
  getAllUsers(): Persona[] {
    return this.personas;
  }

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;
  // Simulate POST /todos
  addPersona(persona: Persona): PersonaService {
    if (!persona._id) {
      persona._id = ++this.lastId;
    }
    this.personas.push(persona);
    return this;
  }

  getUsers() {
    const headers = this.getHeadersDefault();
    let url: string = this.API + '/api/persona';
    return this.http.get(url)
      .map( (data: Response) => {
        console.log(data);
        let personas = data.json(); })
      .catch(this.handleError);
  }

  getUsers2(){
    let url: string = this.API + '/api/persona';
    return this.http.get(url)
      .map(response => <Persona[]> response.json().data)
      .do(data => console.log(data)) //debug to console
      .catch(this.handleError);
  }

  private getHeadersDefault() {
    const headers = new Headers();
    if (this.persona) {
      headers.append('Authorization', 'TOKEN ' + this.persona.token);
    }
    return headers;
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
