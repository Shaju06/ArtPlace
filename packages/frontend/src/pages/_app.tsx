import { ChakraProvider } from '@chakra-ui/react'
import type {AppProps} from "next/app";
// THEME
import ArtPlaceTheme from "@/theme";

//rainbow-toolkit
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {

  trustWallet,

} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { UserProvider } from '@/context/User';



const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = 'YOUR_PROJECT_ID';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};


const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      trustWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});


function MyApp({ Component, pageProps }: AppProps<{
  session: Session;
}>) {
  const getSiweMessageOptions: GetSiweMessageOptions = () => ({
    statement: 'Allow ArtPlace to access your account',
  });
  return (
      <SessionProvider refetchInterval={0} session={pageProps.session}>
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <RainbowKitProvider chains={chains}>
            <ChakraProvider theme={ArtPlaceTheme}>
              <UserProvider>
                <Component {...pageProps} />
              </UserProvider>
            </ChakraProvider>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
    </WagmiConfig >
      </SessionProvider>
  )
}

export default MyApp;