import { process } from 'uniqid';

export class Todo {
  public id: string;
  public text: string;
  public completed: boolean;

  constructor( text: string ) {
    this.text = text;
    this.id = process();
    this.completed = false;
  }
}
