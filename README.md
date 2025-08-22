# Chocoswap

A chocolate-themed AMM DEX inspired by Uniswap v2/SushiSwap/PancakeSwap. MVP focuses on:

- Token swaps with a protocol fee that splits between a Service Treasury and a Founder Payout wallet
- A native ERC-20 token (CHOCO)
- Liquidity pools (Uniswap v2-style) and LP tokens
- Simple staking pools for CHOCO and LP tokens

Roadmap: Start on a testnet, then deploy to a low-fee L1/L2 for mainnet launch.

This repository is structured as a monorepo:

- `contracts/` — Solidity smart contracts and deployment scripts
- `frontend/` — Web app (to be added)
- `docs/` — Research, architecture, and planning

Licensing note: We will rely on Uniswap v2 core/periphery (GPL-3.0) and OpenZeppelin (MIT). This repo is GPL-3.0 to remain compatible.
