// Button click event for featured product
document.getElementById("productButton").addEventListener("click", function() {
    document.getElementById("productDescription").textContent = "Featured Product: Amazing Coffee Mug!";
    this.style.backgroundColor = "#6a3e2a"; // Change button color on click
});

// Hover effect for product images
function hoverEffect(element) {
    element.style.transform = "scale(1.1)";
}

function resetEffect(element) {
    element.style.transform = "scale(1)";
}

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Tab functionality
function openTab(evt, tabName) {
    let tabContents = document.querySelectorAll(".tabcontent");
    tabContents.forEach(content => content.style.display = "none");

    let tabLinks = document.querySelectorAll(".tablinks");
    tabLinks.forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Form validation
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        event.preventDefault();
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        event.preventDefault();
    } else if (message.trim() === "") {
        alert("Please enter a message.");
        event.preventDefault();
    }
});

// Real-time feedback while typing
document.getElementById("email").addEventListener("input", function() {
    let emailFeedback = document.getElementById("emailFeedback");
    emailFeedback.textContent = this.value.includes("@") ? "Valid email!" : "Please enter a valid email.";
});

// Secret action for long press
let timer;
document.getElementById("productButton").addEventListener("mousedown", function() {
    timer = setTimeout(function() {
        alert("Secret action: You've long-pressed the button!");
    }, 1500);
});

document.getElementById("productButton").addEventListener("mouseup", function() {
    clearTimeout(timer);
});

// Keypress detection
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        alert("You pressed Enter!");
    }
});
