import React from "react";

const LocalStorage = () => {
  // Accessing the localstorage
  console.log(window.localStorage);
  //Set the item in the local storage
  window.localStorage.setItem("first", "values");
  console.log("LocalStorage Vlaues \t" + localStorage.length);
  //Get the item in the local storage
  const getItems = localStorage.getItem("first");
  console.log(
    "🚀 ~ file: LocalStorage.js:11 ~ LocalStorage ~ getItems:",
    getItems
  );

  //Local on the local storage items
  window.localStorage.setItem("Fruits", "Apple");
  window.localStorage.setItem("Vegetables", "Onion");
  window.localStorage.setItem("Fruits", "Banana");
  window.localStorage.setItem("Vegetables", "Lady FInger");

  const keys = Object.keys(localStorage)
  for(let key of keys){
    console.log("Key Value Pair" + localStorage.setItem(key))
  }

  return <div>LocalStorage</div>;
};

export default LocalStorage;
