import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import type {AppProps} from "next/app";


// THEME
import ArtPlaceTheme from "@/theme";
import { UserContextProvider } from '@/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <ChakraProvider theme={ArtPlaceTheme}>
        <UserContextProvider>
        <Component {...pageProps} />
        </UserContextProvider>
      </ChakraProvider>
  )
}

export default MyApp;