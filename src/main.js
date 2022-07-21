import foo from './foo.js';
import { version } from '../package.json';
import { Demo, getName } from 'hello.ts'
import _ from 'lodash'

export default function () {
  const arr = _.concat([1,2,3], 4, [5])
  console.log('Demo', Demo);
  console.log('getName', getName());
  console.log('foo', foo);
  console.log('arr', arr);
  console.log('version ' + version);
}