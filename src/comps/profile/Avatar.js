import { Avatar as ChakraAvi } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {  PROTECTED } from "../../Routes/routes"

const Avatar = ({user, size="xl"}) => {
   
    return (
        <ChakraAvi
            as={Link}
            to={`${PROTECTED}/profile/${user?.id}`}
            name={user?.username}
            size={size}
            src={user?.avatar}
            _hover={{cursor:"pointer", opacity:"0.8"}}
            />
            )
            
        }

export default Avatar;