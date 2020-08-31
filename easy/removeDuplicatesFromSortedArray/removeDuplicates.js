const removeDuplicates = function (nums) {
    const size = nums.length;
    if (size == 0) {                    // base case
        return 0;
    }
    let slowP = 0;                                  // 设置满指针
    for (let fastP = 0; fastP < size; fastP++) {    // 设置快指针
        if (nums[fastP] !== nums[slowP]) {          // 如果快指针和慢指针指的数不一样，慢指针加一个
            slowP++;
            nums[slowP] = nums[fastP];              // 满指针的数变成快指针的数 
        }
    }
    return slowP + 1;                               // 最后加一个index的1
}

const length = removeDuplicates([0, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5]);
console.log(length);