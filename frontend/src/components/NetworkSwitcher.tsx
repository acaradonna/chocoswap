import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

export function NetworkSwitcher() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain, isPending } = useSwitchChain();

  if (!isConnected) {
    return null;
  }

  const currentChain = chainId === mainnet.id ? 'Mainnet' : 
                      chainId === sepolia.id ? 'Sepolia' : 
                      'Unknown Network';

  return (
    <div className="network-switcher">
      <div className="current-network">
        <span>Network: {currentChain}</span>
      </div>
      <div className="network-buttons">
        <button
          onClick={() => switchChain({ chainId: mainnet.id })}
          disabled={isPending || chainId === mainnet.id}
          className={`network-btn ${chainId === mainnet.id ? 'active' : ''}`}
        >
          {isPending && chainId !== mainnet.id ? 'Switching...' : 'Mainnet'}
        </button>
        <button
          onClick={() => switchChain({ chainId: sepolia.id })}
          disabled={isPending || chainId === sepolia.id}
          className={`network-btn ${chainId === sepolia.id ? 'active' : ''}`}
        >
          {isPending && chainId !== sepolia.id ? 'Switching...' : 'Sepolia'}
        </button>
      </div>
    </div>
  );
}