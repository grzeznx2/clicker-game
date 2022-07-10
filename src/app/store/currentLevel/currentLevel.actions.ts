import { createAction, props } from '@ngrx/store';

const REDUCER = '[CURRENT LEVEL]';

export const CurrentLevelActions = {
  EARN_MONEY: createAction(`${REDUCER} EARN_MONEY`, props<{ value: number }>()),
  HARVEST_GRASS: createAction(
    `${REDUCER} HARVEST_GRASS`,
    props<{ value: number }>()
  ),
};
