import React from 'react';
import { useSelector } from 'react-redux';
import { getResults } from './ResultSlice';
import '../../App.css';

export function Results() {

    const results = useSelector(getResults);

    return (
        <div className='row'>
            <div className='col'>
                {results.map((item, i) => {
                    return <div key={i}>
                        <p>Title: {item.title}</p>
                        <p>Released: {item.year}</p>
                        {item.poster !== "N/A" ? (<img src={item.poster} alt='movie poster'></img>):(<></>)}
                    </div>
                })}
            </div>
        </div>
    )
}