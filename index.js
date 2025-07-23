require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

async function getNativeBalance(address) {
  try {
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
  } catch (err) {
    console.error('Error fetching balance:', err);
  }
}

async function main() {
  const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'; // Bitfinex wallet

  const ethBalance = await getNativeBalance(address);
  console.log(`ETH Balance of ${address}: ${ethBalance} ETH`);
}

main();
