import { AppState } from '../app.state';
import { selectMoney } from '../currentLevel/currentLevel.selectors';
import { GameDetailName, GameDetailsState } from './gameDetails.reducer';

export const selectGameDetails = (state: AppState) => state.gameDetails;

export const selectGameDetailByName =
  (gameDetailName: GameDetailName) => (state: AppState) =>
    state.gameDetails.byName[gameDetailName];

export const selectGameDetailValue =
  (gameDetailName: GameDetailName) => (state: AppState) => {
    const { initialValue, level, increasePerLevel, multiplier } =
      state.gameDetails.byName[gameDetailName];
    return (initialValue + level * increasePerLevel) * multiplier;
  };

export const selectGameDetailCost =
  (gameDetailName: GameDetailName) => (state: AppState) => {
    const { initialCost, level, costPerLevel } =
      state.gameDetails.byName[gameDetailName];
    return initialCost * costPerLevel ** level;
  };

export const selectGameDetailNextLevelIncrease =
  (gameDetailName: GameDetailName) => (state: AppState) => {
    const { increasePerLevel, level, initialValue } =
      state.gameDetails.byName[gameDetailName];
    return initialValue + increasePerLevel * (level + 1);
  };

export const selectGameDetailLevelsAvailable =
  (gameDetailName: GameDetailName) => (state: AppState) => {
    const money = selectMoney(state);

    const { initialCost, level, costPerLevel } =
      state.gameDetails.byName[gameDetailName];

    const calcLevelPrice = (level: number) =>
      initialCost * costPerLevel ** level;

    let levelsAvailable = 0;
    let totalPrice = calcLevelPrice(level);

    while (totalPrice <= money) {
      levelsAvailable++;
      totalPrice += calcLevelPrice(level + levelsAvailable);
    }

    return levelsAvailable;
  };

export const selectExpadingFarm = (state: AppState) =>
  state.gameDetails.byName.expandingFarm;

export const selectFertilizerQuality = (state: AppState) =>
  state.gameDetails.byName.fetilizerQuality;

export const selectFertilizerQualityValue = (state: AppState) => {
  const { initialValue, level, increasePerLevel, multiplier } =
    state.gameDetails.byName.fetilizerQuality;

  return (initialValue + level * increasePerLevel) * multiplier;
};

export const selectFertilizerQualityPrice = (state: AppState) => {
  const { initialCost, level, costPerLevel } =
    state.gameDetails.byName.fetilizerQuality;

  return initialCost + costPerLevel ** level;
};

export const selectMarketingStrategies = (state: AppState) =>
  state.gameDetails.byName.marketingStrategies;

export const selectMarketingStrategiesValue = (state: AppState) => {
  const { initialValue, level, increasePerLevel, multiplier } =
    state.gameDetails.byName.marketingStrategies;

  return (initialValue + level * increasePerLevel) * multiplier;
};
