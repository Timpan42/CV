window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');

    const mobile_nav = document.querySelector('.mobile-nav');
    
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
    })
}

function ToggleContent(itemId) {
  var element = document.getElementById(itemId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}


