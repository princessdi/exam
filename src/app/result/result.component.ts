import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  template: `
    <div *ngFor="let data of result">
      <span *ngIf="data !== undefined" [style.color]="data.color"
        >{{ data.color }} - {{ data.elephants }}</span
      >
    </div>
  `,
})
export class ResultComponent {
  @Input() result: any;
}
