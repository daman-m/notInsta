import { useState, useEffect } from "react";

const ScrollButton = () => {
    const [toTop, setToTop] = useState(false);
    
    useEffect(()=> {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setToTop(true)
            } else {
                setToTop(false)
            }
        })
    }, [])
    
    return (
        <div className='scroller'>
            {toTop && (
            <button href="#" className="toTop" >
                <i className="fa-solid fa-arrow-up"></i>
            </button>
            ) }
        </div>
    )
}
export default ScrollButton;

