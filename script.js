// Object containing messages for each teacher
const teachers = {
    "Surbhi": {
        message: "We promise to remember all your physics lessons, but only because you’ve made sure we can’t forget them even in our dreams! Between your 'gravitational' stare and 'magnetic' personality, you've got us all orbiting around you. Thank you for making physics as spicy as masala chai, and as unforgettable as a Bollywood plot twist!",
        image: "image0.jpg"
    },
    "Rasika": {
        message: "Your lessons have more twists and turns than a cricket match! We might not fully understand relativity yet, but one thing is clear: you're the star bowler in our academic league. Thanks for making even the toughest topics feel like a cakewalk!",
        image: "imager.jpg"
    }
    // Add more teachers here
};

// Function to handle the login process
function login() {
    const teacherName = document.getElementById('teacherNameInput').value;
    if (teacherName && teachers[teacherName]) {
        document.getElementById('teacherNameDisplay').textContent = teacherName;
        document.getElementById('greeting').textContent = `Mrs ${teacherName} Sharma,`;
        document.getElementById('messageText').textContent = teachers[teacherName].message;
        
        // Optionally change the main image based on the teacher
        document.querySelector('.center-block').src = teachers[teacherName].image;
        
        document.getElementById('loginOverlay').style.display = 'none';
    } else {
        alert("Sorry, we couldn't find your name. Please try again.");
    }
}

// Function to display the image in full screen
function viewFullScreen(imageSrc) {
    var overlay = document.getElementById('fullScreenOverlay');
    var fullScreenImage = overlay.querySelector('.full-screen-block');
    fullScreenImage.src = imageSrc;
    overlay.style.display = 'flex';
}

// Function to close the full-screen view
function closeFullScreen() {
    var overlay = document.getElementById('fullScreenOverlay');
    overlay.style.display = 'none';
}
