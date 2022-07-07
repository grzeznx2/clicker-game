import { createReducer } from '@ngrx/store';

export interface GameDetailsState {
  expandingFarm: {
    initialValue: number;
    multiplier: number;
    level: number;
    initialCost: number;
    costPerLevel: number;
    increasePerLevel: number;
    isLevelAvailable: boolean;
  };
  fetilizerQuality: {
    initialValue: number;
    multiplier: number;
    level: number;
    initialCost: number;
    costPerLevel: number;
    increasePerLevel: number;
    isLevelAvailable: boolean;
  };
}

export const initialGameDetailsState: GameDetailsState = {
  expandingFarm: {
    initialValue: 1,
    multiplier: 1,
    level: 3,
    initialCost: 10000,
    costPerLevel: 320,
    increasePerLevel: 1,
    isLevelAvailable: false,
  },
  fetilizerQuality: {
    initialValue: 1,
    multiplier: 1,
    level: 1,
    initialCost: 10000,
    costPerLevel: 1.15,
    increasePerLevel: 0.1,
    isLevelAvailable: false,
  },
};

export const gameDetailsReducer = createReducer(initialGameDetailsState);
