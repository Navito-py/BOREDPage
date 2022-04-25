import React from 'react'
import {getThing} from '../Actions'
import { useSelector, useDispatch } from 'react-redux'
import '../Styles/Home.css' 

export default function Home() {
    const dispatch = useDispatch()

    const thing = useSelector(state => state.boredthing)

    const handleSearchThing = (e) => {
        e.preventDefault()
        dispatch(getThing())
    }

    return (
        <div className='homediv'>
            <div className='textdiv'>
                <h2 className='h2textdiv'>{thing.activity? thing.activity: 'press the BORED Button'}</h2>
                {thing.type?  <h3 className='h2textdiv'> type: {thing.type} </h3> : ''}
                {thing.participants?  <h3 className='h2textdiv'> participants: {thing.participants} </h3> : ''}
            </div>
            <button className='button' onClick={handleSearchThing}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> BORED Button
                </span><span></span>
            </button>
        </div>
    )
}
