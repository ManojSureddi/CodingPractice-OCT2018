#https://www.geeksforgeeks.org/maximum-product-subarray/

def MaximumProductSubArray(arr):
    n= len(arr)
    i=0
    max=-float("inf")
    product=1
    while i<n:
        product= product * abs(arr[i])
        if(product >= max):
            max=product
        else:
            product=1
        i=i+1
    print(max, i)
        

MaximumProductSubArray([-1, -3, -10, 0, 60])