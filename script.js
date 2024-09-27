// Toggle Mobile Menu
const burgerMenu = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');

burgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});


// Set the date we're counting down to
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Game Launched!";
    }
}, 1000);


document.querySelectorAll('.preorder-btn').forEach(button => {
  button.addEventListener('click', function(event) {
      event.preventDefault();
      alert("Thank you for your interest! Pre-orders will be available soon.");
  });
});
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryItems[currentIndex].src;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1; // Wrap to last image
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0; // Wrap to first image
    }
    lightboxImg.src = galleryItems[currentIndex].src;
}
