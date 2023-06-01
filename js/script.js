const mainContainerEl = document.querySelector(".main-container");
const btnEl = document.querySelector(".button");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

// console.log(btnEl);
// console.log(mainEl);

btnEl = addEventListener("click", ()=>{
    mainContainerEl.classList.remove("active");
    popupContainerEl.classList.add("active");

})



// const containerEl = document.querySelector(".container");
// const btnEl = document.querySelector(".btn");

// btnEl.addEventListener("click", ()=>{
//     containerEl.classList.add("active");
//     popupContainerEl.classList.remove("active");
// });
// closeIconEl.addEventListener("click", ()=>{
//     containerEl.classList.remove("active");
//     popupContainerEl.classList.add("active");
// })