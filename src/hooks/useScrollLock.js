import { useEffect } from 'react';

const useScrollLock = () => {
  useEffect(() => {
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    const preventDefault = (e) => {
      e.preventDefault();
    };

    const preventDefaultForScrollKeys = (e) => {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    };

    let supportsPassive = false;
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line
        get: function () {
          supportsPassive = true;
        },
      }));
    } catch (e) {}

    const wheelOpt = supportsPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    const disableScroll = () => {
      window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
      window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    };

    const enableScroll = () => {
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener('touchmove', preventDefault, wheelOpt);
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    };

    disableScroll();

    return () => {
      enableScroll();
    };
  }, []);
};

export default useScrollLock;