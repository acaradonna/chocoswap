# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |
| testnet | :white_check_mark: |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: security@chocoswap.com

Please include the following information in your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

We prefer all communications to be in English.

## Security Best Practices

When contributing to Chocoswap:

- Follow the Checks-Effects-Interactions pattern
- Use reentrancy guards for external calls
- Validate all inputs and state changes
- Use OpenZeppelin contracts when possible
- Add comprehensive tests for edge cases
- Document security assumptions and invariants

## Vulnerability Response

We will endeavor to respond quickly to security reports:

- Acknowledge receipt within 24 hours
- Provide a detailed response within 72 hours indicating our evaluation
- Work with the reporter throughout the investigation
- Credit security researchers in our advisories (if desired)

## Bug Bounty

We do not currently have a formal bug bounty program, but we appreciate security research and may provide recognition for significant findings.