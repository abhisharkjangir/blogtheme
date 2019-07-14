import QueryString from "query-string";
import moment from "moment";

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

// Get Category Data from Blog
export const getCategoryDataFromBlog = (categories, blog) => {
  if (blog && blog.category && categories) {
    const blogFirstCategory = blog.category[0];
    const matchedCategories = categories.filter(
      cat => cat._id.toString() === blogFirstCategory
    );
    if (matchedCategories.length > 0) {
      return matchedCategories[0];
    }
    return {};
  }
  return {};
};

// Get Blog URL
export const getBlogUrl = blog => {
  if (blog) {
    return `/blog/${blog.title
      .toLowerCase()
      .split(" ")
      .join("-").replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')}/${blog._id}`;
  }
  return "";
};

// Get Category URL
export const getCategoryUrl = category => {
  if (category && category.name) {
    return `/category/${category.name
      .toLowerCase()
      .split(" ")
      .join("-")}/${category._id}`;
  }
  return "";
};

// Get Time String
export const getTimeString = date => {
  if (date) {
    return moment(date).format("Do MMM, YYYY");
  }
  return "Time is not Available";
};

// Get Blog Short Description (120 char)
export const extractShortDescription = (htmlString, length = 120) => {
  if (htmlString) {
    const p = document.createElement("p");
    p.innerHTML = htmlString;
    const description = p.textContent || p.innerText;
    return description.slice(0, length);
  }
  return "";
};
