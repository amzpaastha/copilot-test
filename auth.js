const crypto = require('crypto');

// Potential issue: Weak encryption algorithm
function encryptPassword(password) {
    const cipher = crypto.createCipher('aes-128-ecb', 'mysecretkey');
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Potential issue: SQL injection vulnerability
function getUserData(userId) {
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    return database.execute(query);
}

// Potential issue: Exposed sensitive data
const config = {
    apiKey: "sk-prod-1234567890abcdef",
    dbPassword: "admin123",
    jwtSecret: "my-super-secret-key"
};

// Potential issue: No input validation
function processUserInput(input) {
    eval(input);  // Dangerous!
}

// Potential issue: Path traversal vulnerability
const fs = require('fs');
function readFile(filename) {
    return fs.readFileSync(`./uploads/${filename}`, 'utf8');
}

module.exports = { encryptPassword, getUserData, config };
