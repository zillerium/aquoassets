// wagmiConfig.js
import { alchemyProvider } from '@wagmi/core/providers/alchemy';
import { publicProvider } from '@wagmi/core/providers/public';
import { InjectedConnector } from '@wagmi/core/connectors/injected';

import { chain, createWalletClient, createConfig, configureChains } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { sepolia, polygonMumbai } from 'wagmi/chains';

//import { chain, configureChains } from 'wagmi'
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: false,
  chains,
  publicClient,
  webSocketPublicClient,
  connectors: [new MetaMaskConnector()],
});
//const { chains, publicClient, webSocketPublicClient } = configureChains(
//  [mainnet],
//  [publicProvider()],
//)
/*
const { chains, publicClient } = configureChains(
  [mainnet, sepolia, polygon],
  [publicProvider()],
)

//const { chains, publicClient } = configureChains(
//  [sepolia],
//  ...
//)

const config = createConfig({
  autoConnect: true,
  publicClient,
});
*/
export default config;

