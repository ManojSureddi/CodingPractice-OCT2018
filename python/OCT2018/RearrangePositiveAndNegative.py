def reArrangeGeneralSolution(arr):
    neg=[]
    pos=[]
    final=[]
    for i in arr:
        if(i>0):
            pos.append(i)
        else:
            neg.append(i)
    
    for p,n in zip(pos,neg):
        final.append(p)
        final.append(n)
    diff = len(pos)-len(neg);
    if diff>0:
        for i in range(len(pos)-diff, len(pos)):
            final.append(i)
    else:
        for i in range(len(neg)+diff, len(neg)):
            final.append(i)
    print(final)


def reArrangeOptimized(arr):
    j=-1
    for i in range(len(arr)):
        if(arr[i]<0):
            j=j+1
            arr[j], arr[i] = arr[i],arr[j]
    print(arr,j)
    
    for i in range(0,j+1,2):
        arr[i], arr[j+i+1] = arr[j+i+1],arr[i]
    print(arr)

reArrangeOptimized([-1, 2, -3, 4, 5, 6, -7, 8, 9])