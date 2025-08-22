# Chocoswap GitHub Issues

This file contains copy-paste ready GitHub issues for the Chocoswap project. Each issue includes title, description, acceptance criteria, and labels.

## M0: Repo Hardening and CI

### Issue 1: Add repo metadata: LICENSE, CODEOWNERS, issue/PR templates

**Title:** Add repo metadata: LICENSE, CODEOWNERS, issue/PR templates

**Description:**
Set up essential repository metadata files to establish proper development workflow and governance.

**Acceptance Criteria:**
- [ ] LICENSE file present and properly configured
- [ ] CODEOWNERS file with required reviewers setup
- [ ] Issue templates auto-apply for bug reports, feature requests, and tasks  
- [ ] Pull request template with comprehensive checklist
- [ ] Templates follow GitHub best practices

**Labels:** `type:meta`, `priority:low`

---

### Issue 2: Lint/format setup for contracts and TS

**Title:** Lint/format setup for contracts and TS

**Description:**
Configure linting and formatting tools for both Solidity contracts and TypeScript code to ensure consistent code quality.

**Acceptance Criteria:**
- [ ] ESLint configured for TypeScript files
- [ ] Prettier configured for code formatting
- [ ] Solhint configured for Solidity contracts
- [ ] npm scripts `npm run lint` and `npm run format` run green
- [ ] Pre-commit hooks optional but documented
- [ ] CI integration ready

**Labels:** `type:devx`, `area:contracts`, `area:frontend`

---

### Issue 3: Add CI workflows: lint, test, coverage for contracts; build and tests for frontend

**Title:** Add CI workflows: lint, test, coverage for contracts; build and tests for frontend

**Description:**
Implement GitHub Actions workflows for continuous integration covering linting, testing, and coverage reporting.

**Acceptance Criteria:**
- [ ] GitHub Actions workflow for contract linting and testing
- [ ] GitHub Actions workflow for frontend build and tests (when applicable)
- [ ] Coverage reporting integrated and uploaded
- [ ] Workflows trigger on PRs to main branch
- [ ] Workflow status badges in README
- [ ] Failed builds block PR merging

**Labels:** `type:ci`

---

### Issue 4: Enable CodeQL and Dependabot

**Title:** Enable CodeQL and Dependabot

**Description:**
Set up automated security scanning and dependency management to maintain security posture.

**Acceptance Criteria:**
- [ ] CodeQL security scanning enabled with weekly schedule
- [ ] Dependabot configured for GitHub Actions updates
- [ ] Dependabot configured for npm dependency updates
- [ ] Security alerts routed to appropriate team members
- [ ] Dependabot PRs have appropriate reviewers assigned

**Labels:** `type:security`, `type:ci`

---

## M1: AMM Integration

### Issue 5: Vendor Uniswap v2-core and v2-periphery with multi-compiler Hardhat config

**Title:** Vendor Uniswap v2-core and v2-periphery with multi-compiler Hardhat config

**Description:**
Integrate canonical Uniswap v2 contracts with proper compiler configuration to maintain compatibility.

**Acceptance Criteria:**
- [ ] Uniswap v2-core contracts compile with Solidity 0.5.16
- [ ] Uniswap v2-periphery contracts compile with Solidity 0.6.6  
- [ ] Hardhat multi-compiler configuration with version overrides
- [ ] No modifications to canonical Uniswap code (maintain audit validity)
- [ ] All contracts compile successfully in single build command
- [ ] Integration tests verify compatibility

**Labels:** `type:contracts`, `area:amm`

---

### Issue 6: Implement WETH9 or WrappedNative for testnet

**Title:** Implement WETH9 or WrappedNative for testnet

**Description:**
Deploy WETH9 contract for testnet compatibility with Uniswap Router functionality.

**Acceptance Criteria:**
- [ ] WETH9 contract integrated and compilable
- [ ] Deposit and withdrawal functions working
- [ ] Compatible with Uniswap Router02 requirements
- [ ] Deployment script for testnet deployment
- [ ] Unit tests covering core functionality

**Labels:** `type:contracts`

---

### Issue 7: FeeCollector contract (LP receiver, sweep and split)

**Title:** FeeCollector contract (LP receiver, sweep and split)

**Description:**
Implement FeeCollector contract to receive protocol fees as LP tokens and distribute proceeds.

**Acceptance Criteria:**
- [ ] Receives LP tokens from protocol fees (feeTo mechanism)
- [ ] `sweep()` function removes liquidity and swaps to target assets
- [ ] Splits proceeds between Treasury and Rewards according to configuration
- [ ] Emits events for all major operations
- [ ] Access control via owner/keeper roles
- [ ] Emergency pause/recovery mechanisms
- [ ] Slippage protection for swaps

