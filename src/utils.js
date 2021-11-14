export const findIndex = (path, routesArray) => {
  if (/projects\//.test(path)) {
    return 3;
  }

  const indexObject = routesArray.filter(
    (routeObject) => routeObject.link === path
  );

  if (indexObject.length > 0) {
    return indexObject[0].index;
  } else {
    return 0;
  }
};

export const getScrollPosition = ({ element, useWindow }) => {
  const isBrowser = typeof window != 'undefined';

  if (!isBrowser) {
    return { x: 0, y: 0 };
  }

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
};

// Used to showcase loading skeletons
export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
