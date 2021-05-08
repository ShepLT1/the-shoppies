import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, Image, Button, Header, Message, Icon } from 'semantic-ui-react';
import { getResults } from './ResultSlice';
import { getNominations, updateNominations } from '../nominations/NominationSlice';
import moviePlaceholder from '../../movie-placeholder.jpg';
import styles from './results.module.css';

export function Results() {

    const results = useSelector(getResults);
    const nominations = useSelector(getNominations);
    const dispatch = useDispatch();

    const handleNominate = (target) => {
        const nomArr = [...nominations]
        const title = target.getAttribute('data-title');
        const year = target.getAttribute('data-year');
        const poster = target.getAttribute('data-poster');
        const id = nomArr.length;
        nomArr.push({id: id, title: title, year: year, poster: poster})
        dispatch(updateNominations(nomArr))
        console.log(title,year,poster)
    }

    const disableButton = (movie) => {
        for (let i = 0; i < nominations.length; i++) {
            if (nominations[i].title === movie.title && nominations[i].year === movie.year && nominations[i].poster === movie.poster) {
                return true
            }
        }
        return false
    }

    return (
        <Grid centered>
            {nominations.length === 5 ? (
                <Message warning id={styles.nomBanner} icon>
                    <Icon name='trophy' />
                    <Message.Content id={styles.nomBannerText}>
                        <Message.Header>Way to go! You've nominated 5 movies!</Message.Header>
                        <p>Max limit reached</p>
                    </Message.Content>
                </Message>
            ):(
                <></>
            )}
            <Grid.Row centered>
                <Header as='h3' id={styles.resultHeader}>
                    Search Results
                    <div className='titleLine'></div>
                </Header>
            </Grid.Row>
            <Grid.Row centered>
                {results.map((item, i) => {
                    return <Grid.Column key={i} className={styles.resultsCol} mobile={16} tablet={8} computer={4}>
                        <Card className={styles.resultsCard}>
                            {item.poster !== "N/A" ? (<Image src={item.poster} wrapped ui={false} />):(<Image src={moviePlaceholder} wrapped ui={false} />)}
                            <Card.Content>
                                <Card.Header>{item.title}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{item.year}</span>
                                </Card.Meta>
                            </Card.Content>
                            <Card.Content className={styles.nomBtnContainer}>
                            {disableButton(item) === true || nominations.length === 5 ? (
                                <Button disabled className={styles.nomBtn} data-title={item.title} data-year={item.year} data-poster={item.poster} onClick={(e) =>{handleNominate(e.target)}}>Nominate</Button>
                            ):(
                                <Button className={styles.nomBtn} data-title={item.title} data-year={item.year} data-poster={item.poster} onClick={(e) =>{handleNominate(e.target)}}>Nominate</Button>
                            )}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                })}
            </Grid.Row>
        </Grid>
    )
}