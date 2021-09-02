/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    //F(i,n)为长度为n根为i的二叉树个数
    //result = G(n)
    //F(i,n) = G(i-1)*G(n-i)
    let g = new Array(n+1).fill(0)
    g[0] = 1
    g[1] = 1
    for(let i=2;i<=n;i++) {
      for(let j=1;j<=i;j++) {
        g[i] += g[j-1] * g[i-j]
      }
    }
    return g[n]
};
// @lc code=end

