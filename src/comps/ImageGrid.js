// import { useState } from "react";
import useFireStore from "../hooks/useFireStore";


const ImageGrid = () => {

    const { docs } = useFireStore('images');
    console.log(docs)
    

    return (
        <div className="imgGrid">
            
            { docs && docs.map( doc => (
                <div className="imgWrap" key={doc.id}>
                    <p></p>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            )) }
            <p>hi</p>
        </div>
    )
    }


    

export default ImageGrid;