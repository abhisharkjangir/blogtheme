const APIS = {
  login: "signin",
  logout: "signout",
  blogs: "stories/filter",
  deleteBlog: "story/delete",
  addBlog: "story/add",
  categories: "categories",
  blogDetails: "story"
};

const getApiEndPoint = name => {
  if (name && APIS[name]) return APIS[name];
  return "";
};

export default getApiEndPoint;
