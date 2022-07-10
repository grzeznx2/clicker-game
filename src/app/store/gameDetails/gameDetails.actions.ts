import { createAction, props } from '@ngrx/store';

const REDUCER = '[GAME DETAILS]';

export const GameDetailsActions = {
  INCREASE_FERTILIZER_QUALITY_LEVEL: createAction(
    `${REDUCER} INCREASE_FERTILIZER_QUALITY_LEVEL`,
    props<{ value: number }>()
  ),
  INCREASE_EXPANDING_FARM_LEVEL: createAction(
    `${REDUCER} INCREASE_EXPANDING_FARM_LEVEL`
  ),
};
