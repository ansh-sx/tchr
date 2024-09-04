// Object containing messages for each teacher
const teachers = {
    "Surbhi": {
        message: "Physics, ek aisa word, jisse har bachhe ki rooh kanmp jaati hai. Jo har bachhe ko uske sapne me dyne ki tarha aake darati hai kyunki yahna 1N = 10^5 dyne ke barabar hoti hai, aur yeh physic ek aisi abla naari hai jo newton par hi apni jaan chidakti hai.Par Newon aur uski saari physic hame dra ske usme itna dum nhi, Surbhi mam ke bache hai, ham kisi se kam nhMam ki physic ki knowledge aprampaar hai, hamare liye uphar hai, hmare har doubt ka vaar hai, aur kabi kabi to aisa lgta hai ki Newton bi doubt pushne mam je pass aata tha, apne hi diye gye laws ki theory Ist period mein aur numericals last period mein padh ke jata tha, aur jiss din test hota tha 'Please! aapne toh kaha hi nhi' keh kar test se bach jata thaBUT afsos har ek cheez apni energy ko liberate krte krte ek din khatam ho jati hai, aise hi ab hmari journey ki energy apni final velocity ko reach kr chuki hai but THANK YOU MAM hmari is displacement ko pythagoras triplet bnane mein aur hame Physic haste hasate complete krane ke liye",
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
        document.getElementById('teacherNameDisplay').textContent = `Mrs ${teacherName} Sharma`;
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
