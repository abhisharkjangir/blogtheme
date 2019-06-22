import { LOGO } from "../assets/imgs";

export default {
  default: {
    title: "Meuzic",
    description: "www.meuzic.com",
    image: LOGO,
    twitter: "",
    sep: " | ",
    siteURL: "",
    keywords:"",
    facebookAppId: "XXXXXXXXX",
    updated: new Date().toDateString(),
    published: new Date().toDateString(),
    contentType: "website"
  },
  home: {
    id: "home",
    title: "Dashboard",
    description: "Dashboard"
  },
  login: {
    id: "login",
    title: "Login",
    description: "Login to Meuzic"
  },
  signup: {
    id: "signup",
    title: "Signup",
    description: "Signup on Meuzic"
  },
  forgetpassword: {
    id: "forgotpassword",
    title: "Forget Password",
    description: "Forget Password"
  },
  notfound: {
    id: "notfound",
    title: "Oops! 404",
    description: "This is not the web page you are looking for."
  }
};
