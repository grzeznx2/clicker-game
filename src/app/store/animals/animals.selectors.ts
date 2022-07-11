import { AppState } from '../app.state';
import { AnimalName } from './animals.reducer';

export const selectAnimals = (state: AppState) => state.animals;

export const selectAnimalByName =
  (animalName: AnimalName) => (state: AppState) =>
    state.animals.byName[animalName];
