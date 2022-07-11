import { AnimalsState } from './animals';
import { CurrentLevelState } from './currentLevel';
import { GameDetailsState } from './gameDetails';

export interface AppState {
  gameDetails: GameDetailsState;
  currentLevel: CurrentLevelState;
  animals: AnimalsState;
}
