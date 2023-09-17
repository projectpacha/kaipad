import { inputMappings, outputMappings, punctuationRules, featureRules } from './js/maps.js';
//

const supportedScripts = [
//latin, malayalam, kannada, tamil, telugoo punctuations 
  /^[\u0000-\u007F\u0D00-\u0D7F\u0C80-\u0CFF\u0B80-\u0BFF\\u0C00-\u0C7F\s.,!?;:()\[\]{}]*$/u
  ];

//supported script 
function supported(str) {
  for (const script of supportedScripts) {
    if (str.match(script)) {
      return true;
    }
  }
  return false;
}


 // Function to convert based on rules
function convert(input_name, output_name, str, feature_name) {
  let result = " ";
  let current_word = "";

for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === ' ') {
      result += current_word;
      result += ' ';
      current_word = ' ';
    } else {
      // Define inputMapping based on the selected input script
      const converted_char = inputMappings[input_name][char] || char;
      current_word += outputMappings[output_name][converted_char] || converted_char;
    }
  }
  result += current_word;
// Apply punctuation rules based on input_name, output_name, and feature_name
  switch ([input_name, output_name, feature_name].toString()) {
    case ['malayalam', 'iso', 'sans'].toString():
    case ['kannada', 'iso', 'sans'].toString():
    case ['telugu', 'iso', 'sans'].toString():
    case ['tamil', 'iso', 'sans'].toString():
    case ['tamil', 'iso', ''].toString():
      for (const [from, to] of Object.entries(punctuationRules.iso)) {
        if (from !== ' ') {
          const regex = new RegExp(from, 'g');
          result = result.replace(regex, to);
        }
      }
      for (const [from, to] of Object.entries(featureRules.iso)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }
      break;
      //-------------------------------------------///
   case ['malayalam', 'iso', ''].toString():
      for (const [from, to] of Object.entries(punctuationRules.iso)) {
        if (from !== ' ') {
          const regex = new RegExp(from, 'g');
          result = result.replace(regex, to);
        }
      }
      for (const [from, to] of Object.entries(featureRules.iso)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }
	for (const [from, to] of Object.entries(featureRules.isoMal)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }

      break;
	      //-------------------------------------------///
   case ['kannada', 'iso', ''].toString():
   case ['telugu', 'iso', ''].toString():
      for (const [from, to] of Object.entries(punctuationRules.iso)) {
        if (from !== ' ') {
          const regex = new RegExp(from, 'g');
          result = result.replace(regex, to);
        }
      }
      for (const [from, to] of Object.entries(featureRules.iso)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }
	for (const [from, to] of Object.entries(featureRules.isoKn)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }

      break;
      	      //-------------------------------------------///
   case ['malayalam', 'ipa', 'sans'].toString():
   case ['kannada', 'ipa', 'sans'].toString():
   case ['telugu', 'ipa', 'sans'].toString():
   case ['tamil', 'ipa', 'sans'].toString():
   case ['tamil', 'ipa', ''].toString():
      for (const [from, to] of Object.entries(punctuationRules.ipa)) {
        if (from !== ' ') {
          const regex = new RegExp(from, 'g');
          result = result.replace(regex, to);
        }
      }
      for (const [from, to] of Object.entries(featureRules.ipa)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }

      break;
       //-------------------------------------------///
   case ['malayalam', 'ipa', ''].toString():
      for (const [from, to] of Object.entries(punctuationRules.ipa)) {
        if (from !== ' ') {
          const regex = new RegExp(from, 'g');
          result = result.replace(regex, to);
        }
      }
      for (const [from, to] of Object.entries(featureRules.ipa)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }
	for (const [from, to] of Object.entries(featureRules.ipaMal)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }

      break;
             //-------------------------------------------///
   case ['kannada', 'ipa', ''].toString():
   case ['telugu', 'ipa', ''].toString():
      for (const [from, to] of Object.entries(punctuationRules.ipa)) {
        if (from !== ' ') {
          const regex = new RegExp(from, 'g');
          result = result.replace(regex, to);
        }
      }
      for (const [from, to] of Object.entries(featureRules.ipa)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }
	for (const [from, to] of Object.entries(featureRules.ipaKn)) {
        const regex = new RegExp(from, 'g');
        result = result.replace(regex, to);
      }

      break;
      	      //-------------------------------------------///
       console.error('Invalid input_name.');
  };
 
  return result;
}




export{supported,convert}
