'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FastPOS = function () {
    function FastPOS(options) {
        _classCallCheck(this, FastPOS);

        var data = _fsExtra2.default.readFileSync(_path2.default.join(__dirname, '/data/posDict.txt'), 'Utf8');
        this.dictionary = JSON.parse(data);
    }

    _createClass(FastPOS, [{
        key: 'partsOfSpeech',
        value: function partsOfSpeech(line) {
            var _this = this;

            var results = [];
            var words = line.split(' ');
            words = words.filter(function (w) {
                return w != null && !w.match(/^\s+$/ig) && w.length > 0;
            }); // Filter out blanks

            words.forEach(function (word) {
                word = _this._noPunc(word);
                var data = {
                    word: word,
                    pos: []
                };
                data.pos = _this._getParts(word.toLowerCase(), _this.dictionary);
                results.push(data);
            });
            return results;
        }
    }, {
        key: '_getParts',
        value: function _getParts(word, library, noconvert) {
            var results = [];
            for (var part in library) {
                if (library[part].indexOf(word) !== -1) {
                    results.push(part);
                }
            }
            return results;
        }
    }, {
        key: '_noPunc',
        value: function _noPunc(word) {
            if (!word || word.length == 0) return null;
            word = word.toLowerCase();
            return word.replace(/\!|\.|\?|\"|\'|\,\s/ig, "");
        }
    }]);

    return FastPOS;
}();

exports.default = FastPOS;