#!/usr/bin/env node

/**
 * Script to create GitHub issues and milestones for Chocoswap project
 * 
 * Prerequisites:
 * - Install dependencies: npm install @octokit/rest
 * - Set GITHUB_TOKEN environment variable with a GitHub personal access token
 * - Run: node scripts/create-github-issues.js
 */

const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const OWNER = 'acaradonna';
const REPO = 'chocoswap';

// Milestone definitions from MILESTONES.md
const milestones = [
  {
    title: 'M0: Repo Hardening and CI',
    description: 'Establish repository standards, development workflow, and continuous integration infrastructure.',
    state: 'open'
  },
  {
    title: 'M1: AMM Integration',
    description: 'Integrate Uniswap v2-style AMM with custom protocol fee collection mechanism.',
    state: 'open'
  },
  {
    title: 'M2: Staking Pools',
    description: 'Implement staking pools with CHOCO token emissions and reward distribution.',
    state: 'open'
  },
  {
    title: 'M3: Frontend MVP',
    description: 'Build a functional web interface for core DEX operations.',
    state: 'open'
  },
  {
    title: 'M4: Testnet Deployment and QA',
    description: 'Deploy complete system to testnet and conduct thorough quality assurance.',
    state: 'open'
  },
  {
    title: 'M5: Security Review and Hardening',
    description: 'Conduct security analysis and implement additional safeguards.',
    state: 'open'
  },
  {
    title: 'M6: Beta Launch and Feedback',
    description: 'Launch public beta on testnet and establish feedback collection mechanisms.',
    state: 'open'
  }
];

