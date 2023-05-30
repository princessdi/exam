import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElephantService } from 'src/app/services/elephant.service';

@Component({
  selector: 'app-data-form',
  template: `<ion-content>
    <form [formGroup]="dataForm" (ngSubmit)="onSubmit()">
      <ion-item>
        <ion-label>Кількість кольорів (M)</ion-label>
        <ion-input type="number" formControlName="colors"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Кількість слоненят (N)</ion-label>
        <ion-input type="number" formControlName="elephants"></ion-input>
      </ion-item>
      <ion-button type="submit">Calculate</ion-button>
    </form>
  </ion-content> `,
})
export class DataFormComponent {
  dataForm: FormGroup;

  @Output() calculateEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private formBuilder: FormBuilder,
    private elephantService: ElephantService
  ) {
    this.dataForm = this.formBuilder.group({
      colors: ['', Validators.required],
      elephants: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      const elephants = this.dataForm.value.elephants;
      const colors = this.dataForm.value.colors;

      this.calculateEvent.emit(this.calculate(colors, elephants));
    }
  }

  calculate(colors: string, elephants: string): number {
    const elephantService = new ElephantService();
    return elephantService.calculateElephants(+colors, +elephants);
  }
}
