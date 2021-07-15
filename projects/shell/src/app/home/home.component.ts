import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetTitle } from '../state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private readonly store: Store) {
    this.store.dispatch(new SetTitle('Hello World!'));
  }

  title$ = this.store.select(s => s.shell.title);
}
