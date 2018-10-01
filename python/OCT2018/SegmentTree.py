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
    
    segmentTree[currPos] = min(generateST( qs, mid, 2*currPos +1), generateST(mid+1,qe,2*currPos+2))
    return segmentTree[currPos]

def min(a,b):
    return a if a<b else b

n=6
generateST(0,5,0)
print(segmentTree)
choice=0

def query(qs,qe):
    if(qs < 0 and qe >=6 ):
        return "out of range" 
    return querySt(0,6,qs,qe,0)

def querySt(s,e,qs,qe, pos):
    if(qs<=s and qe>=e):
        return segmentTree[pos]
    elif(e<qs or s>qe):
        return float("inf")
    else: 
        mid = s + (e-s)//2
        return min(querySt(s,mid,qs,qe, 2*pos +1), querySt(mid+1, e,qs,qe,2*pos+2))

while(choice != 1):
    qs = int(input("enter qs"))
    qe = int(input("enter qe"))
    print(query(qs,qe))
    choice = input("0: continue \n 1:exit")

