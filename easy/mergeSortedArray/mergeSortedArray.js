const merge = function(nums1, m, nums2, n) {
    // 设置一个指针，初始化指向nums1的末尾，即 m + n - 1
    let current = m + n - 1;

    while (current >= 0) {
        if (n === 0) {return;}

        if (m < 1) {
            nums1[current--] = nums2[--n];
            continue;
        }

        if (n < 1) {
            nums1[current--] = nums1[--m];
            continue;
        }

        // 取大的填充nums1的末尾
        // 然后更新m或者n
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[current--] = nums1[--m];
        } else {
            nums1[current--] = nums2[--n];
        }
    }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;

const mergedArray = merge(nums1, m, nums2, n);
console.log(mergedArray);