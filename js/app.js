import{supported,convert} from 'kai.js';
//constans
const inputArea = document.getElementById("inputArea");
const outputArea = document.getElementById("outputArea");
const convertBtn = document.getElementById("convert-button");
const inputScript = document.getElementById("inputScript");
const outputScript = document.getElementById("outputScript");
const feature = document.getElementById("feature");
const darkModeButton = document.querySelector('.dark-mode-button');

//events
convertBtn.addEventListener("click",convertScript);
inputArea.addEventListener("keyup",convertScript);
//events-end

function convertScript(){
	const inputName = inputScript.value;
	const outputName = outputScript.value;
	const featureName = feature.value;
	const str = inputArea.value;
//function to check compatability
  if (!supported(str)) {
        outputArea.value = "Unsupported Script! പിൻതുണയില്ല";
        return; 
    }

const result = convert(inputName, outputName, str, featureName);
outputArea.value = result;
}

