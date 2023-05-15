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
import LadyImage from "../../public/registerAssist/lady-yellowspec.png";
import MenImage from "../../public/registerAssist/Men.png";
import MonkeyImage from "../../public/registerAssist/monkey-jewellery-blackcoat.png";

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
      {isLargerThan394 ? (
        <Box
          mt="20px"
          overflow="hidden"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <HStack>
            {/* ...............Left Side.......................... */}

            <Box w="50%" h="900px" bg="">
              <Box position="absolute" top="121px" left="130px">
                <Text
                  position="relative"
                  top="10px"
                  width="103px"
                  height="32px"
                  fontFamily="Commissioner"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="26px"
                  lineHeight="32px"
                  color="#FFFFFF"
                >
                  Art
                  <span
                    style={{
                      color: "#FE3796",
                      width: "103px",
                      height: "32px",
                      fontFamily: "Commissioner",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "26px",
                      lineHeight: "32px",
                    }}
                  >
                    Place
                  </span>
                </Text>
                <Text
                  position="relative"
                  top="23px"
                  width="320px"
                  height="39px"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="32px"
                  lineHeight="39px"
                  /* identical to box height */
                  color="#FFFFFF"
                >
                  Create New Account
                </Text>
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
                      onChange={(event) =>
                        setUserName(event.currentTarget.value)
                      }
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      padding="20px 40px"
                      gap="10px"
                      width="440px"
                      height="65px"
                      background="#F3F4F6"
                      borderRadius="8px"
                      placeholder="Marcus"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel position="relative" top="63px">
                      Email
                    </FormLabel>
                    <Input
                      position="relative"
                      top="73px"
                      textColor="black"
                      type="email"
                      onChange={(event) =>
                        setUserEmail(event.currentTarget.value)
                      }
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      padding="20px 40px"
                      gap="10px"
                      width="440px"
                      height="65px"
                      background="#F3F4F6"
                      borderRadius="8px"
                      placeholder="aurelius@rocketmail.com"
                    />
                  </FormControl>
                  <Text
                    position="relative"
                    top="103px"
                    width="440px"
                    height="56px"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="28px"
                    /* or 175% */

                    color="#F7FAFC"
                  >
                    Sign a message using any of your wallet to complete your
                    registration
                  </Text>
                  <Box
                    position="relative"
                    top="133px"
                 
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    padding="25px"
                    gap="10px"
                    width="440px"
                    height="69px"
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
                        const ready =
                          mounted && authenticationStatus !== "loading";
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
                                    width="440px"
                                    height="69px"
                                    background="#FE3796"
                                    colorScheme="#FE3796"
                                    boxShadow="0px 30px 60px rgba(254, 55, 150, 0.15)"
                                    borderRadius="6px"
                                  >
                                    Register Now
                                  </Button>
                                );
                              }

                              if (chain.unsupported) {
                                return (
                                  <button
                                    onClick={openChainModal}
                                    type="button"
                                  >
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

                                  <button
                                    onClick={openAccountModal}
                                    type="button"
                                  >
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
                <Text
                  position="relative"
                  top="163px"
                  width="440px"
                  height="19px"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="19px"
                  textAlign="center"
                  /* Muted */

                  color="#4B5563"
                >
                  Already Registered?
                  <span
                    style={{
                      color: "#FE3796",
                      width: "440px",
                      height: "19px",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    {" "}
                    Sign In
                  </span>
                </Text>
              </Box>
            </Box>

            {/* .......Right Side.................. */}

            <Box
              position="absolute"
              w="720px"
              h="100%"
              bg="linear-gradient(180deg, #F461A7 0%, #6D0034 100%)"
              left="720px"
            >
              {/* ............Image Gallery.............. */}

              {/* <Box
              position="absolute"
              left="74px"
              width="600.54px"
              height="396.11px"
              top="142.12px"
            
            >
          
              <Stack direction="row">
                <Stack direction="column">
                  <Box
                    position="relative"
                    width="196.21px"
                    height="196.21px"
                    background="url(vogue.png), #D9D9D9"
                  >
                  
                    <Image
                      src={LadyImage}
                      alt="Lady"
                      width={500}
                      height={500}
                    />
                  </Box>
                  <Box
                    position="relative"
                    width="196.21px"
                    height="196.21px"
                    top="-3.29px"
                  
                    background="url(Far01.png), #D9D9D9"
                  >
                    <Image
                      src={MenImage}
                      alt="men"
                      width={500}
                      height={500}
                    />
                  </Box>
                </Stack>

                <Box
                  // background="url(image.png), #D9D9D9"
                  // boxShadow="0px 100px 80px rgba(0, 0, 0, 0.07), 0px 46.233px 36.9864px rgba(0, 0, 0, 0.0519173), 0px 26.4535px 21.1628px rgba(0, 0, 0, 0.0438747), 0px 16.0571px 12.8457px rgba(0, 0, 0, 0.0377964), 0px 9.67509px 7.74008px rgba(0, 0, 0, 0.0322036), 0px 5.38772px 4.31018px rgba(0, 0, 0, 0.0261253), 0px 2.31722px 1.85378px rgba(0, 0, 0, 0.0180827)"
                  position="relative"
                  height="396.11px"
                  width="396.11px"
                  bg="yellow"
                >
                  <Image
                    src={MonkeyImage1}
                    alt="monkey"
                    width={396}
                    height={396}
                  />
                </Box>
              </Stack>
            </Box> */}
              <Grid
                position="absolute"
                left="74px"
                width="600.54px"
                height="396.11px"
                top="142.12px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={2}
              >
                <GridItem
                  colSpan={2}
                  bg="papayawhip"
                  width="196.21px"
                  height="196.21px"
                >
                  <Image src={LadyImage} alt="Lady" width={500} height={500} />
                </GridItem>
                <GridItem
                  colSpan={3}
                  rowSpan={2}
                  height="396.11px"
                  width="396.11px"
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
                  position="relative"
                  top="-3px"
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
                top="598.91px"
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
                  for millions of dollars, with the highest price paid being
                  over $69 million for a piece by digital artist Beeple.
                </Text>
              </Box>
            </Box>
          </HStack>
        </Box>
      ) : (
        <Box w="393px" h="878px" position="absolute" top="167px" left="33.06px">
          <Text
            position="relative"
            top="10px"
            width="113.75px"
            height="32px"
            fontFamily="Commissioner"
            fontStyle="normal"
            fontWeight="400"
            fontSize="26px"
            lineHeight="32px"
            color="#FFFFFF"
          >
            Art
            <span
              style={{
                color: "#FE3796",
                width: "113.75px",
                height: "32px",
                fontFamily: "Commissioner",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "26px",
                lineHeight: "32px",
              }}
            >
              Place
            </span>
          </Text>
          <Text
            position="relative"
            top="20px"
            width="326.88px"
            height="34px"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="600"
            fontSize="28px"
            lineHeight="34px"
            /* identical to box height */
            color="#FFFFFF"
          >
            Create New Account
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel
                position="relative"
                top="35px"
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
                top="45px"
                textColor="red"
                type="text"
                onChange={(event) => setUserName(event.currentTarget.value)}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                padding="20px 40px"
                gap="10px"
                width="326px"
                height="47px"
                background="#F3F4F6"
                borderRadius="8px"
                placeholder="Marcus"
              />
            </FormControl>
            <FormControl>
              <FormLabel
                position="relative"
                top="70px"
                width="45px"
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
                top="80px"
                textColor="black"
                type="email"
                display="flex"
                onChange={(event) => setUserEmail(event.currentTarget.value)}
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                padding="20px 40px"
                gap="10px"
                width="326px"
                height="48px"
                background="#F3F4F6"
                borderRadius="8px"
                placeholder="aurelius@rocketmail.com"
              />
            </FormControl>
            <Text
              position="relative"
              top="110px"
              width="326px"
              height="56px"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="400px"
              fontSize="16px"
              lineHeight="28px"
              color="#F7FAFC"
            >
              Sign a message using any of your wallet to complete your
              registration
            </Text>
            <Button
              position="relative"
              top="152.5px"
              type="submit"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="25px"
              gap="10px"
              width="326px"
              height="44px"
              background="#FE3796"
              boxShadow="0px 30px 60px rgba(254, 55, 150, 0.15)"
              borderRadius="6px"
            >
              Register Now
            </Button>
          </form>
          <Text
            position="relative"
            top="182.5px"
            width="326px"
            height="19px"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="600"
            fontSize="16px"
            lineHeight="19px"
            textAlign="center"
            /* Muted */

            color="#4B5563"
          >
            Already Registered?
            <span
              style={{
                color: "#FE3796",
                width: "326px",
                height: "19px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "19px",
              }}
            >
              {" "}
              Sign In
            </span>
          </Text>
        </Box>
      )}
    </>
  );
}
