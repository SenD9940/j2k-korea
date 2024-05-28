import { useEffect, useState } from "react";

function useHeader(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerColor, setHeaderColor] = useState("#ffffff");
    
    // Scroll 위치를 감지
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
        window.removeEventListener("scroll", updateScroll);
        };
    }, []);

        // scroll 위치가 100이하라면 투명한 배경색을 지정하고, 아니면 흰색을 지정한다.
    useEffect(() => {
        if (scrollPosition < 500) {
            setHeaderColor("transparent"); 
        } else {
            setHeaderColor("#ffffff"); 
        }
    }, [scrollPosition]);
    return {headerColor};
}

export default useHeader;