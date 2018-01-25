function ready() {
  var toggleBtn = document.getElementsByClassName('toggle-btn')[0];

  function activeMenu() {
    var sideBar = document.getElementById('sideBar');

    sideBar.classList.toggle('active');
  }

  toggleBtn.addEventListener('click', activeMenu);
}

document.addEventListener("DOMContentLoaded", ready);
