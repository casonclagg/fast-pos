# FastPOS

Fast parts of speech for javascript.

#### Usage

```shell
npm i -S fast-pos
```

```javascript
import FastPOS from 'fast-pos'

let pos = new FastPOS()
let output = pos.partsOfSpeech("I am the one who knocks.")

console.log(output)

/*
[ { word: 'i', pos: [ 'N' ] },
  { word: 'am', pos: [ 'V' ] },
  { word: 'the', pos: [ 'v', 'D' ] },
  { word: 'one', pos: [ 'N', 'D', 'r' ] },
  { word: 'who', pos: [ 'r' ] },
  { word: 'knocks', pos: [] } ]
*/
```

# TODO

- `knocks` isn't showing up as anything... its not in this dictionary... find a better dictionary.
