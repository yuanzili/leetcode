/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.map = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   const value = this.map.get(key)
   if(typeof value === 'undefined') return -1
    this.map.delete(key)
    this.map.set(key,value)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.map.has(key)) {
    this.map.delete(key)
  }
  this.map.set(key,value)
  const keys = this.map.keys()
  while(this.map.size > this.capacity) {
    //当map存储超出限制
    this.map.delete(keys.next().value)
  }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

