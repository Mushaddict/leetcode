/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    const visited = {} //记录出现的数字，空间复杂度O(n)

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (visited[target - element] !== void 0) {
            return visited[target - element], index + 1;
        }
        visited[element] = index + 1;
    }
    return [];
}