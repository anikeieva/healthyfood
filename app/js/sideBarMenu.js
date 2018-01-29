function ready() {
  var toggleBtn = document.getElementsByClassName('toggle-btn')[0];
  var menu_icon = document.getElementById('menu-icon');
  var sideBar = document.getElementById('sideBar');

  function activeMenu() {

    sideBar.classList.toggle('active');
    menu_icon.classList.toggle('fa-bars');
    menu_icon.classList.toggle('fa-times');

  }

  toggleBtn.addEventListener('click', activeMenu);
}

document.addEventListener("DOMContentLoaded", ready);
