const inputArea = document.getElementById("inputArea");
const outputArea = document.getElementById("outputArea");
const convertBtn = document.getElementById("convert-button");
const inputScript = document.getElementById("inputScript");
const outputScript = document.getElementById("outputScript");
const feature = document.getElementById("feature");
const darkModeButton = document.querySelector('.dark-mode-button');

//copy
function copyFunction() {
  outputArea.select();
  outputArea.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(outputArea.value);
}

//clear
function clearFunction(){
		inputArea.value = "";
	 outputArea.value = "";
}

//dark-mode
function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const textAreas = document.querySelectorAll('.texty');
    const tools = document.querySelector('.tools');
	
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    tools.classList.toggle('dark-mode');

    textAreas.forEach((textarea) => {
        textarea.classList.toggle('dark-mode');
    });

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

function initializeDarkMode() {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'enabled') {
        toggleDarkMode(); 
    }
}
darkModeButton.addEventListener('click', toggleDarkMode);
initializeDarkMode();
