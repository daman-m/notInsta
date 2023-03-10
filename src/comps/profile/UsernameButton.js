import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { PROTECTED } from "../../Routes/routes"

const UsernameButton = ({user}) => {
     return (
        <Button as={Link}
        to={`${PROTECTED}/profile/${user.id}`}
        colorScheme="blue" variant="link"
        >
           @{user.username}
        </Button>
     )
}

export default UsernameButton;