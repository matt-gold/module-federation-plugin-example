import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FlightsModule } from './flights/flights.module';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/flights' },
      { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule), pathMatch: 'full'}
    ]),
    NgxsModule.forRoot([], {
      developmentMode: true
    })
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
