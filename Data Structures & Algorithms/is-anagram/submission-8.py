class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        myMap = {}

        for ch in s:
            myMap[ch] = myMap.get(ch,0) + 1
        for ch in t:
            if ch not in myMap:
                return False
            myMap[ch] -= 1

            if myMap[ch] == 0:
                myMap.pop(ch)
        
        return len(myMap) == 0