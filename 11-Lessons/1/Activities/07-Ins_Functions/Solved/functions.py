# Simple print statement
def print_hello():
    print("Hello there!")


# Takes two numbers and adds them
def addition(a, b):
    return a + b


# Takes in a list and loops through
def list_loop(user_list):
    for i in user_list:
        print(i)


# Uses a previous declared function
def double_addition(c, d):
    total = addition(c, d) * 2

    return total


# Call the functions below

# Run print function
print_hello()

# Print result of addition function
print(addition(44, 50))

# Create a list and pass through the loop function
friends = ["Sarah", "Greg", "Cindy", "Jeff"]
list_loop(friends)

# Print result of double_addition function
print(double_addition(3, 4))

# Python built in function for rounding
long_decimal = 112.34534454
rounded_decimal = round(long_decimal)
print(rounded_decimal)
