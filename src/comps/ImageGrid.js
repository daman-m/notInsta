// import { useState } from "react";
import useFireStore from "../hooks/useFireStore";


const ImageGrid = () => {

    const { docs } = useFireStore('images');
    console.log(docs)
    

    return (
        <div className="imgGallery">
            <div className="wrapper">
                <ul className="galleryFlex">
                {/* THE PICTURES */}
            { docs && docs.map( doc => (
                <li className="imgContainer" key={doc.id}>
                    <img src={doc.url} alt="uploaded pic" />
                </li>
            )) }
                </ul>


            </div>
            
        </div>
    )
    }


    

export default ImageGrid;