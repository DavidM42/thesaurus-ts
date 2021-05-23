const assert = require('assert')
const thesaurus = require('../dist/index');
var thes;

describe('ThesaurusTS english',() => {
  before(() => {
    console.log(thes)
    thes = new thesaurus.ThesaurusTS();
  });

  describe('.search(word)', function () {
    it('returns an array of search results', function () {
      const result = thes.search('dog')
      assert(Array.isArray(result))
      assert(result.length > 0)
    })

    it('is case insensitive', function () {
      const result = thes.search('DOG')
      assert(Array.isArray(result))
      assert(result.length > 0)
    })

    it('includes word strings in the array', function () {
      const result = thes.search('dog')
      assert(result.indexOf('hound') > -1)
      assert(result.indexOf('pup') > -1)
      assert(result.indexOf('paw') > -1)
    })

    it('returns an empty array if no results are found', function () {
      const result = thes.search('doggg')
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when given an empty string', function () {
      const result = thes.search('')
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when search term is null or omitted', function () {
      const result = thes.search()
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('removes the search term itself from the results', function () {
      const result = thes.search('dog')
      assert(result.indexOf('dog') === -1)
    })
  })

  describe('.reverseSearch(word)', function () {
    it('returns an array of search results', function () {
      const result = thes.reverseSearch('smaragdine')
      assert(Array.isArray(result))
      assert(result.length > 0)
    })

    it('is case insensitive', function () {
      const result = thes.reverseSearch('SMARAGDINE')
      assert(Array.isArray(result))
      assert.equal(result.length, thes.reverseSearch('smaragdine').length)
    })

    it('includes words that contain the search word as a synomym', function () {
      const result = thes.reverseSearch('smaragdine')
      assert(result.indexOf('grassy') > -1)
      assert(result.indexOf('olive') > -1)
      assert(result.indexOf('verdant') > -1)
    })

    it('returns an empty array if no results are found', function () {
      const result = thes.reverseSearch('xkoiusdfdslkmm')
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when given an empty string', function () {
      const result = thes.reverseSearch('')
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when search term is null or omitted', function () {
      const result = thes.reverseSearch()
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })
  })
})
