function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const convert = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    const mid = nums.length >> 1;
    const root = new TreeNode(nums[mid]);

    root.left = convert(nums.slice(0, mid));
    root.right = convert(nums.slice(mid + 1));
    return root;
}

