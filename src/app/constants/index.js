export const PUBLISH = [
  {
    id: "1",
    name: "Published"
  },
  {
    id: "0",
    name: "Unpublished"
  }
];
export const PUBLISHED_BY = [
  {
    id: "0",
    name: "Admin"
  },
  {
    id: "1",
    name: "Other"
  }
];
export const FEATURED = [
  {
    id: "0",
    name: "No"
  },
  {
    id: "1",
    name: "Yes"
  }
];
export const TRENDING = [
  {
    id: "0",
    name: "No"
  },
  {
    id: "1",
    name: "Yes"
  }
];

// eslint-disable-next-line
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  APP_NAME: "Reactor",
  ENV_TYPES: {
    PROD: "prod",
    STAG: "stag",
    LOCAL: "local"
  }
};
