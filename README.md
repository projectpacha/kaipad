# kaippad (കൈപ്പാട്)

## Introduction

Kaipad is a javascript transliteration library predominantly focusing on Brahmic-based scripts.The name Kaipad means orthography or hand-mark in Malayalam. It supports Romanisation (ISO 15919), and International Phonetic Alphabet (IPA) conversion in addition to Brahmic scripts. At present, Kaipad focuses on the writing system of Dravidian languages.

## Setup

Kaipad is at the initial development stage. So it is not available as packages (for node and others) at the moment. However, you can test it out by manually placing the files in your project.

1. Direct Method

```html
<script type="module" src="/kai.js"></script>
```

2. Importing in your external javascript

```html
<script type="module" src="/app.js"></script>
```
```js
import {kai} from './kai.js';
```

## Usage
Using Kaipad is straightforward.
```js
console.log(kai.toIPA(kai.fromDrav("കൈപ്പാട്")))
```
Output: kaippaːʈɨ̆

Here `toIPA` converts your input to International Phonetic Alphabet. 
`fromDrav` is the keyword for converting from Dravidian languages plus ISO and IPA. This means that you can input IPA or ISO and convert the input to any of the Dravidian language's script.

```js
console.log(kai.toMal(fromDrav("kaippaːʈɨ̆")))
```

Output: കൈപ്പാട് 

## Supported scripts

This initial development stage supports input from ISO 15919, IPA, Gunjala Gondi, Grantha, Kannada, Malayalam, Tamil, and Telugu.

The output supports Arabi-Malayalam (Arabic script for Malayalam) in addition to the above mentioned input scripts.

`toISO` - ISO 15919 standard
`toIPA` - International Phonetic Alphabet
`toGon` - Gunjala Gondi
`toGra` - Grantha
`toKan` - Kannada
`toMal` - Malayalam
`toTam` - Tamil
`toTel` - Telugu
`toArmal` - Arabi-Malayalam


