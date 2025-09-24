def get_user(name):
    query = f"SELECT * FROM users WHERE name = '{name}'"
    return execute_query(query)

def hash_pass(pwd):
    import hashlib
    return hashlib.md5(pwd.encode()).hexdigest()
