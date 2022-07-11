import { createAction, props } from '@ngrx/store';
import { GameDetailName } from './gameDetails.reducer';

const REDUCER = '[GAME DETAILS]';

export const GameDetailsActions = {
  INCREASE_FERTILIZER_QUALITY_LEVEL: createAction(
    `${REDUCER} INCREASE_FERTILIZER_QUALITY_LEVEL`,
    props<{ value: number }>()
  ),
  INCREASE_MARKETING_STRATEGIES_LEVEL: createAction(
    `${REDUCER} INCREASE_MARKETING_STRATEGIES_LEVEL`,
    props<{ value: number }>()
  ),
  INCREASE_EXPANDING_FARM_LEVEL: createAction(
    `${REDUCER} INCREASE_EXPANDING_FARM_LEVEL`
  ),
  INCREASE_GAME_DETAIL_LEVEL: createAction(
    `${REDUCER} INCREASE_GAME_DETAIL_LEVEL`,
    props<{ gameDetailName: GameDetailName; levelsAmount: number }>()
  ),
};
