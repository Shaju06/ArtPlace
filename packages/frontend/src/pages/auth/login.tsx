import { Box, Flex,Heading,Text,Button, extendTheme } from "@chakra-ui/react"
import nft1 from "../../../assets/Rectangle 3784.png"
import nft2 from "../../../assets/Rectangle 3785.svg"
import nft3 from "../../../assets/Rectangle 3786.svg"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSession } from "next-auth/react"



function WindowSize(){
  const [width, setWidth] = useState(null);
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () =>{ window.removeEventListener("resize", handleResize);}
    }
  },[])

 
  return width;
}



export default function login() {
  const winSize=WindowSize();


  const { data: session, status } = useSession()


  return (
    winSize<=912?
    
    //Mobile View
    <Flex direction="column" w="100%" h="100%" alignItems="center" justifyContent="center">
      <Box  w="80%"h="45%">
      <Box h="10%"/>
        <Box display="flex" lineHeight="32px" alignItems="center" fontSize="26px" h="15%">
          <Text fontSize="26px">Art</Text><Text fontSize="26px" color="#FE3796">Place</Text>
        </Box>
        <Box lineHeight="39px"h="15%" fontWeight="600">
          <Text fontSize={["22px","28px",]} >Log In To Continue</Text>
        </Box>
        <Box fontSize="16px"lineHeight="28px" fontWeight="400">
          <Text>Sign a message using any of your wallet to login</Text>
        </Box>
        <Box h="10%"/>
        <Box height="20%"  display="flex" alignItems="center" justifyContent="center">
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
      // Note: If your app doesn't use authentication, you
      // can remove all 'authenticationStatus' checks
      const ready = mounted && authenticationStatus !== 'loading';
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus ||
          authenticationStatus === 'authenticated');

      return (
        <div style={{width:"100%",height:"80%"}}
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
                <button onClick={openChainModal} type="button">
                  Wrong network
                </button>
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
        <Box h="12%"/>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Text color="#4B5563" fontWeight="600">New User?</Text><Text fontWeight="600"  color="#FE3796">Register Now</Text>
        </Box>
      </Box>
    </Flex>
     
     :
//Desktop View
    <Box display="flex" direction="row" w="100%" height="100%" alignItems="center" justifyContent="center">
      <Flex direction="column" w="50%" h="100%" alignItems="center" justifyContent="center">
        <Box  w="70%"h="45%">
          <Box h="10%"/>
          <Box display="flex" lineHeight="32px" alignItems="center" fontSize="26px" h="15%">
            <Text>Art</Text><Text color="#FE3796">Place</Text>
          </Box>
          <Box lineHeight="39px"h="15%" fontWeight="600">
            <Text fontSize="36px" >Log In To Continue</Text>
          </Box>
          <Box fontSize="16px"lineHeight="28px" fontWeight="400">
            <Text>Sign a message using any of your wallet to login</Text>
          </Box>
          <Box h="12%"/>
          <Box height="20%"  display="flex" alignItems="center" justifyContent="center">
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
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        if(authenticationStatus==="auntheticated"){
          console.log("yo!!")
        }
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

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
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
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
          <Box h="15%"/>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text color="#4B5563" fontWeight="600">New User?</Text><Text fontWeight="600" color="#FE3796">Register Now</Text>
          </Box>
        </Box>
      </Flex>
        


        <Flex magin="0" padding="0" direction="column" alignItems="center" justifyContent="center" background= "linear-gradient(180deg, #F461A7 0%, #6D0034 100%)" w="50%" h="100%">
          <Flex direction="row" justifyContent="center" alignItems="center"  width="95%" height="65%">
          
            <Flex justifyContent="center" alignItems="center"  direction="column">
              <Image src={nft2} width={196.21} height={196.21}/>
              <Image src={nft3} width={196.21} height={196.21}/>
            </Flex>
          
          <Flex justifyContent="center" alignItems="center" direction="row">
              <Image src={nft1} alt="nft1" width={390.21} height={390.21}  />            
          </Flex>
          </Flex>
          <Flex direction="column" width="100%" height="25%" >
            <Box margin="0 0 0 15%">
              <Heading size="sm" color="rgba(255, 255, 255, 0.6)" fontWeight="600" lineHeight="28px">
                  NFT FACTS
              </Heading>
            </Box>
              <Box width="70%" margin="0 0 0 15%" >
                <Text size="3xl" fontWeight="400" lineHeight="30px" >
                  NFTs (Non-Fungible Tokens) have been used to sell digital art for millions of dollars, with the highest price paid being over $69 million for a piece by digital artist Beeple.
                </Text>
              </Box>
          </Flex >
          
          <Box>

          </Box>
        </Flex>
   
    </Box>
  )
}

