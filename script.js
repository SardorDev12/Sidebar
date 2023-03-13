const sidebarOpenBtn = document.querySelector(".sidebar-toggle");
const sidebarCloseBtn = document.querySelector(".sidebar-close");
const sidebar = document.querySelector(".sidebar");

sidebarOpenBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
});

sidebarCloseBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-open");
});
