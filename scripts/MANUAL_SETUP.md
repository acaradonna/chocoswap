# Manual GitHub Setup Instructions

If you cannot run the automated script, follow these steps to manually create the milestones and issues.

## Step 1: Create Milestones

Go to your GitHub repository → Issues → Milestones → New milestone

Create these 7 milestones in order:

### M0: Repo Hardening and CI
**Description:** Establish repository standards, development workflow, and continuous integration infrastructure.

### M1: AMM Integration  
**Description:** Integrate Uniswap v2-style AMM with custom protocol fee collection mechanism.

### M2: Staking Pools
**Description:** Implement staking pools with CHOCO token emissions and reward distribution.

### M3: Frontend MVP
**Description:** Build a functional web interface for core DEX operations.

### M4: Testnet Deployment and QA
**Description:** Deploy complete system to testnet and conduct thorough quality assurance.

### M5: Security Review and Hardening
**Description:** Conduct security analysis and implement additional safeguards.

### M6: Beta Launch and Feedback
**Description:** Launch public beta on testnet and establish feedback collection mechanisms.

## Step 2: Create Labels

Go to your GitHub repository → Issues → Labels → New label

Create these labels:

**Type Labels:**
- `type:meta` (color: 5A6C7D) - Repository metadata and process
- `type:devx` (color: 7057FF) - Developer experience improvements  
- `type:ci` (color: 0052CC) - Continuous integration
- `type:security` (color: D73A49) - Security-related work
- `type:contracts` (color: F99157) - Smart contract development
- `type:frontend` (color: 1D76DB) - Frontend development
- `type:test` (color: FBCA04) - Testing and QA
- `type:devops` (color: 0E8A16) - DevOps and deployment
- `type:ops` (color: 006B75) - Operations and maintenance
- `type:qa` (color: E99695) - Quality assurance
- `type:perf` (color: C2E0C6) - Performance optimization
- `type:docs` (color: 1D76DB) - Documentation
- `type:process` (color: 5A6C7D) - Process and workflow

**Area Labels:**
- `area:contracts` (color: F99157) - Smart contracts area
- `area:frontend` (color: 1D76DB) - Frontend area  
- `area:amm` (color: BFD4F2) - Automated Market Maker
- `area:fees` (color: BFD4F2) - Fee collection and splitting
- `area:staking` (color: BFD4F2) - Staking and rewards
- `area:deploy` (color: 0E8A16) - Deployment and infrastructure
- `area:analytics` (color: BFD4F2) - Analytics and metrics

**Priority Labels:**
- `priority:low` (color: EDEDED) - Low priority

## Step 3: Create Issues

For each issue, go to your GitHub repository → Issues → New issue

Use the titles and descriptions from ISSUES.md, assign the appropriate milestone and labels.

### M0: Repo Hardening and CI (4 issues)
1. Add repo metadata: LICENSE, CODEOWNERS, issue/PR templates
2. Lint/format setup for contracts and TS  
3. Add CI workflows: lint, test, coverage for contracts; build and tests for frontend
4. Enable CodeQL and Dependabot

### M1: AMM Integration (5 issues)  
5. Vendor Uniswap v2-core and v2-periphery with multi-compiler Hardhat config
6. Implement WETH9 or WrappedNative for testnet
7. FeeCollector contract (LP receiver, sweep and split)
8. Hardhat deployment scripts for Factory, Router, WETH9, FeeCollector, config params
9. AMM unit tests: add/remove liquidity, swaps, price invariant, protocol fee accrual

### M2: Staking Pools (3 issues)
10. MasterChefV2 (or minimal staking pool) with CHOCO emissions and pool weighting
11. CHOCO minter role to MasterChef; emissions schedule config  
12. Staking unit tests and fuzz: reward accrual, edge cases, rounding, reentrancy guards

### M3: Frontend MVP (6 issues)
13. Scaffold Vite + React + TS app with wagmi/viem and RainbowKit
14. Token list and chain config; env-driven RPC and addresses
15. Swap UI (Router02): select tokens, quote, slippage, deadline, approvals, tx status
16. Liquidity UI: add/remove liquidity, approve LP, position view (balance, share)
17. Staking UI: stake/unstake/claim; pool APR/APY; pending reward display
18. Basic analytics: pool TVL/volume placeholders; wire minimal on-chain reads

### M4: Testnet Deployment and QA (4 issues)
19. Deploy to Sepolia/Base Sepolia; verify contracts on Etherscan
20. Seed initial liquidity and create 2–3 pairs (CHOCO/WETH, CHOCO/USDC)
21. Configure keeper/cron for FeeCollector.sweep()
22. End-to-end QA test plan and runbook

### M5: Security Review and Hardening (3 issues)
23. Static analysis, slither/manticore run, reentrancy checks, access control review
24. Gas benchmarks and optimizations on hot paths
25. Add timelock or multisig for critical roles (optional)

### M6: Beta Launch and Feedback (2 issues)
26. Public testnet docs: addresses, how-to guide, risks, disclaimers  
27. User feedback loop: bug report template, feature requests, triage workflow

## Verification

After creation, you should have:
- 7 milestones (M0-M6)
- 27 issues total
- Complete labeling system
- All issues assigned to appropriate milestones with relevant labels