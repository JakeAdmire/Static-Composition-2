var sidebar = document.querySelector(".sidebar");
var mainBody = document.querySelector(".main-body")
var sidebarEngaged = false;

document.querySelector(".sidebar-btn").addEventListener("click", engageSidebar);

function engageSidebar() {
  console.log("function engaged");
  if (sidebarEngaged === false) {
    console.log("Sidebar engaged");
    sidebar.classList.add("sidebar-engaged");
    mainBody.classList.remove("main-body-big");
    sidebarEngaged = true;
  } else {
    console.log("Sidebar disengaged");
    sidebar.classList.remove("sidebar-engaged");
    mainBody.classList.add("main-body-big");
    sidebarEngaged = false;
  }
}