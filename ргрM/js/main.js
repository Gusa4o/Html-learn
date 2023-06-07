const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();

let mySwiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 2,
    loopAdditionalSlides: 25,
    navigation: {
        nextEl: ".swiper-button-n",
        prevEl: ".swiper-button-p"
    }
});

window.addEventListener('resize', function() {
    var elements = document.querySelectorAll('.adapt');
    var screenWidth = window.innerWidth;
  
    elements.forEach(function(element) {
      if (screenWidth <= 767) {
        element.classList.add('adaptive');
      } else {
        element.classList.remove('adaptive');
      }
    });
  });
  