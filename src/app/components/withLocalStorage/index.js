import React from "react";
import { getLocalStorage, isServer } from "../../utils/common";

const WithLocalStorage = Comp => {
  let storage = {};
  if (typeof Storage !== undefined && !isServer) {
    let allKeys = Object.keys(localStorage);
    for (let index = 0; index < allKeys.length; index++) {
      storage[allKeys[index]] = getLocalStorage(allKeys[index]);
    }
  }
  return class LocalStorage extends React.Component {
    render() {
      return <Comp storage={storage} />;
    }
  };
};

export default WithLocalStorage;
