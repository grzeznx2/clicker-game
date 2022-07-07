import { createReducer } from '@ngrx/store';

export interface GameDetailsState {
  expandingFarm: {
    startValue: number;
    multiplier: number;
    level: number;
    initialCost: number;
    costPerLevel: number;
    isLevelAvailable: boolean;
  };
}

export const initialGameDetailsState: GameDetailsState = {
  expandingFarm: {
    startValue: 1,
    multiplier: 1,
    level: 3,
    initialCost: 10000,
    costPerLevel: 320,
    isLevelAvailable: false,
  },
};

export const gameDetailsReducer = createReducer(initialGameDetailsState);
