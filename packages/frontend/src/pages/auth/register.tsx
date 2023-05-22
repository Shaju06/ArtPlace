import {
  Heading,
  HStack,
  Box,
  Stack,
  Text,
  Input,
  Button,
  useMediaQuery,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import Image from "next/image";

import LadyImage from "../../../public/registerAssist/lady-yellowspec.png";
import MenImage from "../../../public/registerAssist/Men.png";
import MonkeyImage from "../../../public/registerAssist/monkey-jewellery-blackcoat.png";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function RegistrationPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLargerThan394] = useMediaQuery("(min-width: 394px)");

  const handleSubmit = async (data: any) => {
    data.preventDefault();

    const payload = {
      userFullName: userName,
      userEmail: userEmail,
    };
  };

  return (
    <>
      
        <HStack
          padding="none"
          margin="none"
          position="absolute"
          top={{
            base: "none",  
          }}
          width={
            {
              base:"25.63em",
              md: '103em',
           
              lg:'91.49em'
            }
          }
          height={{
            base: "57em", 
            md:"77.69em",
           
           lg:"64.69em",
           xl:'57.2em' 
          }}
          
        
        >
          {/* ...............Left Side.......................... */}

          <Box
            position="absolute"
            w={{
              md:"34%"
            }}
           
            h={
              {
                base:"40rem"
              }
            }
            display={{ base: "block" }}
            left={{
              base:"33.06px",
              md: "140px",
              lg:'6em',
              
              
            }}
            alignItems="center"
            
            // justifyContent="center"
            top={{
              // "320px":"27px",
              base:"7.563rem",
              md:'17.063em',
              lg:'7em'

            }}
          >
            <Box
            position="relative"
              display="flex"
              lineHeight="32px"
              alignItems="center"
              fontSize="26px"
              h="15%"
              width={{
                base: "113.75px",
                md: "103px",
              }}
            >
              <Text>Art</Text>
              <Text color="#FE3796">Place</Text>
            </Box>
            <Box
              position="relative"
              top="10px"
              width={{
                base: "326.88px",
                md: "320px",
              }}
              height={{
                base: "34px",
                md: "39px",
              }}
            >
              <Text
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="600"
                fontSize={{
                  base: "28px",
                  md: "32px",
                }}
                lineHeight="39px"
                color="#FFFFFF"
              >
                Create New Account
              </Text>
            </Box>

            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel
                  position="relative"
                  top="33px"
                  width="74px"
                  height="19px"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="19px"
                  color="#F7FAFC"
                >
                  Full name
                </FormLabel>
                <Input
                  position="relative"
                  top="43px"
                  textColor="black"
                  type="text"
                  onChange={(event) => setUserName(event.currentTarget.value)}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  padding="20px 40px"
                  gap="10px"
                  width={{
                    base: "326px",
                    md: "100%",
                  }}
                  height="65px"
                  background="#F3F4F6"
                  borderRadius="8px"
                  placeholder="Marcus"
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  position="relative"
                  top="63px"
                  width={{
                    base: "42px",
                    md: "74px",
                  }}
                  height="19px"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="19px"
                  color="#F7FAFC"
                >
                  Email
                </FormLabel>
                <Input
                  position="relative"
                  top="73px"
                  textColor="black"
                  type="email"
                  onChange={(event) => setUserEmail(event.currentTarget.value)}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  padding="20px 40px"
                  gap="10px"
                  width={{
                    base: "326px",
                    md: "100%",
                  }}
                  height="65px"
                  background="#F3F4F6"
                  borderRadius="8px"
                  placeholder="aurelius@rocketmail.com"
                />
              </FormControl>
              <Box
                position="relative"
                top="103px"
                width={{
                  base: "326px",
                  md: "100%",
                }}
                height="56px"
              >
                <Text
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="28px"
                  color="#F7FAFC"
                >
                  Sign a message using any of your wallet to complete your
                  registration
                </Text>
              </Box>
              <Box
                position="relative"
                top="133px"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                padding="25px"
                gap="10px"
                width={{
                  base: "326px",
                  md: "100%",
                }}
                height={{
                  base: "44px",
                  md: "69px",
                }}
                background="#FE3796"
                boxShadow="0px 30px 60px rgba(254, 55, 150, 0.15)"
                borderRadius="6px"
              >
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
                    const ready = mounted && authenticationStatus !== "loading";
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === "authenticated");

                    return (
                      <div
                        {...(!ready && {
                          "aria-hidden": true,
                          style: {
                            opacity: 0,
                            pointerEvents: "none",
                            userSelect: "none",
                          },
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <Button
                                onClick={openConnectModal}
                                type="button"
                                width={{
                                  base: "326px",
                                  md: "100%",
                                }}
                                height="69px"
                                background="#FE3796"
                                colorScheme="#FE3796"
                                boxShadow="0px 30px 60px rgba(254, 55, 150, 0.15)"
                                borderRadius="6px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                Register Now
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
                            <div style={{ display: "flex", gap: 12 }}>
                              <button
                                onClick={openChainModal}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                type="button"
                              >
                                {chain.hasIcon && (
                                  <div
                                    style={{
                                      background: chain.iconBackground,
                                      width: 12,
                                      height: 12,
                                      borderRadius: 999,
                                      overflow: "hidden",
                                      marginRight: 4,
                                    }}
                                  >
                                    {chain.iconUrl && (
                                      <img
                                        alt={chain.name ?? "Chain icon"}
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
                                  : ""}
                              </button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </Box>
            </form>
            <Box
              position="relative"
              top="163px"
              width={{
                base: "326px",
                md: "440px",
              }}
              height="19px"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="600"
              fontSize="16px"
              lineHeight="19px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="#4B5563">Already Registered?{""}</Text>
              {"  "}
              <Text color="#FE3796">Sign In</Text>
            </Box>
          </Box>

          {/* .......Right Side.................. */}

          <Box
            position="absolute"
            
            w={{
              md: "52.3em",
              
                lg:"59.19em",
              xl:"50.24em"
           
            }}
            h={
              {
                md:"77.69em",
                lg:"64.69em",
                xl:'57em'
              }
            }
            top={
              {

                base:"0em"
              }
            }
            
            bg="linear-gradient(180deg, #F461A7 0%, #6D0034 100%)"
            left={
              { 
                md:'50em',
              lg:'40.54em',
            
              
                
              }
            }
            
            display={{ base: "none", md: "block" }}
          >
            {/* ............Image Gallery.............. */}

            <Grid
              position={
                {
                  md:"relative",
                  lg:"absolute"
                }
              }
              left="74px"
              width={{
                md:"600.54px"
              }}
              height="396.11px"
              top={
                {
                  md:'18.445rem',
                  lg:'142.12px'
                }
              }
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={2}
            >
              <GridItem
                colSpan={2}
                bg="papayawhip"
                width="196.21px"
                height="196.21px"
                position={{
                  lg:"relative"
                }}
              >
                <Image src={LadyImage} alt="Lady" width={500} height={500} />
              </GridItem>
              <GridItem
                colSpan={3}
                rowSpan={2}
                height="396.11px"
                width="396.11px"
                position={{
                  lg:"relative"
                }}
              >
                <Image
                  src={MonkeyImage}
                  alt="monkey"
                  width={396.11}
                  height={396.11}
                />
              </GridItem>

              <GridItem
                colSpan={2}
                bg="tomato"
                width="196.21px"
                height="196.21px"
               
                top="-3px"
                position={{
                  lg:"relative"
                }}
              >
                <Image src={MenImage} alt="men" width={500} height={500} />
              </GridItem>
            </Grid>

            {/* .................Content.............. */}
            <Box
              position="relative"
              width="94px"
              height="28px"
              left="95px"
              top={
                {
                  md:'24rem',
                  lg:"598.91px"
                }
              }
            >
              <Text
                font-family="Inter"
                fontSize="14px"
                fontWeight="600"
                lineHeight="28px"
                letterSpacing="0.15em"
                textAlign="left"
                color="rgba(255, 255, 255, 0.6)"
              >
                NFT FACTS
              </Text>

              <Text
                position="relative"
                width="537px"
                height="122px"
                top="10px"
                font-family="Inter"
                fontStyle="normal"
                fontWeight="400"
                fontSize="20px"
                lineHeight="30px"
                color="#FFFFFF"
              >
                NFTs (Non-Fungible Tokens) have been used to sell digital art
                for millions of dollars, with the highest price paid being over
                $69 million for a piece by digital artist Beeple.
              </Text>
            </Box>
          </Box>
        </HStack>
      
       </>
   
  );
}
