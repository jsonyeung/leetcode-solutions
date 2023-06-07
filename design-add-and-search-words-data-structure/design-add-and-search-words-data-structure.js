var WordDictionary = function() {
    this.trie = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if (word.length <= 0) return

    let pointer = this.trie
    for (const char of word) {
        pointer[char] = pointer[char] ?? { isEnd: false }
        pointer = pointer[char]
    }

    pointer.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function traverse(node, i = 0) {
        // if character is '.'
        if (word[i] === '.') {
            for (const prop in node) {
                if (prop === 'isEnd') continue

                if (node[prop].isEnd && i === (word.length - 1)) {
                    return true
                }

                if (traverse(node[prop], i + 1)) {
                    return true
                }
            }

            return false
        }

        // if character is any other character
        let next = word[i]

        if (node[next] == null || i >= word.length) {
            return false
        }

        if (node[next].isEnd && i === (word.length - 1)) {
            return true
        }

        return traverse(node[next], i + 1)
    }

    return traverse(this.trie)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */