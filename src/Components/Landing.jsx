import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Landing.css'

export default function Landing() {
    return (
        <div className='divlanding'>
            <h1 className='h1landing'>The BORED page</h1>
            <h3 className='h3landing'>The function of this BORED page is give you something to do when you are BORED the page will randomly give you something to do when you are BORED, i did this page because i was BORED.</h3>
            <Link to='/Bored'>
            <button className='button'>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> Press this if you are BORED
                </span><span></span>
            </button>
            </Link>
        </div>
    )
}
