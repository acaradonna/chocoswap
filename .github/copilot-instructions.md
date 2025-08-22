# Chocoswap Development Instructions

**ALWAYS follow these instructions first and fallback to search or additional context gathering only when the information here is incomplete or found to be in error.**

## Project Overview
Chocoswap is a DeFi project building a decentralized exchange with protocol fee distribution. The project includes:
- ERC20 CHOCO token with FeeSplitter contract for protocol fee distribution  
- Planned Uniswap v2-style AMM (Factory/Pair/Router) with custom fee hooks
- Future frontend (Vite + React + TypeScript) and staking pools

## Repository Structure
```
chocoswap/
├── contracts/          # Hardhat + TypeScript smart contracts
│   ├── contracts/      # Solidity source files
│   ├── test/          # Contract tests  
│   ├── scripts/       # Deployment scripts
│   └── package.json   # Hardhat project dependencies
├── docs/              # Architecture, roadmap, and research notes
├── frontend/          # NOT YET IMPLEMENTED - planned Vite + React + TS
└── .github/instructions/ # This file
```

## Working Effectively

### Prerequisites
- Node.js >= 18 (v20.19.4 confirmed working)
- npm v10+ or pnpm (both available)
- **CRITICAL**: Network restrictions prevent Solidity compiler downloads in this environment

### Installation and Setup
```bash
cd contracts/
# Use either npm or pnpm - both work
pnpm install  # Takes ~37 seconds, installs 549 packages
# OR
npm install   # Takes ~24 seconds with warnings
```

### Key Commands and Timing

**CRITICAL BUILD LIMITATION**: `pnpm run build` and `npm run build` **FAIL** due to network restrictions preventing Solidity compiler download from binaries.soliditylang.org. **NEVER CANCEL** - document this limitation instead.

**Working Commands with Timing:**
- `pnpm install` - **37 seconds**, 549 packages, network dependent
- `npm install` - **24 seconds**, same functionality, more warnings  
- `pnpm run clean` - **< 1 second**, clears artifacts/cache
- `pnpm run format` - **< 1 second**, formats 6 files with Prettier
- `npx hardhat --help` - **< 1 second**, shows available commands
- `npx hardhat --version` - **< 1 second**, shows version 2.26.3

**Broken Commands with Error Details:**
- `pnpm run build` - **FAILS after ~37 seconds**: "Error HH502: Couldn't download compiler version list. Please check your internet connection and try again."
- `pnpm run test` - **FAILS after 1.4 seconds**: "HH700: Artifact for contract 'ChocoToken' not found" (requires compilation)
- `pnpm test --no-compile` - **1.4 seconds**: Runs but fails due to missing artifacts
- `pnpm run lint` - **FAILS immediately**: "eslint: command not found" (missing devDependency)

### Development Workflow
1. **NEVER try to compile contracts** - network restrictions prevent Solidity compiler download
2. **Always run `pnpm run format`** before committing (< 1 second)
3. **Code review only** - focus on Solidity logic, TypeScript types, and architecture
4. **Use existing contracts as reference**: ChocoToken.sol (simple ERC20), FeeSplitter.sol (fee distribution)

## Project Components

### Smart Contracts (`contracts/contracts/`)
- **ChocoToken.sol**: Simple ERC20 token with Ownable access control
  - Inherits OpenZeppelin ERC20 and Ownable
  - Constructor takes initialOwner and initialSupply
  - Mints entire supply to initialOwner at deployment
  - No additional functions beyond standard ERC20
- **FeeSplitter.sol**: Protocol fee distribution contract with configurable splits
  - Splits any ERC20 token based on basis points (serviceBps/10000)
  - Default: 7000 BPS = 70% to serviceTreasury, 30% to founderPayout
  - Owner can update addresses and split ratios via `update()`
  - Anyone can trigger distribution via `splitToken(address)`
  - Emits events for transparency: SplitterUpdated, FeesSplit

