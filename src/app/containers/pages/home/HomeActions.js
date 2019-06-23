import { HOME_SAVE_USERS } from "./homeConstants";

export const saveUsers = users => ({ type: HOME_SAVE_USERS, payload: users });
