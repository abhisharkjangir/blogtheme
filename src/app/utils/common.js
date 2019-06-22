import QueryString from "query-string";

// A nice helper to tell us if we're on the server
export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

// Set Values in local storage
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Get Values from local storage
export const getLocalStorage = key => {
  let data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
};

// Find a value in arr of objects by id
export const findValueById = (arr, id) => {
  let list = arr.filter(item => item.id === id)[0];
  if (list) {
    return list.name;
  } else {
    return "";
  }
};

// Process Query Params for API Payload
export const processQueryParams = (location, storeFilters) => {
  let queryParams = QueryString.parse(location.search, {
    ignoreQueryPrefix: true
  });
  if (
    queryParams &&
    queryParams.category &&
    typeof queryParams.category === "string"
  ) {
    queryParams.category = [queryParams.category];
  }
  const payload = { ...storeFilters, ...queryParams };
  payload.limit = queryParams.limit
    ? parseInt(queryParams.limit)
    : storeFilters.limit;
  payload.offset = queryParams.offset
    ? parseInt(queryParams.offset)
    : storeFilters.offset;
  return payload;
};

// Remove all the empty & null value keys from the object
export const cleanObject = object => {
  let cleanObject = {};
  let keys = Object.keys(object);
  if (keys) {
    keys.forEach(key => {
      let value = object[key];
      if (value !== "" && value !== null && value.length !== 0) {
        cleanObject[key] = value;
      }
    });
  }
  return cleanObject;
};
