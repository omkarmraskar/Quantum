const hamburger = document.getElementById("burger-icon") as HTMLDivElement;
hamburger.addEventListener("mouseover", () => {
  const toogle = document.querySelector("#burger-icon");
  toogle!.classList.add("open");

  const menu = document.querySelector(".nav-items") as HTMLDivElement;
  menu!.classList.add("show");
});

var removemenu;
hamburger.addEventListener("click", () => {
  removemenu = setTimeout(() => {
    var toogle = document.querySelector("#burger-icon");
    toogle!.classList.add("open");

    var menu = document.querySelector(".nav-items") as HTMLDivElement;
    menu.classList.remove("show");
  }, 400);
});
 clearTimeout(removemenu);
export{}