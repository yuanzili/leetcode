/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  //记录入度
  const inDegree = new Array(numCourses).fill(0);
  const map = {};
  for (let i = 0; i < prerequisites.length; i++) {
    const a = prerequisites[i][0];
    const b = prerequisites[i][1];
    inDegree[a]++;
    if (map[b]) {
      map[b].push(a);
    } else {
      map[b] = [a];
    }
  }
  //把0入度放入容器
  console.log(inDegree);
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    // 所有入度为0的课入列
    if (inDegree[i] == 0) queue.push(i);
  }
  console.log(queue);
  let count = 0;
  while (queue.length) {
    const selected = queue.shift();
    count++;
    const toEnQueue = map[selected];
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count === numCourses;
};

// @lc code=end
