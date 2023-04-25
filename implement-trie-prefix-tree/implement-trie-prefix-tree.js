class TrieNode {
    constructor(char) {
        this.val = char
        this.children = {}
        this.isMatch = false
    }

    getNode(char) {
        return this.children?.[char]
    }
}

var Trie = function() {
    this.root = new TrieNode(null)
};

Trie.prototype._searchPrefix = function(prefix) {
    let node = this.root

    for (let char of prefix) {
        node = node.getNode(char)
        if (!node) return null
    }

    return node
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root

    for (let char of word) {
        if (!node.children[char]) {
            node.children[char] = new TrieNode(char)
        }

        node = node.children[char]
    }

    if (node) node.isMatch = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this._searchPrefix(word)
    console.log(node)
    return !!(node && node.isMatch)
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return !!this._searchPrefix(prefix)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */