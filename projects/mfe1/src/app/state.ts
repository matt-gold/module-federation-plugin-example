import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { of, Observable, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

export class SetTitle {
  static readonly type = '[Flights] Set Title';
  constructor(public title: string) {}
}


interface StateModel {
  title: string;
}

@Injectable()
@State<StateModel>({
  name: 'mfe1',
  defaults: {
    title: '(title not set)'
  }
})
export class FlightsState {
  @Action(SetTitle)
  public setTitle({ patchState }: StateContext<StateModel>, action: SetTitle): Observable<unknown> {
    // this is the same logic present in the shell state, where everything is working.
    patchState({ title: '(setting the title...)' });

    return timer(1000).pipe(
      // this is never reached, it appears the Ngxs is not subscribing to the returned observable here!
      tap(_ => patchState({ title: action.title }))
    );
  }
}
