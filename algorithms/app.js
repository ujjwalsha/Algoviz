"use strict";
console.log("this is ujjwal");
const algorithm = document.querySelector("[algorithm]");
const wrapper = document.querySelector("#wrapper");

algorithm.addEventListener("click", (e) => {
  console.log("hello");
  //   wrapper.classList.add("hidden");
  wrapper.style.display = "none";

  wrapper.style.backgroundColor = "red";
});
