def get_user(name):
    query = f"SELECT * FROM users WHERE name = '{name}'"
    return execute_query(query)

def hash_pass(pwd):
    import hashlib
    return hashlib.md5(pwd.encode()).hexdigest()

# Add more security issues
def execute_sql(user_input):
    import sqlite3
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    # Direct SQL injection vulnerability
    cursor.execute("SELECT * FROM users WHERE id = " + user_input)
    return cursor.fetchall()

def store_password(password):
    # Storing password in plain text
    with open('passwords.txt', 'a') as f:
        f.write(password + '\n')
        
def unsafe_eval(code):
    # Another eval vulnerability
    return eval(code)
