import {kai} from './kai.js';
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var clearInput = document.querySelector("#clear1");
var clearOutput = document.querySelector("#clear2");
var select = document.getElementById("selector");
var info = document.getElementById('info');


window.onload = function(){
    options();
    //menu
document.querySelector(".menu").addEventListener('click',()=>{
  var container = document.querySelector(".container");
  if(container.style.display === "block"){
    container.style.display = "none";
  }else{
    container.style.display = "block";
  }
});

document.querySelector("#settings").addEventListener('click',()=>{
  var container = document.querySelector(".container");
  if(container.style.display === "block"){
    container.style.display = "none";
  }else{
    container.style.display = "block";
  }
});

}



//options
var options = ()=>{
    var value = select.value;
    if(value == "iso"){
      info.innerHTML = "";
        input.addEventListener('keyup',()=>{
            output.value = kai.toISO(kai.fromDrav(input.value));
          });
    }else if(value == "ipa"){
      info.innerHTML = "";
        input.addEventListener('keyup',()=>{
            output.value = kai.toIPA(kai.fromDrav(input.value));
          });
    }else if (value == "gon"){
      info.innerHTML = `Font: <a href="https://fonts.google.com/noto/specimen/Noto+Sans+Gunjala+Gondi">Noto Sans Gunjala Gondi</a>`
        input.addEventListener('keyup',()=>{
          output.value = kai.toGon(kai.fromDrav(input.value));
        });
    }else if (value == "gra"){
      info.innerHTML = `Font: <a href="https://fonts.google.com/noto/specimen/Noto+Sans+Grantha">Noto Sans Grantha</a>`
        input.addEventListener('keyup',()=>{
          output.value = kai.toGra(kai.fromDrav(input.value));
        });
    }else if (value == "kan"){
      info.innerHTML = "";
        input.addEventListener('keyup',()=>{
          output.value = kai.toKan(kai.fromDrav(input.value));
        });
    }else if (value == "mal"){
      info.innerHTML = "";
        input.addEventListener('keyup',()=>{
          output.value = kai.toMal(kai.fromDrav(input.value));
        });
    }else if (value == "tam"){
      info.innerHTML = "";
        input.addEventListener('keyup',()=>{
          output.value = kai.toTam(kai.fromDrav(input.value));
        });
    }else if (value == "tel"){
      info.innerHTML = "";
        input.addEventListener('keyup',()=>{
          output.value = kai.toTel(kai.fromDrav(input.value));
        });
  }else if (value == "arml"){
    info.innerHTML = `Font: <a href="https://fonts.google.com/specimen/Scheherazade+New">Scheherazade New</a>`
    input.addEventListener('keyup',()=>{
      output.value = kai.toArml(kai.fromDrav(input.value));
    });
  }
}

//save value 
document.addEventListener("DOMContentLoaded",()=>{
  const savedOption = localStorage.getItem("saved");
 

  for (const optionElement of select){
    optionElement.selected = savedOption === optionElement.value;
  }

  select.addEventListener('change',function(){
    localStorage.setItem("saved",this.value);
  
  })
});

document.getElementById("selector").onchange = changeListener;
function changeListener(){
 options();
}

document.querySelector("#trans").addEventListener('click',()=>{
    var value = select.value;
    if(value == "iso"){
            output.value = kai.toISO(kai.fromDrav(input.value));
    }else if(value == "ipa"){
            output.value = kai.toIPA(kai.fromDrav(input.value));
    }else if (value == "gon"){
          output.value = kai.toGon(kai.fromDrav(input.value));
    }else if (value == "gra"){
          output.value = kai.toGra(kai.fromDrav(input.value));
    }else if (value == "kan"){
          output.value = kai.toKan(kai.fromDrav(input.value));
    }else if (value == "mal"){
          output.value = kai.toMal(kai.fromDrav(input.value));
    }else if (value == "tam"){
          output.value = kai.toTam(kai.fromDrav(input.value));
    }else if (value == "tel"){
          output.value = kai.toTel(kai.fromDrav(input.value));
  }else if (value == "arml"){
      output.value = kai.toArml(kai.fromDrav(input.value));
  }
});


//clear btns
clearInput.addEventListener('click',()=>
input.value = "",
);
clearOutput.addEventListener('click',()=>output.value = "");
// copy
document.querySelector("#copy").addEventListener('click',()=>{
var copyText = document.getElementById("output");
copyText.select();
copyText.setSelectionRange(0, 99999); 
navigator.clipboard.writeText(copyText.value);})

///translation
const defaultLocale = "en";
let locale;
let translations = {};
document.addEventListener("DOMContentLoaded", () => {
  bindLocaleSwitcher(defaultLocale);
  // Translate the page to the default locale
  setLocale(defaultLocale);
});
async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations = 
    await fetchTranslationsFor(newLocale);
  locale = newLocale;
  translations = newTranslations;
  document.documentElement.dir = dir(newLocale);
  translatePage();
}
async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`./test/lang/${newLocale}.json`);
  return await response.json();
}
// Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key
function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[key];
  element.innerText = translation;
}
function bindLocaleSwitcher(initialValue) {
  const switcher = 
    document.querySelector("[data-i18n-switcher]");
  switcher.value = initialValue;
  switcher.onchange = (e) => {
    // Set the locale to the selected option[value]
    setLocale(e.target.value);
  };
}

function dir(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
