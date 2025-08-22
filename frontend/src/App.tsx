import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { NetworkSwitcher } from './components/NetworkSwitcher'
import './App.css'

function App() {
  const { isConnected } = useAccount()

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">🍫 Chocoswap</h1>
          <nav className="nav">
            <a href="#swap" className="nav-link">Swap</a>
            <a href="#pool" className="nav-link">Pool</a>
            <a href="#stake" className="nav-link">Stake</a>
          </nav>
          <div className="wallet-section">
            <ConnectButton />
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="hero">
            <h2>Welcome to Chocoswap</h2>
            <p>A sweet DEX experience on Ethereum</p>
            {isConnected ? (
              <div className="connected-content">
                <p>🎉 Wallet connected! Ready to swap some tokens.</p>
                <NetworkSwitcher />
              </div>
            ) : (
              <div className="connect-prompt">
                <p>Connect your wallet to get started</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Chocoswap. Built with ❤️ for DeFi.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
