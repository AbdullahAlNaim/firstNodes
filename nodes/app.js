//const langs = require('langs');

//const franc = require('franc');
import { franc } from 'franc';
import langs from 'langs';

const args = process.argv.slice(2);

// for (let arg of args) {
//     console.log(arg);
// }
console.log(args)
const somelang = franc(args.toString())
console.log(somelang);
console.log(langs.where("2", somelang)['name']);

