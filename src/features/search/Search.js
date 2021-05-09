import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, getSearch } from './SearchSlice';
import { updateResults } from '../results/ResultSlice';
import axios from 'axios';
import { Form, Grid, Icon, Header } from 'semantic-ui-react'
import styles from './search.module.css';

export function Search() {

    const search = useSelector(getSearch);
    const dispatch = useDispatch();

    // free api key, no need to hide in .env file
    const apiKey = '71fc9876'

    // searches OMDB for movie based on user input & updates results
    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`, {
            params: {
                type: 'movie'
            }
        }).then((data) => {
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
        <Grid id={styles.searchGrid}>
            <Header as='h3' id={styles.searchHeader}>Search Movie Titles</Header>
            <Grid.Row id={styles.searchRow}>
                <Grid.Column width={12} id={styles.searchCol}>
                    <Form onSubmit={handleSearch}>
                        <Form.Input
                            id={styles.searchBar}
                            autoComplete='off'
                            icon={<Icon name='search' inverted circular link onClick={handleSearch}/>}
                            placeholder='Search...'
                            onChange={(e) => {dispatch(updateSearch(e.target.value))}}
                        />
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}