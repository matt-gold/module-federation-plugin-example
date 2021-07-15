import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { of, Observable, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

export class SetTitle {
  static readonly type = '[Shell] Set Title';
  constructor(public title: string) {}
}


interface StateModel {
  title: string;
}

@Injectable()
@State<StateModel>({
  name: 'shell',
  defaults: {
    title: '(title not set)'
  }
})
export class ShellState {
  @Action(SetTitle)
  public setTitle({ patchState }: StateContext<StateModel>, action: SetTitle): Observable<unknown> {
    patchState({ title: '(setting the title...)'});

    // demonstrating case where observable is returned from the action handler
    return timer(1000).pipe(
      tap(_ => patchState({ title: action.title }))
    );
  }
}
