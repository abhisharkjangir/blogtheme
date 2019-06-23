import { HOME_SAVE_USERS } from "./homeConstants";

const initialState = { home: "HomePage" };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HOME_SAVE_USERS:
      return Object.assign({}, state, { users: payload });
    default:
      return state;
  }
};
