function ready() {
  var welcomeRight = document.getElementsByClassName('welcome-right')[0];
  var biggerWelcomeTasty = document.getElementsByClassName('bigger_welcome_tasty')[0];
  var smallerWelcomeTasty = document.getElementsByClassName('smaller_welcome_tasty')[0];

  function newImages() {
    biggerWelcomeTasty.style.backgroundImage = 'url(https://anikeieva.github.io/healthyfood.github.io/app/img/main3.jpg)';
    smallerWelcomeTasty.style.backgroundImage = 'url(https://anikeieva.github.io/healthyfood.github.io/app/img/4.jpg)';
  }

  function oldImages() {
    biggerWelcomeTasty.style.backgroundImage = 'url(https://anikeieva.github.io/healthyfood.github.io/app/img/1.jpg)';
    smallerWelcomeTasty.style.backgroundImage = 'url(https://anikeieva.github.io/healthyfood.github.io/app/img/drink.jpg)';
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
