import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getCsrfToken } from "next-auth/react"
import { SiweMessage } from "siwe"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

const getEthersProvider = () => {
  const rpcUrl = process.env.RPC_URL; // Set your Ethereum JSON-RPC URL here
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  return provider;
};

export default async function auth(req: any, res: any) {
  const providers = [
    // CredentialsProvider({
    //   name: "Ethereum",
    //   credentials: {
    //     message: {
    //       label: "Message",
    //       type: "text",
    //       placeholder: "0x0",
    //     },
    //     signature: {
    //       label: "Signature",
    //       type: "text",
    //       placeholder: "0x0",
    //     },
    //   },
    //   async authorize(credentials) {
    //     try {
    //       const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"))
    //       const nextAuthUrl = new URL(process.env.NEXTAUTH_URL)

    //       const result = await siwe.verify({
    //         signature: credentials?.signature || "",
    //         domain: nextAuthUrl.host,
    //         nonce: await getCsrfToken({ req }),
    //       })

    //       if (result.success) {
    //         return {
    //           id: siwe.address,
    //         }
    //       }
    //       return null
    //     } catch (e) {
    //       return null
    //     }
    //   },
    // }),
      CredentialsProvider({
        name: "Ethereum",
        credentials: {
          address: { label: "Ethereum Address", type: "text" },
          privateKey: { label: "Private Key", type: "password" },
        },
        async authorize(credentials) {
          const { address, privateKey } = credentials;
          const provider = getEthersProvider();
  
  
          // Return the user object with the required fields
          return {
            id: address, // Use the Ethereum address as the user ID
            name: "John Doe", // Set the user's name or other relevant fields
            email: "john.doe@example.com",
          }},
        }),
  ]


  return await NextAuth(req, res, {
    // https://next-auth.js.org/configuration/providers/oauth
    providers,
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async session({ session, token }: { session: any; token: any }) {
        session.address = token.sub
        session.user.name = token.sub
        session.user.image = "https://www.fillmurray.com/128/128"
        return session
      },
    },
  })
}