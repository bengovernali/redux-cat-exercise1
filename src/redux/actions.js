import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from "./actionTypes";

export const actionNap = () => ({
  type: ACTION_NAP,
  payload: {
    activity: "napping"
  }
});

export const actionEat = () => ({
  type: ACTION_EAT,
  payload: {
    activity: "eating"
  }
});

export const actionPlay = () => ({
  type: ACTION_PLAY,
  payload: {
    activity: "playing"
  }
});
