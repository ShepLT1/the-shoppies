import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { getResults } from './ResultSlice';

export function Results() {

    const results = useSelector(getResults);

    return (
        <Grid.Row centered>
            {results.map((item, i) => {
                return <Grid.Column width={4} key={i}>
                    <p>Title: {item.title}</p>
                    <p>Released: {item.year}</p>
                    {item.poster !== "N/A" ? (<img src={item.poster} alt='movie poster'></img>):(<></>)}
                </Grid.Column>
            })}
        </Grid.Row>
    )
}