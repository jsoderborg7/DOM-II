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

// destination image mouseenter alert

const destinationImg = document.querySelector('.content-destination img');

destinationImg.addEventListener("mouseenter", event =>{
  alert("Looks fun huh?");
});