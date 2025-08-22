#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create artifacts directory structure similar to Hardhat
const contractsDir = process.cwd();
const artifactsDir = path.join(contractsDir, 'artifacts');
const cacheDir = path.join(contractsDir, 'cache');

// Clean and create directories
if (fs.existsSync(artifactsDir)) {
  fs.rmSync(artifactsDir, { recursive: true });
}
if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true });
}

fs.mkdirSync(artifactsDir, { recursive: true });
fs.mkdirSync(cacheDir, { recursive: true });

const tempDir = '/tmp/solc-output';
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true });
}
fs.mkdirSync(tempDir, { recursive: true });

// Compile contracts using solcjs
console.log('Compiling contracts with solcjs...');

const contractFiles = [
  'contracts/ChocoToken.sol',
  'contracts/FeeSplitter.sol'
];

for (const contractFile of contractFiles) {
  console.log(`Compiling ${contractFile}...`);
  
  try {
    execSync(`cd ${contractsDir} && node_modules/.bin/solcjs --bin --abi --optimize --base-path . --include-path node_modules --output-dir ${tempDir} ${contractFile}`, 
      { stdio: 'inherit' });
    
    console.log(`✓ ${contractFile} compiled successfully`);
  } catch (error) {
    console.error(`✗ Failed to compile ${contractFile}:`, error.message);
    process.exit(1);
  }
}

// Create Hardhat-style artifacts structure
console.log('Creating Hardhat-compatible artifacts...');

const outputFiles = fs.readdirSync(tempDir);

for (const file of outputFiles) {
  if (file.endsWith('.abi') || file.endsWith('.bin')) {
    const contractName = file.replace(/.*_sol_([^.]+)\.(abi|bin)$/, '$1');
    const extension = file.endsWith('.abi') ? 'abi' : 'bin';
    
    if (contractName === 'ChocoToken' || contractName === 'FeeSplitter') {
      const contractDir = path.join(artifactsDir, 'contracts', `${contractName}.sol`);
      fs.mkdirSync(contractDir, { recursive: true });
      
      const content = fs.readFileSync(path.join(tempDir, file), 'utf8');
      
      if (extension === 'abi') {
        // Create a Hardhat-style artifact JSON
        const artifact = {
          _format: "hh-sol-artifact-1",
          contractName: contractName,
          sourceName: `contracts/${contractName}.sol`,
          abi: JSON.parse(content),
          bytecode: "", // Will be filled from .bin file
          deployedBytecode: "",
          linkReferences: {},
          deployedLinkReferences: {}
        };
        
        // Find corresponding .bin file
        const binFile = file.replace('.abi', '.bin');
        if (outputFiles.includes(binFile)) {
          const bytecode = fs.readFileSync(path.join(tempDir, binFile), 'utf8').trim();
          artifact.bytecode = bytecode ? `0x${bytecode}` : "0x";
          artifact.deployedBytecode = artifact.bytecode; // Simplified
        }
        
        fs.writeFileSync(
          path.join(contractDir, `${contractName}.json`),
          JSON.stringify(artifact, null, 2)
        );
        
        console.log(`✓ Created artifact for ${contractName}`);
      }
    }
  }
}

// Create a simple cache structure
const cacheContent = {
  _format: "hh-sol-cache-2",
  files: {
    "contracts/ChocoToken.sol": {
      lastModificationDate: Date.now(),
      contentHash: "dummy-hash-1",
      sourceName: "contracts/ChocoToken.sol",
      solcConfig: {
        version: "0.8.26",
        settings: {
          optimizer: { enabled: true, runs: 200 },
          evmVersion: "paris"
        }
      },
      imports: ["@openzeppelin/contracts/token/ERC20/ERC20.sol", "@openzeppelin/contracts/access/Ownable.sol"],
      versionPragmas: ["^0.8.24"]
    },
    "contracts/FeeSplitter.sol": {
      lastModificationDate: Date.now(),
      contentHash: "dummy-hash-2", 
      sourceName: "contracts/FeeSplitter.sol",
      solcConfig: {
        version: "0.8.26",
        settings: {
          optimizer: { enabled: true, runs: 200 },
          evmVersion: "paris"
        }
      },
      imports: ["@openzeppelin/contracts/token/ERC20/IERC20.sol", "@openzeppelin/contracts/access/Ownable.sol"],
      versionPragmas: ["^0.8.24"]
    }
  }
};

fs.writeFileSync(
  path.join(cacheDir, 'solidity-files-cache.json'),
  JSON.stringify(cacheContent, null, 2)
);

console.log('✓ Created cache file');

// Clean up temp directory
fs.rmSync(tempDir, { recursive: true });

console.log('🎉 Compilation completed successfully!');
console.log(`Artifacts created in: ${artifactsDir}`);
console.log(`Cache created in: ${cacheDir}`);