"use strict";var o=require("hello.ts");function e(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var l=e(require("lodash"));module.exports=function(){var e=l.default.concat([1,2,3],4,[5]);console.log("Demo",o.Demo),console.log("getName",o.getName()),console.log("foo","hello world!"),console.log("arr",e),console.log("version 0.0.0")};