import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Moviecard from '../components/Moviecard';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
// import Pagebtn from '../components/Pagebtn';
import { Link, useParams } from 'react-router-dom'
import { HiChevronLeft } from "react-icons/hi";


const Search = () => {

    const { searchedMovies, loader, page, setPage, totalPage, setMovies, activegenre, filteredGenre, fetchSearch } = useContext(Contextpage);
    const { query } = useParams()

    useEffect(() => {
        // Call fetchSearch(query) only once when the component mounts
        fetchSearch(query);
    }, [query]); // Only re-run if 'query' or 'fetchSearch' changes

    return (
        <section>
            <Link to="/" className='absolute text-4xl text-black bg-white m-4 md:m-5 lg:p-2 rounded-full'><HiChevronLeft /></Link>
            <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
                <Header />
                <motion.div
                    layout
                    className="flex flex-wrap relative justify-evenly md:justify-around">
                    <AnimatePresence>
                        {
                            loader ? <span className="loader m-10"></span> :
                                <>
                                    {searchedMovies.map((movie) => (
                                    <Moviecard key={movie.id} movie={movie} />
                                    ))}
                                </>
                        }
                    </AnimatePresence>
                </motion.div>
                {/* <Pagebtn /> */}
            </div>
        </section>

    )
}

export default Search;