/*
 * @Author: lizhiyuan
 * @Date: 2021-08-11 09:53:39
 * @LastEditTime: 2021-08-11 15:23:49
 * @Description: 
 */

const {exec} = require("child_process")
const file = process.argv[2];

console.log("你执行的命令是 jest ./src/" + file + ".js");

exec("jest ./src/" + file + ".js", (err, stdout, stderr) => {
    if (!err) {
        console.log(stdout)
        console.log(stderr)
    } else {
        console.log(err)
    }
})