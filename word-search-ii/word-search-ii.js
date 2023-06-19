/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class Trie {
  constructor(words) {
    this.root = {}
    this.isWord = false

    for (const word of words) {
      this.addWord(word)
    }
  }

  addWord(word) {
    let pointer = this.root

    for (const char of word) {
      if (!pointer[char]) {
        pointer[char] = {}
      }

      pointer = pointer[char]
    }

    pointer.isWord = true
  }
}


var findWords = function(board, words) {
  const dict = new Trie(words)
  const results = new Set()
  const visited = new Set()

  function lookupDict([r, c], pointer = dict.root, sub = '') {
    const key = JSON.stringify([r, c])

    if (board?.[r]?.[c] == null || visited.has(key)) return
    if (pointer[board[r][c]] == null) return

    // update
    visited.add(key)
    sub += board[r][c]
    pointer = pointer[board[r][c]]

    if (pointer.isWord) results.add(sub)

    lookupDict([r + 1, c], pointer, sub)
    lookupDict([r - 1, c], pointer, sub)
    lookupDict([r, c + 1], pointer, sub)
    lookupDict([r, c - 1], pointer, sub)

    visited.delete(key)
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      lookupDict([r, c])
    }
  }

  return Array.from(results)
};