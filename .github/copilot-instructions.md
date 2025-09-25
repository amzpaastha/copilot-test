# Copilot Review Instructions

## Security Testing Context
- This repository includes security testing code for bug bounty research
- Test files in `/security-tests/` directory are intentional and documented
- Still flag any credential exposure or data exfiltration in production code

## Review Focus
- Prioritize production code security over test files
- Check for hardcoded credentials in all non-test directories
- Validate input sanitization in API endpoints
