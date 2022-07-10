import { createReducer, on } from '@ngrx/store';
import { GameDetailsActions } from './gameDetails.actions';

export interface GameDetailsState {
  marketingStrategies: {
    initialValue: number;
    multiplier: number;
    level: number;
    initialCost: number;
    costPerLevel: number;
    increasePerLevel: number;
    isLevelAvailable: boolean;
  };
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
  marketingStrategies: {
    initialValue: 1,
    multiplier: 1,
    level: 0,
    initialCost: 30,
    costPerLevel: 1.1,
    increasePerLevel: 0.5,
    isLevelAvailable: false,
  },
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

export const gameDetailsReducer = createReducer(
  initialGameDetailsState,
  on(
    GameDetailsActions.INCREASE_FERTILIZER_QUALITY_LEVEL,
    (state, { value }) => ({
      ...state,
      fetilizerQuality: {
        ...state.fetilizerQuality,
        level: state.fetilizerQuality.level + value,
      },
    })
  ),
  on(
    GameDetailsActions.INCREASE_MARKETING_STRATEGIES_LEVEL,
    (state, { value }) => ({
      ...state,
      marketingStrategies: {
        ...state.marketingStrategies,
        level: state.marketingStrategies.level + value,
      },
    })
  ),
  on(GameDetailsActions.INCREASE_EXPANDING_FARM_LEVEL, (state) => ({
    ...state,
    expandingFarm: {
      ...state.expandingFarm,
      level: state.expandingFarm.level + 1,
    },
  }))
);
