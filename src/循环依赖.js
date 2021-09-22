/*
 * @Author: lizhiyuan
 * @Date: 2021-09-14 18:46:10
 * @LastEditTime: 2021-09-14 19:41:47
 * @Description:

[['A', 'B'], ['B', 'C'], ['C', 'D'], ['B', 'D']] => false
[['A', 'B'], ['B', 'C'], ['C', 'A']] => true
[['A', 'B'], ['B', 'A'], ['C', 'D'], ['D', 'C']] => true
[['A', 'B'], ['C', 'D'], ['B', 'A'], ['D', 'C']] => true
[['A', 'B'], ['C', 'A'], ['B', 'D'], ['B', 'C']] => true
[['A', 'A']] => true
 */

function isCycle(nums) {
  const inDegree = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  };
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i][0];
    let b = nums[i][1];
    //入度加一
    inDegree[a]++;
    if (map[b]) {
      map[b].push(a);
    } else {
      map[b] = [a];
    }
  }
  const queue = [];
  Object.keys(inDegree).forEach((key) => {
    if (inDegree[key] === 0) {
      delete inDegree[key];
      queue.push(key);
    }
  });
  if (queue.length === 0) {
    //没有入度为0
    return true;
  }
  while (queue.length) {
    const selected = queue.shift();
    const toEnqueue = map[selected];
    if (toEnqueue && toEnqueue.length > 0) {
      for (let i = 0; i < toEnqueue.length; i++) {
        inDegree[toEnqueue[i]]--;
        if (inDegree[toEnqueue[i]] === 0) {
          queue.push(toEnqueue[i]);
          delete inDegree[toEnqueue[i]];
        }
      }
    }
  }
  return Object.keys(inDegree).length > 0;
}

console.log(isCycle([["A", "A"]]));
