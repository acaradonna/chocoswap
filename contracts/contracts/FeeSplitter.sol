// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title FeeSplitter
 * @notice Splits protocol fees between a service treasury and a founder wallet.
 */
contract FeeSplitter is Ownable {
    using Address for address payable;
    using SafeERC20 for IERC20;

    address public serviceTreasury;
    address public founderPayout;
    uint16 public serviceBps; // out of 10_000

    event SplitUpdated(address serviceTreasury, address founderPayout, uint16 serviceBps);
    event FeesSplit(address token, uint256 serviceAmount, uint256 founderAmount);

    error InvalidBps();
    error ZeroAddress();

    constructor(address _serviceTreasury, address _founderPayout, uint16 _serviceBps)
        Ownable(msg.sender)
    {
        if (_serviceTreasury == address(0) || _founderPayout == address(0)) revert ZeroAddress();
        if (_serviceBps > 10_000) revert InvalidBps();
        serviceTreasury = _serviceTreasury;
        founderPayout = _founderPayout;
        serviceBps = _serviceBps;
        emit SplitUpdated(_serviceTreasury, _founderPayout, _serviceBps);
    }

    function updateSplit(address _serviceTreasury, address _founderPayout, uint16 _serviceBps) external onlyOwner {
        if (_serviceTreasury == address(0) || _founderPayout == address(0)) revert ZeroAddress();
        if (_serviceBps > 10_000) revert InvalidBps();
        serviceTreasury = _serviceTreasury;
        founderPayout = _founderPayout;
        serviceBps = _serviceBps;
        emit SplitUpdated(_serviceTreasury, _founderPayout, _serviceBps);
    }

    function splitToken(IERC20 token) external {
        uint256 bal = token.balanceOf(address(this));
        if (bal == 0) return;
        uint256 serviceAmt = (bal * serviceBps) / 10_000;
        uint256 founderAmt = bal - serviceAmt;
        token.safeTransfer(serviceTreasury, serviceAmt);
        token.safeTransfer(founderPayout, founderAmt);
        emit FeesSplit(address(token), serviceAmt, founderAmt);
    }
}
