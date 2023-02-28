import { Avatar as ChakraAvi } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {  PROTECTED } from "../../Routes/routes"

const Avatar = ({user}) => {

    console.log(user)
   
    return (
        <ChakraAvi
            as={Link}
            to={`${PROTECTED}/profile/${user?.id}`}
            name={user?.username}
            size="xl"
            src={user?.avatar}
            _hover={{cursor:"pointer", opacity:"0.8"}}
            />
            )
            
        }

export default Avatar;