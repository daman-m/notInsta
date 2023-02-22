import React from "react";  
import { Link } from "react-router-dom";


const Title = () => {
    return (
        <div className="title App">
            <h1>NotInsta</h1>
            <h2>Shared Gallery</h2>
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
            <p>This is a shared gallery. Any picture you post will be added to the collection below.</p>
        </div>
    )
}

export default Title;