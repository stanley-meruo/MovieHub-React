import React, { useContext, useState } from 'react'
import Contextpage from '../Contextpage';
import { Link, useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import logo from "/logo.png"


const Searchbar = () => {

  const { filteredGenre, fetchSearch, setBackGenre, setGenres } = useContext(Contextpage);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = () => {
      // Clear the previous timeout to prevent premature execution
      if (typingTimeout) {
          clearTimeout(typingTimeout);
      }

      // Set a new timeout
      const newTimeout = setTimeout(() => {
          onKeyUp(value);
      }, 500); // Adjust the timeout duration as needed (in milliseconds)

      setTypingTimeout(newTimeout);
  };

  const onKeyUp = (query) => {
    // console.log(query)
    if (query !== "") {
        query = query.trim();

      if (query === "") {
        navigate("/");
      } else {
        navigate(`/search/${slugify(query)}`)
      }
    }
  };

  return (
    <>
      <div className="w-full bg-searchbg bg-center bg-cover bg-no-repeat bg-gray-500 bg-blend-multiply md:py-8 ">
        <Link
          to="/"
          className="grid w-1/4 mx-4 pt-4 cursor-pointer md:hidden"
          onClick={() => setActivemobile(!activemobile)}
        >
          <img src={logo} className="w-12 mx-auto" />
          <p className="font-bold text-white text-center">MOVIEHUB</p>
        </Link>
        <div className="h-full w-full flex justify-center items-center">
          <input
            type="search"
            name="searchpanel"
            id="searchpanel"
            placeholder="Search Movie ...Prs EntKey"
            className="p-3 w-full mx-5 my-8 md:w-[40rem] rounded-xl outline-none"
            onKeyUp={(e) => handleSearch()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Searchbar;