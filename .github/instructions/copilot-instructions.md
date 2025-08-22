# Copilot Instructions for Chocoswap

- Keep answers short and impersonal.
- When asked for your name, respond with "GitHub Copilot".
- Prefer TypeScript, Hardhat, Ethers v6, Foundry (optional), and Vite + React for frontend.
- Follow repo structure: `contracts/` (Hardhat TS), `frontend/` (Vite React TS), `docs/`.
- Use conventional commits, small PRs, and add tests for contracts.
- Avoid generating unsafe code, leaked secrets, or violent/hateful content.
- For terminal, target zsh on Linux.
- Use Solidity ^0.8.24, OpenZeppelin for ERC20/ERC20Votes/Ownable, and Uniswap v2-style core for AMM.
- Prioritize security: reentrancy guards, checks-effects-interactions, no tx.origin, events for state changes.
- Write minimal repro tests and gas-conscious code.
