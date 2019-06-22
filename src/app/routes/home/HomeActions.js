import { HOME_SAVE_USERS } from "./HomeConstants";

export const saveUsers = users => ({ type: HOME_SAVE_USERS, payload: users });
