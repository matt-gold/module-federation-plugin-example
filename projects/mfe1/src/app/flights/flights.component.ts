import {Component} from '@angular/core';
import { Store } from '@ngxs/store';
import { SetTitle } from '../state';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html'
})
export class FlightsComponent {
  constructor(private readonly store: Store) {
    console.log('Store injected into mfe1: ', this.store);
    store.dispatch(new SetTitle('Hello World!'));
  }

  title$ = this.store.select(s => s.mfe1.title).pipe(tap(console.log));
}