// Issue definitions from ISSUES.md
const issues = [
  // M0: Repo Hardening and CI
  {
    title: 'Add repo metadata: LICENSE, CODEOWNERS, issue/PR templates',
    body: `Set up essential repository metadata files to establish proper development workflow and governance.

**Acceptance Criteria:**
- [ ] LICENSE file present and properly configured
- [ ] CODEOWNERS file with required reviewers setup
- [ ] Issue templates auto-apply for bug reports, feature requests, and tasks  
- [ ] Pull request template with comprehensive checklist
- [ ] Templates follow GitHub best practices`,
    labels: ['type:meta', 'priority:low'],
    milestone: 'M0: Repo Hardening and CI'
  },
  {
    title: 'Lint/format setup for contracts and TS',
    body: `Configure linting and formatting tools for both Solidity contracts and TypeScript code to ensure consistent code quality.

**Acceptance Criteria:**
- [ ] ESLint configured for TypeScript files
- [ ] Prettier configured for code formatting
- [ ] Solhint configured for Solidity contracts
- [ ] npm scripts \`npm run lint\` and \`npm run format\` run green
- [ ] Pre-commit hooks optional but documented
- [ ] CI integration ready`,
    labels: ['type:devx', 'area:contracts', 'area:frontend'],
    milestone: 'M0: Repo Hardening and CI'
  },
  {
    title: 'Add CI workflows: lint, test, coverage for contracts; build and tests for frontend',
    body: `Implement GitHub Actions workflows for continuous integration covering linting, testing, and coverage reporting.

**Acceptance Criteria:**
- [ ] GitHub Actions workflow for contract linting and testing
- [ ] GitHub Actions workflow for frontend build and tests (when applicable)
- [ ] Coverage reporting integrated and uploaded
- [ ] Workflows trigger on PRs to main branch
- [ ] Workflow status badges in README
- [ ] Failed builds block PR merging`,
    labels: ['type:ci'],
    milestone: 'M0: Repo Hardening and CI'
  },
  {
    title: 'Enable CodeQL and Dependabot',
    body: `Set up automated security scanning and dependency management to maintain security posture.

**Acceptance Criteria:**
- [ ] CodeQL security scanning enabled with weekly schedule
- [ ] Dependabot configured for GitHub Actions updates
- [ ] Dependabot configured for npm dependency updates
- [ ] Security alerts routed to appropriate team members
- [ ] Dependabot PRs have appropriate reviewers assigned`,
    labels: ['type:security', 'type:ci'],
    milestone: 'M0: Repo Hardening and CI'
  },

  // M1: AMM Integration
  {
    title: 'Vendor Uniswap v2-core and v2-periphery with multi-compiler Hardhat config',
    body: `Integrate canonical Uniswap v2 contracts with proper compiler configuration to maintain compatibility.

**Acceptance Criteria:**
- [ ] Uniswap v2-core contracts compile with Solidity 0.5.16
- [ ] Uniswap v2-periphery contracts compile with Solidity 0.6.6  
- [ ] Hardhat multi-compiler configuration with version overrides
- [ ] No modifications to canonical Uniswap code (maintain audit validity)
- [ ] All contracts compile successfully in single build command
- [ ] Integration tests verify compatibility`,
    labels: ['type:contracts', 'area:amm'],
    milestone: 'M1: AMM Integration'
  },
  {
    title: 'Implement WETH9 or WrappedNative for testnet',
    body: `Deploy WETH9 contract for testnet compatibility with Uniswap Router functionality.

**Acceptance Criteria:**
- [ ] WETH9 contract integrated and compilable
- [ ] Deposit and withdrawal functions working
- [ ] Compatible with Uniswap Router02 requirements
- [ ] Deployment script for testnet deployment
- [ ] Unit tests covering core functionality`,
    labels: ['type:contracts'],
    milestone: 'M1: AMM Integration'
  },
  {
    title: 'FeeCollector contract (LP receiver, sweep and split)',
    body: `Implement FeeCollector contract to receive protocol fees as LP tokens and distribute proceeds.

**Acceptance Criteria:**
- [ ] Receives LP tokens from protocol fees (feeTo mechanism)
- [ ] \`sweep()\` function removes liquidity and swaps to target assets
- [ ] Splits proceeds between Treasury and Rewards according to configuration
- [ ] Emits events for all major operations
- [ ] Access control via owner/keeper roles
- [ ] Emergency pause/recovery mechanisms
- [ ] Slippage protection for swaps`,
    labels: ['type:contracts', 'area:fees'],
    milestone: 'M1: AMM Integration'
  },
  {
    title: 'Hardhat deployment scripts for Factory, Router, WETH9, FeeCollector, config params',
    body: `Create comprehensive deployment scripts for all AMM components with proper configuration management.

**Acceptance Criteria:**
- [ ] Single command deploys all AMM contracts
- [ ] Contract addresses saved to JSON configuration file
- [ ] Environment-specific parameter management
- [ ] Deployment scripts are idempotent and repeatable
- [ ] Verification scripts for deployed contracts
- [ ] Network-specific configuration support`,
    labels: ['type:devx', 'area:deploy'],
    milestone: 'M1: AMM Integration'
  },
  {
    title: 'AMM unit tests: add/remove liquidity, swaps, price invariant, protocol fee accrual',
    body: `Comprehensive test suite for AMM functionality covering all critical paths and edge cases.

**Acceptance Criteria:**
- [ ] Test coverage >90% for AMM integration paths
- [ ] Add/remove liquidity scenarios with various token pairs
- [ ] Swap functionality tests (exact input/output)
- [ ] Price invariant preservation tests
- [ ] Protocol fee accrual and collection verification
- [ ] FeeCollector sweep functionality tests
- [ ] Edge case testing (zero amounts, deadline expiry, etc.)`,
    labels: ['type:test', 'area:amm'],
    milestone: 'M1: AMM Integration'
  },

  // M2: Staking Pools
  {
    title: 'MasterChefV2 (or minimal staking pool) with CHOCO emissions and pool weighting',
    body: `Implement staking pool contract inspired by MasterChefV2 with configurable emissions and pool weights.

**Acceptance Criteria:**
- [ ] Add pool functionality with configurable allocation points
- [ ] Deposit/withdraw LP tokens to/from pools
- [ ] Pending rewards calculation based on pool weights
- [ ] Emergency withdraw functionality for user protection
- [ ] Pool management functions (owner-only)
- [ ] Emission rate updates with proper access control
- [ ] Comprehensive audit of all critical paths`,
    labels: ['type:contracts', 'area:staking'],
    milestone: 'M2: Staking Pools'
  },
  {
    title: 'CHOCO minter role to MasterChef; emissions schedule config',
    body: `Configure CHOCO token minting permissions and implement configurable emissions schedule.

**Acceptance Criteria:**
- [ ] CHOCO contract grants MINTER_ROLE to MasterChef contract
- [ ] Role-based access control for minting operations
- [ ] Configurable emission rate with owner/timelock control
- [ ] Emissions schedule calculation and validation
- [ ] Maximum supply caps and safeguards
- [ ] Events for all emission rate changes`,
    labels: ['type:contracts'],
    milestone: 'M2: Staking Pools'
  },
  {
    title: 'Staking unit tests and fuzz: reward accrual, edge cases, rounding, reentrancy guards',
    body: `Comprehensive testing of staking logic including fuzzing for mathematical correctness and security.

**Acceptance Criteria:**
- [ ] Test coverage >90% on staking logic
- [ ] Reward accrual calculation tests with various scenarios
- [ ] Edge case testing (zero deposits, overflow conditions)
- [ ] Rounding error analysis and mitigation
- [ ] Reentrancy attack prevention verification
- [ ] Invariant/fuzz testing on reward mathematics
- [ ] Multi-user interaction scenarios`,
    labels: ['type:test', 'area:staking'],
    milestone: 'M2: Staking Pools'
  },

  // M3: Frontend MVP
  {
    title: 'Scaffold Vite + React + TS app with wagmi/viem and RainbowKit',
    body: `Set up modern React frontend foundation with Web3 integration libraries.

**Acceptance Criteria:**
- [ ] Vite + React + TypeScript project scaffolded
- [ ] wagmi v2 + viem integration configured
- [ ] RainbowKit wallet connection implemented
- [ ] Chain switching functionality working
- [ ] Basic responsive layout with navigation
- [ ] Development and build scripts configured`,
    labels: ['type:frontend'],
    milestone: 'M3: Frontend MVP'
  },
  {
    title: 'Token list and chain config; env-driven RPC and addresses',
    body: `Configure blockchain connectivity and token metadata for different environments.

**Acceptance Criteria:**
- [ ] Token list JSON with metadata for supported tokens
- [ ] Environment-specific configuration (dev/testnet/mainnet)
- [ ] RPC endpoint configuration via environment variables
- [ ] Contract address management per environment
- [ ] Build system works with testnet configuration
- [ ] Type-safe configuration management`,
    labels: ['type:frontend'],
    milestone: 'M3: Frontend MVP'
  },
  {
    title: 'Swap UI (Router02): select tokens, quote, slippage, deadline, approvals, tx status',
    body: `Build comprehensive swap interface with all necessary user controls and feedback.

**Acceptance Criteria:**
- [ ] Token selection with search and popular tokens
- [ ] Real-time price quotes and impact calculation
- [ ] Slippage tolerance configuration
- [ ] Transaction deadline settings
- [ ] Token approval flow and status
- [ ] Transaction status with loading states
- [ ] Error handling and user feedback
- [ ] Happy-path swaps working end-to-end`,
    labels: ['type:frontend', 'area:amm'],
    milestone: 'M3: Frontend MVP'
  },
  {
    title: 'Liquidity UI: add/remove liquidity, approve LP, position view (balance, share)',
    body: `Implement liquidity provision interface with position management.

**Acceptance Criteria:**
- [ ] Add liquidity interface for token pairs
- [ ] Remove liquidity with percentage selection
- [ ] LP token approval and management
- [ ] User position display (balance, pool share)
- [ ] Pool information display (reserves, price)
- [ ] Works for common token pairs
- [ ] Clear indication of LP tokens received/burned`,
    labels: ['type:frontend', 'area:amm'],
    milestone: 'M3: Frontend MVP'
  },
  {
    title: 'Staking UI: stake/unstake/claim; pool APR/APY; pending reward display',
    body: `Create staking interface for LP token staking and reward management.

**Acceptance Criteria:**
- [ ] Stake LP tokens in available pools
- [ ] Unstake LP tokens with amount selection
- [ ] Claim accumulated rewards functionality
- [ ] Real-time pending reward display
- [ ] Pool APR/APY calculation and display
- [ ] Portfolio overview of staked positions
- [ ] State updates properly after transactions`,
    labels: ['type:frontend', 'area:staking'],
    milestone: 'M3: Frontend MVP'
  },
  {
    title: 'Basic analytics: pool TVL/volume placeholders; wire minimal on-chain reads',
    body: `Add basic analytics display using on-chain data reads.

**Acceptance Criteria:**
- [ ] Pool TVL calculation and display
- [ ] Volume metrics placeholders (for future subgraph integration)
- [ ] Reserve and price information display
- [ ] Efficient on-chain data fetching
- [ ] Caching strategy for performance
- [ ] Placeholder structure for enhanced analytics later`,
    labels: ['type:frontend', 'area:analytics'],
    milestone: 'M3: Frontend MVP'
  },

  // M4: Testnet Deployment and QA
  {
    title: 'Deploy to Sepolia/Base Sepolia; verify contracts on Etherscan',
    body: `Deploy complete contract suite to testnet with full verification.

**Acceptance Criteria:**
- [ ] All contracts deployed to Sepolia or Base Sepolia
- [ ] Contract verification completed on Etherscan
- [ ] Contract addresses documented and published
- [ ] Deployment transaction hashes recorded
- [ ] Configuration files updated with deployed addresses`,
    labels: ['type:devops', 'area:deploy'],
    milestone: 'M4: Testnet Deployment and QA'
  },
  {
    title: 'Seed initial liquidity and create 2–3 pairs (CHOCO/WETH, CHOCO/USDC)',
    body: `Bootstrap testnet liquidity with essential trading pairs.

**Acceptance Criteria:**
- [ ] CHOCO/WETH trading pair created with initial liquidity
- [ ] CHOCO/USDC trading pair created with initial liquidity  
- [ ] Additional pair created for testing diversity
- [ ] Liquidity provision and swap functionality verified on testnet
- [ ] Pool information visible in frontend
- [ ] Test trades executed successfully`,
    labels: ['type:ops', 'area:amm'],
    milestone: 'M4: Testnet Deployment and QA'
  },
  {
    title: 'Configure keeper/cron for FeeCollector.sweep()',
    body: `Set up automated keeper infrastructure for protocol fee collection.

**Acceptance Criteria:**
- [ ] Keeper script implemented for FeeCollector.sweep() calls
- [ ] Automation runs at appropriate intervals (daily/weekly)
- [ ] Monitoring and alerting for keeper operations
- [ ] Events emitted by sweep operations are visible
- [ ] Treasury and rewards balances update correctly
- [ ] Error handling and retry logic implemented`,
    labels: ['type:devops', 'area:fees'],
    milestone: 'M4: Testnet Deployment and QA'
  },
  {
    title: 'End-to-end QA test plan and runbook',
    body: `Create comprehensive QA testing procedures and execute full system validation.

**Acceptance Criteria:**
- [ ] QA checklist covering swaps, liquidity, staking, fee sweep
- [ ] Edge case testing scenarios documented
- [ ] User flow testing from wallet connection to transactions
- [ ] Cross-browser and mobile compatibility testing
- [ ] Performance testing under load
- [ ] All documented test cases pass
- [ ] Issue triage and resolution process`,
    labels: ['type:qa'],
    milestone: 'M4: Testnet Deployment and QA'
  },

  // M5: Security and Hardening
  {
    title: 'Static analysis, slither/manticore run, reentrancy checks, access control review',
    body: `Conduct comprehensive security analysis using automated tools and manual review.

**Acceptance Criteria:**
- [ ] Slither static analysis run with findings triaged
- [ ] Manticore symbolic execution for critical functions
- [ ] Reentrancy vulnerability assessment completed
- [ ] Access control patterns reviewed and validated
- [ ] All critical and high-severity findings resolved
- [ ] Medium/low findings documented and accepted with rationale`,
    labels: ['type:security'],
    milestone: 'M5: Security Review and Hardening'
  },
  {
    title: 'Gas benchmarks and optimizations on hot paths',
    body: `Analyze and optimize gas usage for frequently used contract functions.

**Acceptance Criteria:**
- [ ] Gas usage benchmarks integrated into CI
- [ ] Hot path functions identified and profiled
- [ ] Gas optimization opportunities documented
- [ ] Cost/benefit analysis for optimization tradeoffs
- [ ] Gas reporter integrated into test suite
- [ ] Performance regressions detected automatically`,
    labels: ['type:perf'],
    milestone: 'M5: Security Review and Hardening'
  },
  {
    title: 'Add timelock or multisig for critical roles (optional)',
    body: `Implement additional governance controls for critical administrative functions.

**Acceptance Criteria:**
- [ ] Timelock contract deployed (if chosen approach)
- [ ] Multisig configuration setup (if chosen approach)
- [ ] Critical role ownership transferred to governance mechanism
- [ ] Administrative procedures documented
- [ ] Emergency response procedures defined
- [ ] Governance transition plan executed`,
    labels: ['type:security', 'type:ops'],
    milestone: 'M5: Security Review and Hardening'
  },

  // M6: Beta Launch and Feedback
  {
    title: 'Public testnet docs: addresses, how-to guide, risks, disclaimers',
    body: `Create comprehensive public documentation for testnet beta launch.

**Acceptance Criteria:**
- [ ] Complete contract address list published
- [ ] Step-by-step user guide for all features
- [ ] Risk disclaimers and testnet warnings
- [ ] Troubleshooting guide for common issues
- [ ] FAQ covering expected questions
- [ ] Documentation hosted and linked from repository`,
    labels: ['type:docs'],
    milestone: 'M6: Beta Launch and Feedback'
  },
  {
    title: 'User feedback loop: bug report template, feature requests, triage workflow',
    body: `Establish systematic feedback collection and processing workflow.

**Acceptance Criteria:**
- [ ] Bug report template optimized for user reports
- [ ] Feature request process documented  
- [ ] Issue labeling system configured
- [ ] Triage workflow established with response time goals
- [ ] Community engagement cadence defined
- [ ] Feedback analysis and prioritization process`,
    labels: ['type:meta', 'type:process'],
    milestone: 'M6: Beta Launch and Feedback'
  }
];

