// head
document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    stickyHeader();
  };

  let header = document.getElementById("header");
  let sticky = header.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed");
      header.style.backgroundColor = "rgba(35, 33, 33, 0.9)";
    } else {
      header.classList.remove("fixed");
      header.style.backgroundColor = "rgba(35, 33, 33,)";
    }
  }

  window.onscroll = function () {
    stickyHeader();
  };
});

// slider
// document.addEventListener("DOMContentLoaded", function () {
//   let currentIndex = 0;
//   let carousel = document.getElementById("carousel");
//   let slides = document.querySelectorAll(".carousel-slide");
//   let totalSlides = slides.length;

//   document.getElementById("nextBtn").addEventListener("click", function () {
//     if (currentIndex < totalSlides - 1) {
//       currentIndex++;
//     } else {
//       currentIndex = 0;
//     }
//     updateCarousel();
//   });

//   document.getElementById("prevBtn").addEventListener("click", function () {
//     if (currentIndex > 0) {
//       currentIndex--;
//     } else {
//       currentIndex = totalSlides - 1;
//     }
//     updateCarousel();
//   });

//   let navLinks = document.querySelectorAll(".HhjGmK a");
//   navLinks.forEach(function (link, index) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       goToSlide(index);
//     });
//   });

//   function updateCarousel() {
//     let newTransformValue = -currentIndex * 90 + "vw";
//     carousel.style.transform = "translateX(" + newTransformValue + ")";
//   }

//   function goToSlide(index) {
//     currentIndex = index;
//     updateCarousel();
//   }
// });



// acordion
function drop() {
  let dropdowns = document.getElementsByClassName("dropdown-btn");
  let i;

  for (i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function () {
      let isActive = this.classList.contains("active");

      closeAllDropdowns();

      if (!isActive) {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = "block";

        let height = dropdownContent.scrollHeight + "px";
        dropdownContent.style.maxHeight = height;
      }
    });
  }

  function closeAllDropdowns() {
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("active");
      let dropdownContent = dropdowns[i].nextElementSibling;
      dropdownContent.style.display = "none";
      dropdownContent.style.maxHeight = null;
    }
  }
}

drop();
