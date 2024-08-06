import React, { useState, useEffect ,useContext} from 'react'
import { Link } from 'react-router-dom'
import noimage from '../assets/images/no-image.jpg'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { toast } from 'react-toastify';
import Contextpage from '../Contextpage';



const Moviecard = ({ movie }) => {
    // const { user } = useContext(Contextpage);

    // const [isBookmarked, setIsBookmarked] = useState(null);

    // useEffect(() => {
    //     if (localStorage.getItem(movie.id)) {
    //         setIsBookmarked(true);
    //     } else {
    //         setIsBookmarked(false);
    //     }
    // }, [movie.id]);

    // const BookmarkMovie = () => {
    //     if (!user) {
    //         toast.info("To bookmark this movie, please log in.");
    //     } else {
    //         setIsBookmarked(!isBookmarked)
    //         if (isBookmarked) {
    //             localStorage.removeItem(movie.id);
    //         } else {
    //             localStorage.setItem(movie.id, JSON.stringify(movie));
    //         }
    //     }
    // }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        layout
        className="card relative w-full h-[410px] sm:w-[400px] md:mx-0 lg:w-96 xl:w-[350px] my-5 mx-6 cursor-pointer rounded-xl overflow-hidden"
      >
        {/* Rating */}
        <div className="absolute z-20 right-0 m-5 p-2 rounded-full flex items-center font-bold bg-black text-white">
          {/* <AiFillStar className="text-black text-2xl" /> */}

          {(movie.vote_average || 0) > 7 ? (
            <div>
              <AiFillStar className="text-orange-600 text-2xl" />
              {(movie.vote_average || 0).toFixed(1)}
            </div>
          ) : (movie.vote_average || 0) > 5.5 ? (
            <div>
              <AiFillStar className="text-white text-2xl" />
              {(movie.vote_average || 0).toFixed(1)}
            </div>
          ) : (
            <div>
              <AiOutlineStar className="text-white text-2xl" />
              {(movie.vote_average || 0).toFixed(1)}
            </div>
          )}

          {/* {(movie.vote_average || 0) > 7 ? (
            <h1 className="font-bold text-green-500 p-2 bg-zinc-900 rounded-full">
              {(movie.vote_average || 0).toFixed(1)}
            </h1>
          ) : (movie.vote_average || 0) > 5.5 ? (
            <h1 className="font-bold text-orange-400 p-2 bg-zinc-900 rounded-full">
              {(movie.vote_average || 0).toFixed(1)}
            </h1>
          ) : (
            <h1 className="font-bold text-red-600 p-2 bg-zinc-900 rounded-full">
              {(movie.vote_average || 0).toFixed(1)}
            </h1>
          )} */}
        </div>

        <div className="absolute bottom-0 w-full flex justify-between items-center p-5 z-20">
          <h1 className="text-white text-2xl font-bold  break-normal break-words">
            {movie.title || movie.name}
          </h1>
        </div>

        <Link
          to={`/moviedetail/${movie.id}`}
          className="h-full w-full shadow absolute z-10"
        ></Link>

        <div>
          {movie.poster_path === null ? (
            <img className="img object-cover" src={noimage} />
          ) : (
            <LazyLoadImage
              effect="blur"
              className="img object-cover"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
          )}
        </div>
      </motion.div>
    );
}

export default Moviecard
