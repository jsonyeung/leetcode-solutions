/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };


 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    for (let i = 0; i < 10; i++) {
        const randomIdx = getRandomIntInclusive(0, wordlist.length - 1);
        const guessWord = wordlist[randomIdx];
        const matches = master.guess(guessWord);
        const candidates = [];
        for (const word of wordlist) {
            if (matches === getMatchesBetween(guessWord, word)) {
                candidates.push(word);
            }
        }
        wordlist = candidates;
    }
};

function getMatchesBetween(word1, word2) {
    let matches = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) {
            matches++;
        }
    }
    return matches;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
