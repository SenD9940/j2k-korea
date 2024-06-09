import { useEffect, useState } from "react";
import useFirebaseAuth from "../firebase/useFirebaseAuth";

function useHeader(){
    const {logout} = useFirebaseAuth();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [toggle, setToggle] = useState("false");
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isShowContents, setIsShowContents] = useState(false);

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
        if (scrollPosition < 30) {
            setToggle("false")
        } else {
            setToggle("true");
        }
    }, [scrollPosition]);


    const onLogoutClickHandler = () => {
        logout().then(res =>{
            if(res){
                sessionStorage.removeItem("uid");
            }
        })
    }

    const onCancelClickHandler = () => {
        setIsShowContents(false);
    }

    const onBurgerClickHandler = () => {
        setIsShowContents(true);
    }

    return {toggle, handleMouseEnter, handleMouseLeave, isDropdownVisible, onLogoutClickHandler, onBurgerClickHandler, onCancelClickHandler, isShowContents};
}

export default useHeader;