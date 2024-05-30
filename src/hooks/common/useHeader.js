import { useEffect, useState } from "react";

function useHeader(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
      setDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };
  
    
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
        if (scrollPosition < 1) {
            setToggle(false)
        } else {
            setToggle(true);
        }
    }, [scrollPosition]);

    return {toggle, handleMouseEnter, handleMouseLeave, isDropdownVisible};
}

export default useHeader;