import { AppState } from '../app.state';

export const selectGameDetails = (state: AppState) => state.gameDetails;

export const selectExpadingFarm = (state: AppState) =>
  state.gameDetails.expandingFarm;

export const selectFertilizerQuality = (state: AppState) =>
  state.gameDetails.fetilizerQuality;

export const selectFertilizerQualityValue = (state: AppState) => {
  const { initialValue, level, increasePerLevel, multiplier } =
    state.gameDetails.fetilizerQuality;

  return (initialValue + level * increasePerLevel) * multiplier;
};

export const selectMarketingStrategies = (state: AppState) =>
  state.gameDetails.marketingStrategies;

export const selectMarketingStrategiesValue = (state: AppState) => {
  const { initialValue, level, increasePerLevel, multiplier } =
    state.gameDetails.marketingStrategies;

  return (initialValue + level * increasePerLevel) * multiplier;
};
