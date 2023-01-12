const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const profilePic=document.querySelector("main");
hamburger.addEventListener("click",()=>{
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        profilePic.classList.toggle("move");
        
})
document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))