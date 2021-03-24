import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import FavoriteGifs from "./components/FavoriteGifs";

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleSubmit = () => {
    axios
      .get(`http://localhost:3010/api/v1/gifs/search?search=${searchTerm}`)
      .then((res) => {
        const gifResult = res.data.data.map((gif) => {
          const { id, title, images } = gif;
          return {
            id,
            title,
            url: images.original.url,
          };
        });
        setGifs(gifResult);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e);
  };

  const addFavorite = (gif) => {
    setFavorites([...favorites, gif]);
  };

  return (
    <React.Fragment>
      <SearchBar
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <SearchResults
        gifs={gifs}
        addFavorite={addFavorite}
        favorites={favorites}
      />
      <FavoriteGifs favorites={favorites} setFavorites={setFavorites} />
    </React.Fragment>
  );
}

export default App;
