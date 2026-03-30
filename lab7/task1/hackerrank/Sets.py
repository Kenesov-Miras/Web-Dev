m = int(input())
a = set(map(int, input().split()))

n = int(input())
b = set(map(int, input().split()))

result = a.symmetric_difference(b)

for x in sorted(result):
    print(x)