import { createReducer, on } from '@ngrx/store';

export interface Animal {
  readonly initialValue: number;
  readonly valueDescription: string;
  readonly initialCost: number;
  readonly costPerLevel: number;
  readonly increasePerLevel: number;
  readonly displayName: string;
  multiplier: number;
  level: number;
}

export type AnimalName =
  | 'leafcutterAnt'
  | 'fallArmyworm'
  | 'froghopper'
  | 'billbug'
  | 'grasshoper';

export interface AnimalsState {
  nameList: AnimalName[];
  byName: {
    [key in AnimalName]: Animal;
  };
}

export const initialAnimalsState: AnimalsState = {
  nameList: [
    'leafcutterAnt',
    'fallArmyworm',
    'froghopper',
    'billbug',
    'grasshoper',
  ],
  byName: {
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
      displayName: 'Expanding Farm',
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

export const animalsReducer = createReducer(initialAnimalsState);
