import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataFormComponent } from 'src/app/components/data-form/data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ElephantService } from './services/elephant.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [AppComponent, DataFormComponent, ResultComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ElephantService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