**Labels:** `type:contracts`, `area:fees`

---

### Issue 8: Hardhat deployment scripts for Factory, Router, WETH9, FeeCollector, config params

**Title:** Hardhat deployment scripts for Factory, Router, WETH9, FeeCollector, config params

**Description:**
Create comprehensive deployment scripts for all AMM components with proper configuration management.

**Acceptance Criteria:**
- [ ] Single command deploys all AMM contracts
- [ ] Contract addresses saved to JSON configuration file
- [ ] Environment-specific parameter management
- [ ] Deployment scripts are idempotent and repeatable
- [ ] Verification scripts for deployed contracts
- [ ] Network-specific configuration support

**Labels:** `type:devx`, `area:deploy`

---

### Issue 9: AMM unit tests: add/remove liquidity, swaps, price invariant, protocol fee accrual

**Title:** AMM unit tests: add/remove liquidity, swaps, price invariant, protocol fee accrual

**Description:**
Comprehensive test suite for AMM functionality covering all critical paths and edge cases.

**Acceptance Criteria:**
- [ ] Test coverage >90% for AMM integration paths
- [ ] Add/remove liquidity scenarios with various token pairs
- [ ] Swap functionality tests (exact input/output)
- [ ] Price invariant preservation tests
- [ ] Protocol fee accrual and collection verification
- [ ] FeeCollector sweep functionality tests
- [ ] Edge case testing (zero amounts, deadline expiry, etc.)

**Labels:** `type:test`, `area:amm`

---

## M2: Staking Pools

### Issue 10: MasterChefV2 (or minimal staking pool) with CHOCO emissions and pool weighting

**Title:** MasterChefV2 (or minimal staking pool) with CHOCO emissions and pool weighting

**Description:**
Implement staking pool contract inspired by MasterChefV2 with configurable emissions and pool weights.

**Acceptance Criteria:**
- [ ] Add pool functionality with configurable allocation points
- [ ] Deposit/withdraw LP tokens to/from pools
- [ ] Pending rewards calculation based on pool weights
- [ ] Emergency withdraw functionality for user protection
- [ ] Pool management functions (owner-only)
- [ ] Emission rate updates with proper access control
- [ ] Comprehensive audit of all critical paths

**Labels:** `type:contracts`, `area:staking`

---

### Issue 11: CHOCO minter role to MasterChef; emissions schedule config

**Title:** CHOCO minter role to MasterChef; emissions schedule config

**Description:**
Configure CHOCO token minting permissions and implement configurable emissions schedule.

**Acceptance Criteria:**
- [ ] CHOCO contract grants MINTER_ROLE to MasterChef contract
- [ ] Role-based access control for minting operations
- [ ] Configurable emission rate with owner/timelock control
- [ ] Emissions schedule calculation and validation
- [ ] Maximum supply caps and safeguards
- [ ] Events for all emission rate changes

**Labels:** `type:contracts`

---

### Issue 12: Staking unit tests and fuzz: reward accrual, edge cases, rounding, reentrancy guards

**Title:** Staking unit tests and fuzz: reward accrual, edge cases, rounding, reentrancy guards

**Description:**
Comprehensive testing of staking logic including fuzzing for mathematical correctness and security.

**Acceptance Criteria:**
- [ ] Test coverage >90% on staking logic
- [ ] Reward accrual calculation tests with various scenarios
- [ ] Edge case testing (zero deposits, overflow conditions)
- [ ] Rounding error analysis and mitigation
- [ ] Reentrancy attack prevention verification
- [ ] Invariant/fuzz testing on reward mathematics
- [ ] Multi-user interaction scenarios

**Labels:** `type:test`, `area:staking`

---

## M3: Frontend MVP

### Issue 13: Scaffold Vite + React + TS app with wagmi/viem and RainbowKit

**Title:** Scaffold Vite + React + TS app with wagmi/viem and RainbowKit

**Description:**
Set up modern React frontend foundation with Web3 integration libraries.

**Acceptance Criteria:**
- [ ] Vite + React + TypeScript project scaffolded
- [ ] wagmi v2 + viem integration configured
- [ ] RainbowKit wallet connection implemented
- [ ] Chain switching functionality working
- [ ] Basic responsive layout with navigation
- [ ] Development and build scripts configured

**Labels:** `type:frontend`

---

### Issue 14: Token list and chain config; env-driven RPC and addresses

