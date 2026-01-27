import time

# Potential issue: Inefficient algorithm
def find_duplicates(arr):
    duplicates = []
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] == arr[j] and arr[i] not in duplicates:
                duplicates.append(arr[i])
    return duplicates

# Potential issue: Memory leak risk
global_cache = []
def process_data(data):
    global global_cache
    global_cache.append(data)  # Never cleared
    result = data * 2
    time.sleep(1)  # Unnecessary delay
    return result

# Potential issue: Open file without closing
def read_large_file(filepath):
    f = open(filepath, 'r')
    content = f.read()
    # Missing f.close()
    return content

# Potential issue: Broad exception handling
def risky_operation(x, y):
    try:
        result = x / y
        return result
    except:  # Too broad
        return None
