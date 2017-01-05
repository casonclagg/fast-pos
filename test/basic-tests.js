import FastPOS from '../lib/fast-pos'
import _ from 'lodash'
import { assert } from 'chai'

suite('fastPOS:', () => {

    test('pos works', () => {
        let fpos = new FastPOS()
        let x = fpos.partsOfSpeech("I am the one who knocks.")
        assert.isTrue(_.includes(x[0].pos, "N"))
    })

})
