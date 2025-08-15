/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById("rsvp-button");
// Step 2: Initial RSVP count
let count = 3;

// Step 3: Callback function
const addParticipant = (event, person) => {
   if (event) event.preventDefault();

   // Get values from form
   //const name = document.getElementById("name").value;
  //const country = document.getElementById("country").value;

  // Create new <p> element
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🌟 ${person.name} from ${person.country} has RSVP'd.`;

  // Find the RSVP participants container
  const participantsDiv = document.querySelector(".rsvp-participants");

  // Find the RSVP count element
  const rsvpCount = document.getElementById("rsvp-count");

  // Insert the new participant ABOVE the count
  participantsDiv.insertBefore(newParticipant, rsvpCount);

  // Update the count at the bottom
  count += 1;
  rsvpCount.textContent = `🌏 ${count} people have RSVP'd to this event!`;

  //Clear form inputs
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("country").value = '';
};

// Step 4: Add event listener

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;

  const rsvpInputs = document.getElementById("rsvp-form").elements;

  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    let input = rsvpInputs[i];
    if (input.type === "submit") continue;

  // TODO: Inside loop, validate the value of each input
  if (input.value.trim().length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }

// person object from form input values
const person = {
  name: document.getElementById("name").value.trim(),
  email: document.getElementById("email").value.trim(),
  country: document.getElementById("country").value.trim(),
};

  // TODO: If no errors, call addParticipant() and clear fields
  if (!containsErrors) {
    addParticipant(event, person);
    toggleModal(person);

  }
};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
const rsvpForm = document.getElementById("rsvp-form");
rsvpForm.addEventListener("submit", validateForm);



/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  
    let modal = document.getElementById("success-modal"); // TODO
    let modalContent = document.getElementById("modal-text");
    
    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
   modalContent.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`; 

   let intervalId = setInterval(animateImage, 500);

    // Set modal timeout to 5 seconds
    setTimeout(() => {
      modal.style.display = "none";
    clearInterval(intervalId);
    }, 5000);
};

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.getElementById("modal-img");

function animateImage() {
  if (!animationsEnabled) return;
  
  rotateFactor = rotateFactor === 0 ? -10 : 0;

  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

// close button
const closeModalButton = document.getElementById("close-modal-button");
const modal = document.getElementById("success-modal");

const closeModal = () => {
  modal.style.display = "none";
};

closeModalButton.addEventListener("click", closeModal);

//reduce motion
const reduceMotionButton = document.getElementById("reduce-motion-button");

let animationsEnabled = true;

const reduceMotion = () => {
  animationsEnabled = !animationsEnabled;

  if (animationsEnabled) {
    document.body.classList.remove("reduce-motion");
    reduceMotionButton.textContent = "Reduce Motion";
  } else {
    document.body.classList.add("reduce-motion");
    reduceMotionButton.textContent = "Enable Motion";
  }
};

reduceMotionButton.addEventListener("click", reduceMotion);
