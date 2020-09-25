

public class Solution{
    public static int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        } else {
            int lheight = maxDepth(root.left);
            int rheight = maxDepth(root.right);

            if (lheight > rheight) {
                return lheight + 1;
            } else return rheight + 1;
        }
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.left.left = new TreeNode(5);
        root.left.right = new TreeNode(6);

        System.out.println(maxDepth(root));
    }
}