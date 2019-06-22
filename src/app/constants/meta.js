import { LOGO } from "../assets/imgs";

export default {
  default: {
    title: "Blog Theme",
    description: "Bloging Website",
    image: LOGO,
    twitter: "",
    sep: " : ",
    siteURL: "",
    keywords: "",
    facebookAppId: "XXXXXXXXX",
    updated: new Date().toDateString(),
    published: new Date().toDateString(),
    contentType: "website"
  },
  home: {
    id: "home",
    title: "Home",
    description: "Blog Theme"
  },
  notfound: {
    id: "notfound",
    title: "Oops! 404",
    description: "This is not the web page you are looking for."
  }
};
