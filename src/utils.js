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
