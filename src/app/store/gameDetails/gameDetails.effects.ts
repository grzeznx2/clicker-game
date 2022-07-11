import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app.state';
import { map } from 'rxjs';
import { GameDetailsActions } from './gameDetails.actions';
import { selectGameDetailLevelsCost } from './gameDetails.selectors';
import { CurrentLevelActions } from '../currentLevel';

@Injectable()
export class GameDetailsEffects {
  constructor(
    private readonly store: Store<AppState>,
    private readonly actions$: Actions
  ) {}

  increaseGameDetailLevel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameDetailsActions.INCREASE_GAME_DETAIL_LEVEL),
      concatLatestFrom((action) =>
        this.store.select(
          selectGameDetailLevelsCost(
            action.gameDetailName,
            action.levelsAmount,
            true
          )
        )
      ),
      map(([_, cost]) => {
        return CurrentLevelActions.SPEND_MONEY({ value: cost });
      })
    )
  );
}
