import { Heading } from "@chakra-ui/react";
import React from "react";  
import { Link } from "react-router-dom";


const Title = () => {
    return (
        <div className="title App">

            <Heading>Shared Gallery</Heading>
            <nav>
                <ul>
                    <li>
                     <Link className="myPage" to="/MyPage">
                        Your Pictures
                     </Link>
                    </li>
                    <li>
                    <Link className="home" to="/SharedGallery">
                        Shared Gallery
                     </Link>
                    </li>
                    <li>
                        <Link
                        className="mostLiked"
                        to="/MostLiked"
                        >
                            Most Liked
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Title;