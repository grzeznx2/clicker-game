import { AppState } from '../app.state';

export const selectGameDetails = (state: AppState) => state.gameDetails;

export const selectExpadingFarm = (state: AppState) =>
  state.gameDetails.expandingFarm;
