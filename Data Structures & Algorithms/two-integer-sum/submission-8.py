class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        A = []
        for i , num in enumerate(nums):
            A.append([num,i])
        A.sort()
        low , high = 0 , len(nums) - 1
        while low < high:
            cur = A[low][0] + A[high][0]
            if cur == target:
                return [
                    min(A[low][1] , A[high][1]),
                    max(A[low][1] , A[high][1])
                ]
            elif cur < target:
                low += 1
            else:
                high -= 1