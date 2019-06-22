import { APP_STATE_KEY } from "./appConstants";

// Select App State
export const appState = state => state.get(APP_STATE_KEY);