### Tests (`contracts/test/`)
- **ChocoToken.test.ts**: Basic ERC20 functionality tests
- **Note**: Tests require compiled artifacts to run

### Key Technologies
- **Solidity**: ^0.8.24 with OpenZeppelin contracts v5.1.0
- **Hardhat**: v2.26.3 with TypeScript toolchain
- **Security**: Uses OpenZeppelin Ownable, follows CEI pattern, includes events for state changes
- **Target Networks**: Ethereum Sepolia for testing, L2s considered for mainnet

## Validation and Testing

### Manual Validation Scenarios
**Since compilation is blocked, focus on:**
1. **Code Review**: Check Solidity syntax, security patterns, and OpenZeppelin usage
2. **Architecture Validation**: Ensure contracts follow documented patterns in docs/ARCHITECTURE.md
3. **TypeScript Validation**: Verify test structure and typing in test files
4. **Contract Security Review**: 
   - ChocoToken: Verify ERC20 + Ownable inheritance, initial supply minting
   - FeeSplitter: Check access controls, zero address validation, BPS calculations
   - Look for: proper event emission, CEI pattern, no reentrancy vulnerabilities
5. **Test Coverage Analysis**: Ensure all contract functions have corresponding tests

### Pre-Commit Checklist
1. **ALWAYS run `pnpm run format`** - required for code style
2. **Review contract security**: Check for reentrancy guards, CEI pattern, proper access controls
3. **Validate against architecture**: Ensure changes align with docs/ARCHITECTURE.md
4. **Check conventional commits**: Use prefixes like `feat:`, `fix:`, `chore:`, etc.

## Common Issues and Workarounds

### Build Issues
- **Problem**: `Error HH502: Couldn't download compiler version list`
- **Cause**: Network restrictions prevent accessing binaries.soliditylang.org
- **Workaround**: Development must be done through code review only
- **Status**: Expected limitation in this environment

### Missing Dependencies  
- **Problem**: `eslint: command not found`
- **Cause**: ESLint missing from package.json devDependencies
- **Workaround**: Manual code review for linting issues
- **Future Fix**: Add ESLint to devDependencies

### Frontend Development
- **Status**: NOT YET IMPLEMENTED
- **Planned**: Vite + React + TypeScript in `frontend/` directory
- **Reference**: See docs/ROADMAP.md for implementation plan

## Project Standards

### Solidity Code
- Version: ^0.8.24
- Use OpenZeppelin contracts for standard implementations
- Include NatSpec documentation
- Emit events for all state changes
- Follow checks-effects-interactions pattern
- Use reentrancy guards for external calls

### TypeScript Code  
- Strict mode enabled
- Use Hardhat/Ethers v6 patterns
- Write comprehensive tests for all contract functions
- Follow existing test structure in test/

### Git Workflow
- Branch naming: `feat/<scope>-<short>`, `fix/<scope>-<short>`, etc.
- Conventional commits required
- Include tests for contract changes
- Request code review before merging

## Quick Reference

### File Locations
- Main contracts: `contracts/contracts/`
- Tests: `contracts/test/`
- Deployment scripts: `contracts/scripts/`
- Documentation: `docs/`
- Project config: `contracts/hardhat.config.ts`, `contracts/package.json`

### Package.json Scripts
```json
{
  "build": "hardhat compile",        // FAILS - network restriction
  "clean": "hardhat clean",          // Works
  "test": "hardhat test",            // FAILS - needs compilation  
  "lint": "eslint --ext .ts ./",     // FAILS - missing dependency
  "format": "prettier -w .",        // Works
  "prepare": "hardhat compile"       // FAILS - network restriction
}
```

### Dependencies Status
- ✅ **Hardhat**: v2.26.3 installed and working
- ✅ **OpenZeppelin**: v5.1.0 available
- ✅ **Prettier**: v3.6.2 working for formatting
- ❌ **ESLint**: Missing from devDependencies
- ❌ **Solidity Compiler**: Cannot download due to network restrictions