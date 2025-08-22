# Contributing to Chocoswap

Thanks for contributing! Please follow these guidelines to keep the project healthy.

## Getting Started
- Node >= 18, pnpm or npm, and Foundry/Hardhat toolchains.
- Contracts in `contracts/` (Hardhat + TypeScript).
- Frontend in `frontend/` (Vite + React + TS).

## Branching
- Default branch: `main`.
- Branch names: `feat/<scope>-<short>`, `fix/<scope>-<short>`, `chore/<scope>-<short>`, `docs/<scope>-<short>`.
- Example: `feat/router-fee-split`.

## Commits
- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `ci:`.
- Keep commits small and focused.

## PRs
- Link issues, describe changes, add screenshots for UI.
- Include tests. Ensure `pnpm test` or `npm test` passes.
- Request at least one review.

## Coding Standards
- Solidity: ^0.8.24, OZ contracts, NatSpec, events for state changes.
- TypeScript: strict mode, ESLint + Prettier.
- Security: CEI pattern, no unchecked external calls, reentrancy guards.

## CI
- Lint, build, and test on PRs to `main`.

## License
- MIT. By contributing, you agree your contributions are licensed under the repository license.
