// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.24;

/**
 * @notice Minimal router shell. For MVP we'll later integrate UniswapV2Router02 logic
 * with a protocol fee that forwards to FeeSplitter.
 */
contract ChocoRouter {
    address public immutable factory;
    address public immutable WETH; // or wrapped native of target chain

    constructor(address _factory, address _WETH) {
        factory = _factory;
        WETH = _WETH;
    }
}
