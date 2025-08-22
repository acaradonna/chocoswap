# Research Notes

This project draws from:

- Uniswap v2 Core/Periphery (GPL-3.0): Constant product AMM, Factory/Pair, Router02
- SushiSwap add-ons: MasterChef staking, fee-to protocol, incentives
- PancakeSwap adaptations on BSC
- Spooky/Spirit on Fantom, Mojito on KCC
- OpenZeppelin ERC20, Ownable, libraries

Key papers/specs: CPMM, slippage, MEV, fee-on-transfer tokens handling, permit (EIP-2612), multicall.

Initial chain targets to evaluate (low-fee): BSC, Polygon, Base, Arbitrum Nova, Fantom, KCC, zkSync Era, Linea. Testnets: Sepolia, Base Sepolia, Polygon Amoy.

Security considerations: reentrancy, price manipulation, flash-loans, reserves sync, TWAP oracles, access control, upgradeability, audits.
