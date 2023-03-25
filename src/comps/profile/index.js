import { Divider, Flex, HStack, Stack, Text, Center, Box, Image, Button, useDisclosure} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useFireStore from "../../hooks/useFireStore";
import Avatar from "./Avatar";
import PostHeader from "../posts/PostHeader";
import Actions from "../posts/Actions";
import { useUser } from "../../hooks/user";
import { format } from "date-fns";
import EditProfile from "./EditProfile";
import useAuth from "../../hooks/auth";


const Profile = () => {
    const {id} = useParams();
    const {docs} = useFireStore('images', id)
    const {user, isLoading:userLoading} = useUser(id)
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {user:authUser, isLoading: authLoading} = useAuth();

    if (userLoading) return "Loading"
    return (
        <Stack spacing="5">
            <Flex p={["4", "6"]} pos="relative" align="center">
                <Avatar size={["lg","2xl"]} user={user} />

                {!authLoading && 
                (authUser?.id === user.id) && 
                (<Button pos="absolute" mb="2" top="6" right="4" colorScheme="blue"
                onClick={onOpen}
                size={["sm","md"]}
                marginTop="55px"
                >
                    Change Avatar
                </Button>)}


                <Stack ml={["3","6","10"]}>
                    <Text fontSize={["xl","2xl"]}>@{user.username}</Text>
                    {user.email && <Text fontSize={["xl","2x1"]} display={["none","inline-block"]}>{user.email}</Text>}
                    <HStack spacing="10">
                        <Text color="gray.700" fontSize={["sm", "lg"]}>
                        Posts: {docs.length}
                        </Text>
                        <Text color="gray.700" fontSize={["sm","lg"]}>
                        Joined: {format(user.date, "MMMM yyyy")}
                        </Text>
                    </HStack>   
                </Stack>

                <EditProfile isOpen={isOpen} onClose={onClose}/>
            </Flex>
            <Divider/>
            <Center my="5" marginTop="10">
                <Box>
                {docs.length === 0 ?  "No posts yet..." :  docs && docs.map( doc => (
                    <Box className="imgContainer" 
                    key={doc.id} 
                    my="5"  
                    border="2px solid" 
                    borderColor="gray.100"
                    borderRadius="md">

                        <PostHeader uid={doc.uid} date={doc.date} />
                        <Image
                        maxH="420px"
                         maxW={["310","350","420" ]}
                        objectFit="cover"
                        m={["0","auto"]}
                        borderBottomRadius="md"
                         src={doc.url} 
                         alt="uploaded pic" />
                         <Actions doc={doc}/>
                    </Box>
                ))
                }
                </Box>
            </Center>
        </Stack>
    )

}
export default Profile;