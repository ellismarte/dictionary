const adjectives = require('./adjectives.json');
const adverbs = require('./adverbs.json');
const nouns = require('./nouns.json');
const verbs = require('./verbs.json');

const throwMustBeString = () => {
  throw new Error('argument must be an array of strings');
};

module.exports = (s) => {
  let sentences;
  if (typeof s === 'string') {
    sentences = [s];
  } else if (s.length > 0){
    sentences = s.map(sentence => {
      if (typeof sentence === 'string') return sentence;
      throwMustBeString();
    });
  }

  return sentences.map(sentence => {
    const results = {};
    sentence.split(" ").forEach((word, i) => {
      const types = [];
      if (adjectives[word]) {
        types.push('adjective');
      }
      if (adverbs[word]) {
        types.push('adverb');
      }
      if (verbs[word]) {
        types.push('verb');
      }
      if (nouns[word]) {
        types.push('noun');
      }
      results[i] = { word, types };
    })
    return results;
  })
}