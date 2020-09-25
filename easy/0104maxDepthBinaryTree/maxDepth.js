function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const maxDepth = function (root) {
    if(root == null) {
        return 0;
    } else {
        var lheight = maxDepth(root.left);
        var rheight = maxDepth(root.right);

        if (lheight > rheight) {
            return lheight + 1;
        } else {
            return rheight + 1;
        }
    }
}
