"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thesaurus = require("thesaurus");
// as js files to not waste even more space on type declarations here
const dictionaryEN = require("./dictionaries/en");
const dictionaryDE = require("./dictionaries/de");
const firstWordRegex = /^([\w-]+),/;
class ThesaurusTS {
    constructor(language = 'en') {
        this.words = {};
        let dictionary;
        if (language === 'en') {
            dictionary = dictionaryEN.words;
        }
        else if (language === 'de') {
            dictionary = dictionaryDE.words;
        }
        else {
            throw Error('Invalid language');
        }
        console.log(dictionary);
        dictionary.split('\n')
            .forEach(function (line) {
            if (line.match(firstWordRegex)) {
                this.words[line.match(firstWordRegex)[1]] = line.replace(firstWordRegex, '');
            }
        });
    }
    search(term) {
        if (!term) {
            return [];
        }
        let result = this.words[term];
        if (!result) {
            result = this.words[term.toLowerCase()];
        }
        if (!result) {
            return [];
        }
        result = result.split(',');
        const found = thesaurus.find(term);
        result = [...new Set([...result, ...found])];
        return result;
    }
    reverseSearch(term) {
        if (!term) {
            return [];
        }
        return Object.keys(this.words).filter(function (w) {
            return this.words[w].match(new RegExp(',' + term + ',', 'i'));
        });
    }
}
exports.ThesaurusTS = ThesaurusTS;
