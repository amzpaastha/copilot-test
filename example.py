def calculate_sum(a, b):
    # This function adds two numbers
    result = a + b
    return result

def divide_numbers(x, y):
    # Potential issue: no zero division check
    return x / y

def find_user(users_list, username):
    # Potential issue: inefficient search
    for i in range(len(users_list)):
        if users_list[i] == username:
            return i
    return None

# Test the functions
if __name__ == "__main__":
    print(calculate_sum(5, 3))
    print(divide_numbers(10, 2))
    # Potential issue: hardcoded values
    api_key = "sk-1234567890abcdef"
    print(f"Using API key: {api_key}")
