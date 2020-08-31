class maxSubarrayDp {
    public static int maxSubArray(int[] nums) {
        int currMaxSum = nums[0];
        int maxSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
            maxSum = Math.max(currMaxSum, maxSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int list[] = new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.print(maxSubArray(list));
    }
}