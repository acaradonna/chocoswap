# GitHub Issues and Milestones Setup

This directory contains scripts to set up the GitHub issues and milestones for the Chocoswap project based on the ISSUES.md and MILESTONES.md files.

## Prerequisites

1. Install Node.js dependencies:
   ```bash
   npm install @octokit/rest
   ```

2. Create a GitHub personal access token with the following permissions:
   - `repo` (Full control of private repositories)
   - `public_repo` (Access public repositories)

3. Set the environment variable:
   ```bash
   export GITHUB_TOKEN=your_github_token_here
   ```

## Usage

Run the script to create all milestones and issues:

```bash
node scripts/create-github-issues.js
```

## What it creates

### Milestones (7 total):
- M0: Repo Hardening and CI
- M1: AMM Integration  
- M2: Staking Pools
- M3: Frontend MVP
- M4: Testnet Deployment and QA
- M5: Security Review and Hardening
- M6: Beta Launch and Feedback

### Issues (27 total):
All issues are organized by milestone and include:
- Detailed descriptions
- Acceptance criteria as checklists
- Appropriate labels for categorization
- Links to the corresponding milestone

### Labels:
The script also creates a comprehensive labeling system including:
- Type labels (meta, devx, ci, security, contracts, frontend, test, devops, ops, qa, perf, docs, process)
- Area labels (contracts, frontend, amm, fees, staking, deploy, analytics)
- Priority labels (low)

## Manual Alternative

If you prefer to create these manually, refer to the ISSUES.md and MILESTONES.md files in the repository root for the complete specifications.