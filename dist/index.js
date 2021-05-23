"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thesaurus = require("thesaurus");
const dictionaryEN = require("./dictionaries/en");
const dictionaryDE = require("./dictionaries/de");
class ThesaurusTS {
    constructor(language = 'en') {
        // fill up with dictionary
        this.words = {};
        // for filtering
        this.dictionarySeperator = ',';
        let dictionary;
        let firstWordRegex = /^([\w-]+),/;
        if (language === 'en') {
            dictionary = dictionaryEN.words;
        }
        else if (language === 'de') {
            dictionary = dictionaryDE.words;
            // change because list uses ; not , separator;
            this.dictionarySeperator = ';';
            firstWordRegex = /^([\w-]+);/;
        }
        else {
            throw Error('Invalid language');
        }
        dictionary.split('\n')
            .forEach((line) => {
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
        result = result.split(this.dictionarySeperator);
        const found = thesaurus.find(term);
        result = [...new Set([...result, ...found])];
        return result;
    }
    reverseSearch(term) {
        if (!term) {
            return [];
        }
        return Object.keys(this.words).filter((w) => {
            return this.words[w].match(new RegExp(this.dictionarySeperator + term + this.dictionarySeperator, 'i'));
        });
    }
}
exports.ThesaurusTS = ThesaurusTS;
