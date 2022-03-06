import {DravISO, ta, iso, ipa, mal, kan, tel, gra, gon, armal} from './mapping.js';
var kai = function(){
//നടു 
function fromDrav(string ='',subsitutions = {}){
const subs = Object.assign({}, DravISO); //പകരമാക്കൽ
const temps = {}; //താൽക്കാലിക അമൽ 
const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
const inputs = Object.keys(DravISO); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
Object.entries(DravISO) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
.sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
// തുടർച്ചാ പൊഴുതി
.forEach(([input, replacement]) => {
  // കുഴപ്പം നോക്കൽ
  if (inputs.includes(replacement)) {
  // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
  let temp = getRandomCodePoint();
  // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
   while (temp in temps) temp = getRandomCodePoint();
  // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
  temps[temp] = replacement;
  // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
  subs[input] = temp;
      }
      const regexp = new RegExp(input, 'gu');
      string = string.replace(regexp, subs[input]);
    });
    // ഉണ്മയായതിലേക്ക് തിരിക്കുക
    Object.entries(temps)
    .forEach(([temp, replacement]) => {
      const regexp = new RegExp(temp, 'gu');
      string = string.replace(regexp, replacement);
    });
    //അകരപ്പിഴവുകൾ തിരുത്തുക
    string = string
    .replace(/aā/g,'ā').replace(/ai/g,'i').replace(/aī/g,'ī').replace(/ae/g,'e').replace(/aē/g,'ē').replace(/au/g,'u').replace(/aū/g,'ū')
    .replace(/ao/g,'o').replace(/aō/g,'ō').replace(/ar̥/g,'r̥').replace(/ar̥̄/g,'r̥̄').replace(/al̥/g,'l̥')
    .replace(/al̥̄/g,'l̥̄')
    .replace(/aů/g,'ů')
    .replace(/aai/g,'ai').replace(/aau/g,'au')
    .replace(/a\u200b/g,'')
    return string;
};
function toTam(string,subsitutions = {}){
const subs = Object.assign({}, ta); //പകരമാക്കൽ
const temps = {}; //താൽക്കാലിക അമൽ 
const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
const inputs = Object.keys(ta); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
Object.entries(ta) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
.sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
// തുടർച്ചാ പൊഴുതി
.forEach(([input, replacement]) => {
  // കുഴപ്പം നോക്കൽ
  if (inputs.includes(replacement)) {
  // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
  let temp = getRandomCodePoint();
  // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
   while (temp in temps) temp = getRandomCodePoint();
  // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
  temps[temp] = replacement;
  // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
  subs[input] = temp;
      }
      const regexp = new RegExp(input, 'gu');
      string = string.replace(regexp, subs[input]);
    });
    // ഉണ്മയായതിലേക്ക് തിരിക്കുക
    Object.entries(temps)
    .forEach(([temp, replacement]) => {
      const regexp = new RegExp(temp, 'gu');
      string = string.replace(regexp, replacement);
    });
    return string;
}
function toMal(string,subsitutions = {}){
  const subs = Object.assign({}, mal); //പകരമാക്കൽ
  const temps = {}; //താൽക്കാലിക അമൽ 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
  const inputs = Object.keys(mal); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
  Object.entries(mal) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
  .sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
  // തുടർച്ചാ പൊഴുതി
  .forEach(([input, replacement]) => {
    // കുഴപ്പം നോക്കൽ
    if (inputs.includes(replacement)) {
    // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
    let temp = getRandomCodePoint();
    // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
     while (temp in temps) temp = getRandomCodePoint();
    // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
    temps[temp] = replacement;
    // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      // ഉണ്മയായതിലേക്ക് തിരിക്കുക
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
      .replace(/ര്/g,'ർ').replace(/ല്/g,'ൽ').replace(/ള്/g,'ൾ').replace(/ണ്/g,'ൺ').replace(/ന്/g,'ൻ')
      .replace(/ൽപ/g,'ല്പ').replace(/ൽല/g,'ല്ല').replace(/ൾള/g,'ള്ള')
      .replace(/ൻന/g,'ന്ന').replace(/ൻത/g,'ന്ത').replace(/ൻദ/g,'ന്ദ').replace(/ൻധ/g,'ന്ധ')
      .replace(/ൺണ/g,'ണ്ണ').replace(/ൺട/g,'ണ്ട').replace(/ൺഠ/g,'ണ്ഠ').replace(/ൺഡ/g,'ണ്ഡ').replace(/ൺഢ/g,'ണ്ഢ')
      .replace(/ൺമ/g,'ണ്മ')
      .replace(/ൽൽ/g,'ല്ല്').replace(/ർർ/g,'ർര്').replace(/ൾൾ/g,'ള്ള്').replace(/ൺൺ/g,'ണ്ണ്')
      .replace(/ൻൻ/g,'ന്ന്')
      
      return string;
  }
function toISO(string,subsitutions = {}){
  const subs = Object.assign({}, iso); //പകരമാക്കൽ
  const temps = {}; //താൽക്കാലിക അമൽ 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
  const inputs = Object.keys(iso); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
  Object.entries(iso) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
  .sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
  // തുടർച്ചാ പൊഴുതി
  .forEach(([input, replacement]) => {
    // കുഴപ്പം നോക്കൽ
    if (inputs.includes(replacement)) {
    // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
    let temp = getRandomCodePoint();
    // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
     while (temp in temps) temp = getRandomCodePoint();
    // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
    temps[temp] = replacement;
    // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      // ഉണ്മയായതിലേക്ക് തിരിക്കുക
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
      .replace(/aŬ\u0020/g,'ŭ\u0020').replace(/aŬ,/g,'ŭ,').replace(/aŬ\u003F\u0020/g,'ŭ\u003F\u0020')
      .replace(/aŬ\u0027\u0020/g,'ŭ\u0027\u0020').replace(/aŬ\u0022\u0020/g,'ŭ\u0022\u0020')
      .replace(/aŬ\u002E\u0020/g,'ŭ\u002E\u0020').replace(/aŬ/g,'')
      return string;
}
function toIPA(string,subsitutions = {}){
  const subs = Object.assign({}, ipa); //പകരമാക്കൽ
  const temps = {}; //താൽക്കാലിക അമൽ 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
  const inputs = Object.keys(ipa); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
  Object.entries(ipa) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
  .sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
  // തുടർച്ചാ പൊഴുതി
  .forEach(([input, replacement]) => {
    // കുഴപ്പം നോക്കൽ
    if (inputs.includes(replacement)) {
    // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
    let temp = getRandomCodePoint();
    // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
     while (temp in temps) temp = getRandomCodePoint();
    // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
    temps[temp] = replacement;
    // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      // ഉണ്മയായതിലേക്ക് തിരിക്കുക
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
      .replace(/əŬ\u0020/g,'ɨ̆\u0020').replace(/əŬ,/g,'ɨ̆,').replace(/əŬ\u003F\u0020/g,'ɨ̆\u003F\u0020')
      .replace(/əŬ\u0027\u0020/g,'ɨ̆\u0027\u0020').replace(/əŬ\u0022\u0020/g,'ɨ̆\u0022\u0020')
      .replace(/əŬ\u002E\u0020/g,'ɨ̆\u002E\u0020').replace(/əŬ/g,'')
      return string;
}
function toKan(string,subsitutions = {}){
  const subs = Object.assign({}, kan); //പകരമാക്കൽ
  const temps = {}; //താൽക്കാലിക അമൽ 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
  const inputs = Object.keys(kan); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
  Object.entries(kan) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
  .sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
  // തുടർച്ചാ പൊഴുതി
  .forEach(([input, replacement]) => {
    // കുഴപ്പം നോക്കൽ
    if (inputs.includes(replacement)) {
    // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
    let temp = getRandomCodePoint();
    // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
     while (temp in temps) temp = getRandomCodePoint();
    // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
    temps[temp] = replacement;
    // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      // ഉണ്മയായതിലേക്ക് തിരിക്കുക
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
      .replace(/ಙ್ಕ್/g,'ಂಕ್').replace(/ಙ್ಕ/g,'ಂಕ')
      .replace(/ಞ್ಚ್/g,'ಂಚ್').replace(/ಞ್ಚ/g,'ಂಚ').replace(/ಞ್ಛ್/g,'ಂಛ್').replace(/ಞ್ಛ/g,'ಂಛ').replace(/ಞ್ಜ್/g,'ಂಜ್').replace(/ಞ್ಜ/g,'ಂಜ').replace(/ಞ್ಝ್/g,'ಂಝ್').replace(/ಞ್ಝ/g,'ಂಝ')
      .replace(/ಣ್ಟ್/g,'ಂಟ್').replace(/ಣ್ಟ/g,'ಂಟ').replace(/ಣ್ಠ್/g,'ಂಠ್').replace(/ಣ್ಠ/g,'ಂಠ').replace(/ಣ್ಡ್/g,'ಂಡ್').replace(/ಣ್ಡ/g,'ಂಡ').replace(/ಣ್ಢ್/g,'ಂಢ್').replace(/ಣ್ಢ/g,'ಂಢ')
      return string;
}
function toTel(string,subsitutions = {}){
  const subs = Object.assign({}, tel); //പകരമാക്കൽ
  const temps = {}; //താൽക്കാലിക അമൽ 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
  const inputs = Object.keys(tel); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
  Object.entries(tel) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
  .sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
  // തുടർച്ചാ പൊഴുതി
  .forEach(([input, replacement]) => {
    // കുഴപ്പം നോക്കൽ
    if (inputs.includes(replacement)) {
    // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
    let temp = getRandomCodePoint();
    // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
     while (temp in temps) temp = getRandomCodePoint();
    // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
    temps[temp] = replacement;
    // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      // ഉണ്മയായതിലേക്ക് തിരിക്കുക
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
      .replace(/ఙ్క్/g,'ంక్').replace(/ఙ్క/g,'ంక')
      .replace(/ఞ్చ్/g,'ంచ్').replace(/జ్చ/g,'ంచ').replace(/జ్ఛ్/g,'ంఛ్').replace(/జ్ఛ/g,'ంఛ').replace(/జ్ఙ్/g,'ంజ్').replace(/జ్ఙ/g,'ంజ').replace(/జ్ఝ్/g,'ంఝ్').replace(/జ్ఝ/g,'ంఝ')
      .replace(/ణ్ట్/g,'ంట్').replace(/ణ్ట/g,'ంట').replace(/ణ్ఠ్/g,'ంఠ్').replace(/ణ్ఠ/g,'ంఠ').replace(/ణ్డ్/g,'ండ్').replace(/ణ్డ/g,'ండ').replace(/ణ్ఢ్/g,'ంఢ్').replace(/ణ్ఢ/g,'ంఢ')
      return string;
}
function toGon(string,subsitutions = {}){
  const subs = Object.assign({}, gon); //പകരമാക്കൽ
  const temps = {}; //താൽക്കാലിക അമൽ 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
  const inputs = Object.keys(gon); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
  Object.entries(gon) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
  .sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
  // തുടർച്ചാ പൊഴുതി
  .forEach(([input, replacement]) => {
    // കുഴപ്പം നോക്കൽ
    if (inputs.includes(replacement)) {
    // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
    let temp = getRandomCodePoint();
    // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
     while (temp in temps) temp = getRandomCodePoint();
    // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
    temps[temp] = replacement;
    // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      // ഉണ്മയായതിലേക്ക് തിരിക്കുക
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
      .replace(/𑶄𑶗𑵱𑶗/g,'𑶕𑵱𑶗').replace(/𑶄𑶗𑵱/g,'𑶕𑵱')
      .replace(/𑵺𑶗𑵻𑶗/g,'𑶕𑵻𑶗').replace(/𑵺𑶗𑵻/g,'𑶕𑵻').replace(/𑵺𑶗𑵼𑶗/g,'𑶕𑵼𑶗').replace(/𑵺𑶗𑵼/g,'𑶕𑵼').replace(/𑵺𑶗𑶀𑶗/g,'𑶕𑶀𑶗').replace(/𑵺𑶗𑶀/g,'𑶕𑶀').replace(/𑵺𑶗𑶁𑶗/g,'𑶕𑶁𑶗').replace(/𑵺𑶗𑶁/g,'𑶕𑶁')
      .replace(/𑵺𑶗𑵽𑶗/g,'𑶕𑵽𑶗').replace(/𑵺𑶗𑵽/g,'𑶕𑵽').replace(/𑵺𑶗𑶂𑶗/g,'𑶕𑶂𑶗').replace(/𑵺𑶗𑶂/g,'𑶕𑶂').replace(/𑵺𑶗𑶂𑶗/g,'𑶕𑶂𑶗').replace(/𑵺𑶗𑶂/g,'𑶕𑶂').replace(/𑵺𑶗𑶃𑶗/g,'𑶕𑶃𑶗').replace(/𑵺𑶗𑶃/g,'𑶕𑶃')
      return string;
}
function toGra(string,subsitutions = {}){
  const subs = Object.assign({}, gra); //പകരമാക്കൽ
  const temps = {}; //താൽക്കാലിക അമൽ 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
  const inputs = Object.keys(gra); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
  Object.entries(gra) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
  .sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
  // തുടർച്ചാ പൊഴുതി
  .forEach(([input, replacement]) => {
    // കുഴപ്പം നോക്കൽ
    if (inputs.includes(replacement)) {
    // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
    let temp = getRandomCodePoint();
    // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
     while (temp in temps) temp = getRandomCodePoint();
    // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
    temps[temp] = replacement;
    // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      // ഉണ്മയായതിലേക്ക് തിരിക്കുക
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      return string;
}
function toArml(string,subsitutions = {}){
  const subs = Object.assign({}, armal); //പകരമാക്കൽ
  const temps = {}; //താൽക്കാലിക അമൽ 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
  const inputs = Object.keys(armal); // ഉള്ളിലേക്കു എടുക്കുന്നതിൽ എന്തെങ്കിലും കുഴപ്പം ഉണ്ടോ എന്നു ആരായുന്നു.
  Object.entries(armal) // പകരമുള്ളവയുടെ പട്ടിക ഒരുക്കുക
  .sort(([a], [b]) => b.length - a.length) // നീളത്തിന്റെ അടിത്തറയിൽ തിട്ടപ്പെടുത്തുക
  // തുടർച്ചാ പൊഴുതി
  .forEach(([input, replacement]) => {
    // കുഴപ്പം നോക്കൽ
    if (inputs.includes(replacement)) {
    // താൽക്കാലികമായി ഒരു അച്ച് എടുക്കുക
    let temp = getRandomCodePoint();
    // ആ അച്ച് എടുത്തിട്ടുണ്ട് എങ്കിൽ മറ്റൊരെണ്ണം എടുക്കുക
     while (temp in temps) temp = getRandomCodePoint();
    // താൽക്കാലികമായി പകരം താൽക്കാലികമായി അമലിക്കുക
    temps[temp] = replacement;
    // താൽക്കാലികമായതിനെ ഉണ്മയായതുമായി മാറ്റുക
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      // ഉണ്മയായതിലേക്ക് തിരിക്കുക
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });   
      string = string
      .replace(/َْ/g,'ْ')
      //-------double consonants
      .replace(/کْک/g,'کّ').replace(/کْک/g,'کّ').replace(/ۼْۼ/g,'ۼّ')
      .replace(/چْچ/g,'چّ').replace(/جْج/g,'جّ').replace(/ڿْڿ/g,'ڿّ')
      .replace(/ڊْڊ/g,'ڊّ').replace(/ڗْڗ/g,'ڗّ').replace(/ڹْڹ/g,'ڹّ')
      .replace(/تْت/g,'تّ').replace(/دْد/g,'دّ').replace(/نْن/g,'نّ')
      .replace(/پْپ/g,'پّ').replace(/بْب/g,'بّ').replace(/مْم/g,'مّ')
      .replace(/يْي/g,'يّ').replace(/ڔْڔ/g,'ڔّ').replace(/لْل/g,'لّ')
      .replace(/وْو/g,'وّ').replace(/ۻْۻ/g,'ۻّ').replace(/سْس/g,'سّ')
      .replace(/شْش/g,'شّ').replace(/ھْھ/g,'ھّ').replace(/کْڔ/g,'کْر')
      return string;
  }
function MalNum(string){
  string = string
  .replace(/1/g,'൧').replace(/2/g,'൨').replace(/3/g,'൩').replace(/4/g,'൪').replace(/5/g,'൫')
  .replace(/6/g,'൬').replace(/7/g,'൭').replace(/8/g,'൬').replace(/9/g,'൯').replace(/0/g,'൦')
  return string;
}
function kanNum(string){
  string = string
  .replace(/1/g,'೧').replace(/2/g,'೨').replace(/3/g,'೩').replace(/4/g,'೪').replace(/5/g,'೫')
  .replace(/6/g,'೬').replace(/7/g,'೭').replace(/8/g,'೮').replace(/9/g,'೯').replace(/0/g,'೦')
  return string;
}
function GonNum(string){
  string = string
  .replace(/1/g,'𑶡').replace(/2/g,'𑶢').replace(/3/g,'𑶣').replace(/4/g,'𑶤').replace(/5/g,'𑶥')
  .replace(/6/g,'𑶦').replace(/7/g,'𑶧').replace(/8/g,'𑶨').replace(/9/g,'𑶩').replace(/0/g,'𑶠')
  return string;
}
function TamNum(string){
  string = string
  .replace(/1/g,'௧').replace(/2/g,'௨').replace(/3/g,'௩').replace(/4/g,'௪').replace(/5/g,'௫')
  .replace(/6/g,'௬').replace(/7/g,'௭').replace(/8/g,'௮').replace(/9/g,'௯').replace(/0/g,'௦')
  return string;
}
function TelNum(string){
  string = string
  .replace(/1/g,'౧').replace(/2/g,'౨').replace(/3/g,'౩').replace(/4/g,'౪').replace(/5/g,'౫')
  .replace(/6/g,'౬').replace(/7/g,'౭').replace(/8/g,'౮').replace(/9/g,'౯').replace(/0/g,'౦')
  return string;
}
function ArNum(string){
  string = string
  .replace(/1/g,'١').replace(/2/g,'٢').replace(/3/g,'٣').replace(/4/g,'٤').replace(/5/g,'٥')
  .replace(/6/g,'٦').replace(/7/g,'٧').replace(/8/g,'٨').replace(/9/g,'٩').replace(/0/g,'٠')
  return string;
}
//പുറത്തേക്ക്
return{
  fromDrav: fromDrav,
  toTam: toTam,
  toISO: toISO,
  toIPA: toIPA,
  toMal: toMal,
  toKan: toKan,
  toTel: toTel,
  toGra: toGra,
  toGon:toGon,
  toArml:toArml,
  MalNum: MalNum,
  kanNum: kanNum,
  GonNum:GonNum,
  TamNum:TamNum,
  TelNum:TelNum,
  ArNum : ArNum
}

}();
export {kai};