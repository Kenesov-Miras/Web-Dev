from models import Animal, Dog, Cat

dog = Dog("Rex", 3, "brown", "Shepherd")
cat = Cat("Mimi", 2, "white", 9)

animals = [dog, cat]

for a in animals:
    print(a)
    print(a.info())
    print(a.speak())