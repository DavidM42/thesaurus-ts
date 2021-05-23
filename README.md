# thesaurusJS

This project code is based on [moby-thesaurus.org](http://moby-thesaurus.org) which is a free and
open-source website designed to facilitate meanderings through the [Moby
Thesaurus](http://en.wikipedia.org/wiki/Moby_Project#Thesaurus), the largest
thesaurus in the English language. As of version 1.0, this package also includes
synonym data from the [Open Office thesaurus](http://goo.gl/UGBfHI).

This modified git repository is:

A tiny and simple JavaScript interface for querying Moby Thesaurus and Open Office Thesaurus data.
It currently supports the languages english and german but more can be added easily by using the [Openthesaurus Datasets](https://www.openthesaurus.de/about/download).

## Node.js Usage

Install moby in your project directory. The `--save` flags adds it to the list of
`dependencies` in your package.json file.

```sh
cd my-project
npm install git+https://github.com/DavidM42/moby.git --save
```

Then in your javascript code:

```js
var moby = require('moby')

console.log(moby.search('mad'))
console.log(moby.search('smaragdine'))
console.log(moby.reverseSearch('smaragdine'))
```

## License

Same license as the one on the [moby project homepage](http://icon.shef.ac.uk/Moby/):

The Moby lexicon project is complete and has been placed into the public domain.
Use, sell, rework, excerpt and use in any way on any platform. Placing this
material on internal or public servers is also encouraged. The compiler is not
aware of any export restrictions so freely distribute world-wide.

See also the Open Office license included in the
[thesaurus](https://github.com/daizoru/node-thesaurus/blob/5cadf8d26ea879a6009702524970ce706f04bb99/LICENSE.txt)
package and the word dictionaries.  

## TODO

* Make way smaller
  * By finding a way to include the dictionaries as non JS file in **browser** and in NodeJS
  * Minification maybe?

