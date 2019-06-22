import { SHOW_LOADER, HIDE_LOADER } from "./loaderConstants";

export const showLoader = data => ({
  type: SHOW_LOADER,
  data
});
export const hideLoader = () => ({
  type: HIDE_LOADER
});