**Title:** Token list and chain config; env-driven RPC and addresses

**Description:**
Configure blockchain connectivity and token metadata for different environments.

**Acceptance Criteria:**
- [ ] Token list JSON with metadata for supported tokens
- [ ] Environment-specific configuration (dev/testnet/mainnet)
- [ ] RPC endpoint configuration via environment variables
- [ ] Contract address management per environment
- [ ] Build system works with testnet configuration
- [ ] Type-safe configuration management

**Labels:** `type:frontend`

---

### Issue 15: Swap UI (Router02): select tokens, quote, slippage, deadline, approvals, tx status

**Title:** Swap UI (Router02): select tokens, quote, slippage, deadline, approvals, tx status

**Description:**
Build comprehensive swap interface with all necessary user controls and feedback.

**Acceptance Criteria:**
- [ ] Token selection with search and popular tokens
- [ ] Real-time price quotes and impact calculation
- [ ] Slippage tolerance configuration
- [ ] Transaction deadline settings
- [ ] Token approval flow and status
- [ ] Transaction status with loading states
- [ ] Error handling and user feedback
- [ ] Happy-path swaps working end-to-end

**Labels:** `type:frontend`, `area:amm`

---

### Issue 16: Liquidity UI: add/remove liquidity, approve LP, position view (balance, share)

**Title:** Liquidity UI: add/remove liquidity, approve LP, position view (balance, share)

**Description:**
Implement liquidity provision interface with position management.

**Acceptance Criteria:**
- [ ] Add liquidity interface for token pairs
- [ ] Remove liquidity with percentage selection
- [ ] LP token approval and management
- [ ] User position display (balance, pool share)
- [ ] Pool information display (reserves, price)
- [ ] Works for common token pairs
- [ ] Clear indication of LP tokens received/burned

**Labels:** `type:frontend`, `area:amm`

---

### Issue 17: Staking UI: stake/unstake/claim; pool APR/APY; pending reward display

**Title:** Staking UI: stake/unstake/claim; pool APR/APY; pending reward display

**Description:**
Create staking interface for LP token staking and reward management.

**Acceptance Criteria:**
- [ ] Stake LP tokens in available pools
- [ ] Unstake LP tokens with amount selection
- [ ] Claim accumulated rewards functionality
- [ ] Real-time pending reward display
- [ ] Pool APR/APY calculation and display
- [ ] Portfolio overview of staked positions
- [ ] State updates properly after transactions

**Labels:** `type:frontend`, `area:staking`

---

### Issue 18: Basic analytics: pool TVL/volume placeholders; wire minimal on-chain reads

**Title:** Basic analytics: pool TVL/volume placeholders; wire minimal on-chain reads

**Description:**
Add basic analytics display using on-chain data reads.

**Acceptance Criteria:**
- [ ] Pool TVL calculation and display
- [ ] Volume metrics placeholders (for future subgraph integration)
- [ ] Reserve and price information display
- [ ] Efficient on-chain data fetching
- [ ] Caching strategy for performance
- [ ] Placeholder structure for enhanced analytics later

**Labels:** `type:frontend`, `area:analytics`

---

## M4: Testnet Deployment and QA

### Issue 19: Deploy to Sepolia/Base Sepolia; verify contracts on Etherscan

**Title:** Deploy to Sepolia/Base Sepolia; verify contracts on Etherscan

**Description:**
Deploy complete contract suite to testnet with full verification.

**Acceptance Criteria:**
- [ ] All contracts deployed to Sepolia or Base Sepolia
- [ ] Contract verification completed on Etherscan
- [ ] Contract addresses documented and published
- [ ] Deployment transaction hashes recorded
- [ ] Configuration files updated with deployed addresses

**Labels:** `type:devops`, `area:deploy`

---

### Issue 20: Seed initial liquidity and create 2–3 pairs (CHOCO/WETH, CHOCO/USDC)

**Title:** Seed initial liquidity and create 2–3 pairs (CHOCO/WETH, CHOCO/USDC)

**Description:**
Bootstrap testnet liquidity with essential trading pairs.

**Acceptance Criteria:**
- [ ] CHOCO/WETH trading pair created with initial liquidity
- [ ] CHOCO/USDC trading pair created with initial liquidity  
- [ ] Additional pair created for testing diversity
- [ ] Liquidity provision and swap functionality verified on testnet
- [ ] Pool information visible in frontend
- [ ] Test trades executed successfully

**Labels:** `type:ops`, `area:amm`

---

