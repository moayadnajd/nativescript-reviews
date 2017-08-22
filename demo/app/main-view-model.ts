import { Observable } from 'tns-core-modules/data/observable';


export class HelloWorldModel extends Observable {
  public message: string;

  public imagetag = '<IC:WebImage stretch="fill" class="reviews-userimage img-circle" height="45" width="45"  verticalAlignment="top" row="0" col="0" placeholder="~/images/icon-50.png" src="{{ image }}" />';


  public plugin = 'xmlns:IC="nativescript-web-image-cache"'

  public reviewsWithWebImages =  [
    { image: "http://liferay.github.io/clay/images/thumbnail_placeholder.gif", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { image: "http://liferay.github.io/clay/images/thumbnail_placeholder.gif", username: "Demo Nativescript", review: "Thats good", rate: 3, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) }
  ];
  public reviews = [
    { image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { image: "~/images/icon-50.png", username: "Demo Nativescript", review: "Thats good", rate: 3, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) }
  ];
  public lotofreviews = [
    { image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 84 * 60 * 60 * 1000) },
    { image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 84 * 60 * 60 * 1000) },
    { image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { image: "~/images/icon-50.png", username: "Demo Nativescript", review: "Thats good", rate: 3, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000) }
  ];
  constructor() {
    super();
  }
}
