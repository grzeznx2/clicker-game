import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app.state';
import { CurrentLevelActions } from './currentLevel.actions';
import { mergeMap, tap, withLatestFrom } from 'rxjs';
import { selectMarketingStrategiesValue } from '../gameDetails/gameDetails.selectors';

@Injectable()
export class CurrentLevelEffects {
  constructor(
    private readonly store: Store<AppState>,
    private readonly actions$: Actions
  ) {}

  harvestGrass$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CurrentLevelActions.HARVEST_GRASS),
        withLatestFrom(this.store.select(selectMarketingStrategiesValue)),
        tap(([{ value }, grassPrice]) => {
          console.log(value, grassPrice);
          this.store.dispatch(
            CurrentLevelActions.UPDATE_GRASS_AND_MONEY({
              grassAmount: value,
              grassPrice,
            })
          );
        })
      ),
    { dispatch: false }
  );
}
