// nav link styles

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((function(event) {
  event.addEventListener("mouseover", function(){
    event.style.color = "purple";
    event.style.fontSize = "4rem";
    event.stopPropagation();
})
  event.addEventListener("mouseout", function(){
    event.style.color = "black";
    event.style.fontSize= "1.7rem"; 
    event.stopPropagation();
  })
}))

// Logo styles

const logo = document.querySelector('.logo-heading');

logo.addEventListener("dblclick", event =>{
  logo.style.transform = "scale(2)";
  logo.style.color = "green";
})

// destination image sizing

const destinationImg = document.querySelector('.content-destination img');

destinationImg.addEventListener("mouseenter", event =>{
  destinationImg.style.transform = "scale(1.5)";
})

destinationImg.addEventListener("mouseleave", event =>{
  destinationImg.style.transform = "scale(1)";
})

// sign up buttons

const buttons = document.querySelectorAll('.btn');

buttons.forEach((event=>{
  event.addEventListener("click", ()=>{
    alert("Thanks for signing up!");
  })
}))

// welcome text 

const welcomeText = document.querySelector('.intro');

welcomeText.addEventListener("mousedown", event=>{
  welcomeText.style.color = "pink";
})

// fun bus image

const busImg = document.querySelector('intro img');

busImg.addEventListener("contextmenu", event=>{
  alert("Please don't steal our picture!");
  event.preventDefault();
})