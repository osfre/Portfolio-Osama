// loader 
let loader = document.querySelector(".loader-container");
window.addEventListener("load",()=>{
  loader.style.display = "none";
})

//  humburger toggel
// show nav on mobile

let humbergur = document.querySelector(".humbergur");
let humbergurChild = document.querySelectorAll(".humbergur span")
// nav bar mobile
let nav = document.querySelector("nav");
let navLi = document.querySelectorAll("nav li a");

humbergur.addEventListener("click",()=>{
  humbergurChild.forEach((e)=>{
    e.classList.toggle("on");
  });
  nav.classList.toggle("close-nav");
  nav.classList.toggle("open-nav");
  document.querySelector(".overlay").classList.toggle("open");
  document.body.classList.toggle("no-scroll");
})

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".target");
  if (!isClosest) {
    humbergurChild.forEach((ele)=>{
      ele.classList.remove("on");
    });
    nav.classList.add("close-nav");
    nav.classList.remove("open-nav");
    document.querySelector(".overlay").classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
})
navLi.forEach((a)=>{
  a.addEventListener("click",()=>{
    if(document.body.classList.contains("no-scroll")){
      humbergurChild.forEach((ele)=>{
        ele.classList.remove("on");
      });
      nav.classList.add("close-nav");
      nav.classList.remove("open-nav");
      document.querySelector(".overlay").classList.remove("open");
      document.body.classList.remove("no-scroll");
    }
  })
})
// *******************Hero Section *****************************
// The stars Animation
let stars = document.querySelectorAll(".star");

let starPosition = ["200","60","120","230","300","290","20","340","180","310","360","220","90","200","60","120","230"]

for(let i = 0; i < stars.length;i++){
  stars[i].style.cssText = `top :${starPosition[i]}px;
  animation-delay:${i}s;`;
}
// on  load animation 
const hiddenLinks = document.querySelectorAll(".show-onload");
const hiddenSh = document.querySelectorAll(".sh");

function showLinks(){
  hiddenLinks.forEach((e)=>{
    e.classList.add("show");
  })
}
function showShR(){
  hiddenSh.forEach((e)=>{
    e.classList.add("show-sh");
  })
}
document.addEventListener("DOMContentLoaded", function() {
  showLinks();
  showShR();
});

// Bouncing letter 

document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
  element.addEventListener("mouseover", (e) => bounce(e.target));
});

function bounce(letter) {
  if (!letter.classList.contains("bounce")) {
      letter.classList.add("bounce");
      setTimeout(
          function () {
              letter.classList.remove("bounce");
          },
          1000
      );
  }
}
// animation on scrolling
let hiddenElements = document.querySelectorAll(".sh");
const observer = new IntersectionObserver((e)=>{
  e.forEach((entery)=>{
    if(entery.isIntersecting){
      entery.target.classList.add("show-sh");
      entery.target.classList.add("one-sh");
    }else{
      entery.target.classList.remove("show-sh");
    }
  })
})

hiddenElements.forEach((el)=>{
  if(!el.classList.contains("one-sh")){
    observer.observe(el);
  }
})

// contact section 
// animated circle text
const text = document.querySelector(".contact .text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");
