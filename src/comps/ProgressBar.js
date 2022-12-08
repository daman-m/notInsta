import useStorage from "../hooks/useStorage";
import { useEffect } from "react";

const ProgressBar = ({file, setFile }) => {
    const {url, progress} = useStorage(file);

    useEffect(()=>{
        if (url) {
            setFile(null)
        }
    },[url, setFile])


    return (
        <div className="progressBar" style={{width: progress + '%' }}></div>
    )
}

export default ProgressBar;