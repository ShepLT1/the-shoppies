import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, getSearch } from './SearchSlice';
import { updateResults } from '../results/ResultSlice';
import axios from 'axios';
import { Form, Grid, Icon } from 'semantic-ui-react'

export function Search() {

    const search = useSelector(getSearch);
    const dispatch = useDispatch();

    const apiKey = '71fc9876'

    const handleSearch = (e) => {
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
    }

    return (
        <Grid.Column width={4}>
            <Form onSubmit={handleSearch}>
                <Form.Input
                    icon={<Icon name='search' inverted circular link onClick={handleSearch}/>}
                    placeholder='Search...'
                    onChange={(e) => {dispatch(updateSearch(e.target.value))}}
                />
            </Form>
        </Grid.Column>
    )
}