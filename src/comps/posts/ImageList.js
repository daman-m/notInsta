// import { useState } from "react";
import { Box, Image, Center} from "@chakra-ui/react";
import useFireStore from "../../hooks/useFireStore";
import Actions from "./Actions";
import PostHeader from "./PostHeader";
import ScrollButton from "./ScrollButton";




const ImageList = () => {

    const { docs } = useFireStore('images');
    
    return (
        <>
            <Center my="5" marginTop="10">
                <Box>
                { docs && docs.map( doc => (
                    <Box className="imgContainer" 
                    key={doc.id} 
                    my="5"  
                    border="2px solid" 
                    borderColor="gray.100"
                    borderRadius="md">

                        <PostHeader uid={doc.uid} date={doc.date} />
                        <Image
                        maxH="420px"
                        maxW={["310","350","420"]}
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
            <ScrollButton/>
        </>
    )
    }



    

export default ImageList;