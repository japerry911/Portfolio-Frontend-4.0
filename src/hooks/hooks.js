import { useLayoutEffect, useRef } from 'react';
import { getScrollPosition } from '../utils';

export const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callback = () => {
    const currentPos = getScrollPosition({ element, useWindow });
    effect({ previousPos: position.current, currentPos });
    position.current = currentPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callback, wait);
        }
      } else {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, deps);
};
