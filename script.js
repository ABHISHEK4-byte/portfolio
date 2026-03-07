document.addEventListener("DOMContentLoaded", () => {

AOS.init({ duration:1200 });

// DARK MODE
const toggle=document.getElementById("themeToggle");

toggle.onclick=()=>{
    document.body.classList.toggle("light");
};

// MENU
const menuBtn=document.getElementById("menuBtn");
const sideMenu=document.getElementById("sideMenu");

menuBtn.onclick=()=>{
    sideMenu.classList.toggle("active");
};

document.querySelectorAll("#sideMenu a").forEach(link=>{
    link.onclick=()=>sideMenu.classList.remove("active");
});

// TYPING
new Typed("#typing",{
    strings:[
        "Coder by Profession 💻",
        "Entrepreneur by Passion 🚀",
        "Web Developer 🌐"
    ],
    typeSpeed:60,
    backSpeed:40,
    loop:true
});

// PARTICLES
particlesJS("particles-js",{
particles:{
number:{value:60},
color:{value:"#22c55e"},
shape:{type:"circle"},
opacity:{value:0.3},
size:{value:3},
line_linked:{
enable:true,
distance:140,
color:"#22c55e",
opacity:0.2
},
move:{enable:true,speed:1.2}
},
interactivity:{
events:{onhover:{enable:true,mode:"grab"}}
}
});

// SCROLL BAR
window.addEventListener("scroll",()=>{
let winScroll=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrolled=(winScroll/height)*100;
document.getElementById("progressBar").style.width=scrolled+"%";
});

});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});
window.onscroll = function(){
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
document.getElementById("progressBar").style.width = scrolled + "%";
};