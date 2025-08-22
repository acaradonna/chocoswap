# GitHub Repository Setup Guide

This guide helps repository administrators configure GitHub settings to enforce the CI/CD workflows.

## Branch Protection Rules

To enforce the workflows before merging to main, configure these branch protection rules:

### Required Settings

1. Go to **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. Enable the following options:

#### Restrict pushes that create files exceeding 100MB
- [x] **Require a pull request before merging**
  - [x] Require approvals: 1
  - [x] Dismiss stale reviews when new commits are pushed
  - [x] Require review from code owners

#### Status Checks
- [x] **Require status checks to pass before merging**
  - [x] Require branches to be up to date before merging
  - Required status checks:
    - `Lint, Build & Test (18.x)`
    - `Lint, Build & Test (20.x)` 
    - `Security Analysis`
    - `Dependency Review` (for PRs)

#### Additional Restrictions
- [x] **Restrict pushes that create or edit workflows**
- [x] **Include administrators** (recommended)
- [x] **Allow force pushes** → Everyone (disable)
- [x] **Allow deletions** (disable)

## Required Secrets (Optional)

For enhanced functionality, add these repository secrets:

### Optional Secrets
- `CODECOV_TOKEN` - For code coverage reporting to Codecov
- `GITHUB_TOKEN` - Usually available by default for workflows

## Webhook Configuration (Optional)

For integration with external services:

1. Go to **Settings** → **Webhooks** → **Add webhook**
2. Configure endpoints for:
   - Deployment notifications
   - Test result reporting
   - Security alert forwarding

## Team Access

Configure team permissions:

1. Go to **Settings** → **Manage access**
2. Set appropriate permissions:
   - **Maintainers**: Admin access
   - **Contributors**: Write access  
   - **Reviewers**: Triage access

## Security Settings

Enable additional security features:

1. Go to **Settings** → **Security & analysis**
2. Enable:
   - [x] **Dependency graph**
   - [x] **Dependabot alerts**
   - [x] **Dependabot security updates**
   - [x] **Code scanning** (CodeQL)
   - [x] **Secret scanning**

## Notifications

Configure notifications for the team:

1. Go to **Settings** → **Notifications**
2. Set up notifications for:
   - Failed workflow runs
   - Security alerts
   - Dependency vulnerabilities

---

**Note**: Some settings require admin access to the repository. Contact the repository owner if you need these configured.