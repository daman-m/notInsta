// import { useState } from "react";
import { Box, Image, Center} from "@chakra-ui/react";
import useFireStore from "../hooks/useFireStore";
import ScrollButton from "./ScrollButton";




const ImageGrid = () => {

    const { docs } = useFireStore('images');

    

    return (
        <>
            <Center my="5" marginTop="10">
                <Box maxH="420px" border="1px solid" maxW="420">
                { docs && docs.map( doc => (
                    <Box className="imgContainer" key={doc.id} my="5">
                        <Image
                        objectFit="cover"
                         src={doc.url} 
                         alt="uploaded pic" />
                    </Box>
                )) }
                </Box>
            </Center>
            <ScrollButton/>
        </>
    )
    }


    

export default ImageGrid;