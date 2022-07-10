import { createReducer, on } from '@ngrx/store';
import { CurrentLevelActions } from './currentLevel.actions';

export interface CurrentLevelState {
  grassHarvested: number;
  money: number;
}

export const initialCurrentLevelState: CurrentLevelState = {
  grassHarvested: 0,
  money: 0,
};

export const currentLevelReducer = createReducer(
  initialCurrentLevelState,
  on(CurrentLevelActions.EARN_MONEY, (state, { value }) => ({
    ...state,
    money: state.money + value,
  })),
  on(CurrentLevelActions.HARVEST_GRASS, (state, { value }) => ({
    ...state,
    grassHarvested: state.grassHarvested + value,
  }))
);
