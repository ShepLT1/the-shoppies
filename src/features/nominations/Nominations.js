import React from 'react';
import { useSelector } from 'react-redux';
import { getNominations } from './NominationSlice';
import { Grid, List, Image } from 'semantic-ui-react'

export function Nominations() {

    const nominations = useSelector(getNominations);

    return (
        <Grid.Row centered>
            <Grid.Column>
                <List>
                    {nominations.map((item, i) => {
                        return <List.Item key={i}>
                        <Image src={item.poster} />
                        <List.Content>
                            <List.Header>{item.title}</List.Header>
                            <List.Description>
                            Release Year: {item.year}
                            </List.Description>
                        </List.Content>
                        </List.Item>
                    })}
                </List>
            </Grid.Column>
        </Grid.Row>
    )
}