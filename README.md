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

### Numerals

You can also convert numerals using Kaipad
```js
console.log(kai.MalNum("123"))
```
output: ൧൨൩

Read in detail about [Malayalam Arayukaram (samvrithokaram)](#)

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

# Contributing

If you are planning to include a writing system, make sure that you have are aware of the nuances. A broad transliteration is not adequate for NLP and accurate bidirectional conversion.

### Resources to get you started with contribution.
1. [IPA](https://www.internationalphoneticassociation.org/content/full-ipa-chart)
2. [ISO 15919](https://www.iso.org/standard/28333.html)
3. [Brahmic Scripts](https://en.wikipedia.org/wiki/Brahmic_scripts#:~:text=The%20Brahmic%20scripts%2C%20also%20known,in%20the%20form%20of%20Siddha%E1%B9%83.)
4. [Writing Systems](https://en.wikipedia.org/wiki/Writing_system)

### Tools

If you are using a Linux Distribution, you can use [gucharmap](https://wiki.gnome.org/Apps/Gucharmap) to see Unicode characters. If you are working with a lesser known writing system, you probably want to install a Unicode font of that particular writing system to properly see what you are working with.

