import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { FlightsState } from '../state';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FlightsComponent
      }
    ]),
    NgxsModule.forFeature([FlightsState])
  ],
  declarations: [
    FlightsComponent
  ]
})
export class FlightsModule { }
