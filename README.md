# chocoswap

![CI](https://github.com/acaradonna/chocoswap/workflows/CI/badge.svg)
![Security](https://github.com/acaradonna/chocoswap/workflows/Security/badge.svg)

A decentralized exchange built with Solidity smart contracts, featuring automated market making, protocol fees, and staking rewards.

## Development

### Prerequisites
- Node.js >= 18
- npm or pnpm
- Foundry/Hardhat toolchains

### Getting Started

1. Install dependencies:
```bash
cd contracts
npm install
```

2. Compile contracts:
```bash
npm run build
```

3. Run tests:
```bash
npm test
```

4. Run with coverage:
```bash
npm run test:coverage
```

### CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- **CI Pipeline**: Runs on all PRs to main, includes linting, building, testing, and coverage
- **Security Scanning**: Automated Slither analysis, dependency scanning, and secret detection
- **Dependency Updates**: Automated weekly dependency updates
- **Branch Protection**: Requires all checks to pass before merging

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines and contribution process.