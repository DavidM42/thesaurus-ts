import thesaurus = require('thesaurus');

import dictionaryEN = require('./dictionaries/en');
import dictionaryDE = require('./dictionaries/de');

export class ThesaurusTS {

  // fill up with dictionary
  private words = {};
  
  // for filtering
  private dictionarySeperator = ',';

  constructor(language: 'en' | 'de' = 'en') {
    let dictionary;
    let firstWordRegex = /^([\w-]+),/;
    if (language === 'en') {
      dictionary = dictionaryEN.words;
    } else if (language === 'de') {
      dictionary = dictionaryDE.words;

      // change because list uses ; not , separator;
      this.dictionarySeperator = ';';
      firstWordRegex = /^([\w-]+);/;
    } else {
      throw Error('Invalid language');
    }

    dictionary.split('\n')
      .forEach((line: string) => {
        if (line.match(firstWordRegex)) {
          this.words[line.match(firstWordRegex)[1]] = line.replace(firstWordRegex, '');
        }
    });
  }

  search(term: string) {
    if (!term) {
      return [];
    }
    let result = this.words[term];
    if (!result) {
      result = this.words[term.toLowerCase()]
    }
    if (!result) {
      return [];
    }
    result = result.split(this.dictionarySeperator);
    const found = thesaurus.find(term);
    result = [...new Set([...result, ...found])];
    return result;
  }

  reverseSearch(term: string) {
    if (!term) {
      return [];
    }
    return Object.keys(this.words).filter((w) => {
      return this.words[w].match(new RegExp(this.dictionarySeperator + term + this.dictionarySeperator, 'i'))
    });
  }
}

