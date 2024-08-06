import React, { useEffect, useContext } from "react";
import Contextpage from "../Contextpage";
import Searchbar from "../components/Searchbar";
import { useParams } from "react-router-dom";
import Search from "./Search";
import Anime from "../components/AnimeContainer";


const AnimeContainer = () => {
  const { setMovies } = useContext(Contextpage);
  const { query } = useParams();

  return (
    <section>
      <Searchbar />
      {query ? <Search query={query} /> : <Anime />}
    </section>
  );
};

export default AnimeContainer;
