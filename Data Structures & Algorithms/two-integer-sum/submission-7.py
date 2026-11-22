class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        myMap = {}
        for i , val in enumerate(nums):
            if (target-val) in myMap:
                return [myMap[target-val] , i]
            myMap[val] = i