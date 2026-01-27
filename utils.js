function runCode(code) {
    return eval(code);
}

function parse(json) {
    return JSON.parse(json).data;
}

// Add XSS vulnerability
function displayUserContent(content) {
    document.getElementById('output').innerHTML = content; // XSS risk
}

// Hardcoded credentials
const API_KEY = "sk-1234567890abcdef";
const PASSWORD = "admin123";

// Infinite loop risk
function processItems(items) {
    let i = 0;
    while (i < items.length) {
        console.log(items[i]);
        // Missing i++ - infinite loop
    }
}