### Issue 21: Configure keeper/cron for FeeCollector.sweep()

**Title:** Configure keeper/cron for FeeCollector.sweep()

**Description:**
Set up automated keeper infrastructure for protocol fee collection.

**Acceptance Criteria:**
- [ ] Keeper script implemented for FeeCollector.sweep() calls
- [ ] Automation runs at appropriate intervals (daily/weekly)
- [ ] Monitoring and alerting for keeper operations
- [ ] Events emitted by sweep operations are visible
- [ ] Treasury and rewards balances update correctly
- [ ] Error handling and retry logic implemented

**Labels:** `type:devops`, `area:fees`

---

### Issue 22: End-to-end QA test plan and runbook

**Title:** End-to-end QA test plan and runbook

**Description:**
Create comprehensive QA testing procedures and execute full system validation.

**Acceptance Criteria:**
- [ ] QA checklist covering swaps, liquidity, staking, fee sweep
- [ ] Edge case testing scenarios documented
- [ ] User flow testing from wallet connection to transactions
- [ ] Cross-browser and mobile compatibility testing
- [ ] Performance testing under load
- [ ] All documented test cases pass
- [ ] Issue triage and resolution process

**Labels:** `type:qa`

---

## M5: Security and Hardening

### Issue 23: Static analysis, slither/manticore run, reentrancy checks, access control review

**Title:** Static analysis, slither/manticore run, reentrancy checks, access control review

**Description:**
Conduct comprehensive security analysis using automated tools and manual review.

**Acceptance Criteria:**
- [ ] Slither static analysis run with findings triaged
- [ ] Manticore symbolic execution for critical functions
- [ ] Reentrancy vulnerability assessment completed
- [ ] Access control patterns reviewed and validated
- [ ] All critical and high-severity findings resolved
- [ ] Medium/low findings documented and accepted with rationale

**Labels:** `type:security`

---

### Issue 24: Gas benchmarks and optimizations on hot paths

**Title:** Gas benchmarks and optimizations on hot paths

**Description:**
Analyze and optimize gas usage for frequently used contract functions.

**Acceptance Criteria:**
- [ ] Gas usage benchmarks integrated into CI
- [ ] Hot path functions identified and profiled
- [ ] Gas optimization opportunities documented
- [ ] Cost/benefit analysis for optimization tradeoffs
- [ ] Gas reporter integrated into test suite
- [ ] Performance regressions detected automatically

**Labels:** `type:perf`

---

### Issue 25: Add timelock or multisig for critical roles (optional)

**Title:** Add timelock or multisig for critical roles (optional)

**Description:**
Implement additional governance controls for critical administrative functions.

**Acceptance Criteria:**
- [ ] Timelock contract deployed (if chosen approach)
- [ ] Multisig configuration setup (if chosen approach)
- [ ] Critical role ownership transferred to governance mechanism
- [ ] Administrative procedures documented
- [ ] Emergency response procedures defined
- [ ] Governance transition plan executed

**Labels:** `type:security`, `type:ops`

---

## M6: Beta Launch and Feedback

### Issue 26: Public testnet docs: addresses, how-to guide, risks, disclaimers

**Title:** Public testnet docs: addresses, how-to guide, risks, disclaimers

**Description:**
Create comprehensive public documentation for testnet beta launch.

**Acceptance Criteria:**
- [ ] Complete contract address list published
- [ ] Step-by-step user guide for all features
- [ ] Risk disclaimers and testnet warnings
- [ ] Troubleshooting guide for common issues
- [ ] FAQ covering expected questions
- [ ] Documentation hosted and linked from repository

**Labels:** `type:docs`

---

### Issue 27: User feedback loop: bug report template, feature requests, triage workflow

**Title:** User feedback loop: bug report template, feature requests, triage workflow

**Description:**
Establish systematic feedback collection and processing workflow.

**Acceptance Criteria:**
- [ ] Bug report template optimized for user reports
- [ ] Feature request process documented  
- [ ] Issue labeling system configured
- [ ] Triage workflow established with response time goals
- [ ] Community engagement cadence defined
- [ ] Feedback analysis and prioritization process

**Labels:** `type:meta`, `type:process`

---

## Additional Repository Improvements

### Configuration Files

The following configuration files should be added to improve the development experience:

- `.editorconfig` - Code editor configuration
- `.nvmrc` - Node.js version specification  
- `prettier.config.js` - Prettier formatting configuration
- `solhint.config.js` - Solidity linting configuration
- `.github/workflows/` - CI/CD workflow definitions
- `RELEASE.md` - Release process documentation