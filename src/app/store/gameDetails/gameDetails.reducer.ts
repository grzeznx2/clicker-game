import { createReducer, on } from '@ngrx/store';
import { GameDetailsActions } from './gameDetails.actions';

export interface Upgrade {
  readonly initialValue: number;
  readonly valueDescription: string;
  readonly initialCost: number;
  readonly costPerLevel: number;
  readonly increasePerLevel: number;
  readonly displayName: string;
  multiplier: number;
  level: number;
  isLevelAvailable: boolean;
}

export type GameDetailName =
  | 'marketingStrategies'
  | 'expandingFarm'
  | 'fetilizerQuality';

export interface GameDetailsState {
  nameList: GameDetailName[];
  byName: {
    [key in GameDetailName]: Upgrade;
  };
}

export const initialGameDetailsState: GameDetailsState = {
  nameList: ['marketingStrategies', 'expandingFarm', 'fetilizerQuality'],
  byName: {
    marketingStrategies: {
      initialValue: 1,
      multiplier: 1,
      level: 0,
      initialCost: 30,
      costPerLevel: 1.1,
      increasePerLevel: 0.5,
      isLevelAvailable: false,
      valueDescription: 'Grass Value',
      displayName: 'Marketing Strategies',
    },
    expandingFarm: {
      initialValue: 1,
      multiplier: 1,
      level: 1,
      initialCost: 10000,
      costPerLevel: 80,
      increasePerLevel: 1,
      isLevelAvailable: false,
      valueDescription: 'Grass Count',
      displayName: 'Expanding Farm',
    },
    fetilizerQuality: {
      initialValue: 1,
      multiplier: 1,
      level: 0,
      initialCost: 50,
      costPerLevel: 1.15,
      increasePerLevel: 0.1,
      isLevelAvailable: false,
      valueDescription: 'Growth Rate',
      displayName: 'Fertilizer Quality',
    },
  },
};

export const gameDetailsReducer = createReducer(
  initialGameDetailsState,
  on(
    GameDetailsActions.INCREASE_FERTILIZER_QUALITY_LEVEL,
    (state, { value }) => ({
      ...state,
      byName: {
        ...state.byName,
        fetilizerQuality: {
          ...state.byName.fetilizerQuality,
          level: state.byName.fetilizerQuality.level + value,
        },
      },
    })
  ),
  on(
    GameDetailsActions.INCREASE_MARKETING_STRATEGIES_LEVEL,
    (state, { value }) => ({
      ...state,
      byName: {
        ...state.byName,
        marketingStrategies: {
          ...state.byName.marketingStrategies,
          level: state.byName.marketingStrategies.level + value,
        },
      },
    })
  ),
  on(GameDetailsActions.INCREASE_EXPANDING_FARM_LEVEL, (state) => ({
    ...state,
    byName: {
      ...state.byName,
      expandingFarm: {
        ...state.byName.expandingFarm,
        level: state.byName.expandingFarm.level + 1,
      },
    },
  })),
  on(
    GameDetailsActions.INCREASE_GAME_DETAIL_LEVEL,
    (state, { gameDetailName, levelsAmount }) => ({
      ...state,
      byName: {
        ...state.byName,
        [gameDetailName]: {
          ...state.byName[gameDetailName],
          level: state.byName[gameDetailName].level + levelsAmount,
        },
      },
    })
  )
);
