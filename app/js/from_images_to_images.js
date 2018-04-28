function ready() {
  var welcomeSectionRight = document.getElementsByClassName('welcome-section__right')[0];
  var tastyBigger = document.getElementsByClassName('tasty-bigger')[0];
  var tastySmaller = document.getElementsByClassName('tasty-smaller')[0];

  function newImages() {
    tastyBigger.classList.toggle('bigger_2');
    tastySmaller.classList.toggle('smaller_2');
    // tastyBiggerstyle.backgroundImage = 'url(https://anikeieva.github.io/healthyfood.github.io/app/img/main3.jpg)';
    // tastySmaller.style.backgroundImage = 'url(https://anikeieva.github.io/healthyfood.github.io/app/img/4.jpg)';
  }

  function oldImages() {
    tastyBigger.classList.toggle('bigger_2');
    tastySmaller.classList.toggle('smaller_2');
    // tastyBiggery.style.backgroundImage = 'url(https://anikeieva.github.io/healthyfood.github.io/app/img/1.jpg)';
    // tastySmaller.style.backgroundImage = 'url(https://anikeieva.github.io/healthyfood.github.io/app/img/drink.jpg)';
  }

  var counter = 1;

  var timerId = setInterval(function() {
    counter++;
    if(counter % 2 === 0) {
      newImages();
    }
    else {
      oldImages();
    }
  }, 3000);

}

document.addEventListener("DOMContentLoaded", ready);
