import {Heading} from "@chakra-ui/react";
import RegistrationPage from "./registrationPage";


export default function Home() {
  const {user, updateUser} = useUser()
  return (
    <>
     <RegistrationPage/>
    </>
  )
}
