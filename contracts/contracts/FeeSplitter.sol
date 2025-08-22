// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract FeeSplitter is Ownable {
    address public serviceTreasury;
    address public founderPayout;
    uint256 public serviceBps; // e.g., 7000 = 70%
    uint256 public constant BPS_DENOMINATOR = 10_000;

    event SplitterUpdated(address serviceTreasury, address founderPayout, uint256 serviceBps);
    event FeesSplit(address token, uint256 serviceAmount, uint256 founderAmount);

    constructor(address initialOwner, address _serviceTreasury, address _founderPayout, uint256 _serviceBps)
        Ownable(initialOwner)
    {
        require(_serviceTreasury != address(0) && _founderPayout != address(0), "zero addr");
        require(_serviceBps <= BPS_DENOMINATOR, "bps");
        serviceTreasury = _serviceTreasury;
        founderPayout = _founderPayout;
        serviceBps = _serviceBps;
        emit SplitterUpdated(serviceTreasury, founderPayout, serviceBps);
    }

    function update(address _serviceTreasury, address _founderPayout, uint256 _serviceBps) external onlyOwner {
        require(_serviceTreasury != address(0) && _founderPayout != address(0), "zero addr");
        require(_serviceBps <= BPS_DENOMINATOR, "bps");
        serviceTreasury = _serviceTreasury;
        founderPayout = _founderPayout;
        serviceBps = _serviceBps;
        emit SplitterUpdated(serviceTreasury, founderPayout, serviceBps);
    }

    function splitToken(address token) external {
        uint256 bal = IERC20(token).balanceOf(address(this));
        require(bal > 0, "no bal");
        uint256 toService = (bal * serviceBps) / BPS_DENOMINATOR;
        uint256 toFounder = bal - toService;
        IERC20(token).transfer(serviceTreasury, toService);
        IERC20(token).transfer(founderPayout, toFounder);
        emit FeesSplit(token, toService, toFounder);
    }
}
