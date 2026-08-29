const opening = document.getElementById("opening");
const beginBtn = document.getElementById("beginBtn");
const mainContent = document.getElementById("mainContent");
const typingText = document.getElementById("typingText");

beginBtn.addEventListener("click", function () {

    opening.classList.add("hide");

    mainContent.classList.add("show");

    startTyping();

});


const text = "I never really stopped loving you.";

let index = 0;

function startTyping() {

    typingText.textContent = "";

    index = 0;

    typeCharacter();

}


function typeCharacter() {

    if (index < text.length) {

        typingText.textContent += text[index];

        index++;

        setTimeout(typeCharacter, 70);

    }

}