async function createMilestones() {
  console.log('Creating milestones...');
  const createdMilestones = {};
  
  for (const milestone of milestones) {
    try {
      const response = await octokit.rest.issues.createMilestone({
        owner: OWNER,
        repo: REPO,
        title: milestone.title,
        description: milestone.description,
        state: milestone.state,
      });
      createdMilestones[milestone.title] = response.data.number;
      console.log(`✓ Created milestone: ${milestone.title}`);
    } catch (error) {
      console.error(`✗ Failed to create milestone ${milestone.title}:`, error.message);
    }
  }
  
  return createdMilestones;
}

async function createLabels() {
  console.log('Creating labels...');
  const labels = [
    { name: 'type:meta', color: '5A6C7D', description: 'Repository metadata and process' },
    { name: 'type:devx', color: '7057FF', description: 'Developer experience improvements' },
    { name: 'type:ci', color: '0052CC', description: 'Continuous integration' },
    { name: 'type:security', color: 'D73A49', description: 'Security-related work' },
    { name: 'type:contracts', color: 'F99157', description: 'Smart contract development' },
    { name: 'type:frontend', color: '1D76DB', description: 'Frontend development' },
    { name: 'type:test', color: 'FBCA04', description: 'Testing and QA' },
    { name: 'type:devops', color: '0E8A16', description: 'DevOps and deployment' },
    { name: 'type:ops', color: '006B75', description: 'Operations and maintenance' },
    { name: 'type:qa', color: 'E99695', description: 'Quality assurance' },
    { name: 'type:perf', color: 'C2E0C6', description: 'Performance optimization' },
    { name: 'type:docs', color: '1D76DB', description: 'Documentation' },
    { name: 'type:process', color: '5A6C7D', description: 'Process and workflow' },
    { name: 'area:contracts', color: 'F99157', description: 'Smart contracts area' },
    { name: 'area:frontend', color: '1D76DB', description: 'Frontend area' },
    { name: 'area:amm', color: 'BFD4F2', description: 'Automated Market Maker' },
    { name: 'area:fees', color: 'BFD4F2', description: 'Fee collection and splitting' },
    { name: 'area:staking', color: 'BFD4F2', description: 'Staking and rewards' },
    { name: 'area:deploy', color: '0E8A16', description: 'Deployment and infrastructure' },
    { name: 'area:analytics', color: 'BFD4F2', description: 'Analytics and metrics' },
    { name: 'priority:low', color: 'EDEDED', description: 'Low priority' },
  ];

  for (const label of labels) {
    try {
      await octokit.rest.issues.createLabel({
        owner: OWNER,
        repo: REPO,
        name: label.name,
        color: label.color,
        description: label.description,
      });
      console.log(`✓ Created label: ${label.name}`);
    } catch (error) {
      if (error.status === 422) {
        console.log(`→ Label already exists: ${label.name}`);
      } else {
        console.error(`✗ Failed to create label ${label.name}:`, error.message);
      }
    }
  }
}

async function createIssues(milestoneMap) {
  console.log('Creating issues...');
  
  for (const issue of issues) {
    try {
      const milestoneNumber = milestoneMap[issue.milestone];
      
      const response = await octokit.rest.issues.create({
        owner: OWNER,
        repo: REPO,
        title: issue.title,
        body: issue.body,
        labels: issue.labels,
        milestone: milestoneNumber,
      });
      console.log(`✓ Created issue: ${issue.title}`);
    } catch (error) {
      console.error(`✗ Failed to create issue ${issue.title}:`, error.message);
    }
  }
}

async function main() {
  if (!process.env.GITHUB_TOKEN) {
    console.error('Error: GITHUB_TOKEN environment variable is required');
    process.exit(1);
  }

  try {
    // Create labels first
    await createLabels();
    
    // Create milestones
    const milestoneMap = await createMilestones();
    
    // Create issues with milestone references
    await createIssues(milestoneMap);
    
    console.log('\n✅ Successfully created all milestones and issues!');
    console.log('\nSummary:');
    console.log(`- ${milestones.length} milestones created`);
    console.log(`- ${issues.length} issues created`);
    
  } catch (error) {
    console.error('Error creating GitHub issues:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { milestones, issues };