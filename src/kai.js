//മാപ്പിങ്ങിൽ നിന്നും ജാവാസ്ക്രിപ്റ്റ് പൊരുളുകൾ ഇറക്കുമതി ചെയ്യുന്നു
import {DravISO, ta, iso, ipa, mal, kan, tel, gra, gon, armal} from './mapping.js'
//കൈ പൊഴുതിയുടെ തുടക്കംം 
var kai = function(){
// ദ്രാവിഡ ലിപികളും IPA, ISO മുറകളും ഒരു "നടു-എഴുത്തു-മുറ"യാക്കി മാറ്റുന്നു.  
function fromDrav(string ='',subsitutions = {}){
const subs = Object.assign({}, DravISO); 
const temps = {}; 
const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); // ചിട്ടയല്ലാതെ ഒരു അച്ച് എടുക്കുന്നു
const inputs = Object.keys(DravISO); 
Object.entries(DravISO) 
.sort(([a], [b]) => b.length - a.length) 
.forEach(([input, replacement]) => {
  if (inputs.includes(replacement)) {
  let temp = getRandomCodePoint();
   while (temp in temps) temp = getRandomCodePoint();
  temps[temp] = replacement;
  subs[input] = temp;
      }
      const regexp = new RegExp(input, 'gu');
      string = string.replace(regexp, subs[input]);
    });
    Object.entries(temps)
    .forEach(([temp, replacement]) => {
      const regexp = new RegExp(temp, 'gu');
      string = string.replace(regexp, replacement);
    });
    //പിഴവുകൾ തിരുത്തുന്നു
    string = string
    .replace(/aā/g,'ā').replace(/ai/g,'i').replace(/aī/g,'ī').replace(/ae/g,'e').replace(/aē/g,'ē').replace(/au/g,'u').replace(/aū/g,'ū')
    .replace(/ao/g,'o').replace(/aō/g,'ō').replace(/ar̥/g,'r̥').replace(/ar̥̄/g,'r̥̄').replace(/al̥/g,'l̥')
    .replace(/al̥̄/g,'l̥̄')
    .replace(/aů/g,'ů')
    .replace(/aai/g,'ai').replace(/aau/g,'au')
    .replace(/a\u200b/g,'')
    return string;
};
//തമിഴിലേക്കു മാറ്റുന്ന പൊഴുതി
function toTam(string,subsitutions = {}){
const subs = Object.assign({}, ta); 
const temps = {};
const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); 
const inputs = Object.keys(ta);
Object.entries(ta) 
.sort(([a], [b]) => b.length - a.length) 
.forEach(([input, replacement]) => {
  if (inputs.includes(replacement)) {
  let temp = getRandomCodePoint();
   while (temp in temps) temp = getRandomCodePoint();
  temps[temp] = replacement;
  subs[input] = temp;
      }
      const regexp = new RegExp(input, 'gu');
      string = string.replace(regexp, subs[input]);
    });
    Object.entries(temps)
    .forEach(([temp, replacement]) => {
      const regexp = new RegExp(temp, 'gu');
      string = string.replace(regexp, replacement);
    });
    return string;
}
//മലയാളത്തിലേക്കു മാറ്റുന്ന പൊഴുതി  
function toMal(string,subsitutions = {}){
  const subs = Object.assign({}, mal);
  const temps = {}; 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); 
  const inputs = Object.keys(mal); 
  Object.entries(mal) 
  .sort(([a], [b]) => b.length - a.length)
  .forEach(([input, replacement]) => {
    if (inputs.includes(replacement)) {
    let temp = getRandomCodePoint();
     while (temp in temps) temp = getRandomCodePoint();
    temps[temp] = replacement;
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
  // ചില്ലെഴുത്തുകളുടെ പിഴവ് തിരുത്തുന്നു
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
  // ഐ.എസ്.ഒ യിലേക്കു മാറ്റുന്നു 
function toISO(string,subsitutions = {}){
  const subs = Object.assign({}, iso); 
  const temps = {}; 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); 
  const inputs = Object.keys(iso); 
  Object.entries(iso) 
  .sort(([a], [b]) => b.length - a.length) 
  .forEach(([input, replacement]) => {
    if (inputs.includes(replacement)) {
    let temp = getRandomCodePoint();
     while (temp in temps) temp = getRandomCodePoint();
    temps[temp] = replacement;
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
  // മലയാളം ചില്ലിനെ തിരിച്ചറിഞ്ഞു മാറ്റുന്ന ചട്ടം
      .replace(/aŬ /g,'ŭ ').replace(/aŬ,/g,'ŭ,').replace(/aŬ\u003F /g,'ŭ\u003F ')
      .replace(/aŬ\u0027 /g,'ŭ\u0027 ').replace(/aŬ\u0022 /g,'ŭ\u0022 ')
      .replace(/aŬ\u002E /g,'ŭ\u002E ').replace(/aŬ/g,'')
      return string;
}
  // ഐ.പി.എ യിലേക്കു മാറ്റുന്നു 
function toIPA(string,subsitutions = {}){
  const subs = Object.assign({}, ipa);
  const temps = {}; 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); 
  const inputs = Object.keys(ipa);
  Object.entries(ipa) 
  .sort(([a], [b]) => b.length - a.length) 
  .forEach(([input, replacement]) => {
    if (inputs.includes(replacement)) {
    let temp = getRandomCodePoint();
     while (temp in temps) temp = getRandomCodePoint();
    temps[temp] = replacement;
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
      .replace(/əŬ /g,'ɨ̆ ').replace(/əŬ,/g,'ɨ̆,').replace(/əŬ\u003F /g,'ɨ̆\u003F ')
      .replace(/əŬ\u0027 /g,'ɨ̆\u0027 ').replace(/əŬ\u0022 /g,'ɨ̆\u0022 ')
      .replace(/əŬ\u002E /g,'ɨ̆\u002E ').replace(/əŬ/g,'')
      return string;
}
  // കന്നടയിലേക്കു മാറ്റുന്ന പൊഴുതി
function toKan(string,subsitutions = {}){
  const subs = Object.assign({}, kan); 
  const temps = {}; 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); 
  const inputs = Object.keys(kan);
  Object.entries(kan)
  .sort(([a], [b]) => b.length - a.length)
  .forEach(([input, replacement]) => {
    if (inputs.includes(replacement)) {
    let temp = getRandomCodePoint();
     while (temp in temps) temp = getRandomCodePoint();
    temps[temp] = replacement;
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
  //അനുസ്വരത്തെ നേരേയാക്കൽ
      .replace(/ಙ್ಕ್/g,'ಂಕ್').replace(/ಙ್ಕ/g,'ಂಕ')
      .replace(/ಞ್ಚ್/g,'ಂಚ್').replace(/ಞ್ಚ/g,'ಂಚ').replace(/ಞ್ಛ್/g,'ಂಛ್').replace(/ಞ್ಛ/g,'ಂಛ').replace(/ಞ್ಜ್/g,'ಂಜ್').replace(/ಞ್ಜ/g,'ಂಜ').replace(/ಞ್ಝ್/g,'ಂಝ್').replace(/ಞ್ಝ/g,'ಂಝ')
      .replace(/ಣ್ಟ್/g,'ಂಟ್').replace(/ಣ್ಟ/g,'ಂಟ').replace(/ಣ್ಠ್/g,'ಂಠ್').replace(/ಣ್ಠ/g,'ಂಠ').replace(/ಣ್ಡ್/g,'ಂಡ್').replace(/ಣ್ಡ/g,'ಂಡ').replace(/ಣ್ಢ್/g,'ಂಢ್').replace(/ಣ್ಢ/g,'ಂಢ')
      return string;
}
  //തെലുങ്കിലേക്കു മാറ്റുന്ന പൊഴുതി
function toTel(string,subsitutions = {}){
  const subs = Object.assign({}, tel); 
  const temps = {}; 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); 
  const inputs = Object.keys(tel); 
  Object.entries(tel) 
  .sort(([a], [b]) => b.length - a.length)
  .forEach(([input, replacement]) => {
    if (inputs.includes(replacement)) {
    let temp = getRandomCodePoint();
     while (temp in temps) temp = getRandomCodePoint();
    temps[temp] = replacement;
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
    //അനുസ്വരത്തെ നേരേയാക്കൽ
      .replace(/ఙ్క్/g,'ంక్').replace(/ఙ్క/g,'ంక')
      .replace(/ఞ్చ్/g,'ంచ్').replace(/జ్చ/g,'ంచ').replace(/జ్ఛ్/g,'ంఛ్').replace(/జ్ఛ/g,'ంఛ').replace(/జ్ఙ్/g,'ంజ్').replace(/జ్ఙ/g,'ంజ').replace(/జ్ఝ్/g,'ంఝ్').replace(/జ్ఝ/g,'ంఝ')
      .replace(/ణ్ట్/g,'ంట్').replace(/ణ్ట/g,'ంట').replace(/ణ్ఠ్/g,'ంఠ్').replace(/ణ్ఠ/g,'ంఠ').replace(/ణ్డ్/g,'ండ్').replace(/ణ్డ/g,'ండ').replace(/ణ్ఢ్/g,'ంఢ్').replace(/ణ్ఢ/g,'ంఢ')
      return string;
}
  // ഗുഞ്ജാലാ ഗോണ്ടിയിലേക്കു മാറ്റുന്ന പൊഴുതി
function toGon(string,subsitutions = {}){
  const subs = Object.assign({}, gon); 
  const temps = {}; 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632);
  const inputs = Object.keys(gon);
  Object.entries(gon)
  .sort(([a], [b]) => b.length - a.length)
  .forEach(([input, replacement]) => {
    if (inputs.includes(replacement)) {
    let temp = getRandomCodePoint();
     while (temp in temps) temp = getRandomCodePoint();
    temps[temp] = replacement;
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      string = string
    //അനുസ്വരത്തെ നേരേയാക്കൽ
      .replace(/𑶄𑶗𑵱𑶗/g,'𑶕𑵱𑶗').replace(/𑶄𑶗𑵱/g,'𑶕𑵱')
      .replace(/𑵺𑶗𑵻𑶗/g,'𑶕𑵻𑶗').replace(/𑵺𑶗𑵻/g,'𑶕𑵻').replace(/𑵺𑶗𑵼𑶗/g,'𑶕𑵼𑶗').replace(/𑵺𑶗𑵼/g,'𑶕𑵼').replace(/𑵺𑶗𑶀𑶗/g,'𑶕𑶀𑶗').replace(/𑵺𑶗𑶀/g,'𑶕𑶀').replace(/𑵺𑶗𑶁𑶗/g,'𑶕𑶁𑶗').replace(/𑵺𑶗𑶁/g,'𑶕𑶁')
      .replace(/𑵺𑶗𑵽𑶗/g,'𑶕𑵽𑶗').replace(/𑵺𑶗𑵽/g,'𑶕𑵽').replace(/𑵺𑶗𑶂𑶗/g,'𑶕𑶂𑶗').replace(/𑵺𑶗𑶂/g,'𑶕𑶂').replace(/𑵺𑶗𑶂𑶗/g,'𑶕𑶂𑶗').replace(/𑵺𑶗𑶂/g,'𑶕𑶂').replace(/𑵺𑶗𑶃𑶗/g,'𑶕𑶃𑶗').replace(/𑵺𑶗𑶃/g,'𑶕𑶃')
      return string;
}
  // ഗ്രന്തയിലേക്കു മാറ്റുന്ന പൊഴുതി
function toGra(string,subsitutions = {}){
  const subs = Object.assign({}, gra); 
  const temps = {}; 
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632);
  const inputs = Object.keys(gra); 
  Object.entries(gra) 
  .sort(([a], [b]) => b.length - a.length) 
  .forEach(([input, replacement]) => {
    if (inputs.includes(replacement)) {
    let temp = getRandomCodePoint();
     while (temp in temps) temp = getRandomCodePoint();
    temps[temp] = replacement;
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });
      return string;
}
  // അറബി മലയാളത്തിലേക്കു മാറ്റുന്ന പൊഴുതി
function toArml(string,subsitutions = {}){
  const subs = Object.assign({}, armal); 
  const temps = {};
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632); 
  const inputs = Object.keys(armal); 
  Object.entries(armal) 
  .sort(([a], [b]) => b.length - a.length) 
  .forEach(([input, replacement]) => {
    if (inputs.includes(replacement)) {
    let temp = getRandomCodePoint();
     while (temp in temps) temp = getRandomCodePoint();
    temps[temp] = replacement;
    subs[input] = temp;
        }
        const regexp = new RegExp(input, 'gu');
        string = string.replace(regexp, subs[input]);
      });
      Object.entries(temps)
      .forEach(([temp, replacement]) => {
        const regexp = new RegExp(temp, 'gu');
        string = string.replace(regexp, replacement);
      });   
      string = string
  // അറബിമലയാളം ഇരട്ടിപ്പു നേരേയാക്കൽ
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
 // എണ്ണങ്ങൾ 
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
//
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
