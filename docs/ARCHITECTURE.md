# Architecture (MVP)

Core components:

- ChocoToken (CHOCO): ERC20 w/ initial supply to deployer/treasury
- FeeSplitter: holds protocol fees and splits to Service Treasury and Founder Payout
- AMM: Uniswap v2-style Factory/Pair and Router (initially reuse audited v2 contracts; later customize fee hooks)
- Staking: simple single-token pool (inspired by Sushi MasterChef v1, but simplified)

Data flow:

- Swaps incur protocol fee. Router forwards fee tokens to FeeSplitter. Maintainers call splitToken to distribute.

Future:

- Governance tokenomics, emissions, farm pools, referral, analytics subgraph, TWAP oracles, fee switches, allowlist/fee tiers.
