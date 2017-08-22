import { Observable } from 'tns-core-modules/data/observable';
import { Reviews } from 'nativescript-reviews';

export class HelloWorldModel extends Observable {
  public message: string;
  private reviews: Reviews;

  constructor() {
    super();

    this.reviews = new Reviews();
    this.message = this.reviews.message;
  }
}
