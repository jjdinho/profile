const textHero = document.querySelector(".text-hero");
const scrollBtn = document.querySelector(".scroll-down");
const mainContent = document.querySelector("#main-content");

const scrollTo = (event) => {
  mainContent.scrollIntoView();
};

const listenScrollBtn = () => {
  scrollBtn.addEventListener("click", scrollCV);
};

document.addEventListener("DOMContentLoaded",function(){
  listenScrollBtn();
});
