/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function(s) {
//    return Math.min(Math.max(Math.pow(-2,31),parseInt(s)||0),Math.pow(2,31)-1)
// };
var myAtoi = function (s) {
  class Auto {
    constructor() {
      this.sign = 1;
      this.number = 0;
      this.state = "start";
      this.map = new Map([
        ["start", ["start", "signed", "number", "end"]],
        ["signed", ["end", "end", "number", "end"]],
        ["number", ["end", "end", "number", "end"]],
        ["end", ["end", "end", "end", "end"]],
      ]);
    }

    getCharIndex(char) {
      if (char === " ") {
        return 0;
      } else if (char === "-" || char === "+") {
        return 1;
      } else if (typeof Number(char) === "number" && !isNaN(char)) {
        return 2;
      } else {
        return 3;
      }
    }

    getChar(char) {
      this.state = this.map.get(this.state)[this.getCharIndex(char)];
      console.log(this.state);
      if (this.state === "number") {
        console.log("this.number", this.number);
        console.log("this.char", char);
        this.number = this.number * 10 + (char - 0);
        this.number =
          this.sign === 1
            ? Math.min(this.number, Math.pow(2, 31) - 1)
            : Math.min(this.number, -Math.pow(-2, 31));
        // this.number =
        //   this.sign === 1
        //     ? Math.min(Math.pow(2.31) - 1, this.number)
        //     : Math.min(this.number, Math.pow(-2, 31));
      } else if (this.state === "signed") {
        this.sign = char === "-" ? -1 : 1;
      }
    }
  }

  const auto = new Auto();
  // 遍历每个字符
  for (let char of s) {
    // 依次进行转换
    auto.getChar(char);
  }
  console.log(auto);
  return auto.sign * auto.number;
};
// @lc code=end
