//语法
const a = function (params = 1) {
  return 1 + params;
};
const b = [1, 2];
const c = [...b, 3, 4, 5];
class Demo {}
new Demo();
//API
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (x) {
  return x % 2 === 0;
});
const y = Object.assign({}, {
  name: 1
});