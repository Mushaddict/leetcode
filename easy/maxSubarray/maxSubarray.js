// dynamic programming
const maxSub = function(list) {
    const length = list.length;
    let max = list[0];
    for (let i = 1; i < length; i++) {              // 这里不能从0开始
        list[i] = Math.max(0, list[i - 1]) + list[i];
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}
const list = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const sub = maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(sub);