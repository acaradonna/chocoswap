# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Chocoswap seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: [SECURITY_EMAIL_PLACEHOLDER]

Include the following information:
- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### What to Expect

- We will acknowledge your email within 48 hours
- We will investigate and validate the issue
- We will provide an estimated timeline for a fix
- We will notify you when the issue is fixed
- We may ask for additional information or guidance

### Disclosure Policy

- Give us reasonable time to investigate and mitigate an issue before public exposure
- Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service
- Only interact with accounts you own or with explicit permission of the account holder

### Security Measures

Our codebase includes several security measures:

- **Automated Security Scanning**: Slither static analysis on all PRs
- **Dependency Scanning**: Regular checks for vulnerable dependencies  
- **Code Review**: All changes require review before merging
- **Test Coverage**: Comprehensive test suite with coverage reporting
- **Access Controls**: Proper role-based access in smart contracts

## Bug Bounty

We currently do not have a formal bug bounty program, but we appreciate responsible disclosure and will acknowledge security researchers who help improve our security.