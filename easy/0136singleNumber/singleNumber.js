const singleNumber = nums => {
    let ret = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        ret = ret ^ element;
    }
    return ret;
}
//异或

console.log(singleNumber([2, 2, 1]));