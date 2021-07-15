import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '                                               \
  <ul>                                                      \
    <li><img src="../assets/angular.png" width="50"></li>   \
    <li><a routerLink="/">Home</a></li>                     \
    <li><a routerLink="/flights">Flights</a></li>           \
  </ul>                                                     \
  <router-outlet></router-outlet>'
})
export class AppComponent {
}

