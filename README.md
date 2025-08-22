# Chocoswap 🍫

A decentralized exchange (DEX) built on Ethereum, featuring AMM functionality, protocol fee collection, and staking rewards.

## 🎯 Project Status

**Current Phase:** MVP to Testnet Launch  
**Target Network:** Ethereum Sepolia / Base Sepolia  
**License:** MIT (frontend), GPL-3.0-or-later (contracts)

## 🏗️ Architecture

### Core Components

- **ChocoToken (CHOCO)**: ERC20 governance and utility token with minting controls
- **AMM**: Uniswap v2-style Factory/Pair contracts with protocol fee integration  
- **FeeCollector**: Collects protocol fees as LP tokens and distributes to Treasury/Rewards
- **MasterChef**: Staking pools for LP tokens with CHOCO emissions
- **Frontend**: React + TypeScript interface with wagmi/viem/RainbowKit

### Data Flow

1. Swaps generate protocol fees collected as LP tokens
2. FeeCollector periodically converts LP → underlying tokens → Treasury/Rewards split
3. Users stake LP tokens in MasterChef pools to earn CHOCO rewards
4. CHOCO emissions controlled by configurable schedule and pool weights

## 🛣️ Roadmap

We're following a structured milestone approach from MVP to testnet launch:

- **M0**: Repository hardening and CI/CD ✅
- **M1**: AMM integration (Uniswap v2 + FeeCollector) 🚧
- **M2**: Staking pools and CHOCO emissions 📋
- **M3**: Frontend MVP (swap, liquidity, staking) 📋
- **M4**: Testnet deployment and QA 📋
- **M5**: Security review and hardening 📋
- **M6**: Beta testnet launch + feedback 📋

See [MILESTONES.md](./MILESTONES.md) for detailed milestone descriptions and [ISSUES.md](./ISSUES.md) for specific GitHub issues.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18 (see [.nvmrc](./.nvmrc))
- npm or pnpm
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/acaradonna/chocoswap.git
cd chocoswap

# Install contract dependencies
cd contracts
npm install

# Compile contracts
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Environment Configuration

Copy the environment template and configure for your setup:

```bash
cd contracts
cp .env.example .env
# Edit .env with your RPC URLs and private keys
```

## 🧪 Testing

### Contracts

```bash
cd contracts
npm test              # Run all tests
npm run coverage      # Generate coverage report
npm run lint          # Run linter
npm run format        # Format code
```

## 🚀 Deployment

### Testnet Deployment

```bash
cd contracts
npm run deploy:sepolia    # Deploy to Sepolia
npm run verify:sepolia    # Verify contracts on Etherscan
```

## 📖 Documentation

- [Architecture Overview](./docs/ARCHITECTURE.md)
- [Development Roadmap](./docs/ROADMAP.md)  
- [Research Notes](./docs/RESEARCH.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Security Policy](./SECURITY.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:

- Development workflow and branching strategy
- Code standards and conventions
- Pull request process
- Testing requirements

## 🔒 Security

- Security issues should be reported via email: security@chocoswap.com
- See [SECURITY.md](./SECURITY.md) for our security policy
- We follow security best practices including CEI pattern, reentrancy guards, and comprehensive testing

## 📄 License

- Frontend code: [MIT License](./LICENSE)
- Smart contracts: GPL-3.0-or-later (due to Uniswap v2 dependency)

## 🔧 Troubleshooting

### Build Issues

**Network/DNS Resolution Errors**

If you encounter errors like `getaddrinfo ENOTFOUND binaries.soliditylang.org` when building:

The contracts build system has been configured to work offline using a local Solidity compiler (solcjs) instead of downloading from external sources. This should work automatically, but if you encounter issues:

1. Ensure dependencies are installed: `cd contracts && npm install`
2. Use the offline build system: `npm run build` (uses local solcjs compilation)
3. For tests: `npm run test` (builds first, then runs tests with `--no-compile`)

The build system creates Hardhat-compatible artifacts in `contracts/artifacts/` and cache files in `contracts/cache/`.

**Linting Warnings**

TypeScript version warnings from ESLint are informational and don't affect functionality. The codebase works with the installed TypeScript version.

## 🏷️ Project Milestones and Issues

This project uses structured milestones and issues for development tracking:

### Creating GitHub Issues

Use the provided templates in [ISSUES.md](./ISSUES.md) to create properly formatted GitHub issues. Each issue includes:

- Detailed description and context
- Clear acceptance criteria  
- Appropriate labels for categorization
- Milestone assignment

### Creating GitHub Milestones

Use the milestone definitions in [MILESTONES.md](./MILESTONES.md) to create project milestones with:

- Clear goals and completion criteria
- Logical grouping of related issues
- Progress tracking capabilities

## 🌐 Links

- **Repository**: https://github.com/acaradonna/chocoswap
- **Documentation**: [docs/](./docs/)
- **Issues**: [GitHub Issues](https://github.com/acaradonna/chocoswap/issues)
- **Milestones**: [GitHub Milestones](https://github.com/acaradonna/chocoswap/milestones)

---

**⚠️ Disclaimer**: This is experimental software under active development. Use at your own risk. Not audited for mainnet use.