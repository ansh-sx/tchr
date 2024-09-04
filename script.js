// Object containing messages for each teacher
const teachers = {
    "Surbhi": {
        message: "Physics, ek aisa word, jisse har bachhe ki rooh kaanmp jaati hai...",
        image: "image0.jpg"
    },
    "Rasika": {
        message: "'Chemistry' ek aisa subject, jahan chemicals ki mystery hai...",
        image: "imager.jpg"
    }
    // Add more teachers here if needed
};

// Function to handle the login process
function login() {
    const teacherName = document.getElementById('teacherNameInput').value.trim();
    
    // Debugging: Print the teacherName to console
    console.log(`Teacher Name Entered: ${teacherName}`);
    
    if (teacherName in teachers) {
        document.getElementById('teacherNameDisplay').textContent = `Mrs ${teacherName} Sharma`;
        document.getElementById('greeting').textContent = `Mrs ${teacherName} Sharma,`;
        document.getElementById('messageText').textContent = teachers[teacherName].message;
        
        // Update the image
        document.querySelector('.center-block').src = teachers[teacherName].image;
        
        // Hide the login overlay
        document.getElementById('loginOverlay').style.display = 'none';
    } else {
        alert("Sorry, we couldn't find your name. Please try again.");
    }
}

// Function to display the image in full screen
function viewFullScreen(imageSrc) {
    const overlay = document.getElementById('fullScreenOverlay');
    const fullScreenImage = overlay.querySelector('.full-screen-block');
    fullScreenImage.src = imageSrc;
    overlay.style.display = 'flex';
}

// Function to close the full-screen view
function closeFullScreen() {
    document.getElementById('fullScreenOverlay').style.display = 'none';
}

// Attach the login function to the login button
document.getElementById('loginButton').addEventListener('click', login);
