class TreeNode {
    constructor(char) {
        this.val = char
        this.children = []
        this.isMatch = false
    }
}

var Trie = function() {
    this.root = new TreeNode(null)
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let ptr = this.root

    for (let char of word) {
        let next = ptr.children[char]

        if (!next) {
            ptr.children[char] = new TreeNode(char)
        }
        
        ptr = ptr.children[char]
    }

    ptr.isMatch = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let ptr = this.root

    for (let char of word) {
        ptr = ptr?.children?.[char]
        if (ptr == null) return false
    }

    return ptr.isMatch
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let ptr = this.root

    // go to node
    for (let char of prefix) {
        ptr = ptr?.children?.[char]
        if (ptr == null) false
    }

    return ptr?.val != null
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */