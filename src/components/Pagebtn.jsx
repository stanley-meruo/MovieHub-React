import React, { useContext } from 'react'
import Contextpage from '../Contextpage';
import Button from '../assets/Btn'


const Pagebtn = () => {

    const { setPage, page } = useContext(Contextpage);

    return (
        <>
            <div className='btnpanel flex justify-center items-center'>
                <a href='#' onClick={() => setPage(page - 1)}><Button item="Back" /></a>
                <div className='px-4 py-2 bg-slate-700  text-white font-semibold rounded-full'>{page}
                </div>
                <a href='#' onClick={() => setPage(page + 1)}><Button item="Next" /></a>
            </div>

        </>
    )
}
export default Pagebtn;
