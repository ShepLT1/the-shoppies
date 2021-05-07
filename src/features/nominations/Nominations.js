import React from 'react';
import { useSelector } from 'react-redux';
import { getNominations } from './NominationSlice';
import { Grid, List, Image, Header } from 'semantic-ui-react';
import styles from './nominations.module.css';
import '../../App.css'

export function Nominations() {

    const nominations = useSelector(getNominations);

    return (
        <Grid>
            <Grid.Row centered vertical>
                <Header as='h3' id={styles.nomHeader}>
                    Nominations
                    <div className='titleLine'></div>
                </Header>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column id={styles.nomColumn}>
                    <List divided size='large'>
                        {nominations.map((item, i) => {
                            return <List.Item key={i} className={styles.nomItem}>
                            <Image src={item.poster} size='tiny' rounded />
                            <List.Content>
                                <List.Header>{item.title}</List.Header>
                                <List.Description>
                                {item.year}
                                </List.Description>
                            </List.Content>
                            </List.Item>
                        })}
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}