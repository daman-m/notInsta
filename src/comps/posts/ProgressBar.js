import useStorage from "../../hooks/useStorage";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const ProgressBar = ({file, setFile }) => {
    const {url, progress} = useStorage(file);

    useEffect(()=>{
        if (url) {
            setFile(null)
        }
    },[url, setFile])


    return (
        <Box  m={["0","auto"]}maxW="320" bg="blue.200" className="progressBar" style={{width: progress + '%' }}></Box>
    )
}

export default ProgressBar;