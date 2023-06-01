import { Box, Flex,Heading,Text,Button, extendTheme } from "@chakra-ui/react"
import nft1 from "@assets/Rectangle 3784.png"
import nft2 from "@assets/Rectangle 3785.svg"
import nft3 from "@assets/Rectangle 3786.svg"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSession } from "next-auth/react"


export default function login() {


  const { data: session, status } = useSession()
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  }

  return (

    <Box display="flex" direction="row" w="100%" height="100%" alignItems="center" justifyContent="center">
      <Flex direction="column" w="50%" border="0px" h="100%" alignItems="center" justifyContent="center" width={["100%"]}>
        <Box  w={["80%","60%"]}h="45%" border="0px">
          <Box h="10%"/>
          <Box display="flex" lineHeight="32px" alignItems="center" fontSize={["26px","24px","24px","26px"]} h="15%">
            <Text>Art</Text><Text color="#FE3796">Place</Text>
          </Box>
          <Box lineHeight="39px"h="15%" fontWeight="600">
            <Text fontSize={["28px","30px","32px","32px"]} >Log In To Continue</Text>
          </Box>
          <Box fontSize="16px"lineHeight="28px" fontWeight="400">
            <Text>Sign a message using any of your wallet to login</Text>
          </Box>
          <Box h="12%"/>
          <Box height={["12%","20%"]}  display="flex" alignItems="center" justifyContent="center">
          <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {

        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain
          
        return (
          <div style={{width:"100%",height:"100%"}}
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} borderRadius="6px" width="100%" height="100%" background="#FE3796" >
                  Click Here Sign In
                </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} borderRadius="6px" width="100%" height="100%" background="#FE3796" >
                   Switch network
                </Button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
          </Box>
          <Box h="13%"/>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text color="#4B5563" fontWeight="600">New User?</Text><Text fontWeight="600" color="#FE3796">Register Now</Text>
          </Box>
        </Box>
      </Flex>
        


        <Flex magin="0" padding="0" direction="column" alignItems="center" justifyContent="center" background= "linear-gradient(180deg, #F461A7 0%, #6D0034 100%)"display={{ base: "none", lg: "block" }} width={[ "0%","100%"]} h="100%">
          <Flex direction="row" justifyContent="center" alignItems="end" width="100%" height="65%"  >
            <Flex justifyContent="center" alignItems="center" width="90%" border="0px" margin="0">
            <Flex  justifyContent="space-between" border="0px" alignItems="center"  direction="column" >
              <Image src={nft2} width={196.21} height={196.21}/>
             
              <Image src={nft3} width={196.21} height={196.21}/>
            </Flex>
            <Box width="1.5%"/>
          
          <Flex h="100%"justifyContent="center" alignItems="center" direction="row">
              <Image src={nft1} alt="nft1" width={396.21} height={396.21}  />            
          </Flex>
          </Flex>
          </Flex>
          <Flex direction="column" width="100%" height="25%" alignItems="center" justifyContent="center">
          
              <Heading w="70%" size="sm" color="rgba(255, 255, 255, 0.6)" fontWeight="600" fontSize="14px"lineHeight="28px" >
                  NFT FACTS
              </Heading>
              <Text size="3xl" w="70%"fontWeight="400" lineHeight="30px" >
                NFTs (Non-Fungible Tokens) have been used to sell digital art for millions of dollars, with the highest price paid being over $69 million for a piece by digital artist Beeple.
              </Text>
          </Flex >
          
          <Box>

          </Box>
        </Flex>
   
    </Box>
  )
}

