#toggle the binary array using 0 and 1 using segment tree
import math

x= math.ceil(math.log(6,2))
size = 2* int(math.pow(2,x))-1
segmentTree = [None] * size
arr = [2,5,9,3,6,1]
def generateST(qs,qe, currPos):
    print(currPos)
    if(qs == qe):
        segmentTree[currPos] = arr[qs]
        return arr[qs]

    mid = qs + (qe-qs)//2
    
    segmentTree[currPos] = sum(generateST( qs, mid, 2*currPos +1), generateST(mid+1,qe,2*currPos+2))
    return segmentTree[currPos]

def sum(a,b):
    return a+b

def updateRange():
    print
    
n=6
generateST(0,5,0)
print(segmentTree)

