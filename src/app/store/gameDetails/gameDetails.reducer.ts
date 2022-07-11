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
}

export type GameDetailName =
  | 'marketingStrategies'
  | 'expandingFarm'
  | 'fetilizerQuality';

export type AnimalName =
  | 'leafcutterAnt'
  | 'fallArmyworm'
  | 'froghopper'
  | 'billbug'
  | 'grasshoper';

export interface GameDetailsState {
  nameList: GameDetailName[];
  animalsList: AnimalName[];
  byName: {
    [key in GameDetailName | AnimalName]: Upgrade;
  };
}

export const initialGameDetailsState: GameDetailsState = {
  nameList: ['marketingStrategies', 'expandingFarm', 'fetilizerQuality'],
  animalsList: [
    'leafcutterAnt',
    'fallArmyworm',
    'froghopper',
    'billbug',
    'grasshoper',
  ],
  byName: {
    marketingStrategies: {
      initialValue: 1,
      multiplier: 1,
      level: 0,
      initialCost: 30,
      costPerLevel: 1.1,
      increasePerLevel: 0.5,
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
      valueDescription: 'Growth Rate',
      displayName: 'Fertilizer Quality',
    },
    leafcutterAnt: {
      initialValue: 1,
      multiplier: 1,
      level: 0,
      initialCost: 100,
      costPerLevel: 1.1,
      increasePerLevel: 1,
      valueDescription: 'GPS',
      displayName: 'Leafcutter Ant',
    },
    fallArmyworm: {
      initialValue: 2,
      multiplier: 1,
      level: 0,
      initialCost: 2500,
      costPerLevel: 1.1,
      increasePerLevel: 2,
      valueDescription: 'GPS',
      displayName: 'Fall Armyworm',
    },
    froghopper: {
      initialValue: 5,
      multiplier: 1,
      level: 0,
      initialCost: 50000,
      costPerLevel: 1.1,
      increasePerLevel: 5,
      valueDescription: 'GPS',
      displayName: 'Froghopper',
    },
    billbug: {
      initialValue: 15,
      multiplier: 1,
      level: 0,
      initialCost: 1000000,
      costPerLevel: 1.1,
      increasePerLevel: 15,
      valueDescription: 'GPS',
      displayName: 'Billbug',
    },
    grasshoper: {
      initialValue: 50,
      multiplier: 1,
      level: 0,
      initialCost: 30000000,
      costPerLevel: 1.1,
      increasePerLevel: 50,
      valueDescription: 'GPS',
      displayName: 'Grasshoper',
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
