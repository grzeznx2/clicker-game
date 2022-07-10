import { AppState } from '../app.state';

export const selectCurrentLevel = (state: AppState) => state.currentLevel;
export const selectMoney = (state: AppState) => state.currentLevel.money;
export const selectGrassHarvested = (state: AppState) =>
  state.currentLevel.grassHarvested;
