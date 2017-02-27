import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PersonaService {
  private API: string = "http://localhost:3001";

  constructor(private http: Http){
  }

  getUsers(){
    let url: string = this.API + '/api/persona/';
    return this.http.get(url)
      .map(res => res.json()).catch(this.handleError);
  }

  getUser(id){
    return this.http.get(this.API + '/api/persona/' + id)
      .map(res => res.json());
  }

  addUser(user){
    return this.http.post(this.API + '/api/persona/', JSON.stringify(user))
      .map(res => res.json());
  }

  updateUser(user){
    return this.http.put(this.API + '/api/persona/' + user.id, JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete(this.API + '/api/persona/' + id)
      .map(res => res.json());
  }


  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
