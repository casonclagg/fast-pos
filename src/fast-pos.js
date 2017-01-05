import path from 'path'
import fs from 'fs-extra'
import _ from 'lodash'

export default class FastPOS {
    constructor(options) {
        let data = fs.readFileSync(path.join(__dirname, '/data/posDict.txt'), 'Utf8')
        this.dictionary = JSON.parse(data)
    }

    partsOfSpeech(line) {
        var results = []
        var words = line.split(' ')
        words = words.filter(w => w != null && !w.match(/^\s+$/ig) && w.length > 0) // Filter out blanks

        words.forEach(word => {
            word = this._noPunc(word)
            var data = {
                word: word,
                pos: []
            }
            data.pos = this._getParts(word.toLowerCase(), this.dictionary)
            results.push(data)
        })
        return results
    }

    _getParts(word, library, noconvert) {
        var results = []
        for (var part in library) {
            if (library[part].indexOf(word) !== -1) {
                results.push(part)
            }
        }
        return results
    }

    _noPunc(word) {
        if(!word || word.length == 0) return null
        word = word.toLowerCase()
        let nopunc = word.replace(/\!|\.|\?|\"|\'|\,\s/ig, "")
        return nopunc
    }
}
