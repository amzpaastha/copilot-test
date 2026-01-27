def get_user(name):
    query = f"SELECT * FROM users WHERE name = '{name}'"
    return execute_query(query)

def hash_pass(pwd):
    import hashlib
    return hashlib.sha1(pwd.encode()).hexdigest()

def validate_user(username):
    # No input validation - injection risk
    os.system(f"grep {username} /etc/passwd")
    return True
