/*
 * @Author: lizhiyuan
 * @Date: 2021-09-15 18:07:47
 * @LastEditTime: 2021-09-16 16:39:49
 * @Description:
 * 
 * 给你一个IP4的地址，请转成十进制整数 （2021-03 腾讯-PCG-前端）
   手撕算法: ip地址转整数 （2021-03 腾讯-TEG-后端）

   将ip地址转换成10进制整数。

   例如，ip地址为10.0.3.193，把每段拆分成一个二进制形式组合起来为00001010 00000000 00000011 11000001，
   然后把这个二进制数转变成十进制整数就是167773121。
 */

function ip2num(ip) {
  let result = 0;
  const ips = ip.split(".");
  result += parseInt(ips[0]) << 24;
  result += parseInt(ips[1]) << 16;
  result += parseInt(ips[2]) << 8;
  result += parseInt(ips[3]) << 0;
  result = result >>> 0;
  return result;
}

function num2ip(num) {
  const ip1 = (num << 0) >>> 24;
  const ip2 = (num << 8) >>> 24;
  const ip3 = (num << 16) >>> 24;
  const ip4 = (num << 24) >>> 24;
  return `${ip1}.${ip2}.${ip3}.${ip4}`;
}
console.log(ip2num("10.0.3.193"));
console.log(num2ip(167773121));
