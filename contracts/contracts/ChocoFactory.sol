// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @notice Minimal UniswapV2-like factory placeholder for MVP planning.
 * In practice, reuse audited UniswapV2Factory under GPL-3.0 or adapt.
 */
contract ChocoFactory is Ownable {
    address public feeTo;
    address public feeToSetter;

    event PairCreated(address indexed token0, address indexed token1, address pair, uint256);

    constructor(address _owner) Ownable(_owner) {
        feeToSetter = _owner;
    }

    function setFeeTo(address _feeTo) external {
        require(msg.sender == feeToSetter, "FORBIDDEN");
        feeTo = _feeTo;
    }

    function setFeeToSetter(address _feeToSetter) external {
        require(msg.sender == feeToSetter, "FORBIDDEN");
        feeToSetter = _feeToSetter;
    }
}
