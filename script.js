// Object containing messages for each teacher
const teachers = {
    "Surbhi": {
        message: "Physics, ek aisa word, jisse har bachhe ki rooh kaanmp jaati hai. Jo har bachhe ko uske sapne me dyne ki tarha aake darati hai kyunki yahna 1N = 10^5 dyne ke barabar hoti hai, aur yeh physics ek aisi abla naari hai jo newton par hi apni jaan chidakti hai.Par Newon aur uski naari physic hame dra ske, usme itna dum nhi, Surbhi mam ke bache hai ham, ham kisi se kam nhi .Mam ki physic ki knowledge aprampaar hai, hamare liye uphar hai, hmare har doubt ka vaar hai, aur kabhi kabhi to aisa lgta hai ki Newton bhi doubt puchne mam ke pass aata tha, apke hi diye gye laws ki theory Ist period mein aur numericals last period mein padh ke jata tha, aur jiss din test hota tha 'Please mam! aapne toh kaha hi nhi' keh kar test se bach jata tha. But afsos har ek cheez apni energy ko liberate krte krte ek din khatam ho jati hai, aise hi ab hmari journey ki energy apni final velocity ko reach kr chuki hai but THANK YOU MAM hmari is displacement ko pythagoras triplet bnane mein aur hame Physics haste hasate complete krane ke liye",
        image: "image0.jpg"
    },
    "Rasika": {
        message: "'Chemistry' ek aisa subject, jahna chemicals ki mystery hai, jisko samajne ke liye har ek insaan ka dimag drd se karhata hai, jis subject mein uske concept se jyada uski limitations aur exceptions hai aise subject mein masters krna ek bahut badi accomplishment hai, jo ki aap achieve kar chukke ho aur hame bi kra rhe hooo. yahna har chapter ki tarha har topic ke sath hamare emotions attach hai, elevation in boiling point padhke hamari happiness elevate ho jati hai aur depression in freezing point padhke depression aa jata hai, aur henery baba ki baat hi shodo itna pressure diya hai ki lagta hai hum kudh cold drink hai aur hamare andar CO2 Bhaari jaa rhi ho.Chemistry hai organic jaise, dikhne me assan but samajhne mein nikal jaati hai jaan but aapsa teacher ho to mahan toh organic ho jati hai assan..But afsos toh iska hai ki hamari jo reaction start hui thi woh ab khatam hoti jaa rhi hai har ek din ke naye catalyst par apna naya rang dikhaa rahi hai But But We are sure Final Product bhut acha hoga kyunki woh aapse padha hua ek bachha hoga..",
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
