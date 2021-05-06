import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, getSearch } from './SearchSlice';
import { updateResults } from '../results/ResultSlice';
import axios from 'axios';
import '../../App.css';

export function Search() {

    const search = useSelector(getSearch);
    const dispatch = useDispatch();

    const apiKey = '71fc9876'

    return (
        <div className='row'>
            <form className='col'>
                <label for='movieSearch'>Movie Title</label>
                <input type='text' id='movieSearch' onChange={(e) => {dispatch(updateSearch(e.target.value))}}></input>
                <input type='submit' value='Search' onClick={async (e) => {
                    e.preventDefault();
                    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`, {
                        params: {
                            type: 'movie'
                        }
                    }).then((data) => {
                        console.log(data)
                        let index = 0;
                        const updatedResultArr = [];
                        let results = data.data.Search
                        while (results[index]) {
                            const movie = {
                                title: results[index].Title,
                                year: results[index].Year,
                                poster: results[index].Poster
                            }
                            updatedResultArr.push(movie)
                            index++
                        }
                        dispatch(updateResults(updatedResultArr));
                    }).catch((e) => {
                        console.log(e)
                    })
                }}></input>
            </form>
        </div>
    )
}