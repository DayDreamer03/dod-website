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

document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.querySelector('.image-container');
  const hiddenImages = document.querySelectorAll('.hidden-image');
  const listItems = imageContainer.querySelectorAll('li');
  let loopInterval;

  // Function to hide all images
  function hideAllImages() {
    for (const image of hiddenImages) {
      image.style.display = 'none';
    }
  }

  // Animation for screens under 500px (loop)
  function animationForSmallScreens() {
    let currentIndex = 0;

    function showNextImage() {
      hideAllImages();
      hiddenImages[currentIndex].style.display = 'inline-block';
      currentIndex = (currentIndex + 1) % hiddenImages.length;
    }

    // Hide all images initially
    hideAllImages();

    // Show the images in a loop with a delay of 3 seconds between each image
    loopInterval = setInterval(showNextImage, 3000); // 3000 milliseconds (3 seconds) delay between images
  }

  // Animation for screens above 500px (hover)
  function animationForLargeScreens() {
    // Clear the loop interval if it exists
    if (loopInterval) {
      clearInterval(loopInterval);
    }

    // Hide all images initially
    hideAllImages();

    // Attach event listeners to each list item (li) for hover
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].addEventListener('mouseover', function () {
        hideAllImages();
        hiddenImages[i].style.display = 'inline-block';
      });

      listItems[i].addEventListener('mouseout', function () {
        hideAllImages();
      });
    }
  }

  // Determine the screen size and run the appropriate animation
  function handleScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 500) {
      animationForSmallScreens(); // Run loop animation for small screens
    } else {
      animationForLargeScreens(); // Run hover animation for large screens
    }
  }

  // Call handleScreenSize on initial load and window resize
  window.addEventListener('resize', handleScreenSize);
  handleScreenSize();
});
