# Chocoswap Frontend

A modern React frontend for the Chocoswap DEX, built with Vite, TypeScript, and Web3 integration.

## Features

- 🚀 **Vite + React + TypeScript** - Modern development stack for fast builds and excellent developer experience
- 🔌 **wagmi v2 + viem** - Type-safe Ethereum interaction with React hooks
- 🌈 **RainbowKit** - Beautiful wallet connection UI with support for popular wallets
- 🔗 **Chain Switching** - Easy network switching between Mainnet and Sepolia
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🎨 **Modern UI** - Clean, glassmorphic design with beautiful gradients

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Development

The app will be available at `http://localhost:5173` when running `npm run dev`.

### Project Structure

```
src/
├── components/          # Reusable React components
│   └── NetworkSwitcher.tsx
├── wagmi.ts            # Web3 configuration
├── App.tsx             # Main application component
├── App.css             # Application styles
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

### Configuration

The Web3 configuration is in `src/wagmi.ts`. To use WalletConnect features, you'll need to:

1. Get a project ID from [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Replace `YOUR_PROJECT_ID` in the wagmi config

### Supported Networks

- Ethereum Mainnet
- Sepolia Testnet

Additional networks can be added in the wagmi configuration.

## Building

The project uses TypeScript compilation followed by Vite bundling:

```bash
npm run build
```

Built files will be in the `dist/` directory.

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **wagmi v2** - Ethereum React hooks
- **viem** - TypeScript Ethereum library
- **RainbowKit** - Wallet connection UI
- **@tanstack/react-query** - Data fetching and caching

## Contributing

Please follow the project's coding standards:
- Use TypeScript for all new files
- Follow ESLint configuration
- Ensure responsive design principles
- Test wallet connection and network switching

## License

This project is part of the Chocoswap ecosystem and follows the same license terms.
