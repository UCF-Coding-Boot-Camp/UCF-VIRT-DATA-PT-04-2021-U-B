# Create a variable called 'name' that holds a string
full_name = "Homer Simpson"

# Create a variable called 'country' that holds a string
country = "United States"

# Create a variable called 'age' that holds an integer
age = 25

# Create a variable called 'hourly_wage' that holds an integer
hourly_wage = 15

# Calculate the daily wage for the user
daily_wage = hourly_wage * 8

# Create a variable that holds a number as a string
weekly_hours = "40"

# Create a variable called 'weekly_wage' that converts a string into an integer
weekly_wage = hourly_wage * int(weekly_hours)

# Create a variable called 'satisfied' that holds a boolean
satisfied = True

# Print out "Hello <name>!"
print(f"Hello, {name}!")

# Print out what country the user entered
print(f"You live in {country}.")

# Print out the user's age
print(f"You are {str(age)} years old.")

# Print out the daily wage that was calculated
print(f"You make {str(daily_wage)} dollars per day.")

# Print out the weekly wage
print(f"You make {weekly_wage} dollars per week.")

# Using an IF statement to print out whether the users were satisfied
if satisfied:
    print("You are satisfied with your pay.")
else:
    print("You are not satisfied with your pay.")
