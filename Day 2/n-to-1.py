class Solution:
    def printNos(self, n):
        if n>0:
            print(n)
            self.printNos(n-1)

variable = Solution()
variable.printNos(64)
