import React, { createContext, useState } from 'react';

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (appName) => {
    setFavourites([...favourites, appName]);
  };

  const removeFavourite = (appName) => {
    setFavourites(favourites.filter((fav) => fav !== appName));
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;