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
    function traverse(node, chars) {
        if (chars.length <= 0) {
            if (node.isEnd) return true
        }

        let nextChar = chars[0]

        if (nextChar === '.') {
            for (const char in node) {
                if (char === 'isEnd') continue
                if (traverse(node[char], chars.slice(1))) {
                    return true
                }
            }
            return false
        }
        
        return (node[nextChar]) ? traverse(node[nextChar], chars.slice(1)) : false
    }

    return traverse(this.trie, word.split(''))
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */