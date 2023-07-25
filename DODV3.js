const splashScreen = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) =>
  setTimeout(() => {
    splashScreen.classList.add("hidden");
  }, 5000)
);

var words = document.getElementsByClassName("word");
var currentWord = 0;

function showNextWord() {
  words[currentWord].style.opacity = 0; // Hide the current word
  currentWord++;

  if (currentWord >= words.length) {
    currentWord = 0;
  }

  words[currentWord].style.opacity = 1; // Show the next word
  setTimeout(showNextWord, 888);
}

for (var i = 0; i < words.length; i++) {
  words[i].style.opacity = 0; // Set the initial opacity of each word to 0
}

setTimeout(function () {
  words[currentWord].style.opacity = 1;
  // Show the first word after a delay
  setTimeout(showNextWord);
}, 444);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-out");
    }
  });
});

const fadingElements = document.querySelectorAll(".fade-out");
fadingElements.forEach((el) => observer.observe(el));

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
    "/img/mccourt.png",
    "/img/starck.png",
    "/img/azoulai.jpeg",
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

document.addEventListener("DOMContentLoaded", function () {
  const hiddenImages = document.querySelectorAll(".hidden-image");
  let currentIndex = 0;

  function showNextImage() {
    hiddenImages[currentIndex].style.display = "inline-block";
    currentIndex = (currentIndex + 1) % hiddenImages.length;
  }

  function hideAllImages() {
    for (const image of hiddenImages) {
      image.style.display = "none";
    }
  }

  // Hide all images initially
  hideAllImages();

  // Show the images in a loop with a delay of 3 seconds between each image
  setInterval(function () {
    hideAllImages();
    showNextImage();
  }, 3000); // 3000 milliseconds (3 seconds) delay between images
});
