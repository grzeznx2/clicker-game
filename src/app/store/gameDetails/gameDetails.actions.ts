import { createAction, props } from '@ngrx/store';

const REDUCER = '[GAME DETAILS]';

export const GameDetailsActions = {
  INCREASE_FERTILIZER_QUALITY_LEVEL: createAction(
    `${REDUCER} Increase Fertilizer Quality Level`,
    props<{ value: number }>()
  ),
};
