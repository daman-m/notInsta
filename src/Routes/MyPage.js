import { Box, Text } from "@chakra-ui/react";
import ImageGrid from "comps/ImageGrid";
import Title from "comps/Title";
import Upload from "../comps/Upload";

const MyPage = () => {
    
    return (
        <>
            <Title/>
            <Upload/>
            <ImageGrid />
        </>

    )
}

export default MyPage;