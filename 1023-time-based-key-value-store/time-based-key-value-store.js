
var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, [])
    }

    // assumes timestamp can't go backwards in time
    this.map.get(key).push([timestamp, value])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return ""

    let stamps = this.map.get(key)
    let left = 0, right = (stamps.length - 1)

    // console.log(stamps, 'to get: ', timestamp)
    
    let least = Infinity

    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left

        // console.log(left, right, stamps[mid])

        if (stamps[mid][0] === timestamp) {
            return stamps[mid][1]

        } else if (stamps[mid][0] < timestamp) {
            least = stamps[mid][1]
            left = mid + 1

        } else {
            right = mid - 1
        }
    }

    return (least === Infinity) ? "" : least
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

 /*

for 5

1, 3, 4, 9
l  m     r
least = 3

1, 3, 4, 9
      l  r
      m
least = 4

1  3  4  9
         l
         r
         m
least = 4

return 4

for 1

2, 3, 4
l  m  r
least = Infinity

2, 3, 4
l
r
m
least = Infinity

return ""


let left = 0
let right = array.length - 1
let least = Infinity

while (left <= right) {
    let mid = Math.floor((right - left) / 2)

    if (array[mid] === target) {
        return array[mid]
    } else if (array[mid] < target) {
        least = array[mid]
        right = mid - 1
    } else {
        left = mid + 1
    }
}

return least


 */