// main.js
import { scriptToISO, applyCustomRules } from './maps.js';

function convert(script, inputString, version) {
    // Check if the provided script is supported
    if (!scriptToISO.hasOwnProperty(script)) {
        console.error('Unsupported script');
        return null;
    }
//
  // Check if the version is defined
    if (!version) {
        return 'No version selected. please select a version';
    }
    // Convert each character in the input string
    let convertedText = inputString
        .split('')
        .map(char => scriptToISO[script][char] || char)
        .join('');

    // Apply additional rules based on the version
    convertedText = applyCustomRules(convertedText, version);

    return convertedText;
}


/////////////////////////%%%%%%%%%%not to be added in actual code// Example usage:
const inputString = document.getElementById("input");
const convertBtn = document.getElementById("convertBtn");
const scriptSelection = document.getElementById("scriptSelection");
const versionDropdown = document.getElementById("version");
const output = document.getElementById("output");


function updateOutput() {
    const selectedVersion = versionDropdown.value;
    const selectedScript = scriptSelection.value;
    const isoString = convert(selectedScript, inputString.value, selectedVersion);
    output.innerHTML = isoString;
}

convertBtn.addEventListener("click", updateOutput);

inputString.addEventListener("keyup", function(event) {
    // Check if the pressed key is the space key (key code 32)
    if (event.code === "Space") {
        updateOutput();
    }
});

inputString.addEventListener("keydown", function(event) {
    // Check if the pressed key is the backspace key (key code 8)
    if (event.code === "Backspace") {
        updateOutput();
    }
});

clearBtn.addEventListener("click",function(){
	inputString.value = ""
	 output.innerHTML = "മായിച്ച് കളഞ്ഞ്.... ഇനി എന്തെരെങ്കിലും കാണോങ്കില്  ടൈപ്പ് ചെയ്യണം..";
})

//dark mode

const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;
const toolbar = document.querySelector('.toolbar');

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toolbar.classList.toggle('dark-mode-toolbar');
    setDarkModePreference(body.classList.contains('dark-mode'));
});

// Add this function if you want to persist the user's choice in local storage
function setDarkModePreference(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode);
}

// Add this function to check the user's preference on page load
function checkDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toolbar.classList.add('dark-mode-toolbar');
    }
}

// Call the checkDarkModePreference function on page load
checkDarkModePreference();
