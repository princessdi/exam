import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>Залік. Варіант 12 </ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title> Виконала студентка групи КН-32, Мазур Д. В. </ion-title>
      </ion-toolbar>
    </ion-header>
    <app-result [result]="results"></app-result>
    <app-data-form (calculateEvent)="calculate($event)"></app-data-form>
  `,
})
export class AppComponent {
  results: any[] = [];

  constructor() {}

  calculate(data: any) {
    this.results = data;
    console.log(this.results);
  }
}
