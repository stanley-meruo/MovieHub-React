import React, { useContext } from "react";
import Contextpage from "../Contextpage";
import Movies from "../components/Movies";
import Searchbar from "../components/Searchbar";
import { useParams } from "react-router-dom";
import Search from "./Search";


const GenresContainer = () => {
  const { setMovies } = useContext(Contextpage);
  const { query } = useParams();

  return (
    <section>
      <Searchbar />
      {query ? <Search query={query} /> : <Movies />}
    </section>
  );
};

export default GenresContainer;
