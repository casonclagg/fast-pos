import FastPOS from '../src/fast-pos'
import _ from 'lodash'
import {
    assert
} from 'chai'

suite('FastPOS:', () => {

    test('rhymez loads', () => {
        let fpos = new FastPOS()
        let x = fpos.partsOfSpeech("I am the one who knocks.")
        assert.isTrue(_.includes(x[0].pos, "N"))
    })

})
