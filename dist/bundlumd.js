!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("hello.ts"),require("lodash")):"function"==typeof define&&define.amd?define(["hello.ts","lodash"],o):(e="undefined"!=typeof globalThis?globalThis:e||self).rollup=o(e.hello_ts,e._)}(this,(function(e,o){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=l(o);return function(){var o=t.default.concat([1,2,3],4,[5]);console.log("Demo",e.Demo),console.log("getName",e.getName()),console.log("foo","hello world!"),console.log("arr",o),console.log("version 0.0.0")}}));