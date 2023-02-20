

const hamburger = document.getElementById("burger-icon") as HTMLDivElement;
hamburger.addEventListener("mouseover", () => {
  const toogle = document.querySelector("#burger-icon");
  toogle!.classList.add("open");

  const menu = document.querySelector(".nav-items") as HTMLDivElement;
  menu!.classList.add("show");
});

var removemenu;
const hamburgerOut = document.getElementById("hamburger-menu");
hamburger.addEventListener("click", () => {
  removemenu = setTimeout(() => {
    var toogle = document.querySelector("#burger-icon");
    toogle!.classList.add("open");

    var menu = document.querySelector(".nav-items") as HTMLDivElement;
    menu.classList.remove("show");
  }, 400);
});
 clearTimeout(removemenu);


 let alert=document.getElementById("alert-image")as HTMLImageElement;
 alert.addEventListener("mouseover",()=>{
   alert.style.filter = "brightness(0)invert(1)";
   const menu = document.querySelector("#alert_wrapper") as HTMLDivElement;
   // menu.style.display = "block";
     menu.classList.add("show_block");
     menu.setAttribute("open", "");
   
 })
function removealertmenu(){
    setTimeout(() => {
        const menu = document.querySelector("#alert_wrapper") as HTMLDivElement;
        // menu.style.display = "none";
        alert.style.filter ="none";
        menu.classList.remove("show_block");
        menu.removeAttribute("open");
    }, 100);
}

let alert_wrapper = document.getElementById("alert_wrapper") as HTMLDivElement;
alert_wrapper.addEventListener("mouseleave",removealertmenu);

alert.addEventListener("mouseleave",()=>{
    setTimeout(() => {
      if(!document.querySelector(".alert_wrapper:hover")){
        removealertmenu();
      }
    }, 100);

});
let announcement=document.getElementById("announcement")as HTMLImageElement;
      announcement.addEventListener("mouseover",()=>{
        announcement.style.filter = "brightness(0)invert(1)";
        const menu = document.querySelector("#announcement_wrapper") as HTMLDivElement;
        // menu.style.display = "block";
          menu.classList.add("show_block");
          menu.setAttribute("open", "");        
      })
function remvoveannouncementmenu(){
  setTimeout(() => {
  const menu = document.querySelector("#announcement_wrapper") as HTMLDivElement;
  // menu.style.display = "none";
  announcement.style.filter ="none";
    menu.classList.remove("show_block");
    menu.removeAttribute("open");
  }, 400);
  
}
// announcement.addEventListener("click",remvoveannouncementmenu);
let announcement_wrapper = document.getElementById("announcement_wrapper") as HTMLDivElement;
announcement_wrapper.addEventListener("mouseleave",remvoveannouncementmenu);

announcement.addEventListener("mouseleave",()=>{
  setTimeout(() => {
    if(!document.querySelector(".announcement_wrapper:hover")){
      remvoveannouncementmenu();
    }
  }, 100);
  
});
export{}