const toggleThemeBtns = document.querySelectorAll(".toggle-theme");

const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");

const navOpenBtn = document.querySelector(".nav-open-btn")
const navCloseBtn = document.querySelector(".nav-close-btn")
const nav = document.querySelector(".nav")

const overlay = document.querySelector(".overlay")

const cartOpenBtn = document.querySelector(".cart-open-btn")
const cartCloseBtn = document.querySelector(".cart-close-btn")
const cart = document.querySelector(".cart")



toggleThemeBtns.forEach(btn =>{
    btn.addEventListener("click",function(){
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

submenuOpenBtn.addEventListener("click",  (e) => {

    submenu.classList.toggle("submenu-open");
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
})

navOpenBtn.addEventListener("click" , () => {

    nav.classList.remove("-right-64")
    nav.classList.add("right-0")
    overlay.classList.add("overlay-visible")
})    

navCloseBtn.addEventListener("click" , () => {
    
    nav.classList.add("-right-64")
    nav.classList.remove("right-0")
    overlay.classList.remove("overlay-visible")
})

overlay.addEventListener("click" , () => {
    
    nav.classList.add("-right-64")
    nav.classList.remove("right-0")
    overlay.classList.remove("overlay-visible")
})

cartOpenBtn.addEventListener("click" , () => {

    cart.classList.remove("-left-64")
    cart.classList.add("left-0")
    overlay.classList.add("overlay-visible")
})   

cartCloseBtn.addEventListener("click" , () => {
    
    cart.classList.add("-left-64")
    cart.classList.remove("left-0")
    overlay.classList.remove("overlay-visible")
})

overlay.addEventListener("click" , () => {
    
    cart.classList.add("-left-64")
    cart.classList.remove("left-0")
    overlay.classList.remove("overlay-visible")
})
 