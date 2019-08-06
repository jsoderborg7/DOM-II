const navLink = document.querySelector('a');

navLink.addEventListener("mouseover", event =>{
  navLink.style.color = "purple";
  navLink.style.fontSize = "4rem";
  // event.stopPropagation();
})

navLink.addEventListener("mouseout", event =>{
  navLink.style.color = "black";
  navLink.style.fontSize= "1.7rem";
  // event.stopPropagation();
})