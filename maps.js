//maps backup

const scriptToISO = {
	'malayalam':{
	 'അ' : 'A', 'ആ' : 'Ā', 'ഇ' : 'I', 'ഈ' : 'Ī','ൟ':'Ī', 'ഉ' : 'U', 'ഊ':'Ū', 
	 'ഋ' : 'R̥','ൠ' : 'R̥̄','ഌ' : 'L̥','ൡ' : 'L̥̄',
	 'എ' : 'E', 'ഏ' : 'Ē','ഐ' : 'AI', 'ഒ' : 'O', 'ഓ' : 'Ō', 'ഔ' : 'AU', 'ഃ' : 'ḥ', 
	 'ം' :'m',
	 ///
	  'ക' : 'ka','ഖ' : 'kha','ഗ' : 'ga','ഘ' : 'gha','ങ':'ṅa',
	  'ച' :'ca','ഛ':'cha','ജ':'ja','ഝ':'jha','ഞ':'ña',
	  'ട':'ṭa','ഠ':'ṭha','ഡ':'ḍa','ഢ':'ḍha','ണ':'ṇa',
	  'ത':'ta','ഥ':'tha','ദ':'da','ധ':'dha','ന':'na','ഩ':'ṉa',
	  'പ':'pa','ഫ':'pha','ബ':'ba','ഭ':'bha','മ':'ma',
	  'യ':'ya','ര':'ra','ല':'la','വ':'va','ള':'ḷa','ഴ':'ḻa','റ':'ṟa',
	  'ശ':'śa','ഷ':'ṣa','സ':'sa','ഹ':'ha',  
	  //
	  'ൿ':'k','ൻ':'ṉ','ൺ':'ṇ','ൔ':'m',
	  'ൕ':'y','ൖ':'ḻ','ർ':'r','ൽ':'l','ൾ':'ḷ',
	  'ഺ':'ṯ','ഄ':'m','൦':'0','൧':'1','൨':'2','൩':'3',
	  '൪':'4','൫':'5','൬':'6','൭':'7','൮':'8','൯':'9',
	  '൰':'10','൱':'100','൲':'1000', 
	  ///
	  'ാ' : 'ā', 'ി' : 'i','ീ':'ī','ു':'u','ൂ':'ū',
	  'െ':'e','േ':'ē','ൊ':'o','ോ':'ō','ൈ':'ai','ൌ':'au','ൗ':'au',
	  'ൃ' : 'r̥', 'ൄ':'r̥̄','ൢ':'l̥','ൣ':"l̥̄", 'ൎ':'r',	  
	  'ഀ' : 'ṁ', 'ം':'ṁ','഻' : '', '഼' : '','്':'ŭ'
	},
};
const applyRules = (convertedText, version) => {
    const commonRules = {
		'aŭ': 'x',
        'aā': 'ā',
        'ai': 'i',
        'aī': 'ī',
        'au': 'u',
        'aū': 'ū',
        'ar̥': 'r̥',
        'al̥': 'l̥',
        'ae': 'e',
        'aē': 'ē',
        'ao': 'o',
        'aō': 'ō',
        'A':'a','Ā':'ā','I':'i','Ī':'ī','U':'u','Ū':'ū',
		'E':'e','Ē':'ē','O':'o','Ō':'ō',
	    'AI':'ai','AU':'au'
    };

    const versionRules = {
        'native': {
           'xk':'k','hx':'h','xg':'g','xṅ':'ṅ',
            'xc':'c','xj':'j','xñ':'ñ',
            'xṭ':'ṭ','xḍ':'ḍ','xṇ':'ṇ',
            'xt':'t','xd':'d','xn':'n',
            'xp':'p','xb':'b','xm':'m',
            'xy':'y','xr':'r','xl':'l','xv':'v',
            'xḷ':'ḷ','lx̱':'ḻ','xṟ':'ṟ','xś':'ś','xṣ':'ṣ','xs':'s',
            'x':'ŭ',
            'ṁ':'m','ph':'f',
            'ṟṟ':'ṯṯ','nṟ':'nṯ',
            'mk':'ṅk','mkh':'ṅkh','mg':'ṅg','mgh':'ṅgh',
            
        },
        'sanskrit': {
           'x':'','ṉ':'n'
        },
        // Add rules for other versions
    };

    // Apply common rules
    Object.entries(commonRules).forEach(([pattern, replacement]) => {
        const regex = new RegExp(pattern, 'g');
        convertedText = convertedText.replace(regex, replacement);
    });

    // Apply version-specific rules
    if (versionRules.hasOwnProperty(version)) {
        Object.entries(versionRules[version]).forEach(([pattern, replacement]) => {
            const regex = new RegExp(pattern, 'g');
            convertedText = convertedText.replace(regex, replacement);
        });
    } else {
         console.error(`Unsupported version: ${version}`);
        return null;
    }

    return convertedText;
};

export { scriptToISO, applyRules as applyCustomRules };
