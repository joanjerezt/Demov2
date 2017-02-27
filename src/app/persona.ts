/**
 * Created by juan on 25/02/17.
 */

export class Persona {
  _id: number;
  nombre: string;
  apellido: string;
  edad: number;
  token: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
