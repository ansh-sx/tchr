// Object containing messages for each teacher
const teachers = {
    "Surbhi": {
        message: "Physics, ek aisa word, jisse har bachhe ki rooh kaanmp jaati hai. Jo har bachhe ko uske sapne me dyne ki tarha aake darati hai kyunki yahna 1N = 10^5 dyne ke barabar hoti hai, aur yeh physics ek aisi abla naari hai jo newton par hi apni jaan chidakti hai. Par Newton aur uski naari physics hame dara ske, usme itna dum nahi, Surbhi mam ke bache hain ham, ham kisi se kam nahi. Mam ki physics ki knowledge aprampaar hai, hamare liye uphaar hai, hamare har doubt ka vaar hai, aur kabhi kabhi to aisa lagta hai ki Newton bhi doubt puchne mam ke paas aata tha, apke hi diye gaye laws ki theory Ist period mein aur numericals last period mein padh ke jata tha, aur jiss din test hota tha 'Please mam! Aapne toh kaha hi nahi' keh kar test se bach jata tha. But afsos har ek cheez apni energy ko liberate karte karte ek din khatam ho jati hai, aise hi ab hamari journey ki energy apni final velocity ko reach kar chuki hai but THANK YOU MAM hamari is displacement ko pythagoras triplet banane mein aur hame Physics haste hasate complete karne ke liye.... At the end, this whole thing isn't just a gift, there are our emotions, these images will remind you of us (Manik and Amit => conference call waale, Ansh => eid ka chaand, "" => 1 ghante mai 60 second ✅...) ... Thank you 💝, for not just being our teacher, for being the best teacher.... and sorry for any inconveniences caused to you by us 🙃.... Happy next Journey Mam 💝.",
        image: "image0.jpg"
    },
    "Rasika": {
        message: "'Chemistry' ek aisa subject, jahan chemicals ki mystery hai, jisko samajhne ke liye har ek insaan ka dimag dard se karhata hai, jis subject mein uske concept se jyada uski limitations aur exceptions hai aise subject mein masters karna ek bahut badi accomplishment hai, jo ki aap achieve kar chuki ho aur hame bhi kar rahi ho. Yahna har chapter ki tarah har topic ke sath hamare emotions attach hai, elevation in boiling point padhke hamari happiness elevate ho jati hai aur depression in freezing point padhke depression aa jata hai, aur Henry baba ki baat hi chhodo itna pressure diya hai ki lagta hai hum khud cold drink hai aur hamare andar CO2 bhari ja rahi ho. Chemistry hai organic jaise, dikhne me aasan but samajhne mein nikal jaati hai jaan but aapse teacher ho mahan, toh organic ho jati hai aasan. But afsos toh iska hai ki hamari jo reaction start hui thi woh ab khatam hoti ja rahi hai har ek din ke naye catalyst par apna naya rang dikhaya rahi hai. But we are sure Final Product bahut acha hoga kyunki woh aapse padha hua ek bachha hoga.... At the end, this whole thing isn't just a gift, there are our emotions, these images will remind you of us (Manik => aapka result kharaab karne waala, Amit => sanitizer ke saath khelne waala...) .. Thank You 💝, for not just being our teacher, for being the best teacher.... and sorry for any inconveniences caused to you by us 🙃.... Happy Journey Mam 💝.. (Baakiyon ka pata nahi par shayad Manik ki journey ek saal aur ho)",
        image: "imager.jpg"
    }
    // Add more teachers here if needed
};

// Function to handle the login process
function login() {
    const teacherName = document.getElementById('teacherNameInput').value.trim();
    
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
