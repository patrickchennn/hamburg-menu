const menu_List= document.querySelectorAll(".menu");

menu_List.forEach((menu) => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

});

/* use this
const hamburgerMenu = document.querySelector(".btn{x}");
hamburgerMenu.addEventListener("click", function(){
  this.classList.toggle("open");
})
*/