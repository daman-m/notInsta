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
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className='scroller'>
            {toTop && (
            <button href="#" className="toTop" onClick={scrollUp}>
                <i className="fa-solid fa-arrow-up"></i>
            </button>
            ) }
        </div>
    )
}
export default ScrollButton;

