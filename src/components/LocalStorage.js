import React from "react";

const LocalStorage = () => {

  // Accessing the localstorage
  console.log(window.localStorage);
  //Set the item in the local storage
  window.localStorage.setItem('first', 'values')
  console.log('LocalStorage Vlaues \t' + localStorage.length)
  //Get the item in the local storage
  const getItems = localStorage.getItem("first")
  console.log("🚀 ~ file: LocalStorage.js:11 ~ LocalStorage ~ getItems:", getItems)
  

  return (
  
    <div>LocalStorage</div>
  );
};

export default LocalStorage;
