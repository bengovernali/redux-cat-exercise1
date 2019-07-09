import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from "../actionTypes";

const initialState = {
  activity: "napping"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAP: {
      return action.payload;
    }
    case ACTION_EAT: {
      return action.payload;
    }
    case ACTION_PLAY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
