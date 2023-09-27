const splashScreen = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) =>
  setTimeout(() => {
    splashScreen.classList.add("hidden");
  }, 3500)
);

const splashScreen2 = document.querySelector(".splash2");

document.addEventListener("DOMContentLoaded", (e) =>
  setTimeout(() => {
    splashScreen2.classList.add("hidden");
  }, 4000)
);

const splashScreen3 = document.querySelector(".splash3");

document.addEventListener("DOMContentLoaded", (e) =>
  setTimeout(() => {
    splashScreen3.classList.add("hidden");
  }, 3500)
);

document.addEventListener("DOMContentLoaded", function () {
  const mainTitle = document.getElementById("mainTitle");
  const triggerSection = document.getElementById("triggerSection");

  // Function to check if the user has scrolled past the trigger section
  function isPastTriggerSection() {
    const triggerSectionRect = triggerSection.getBoundingClientRect();
    return triggerSectionRect.top <= 300;
  }

  // Function to update the title's opacity based on the scroll position
  function updateTitleOpacity() {
    if (isPastTriggerSection()) {
      mainTitle.style.opacity = "0";
    } else {
      mainTitle.style.opacity = "1";
    }
  }

  // Update the title's opacity on initial load
  updateTitleOpacity();

  // Add a scroll event listener to update the title's opacity on scroll
  window.addEventListener("scroll", updateTitleOpacity);
});

document.addEventListener("DOMContentLoaded", function () {
  const imageLoopSection = document.querySelector(".image-loop-section");
  const centeredSquare = document.querySelector(".centered-square");

  const imageUrls = [
    "/img/B3.jpeg",
    "/img/B1.jpeg",
    "/img/B2.jpeg",
    // Add more image URLs as needed
  ];

  let currentIndex = 0;

  function changeImage() {
    centeredSquare.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }

  // Call changeImage function every 2 seconds
  setInterval(changeImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const myHeading = document.getElementById(".positionfixed");
  const pageFooter = document.querySelector(".footer");

  function checkFooterVisibility() {
    const footerRect = pageFooter.getBoundingClientRect();
    if (footerRect.top <= window.innerHeight) {
      myHeading.style.position = "relative";
    } else {
      myHeading.style.position = "fixed";
    }
  }

  // Call checkFooterVisibility function on initial load
  checkFooterVisibility();

  // Add a scroll event listener to check the visibility of the footer
  window.addEventListener("scroll", checkFooterVisibility);
});

