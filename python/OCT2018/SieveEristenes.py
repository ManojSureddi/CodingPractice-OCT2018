import math
#most optimized prime number solution with O(n*sqrt(n)) complexity
def simplePrimeSolution(n):
    if(n>2):
        print(2)

    for i in range(3,n,2):
        count=0
        sqrt=int(math.ceil(math.sqrt(i)))
        for j in range(3,sqrt):
            if(i%j==0):
                count=count+1

        if(count==0):
            print(i)

#sieve-erestonese solution with O(n) timecomplexity and O(n) space complexity
def sieveEresthonese(n):
    for i in range(2,n):
        prime[i]= True      
    
    for i in range(2,n):
        if(prime[i]== True):
            for j in range(i*2, n, i):
                prime[j]=False
                
    for i in range(2,n):
        if(prime[i] == True):
            print(i)

n=input("Enter the range")
prime=[None]* (n+1)
sieveEresthonese(n)
