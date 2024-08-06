import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Container from "./pages/Genres";
import Trending from "./pages/Trending";
import Upcoming from "./pages/Upcoming";
import Anime from "./components/AnimeContainer";
import { MovieProvider } from "./Contextpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Player from "./pages/Player";



const App = () => {
  return (
    <MovieProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      <Navbar />
      
      <div className="md:ml-[15rem]">
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/container" element={<Container />} />
          <Route path="/moviedetail/:id" element={<Detail />} />
          <Route path="/player/:id/:title" element={<Player />} />{" "}
          {/*Route-1 For Player, Title is just for beauty of url, it is not used anywhere.*/}
          <Route path="/player/:id" element={<Player />} />{" "}
          {/*Route-2 For Player. Movie still available even if someone removes Title from end of the url.*/}
          <Route path="/anime" element={<Anime />} />
          <Route path="/search/:query" element={<Container />} />
          <Route path="/search/anime/:query" element={<Container />} />
          <Route path="/search/" element={<Container />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App;
