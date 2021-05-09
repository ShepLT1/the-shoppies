import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNominations, updateNominations } from './NominationSlice';
import { Grid, List, Image, Header, Button } from 'semantic-ui-react';
import styles from './nominations.module.css';

export function Nominations() {

    const nominations = useSelector(getNominations);
    const dispatch = useDispatch();

    // removes nomination from redux store & local storage
    const handleRemoval = (target) => {
        const id = target.getAttribute('data-id');
        const newNomsArr = [...nominations]
        newNomsArr.splice(id, 1)
        localStorage.setItem('nominations', JSON.stringify(newNomsArr))
        dispatch(updateNominations(newNomsArr));
    }

    return (
        <Grid centered>
            <Grid.Row centered>
                <Header as='h3' id={styles.nomHeader}>
                    Nominations
                    <div className='titleLine'></div>
                </Header>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column id={styles.nomColumn}>
                    <List>
                        {nominations ? (nominations.map((item, i) => {
                            return <List.Item key={i} className={styles.nomItem}>
                                <div className={styles.nomImgTextContainer}>
                            <Image src={item.poster} size='tiny' rounded />
                            <List.Content className={styles.nomTextContainer}>
                                <List.Header>{item.title}</List.Header>
                                <List.Description>
                                {item.year}
                                </List.Description>
                            </List.Content>
                            </div>
                            <Button color='black' data-id={i} onClick={(e) => {handleRemoval(e.target)}}>
                                Remove
                            </Button>
                            </List.Item>
                        })):(<></>)}
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}