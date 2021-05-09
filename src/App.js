import React from 'react';
import { useDispatch } from 'react-redux';
import { Search } from './features/search/Search';
import { Results } from './features/results/Results';
import { Nominations } from './features/nominations/Nominations';
import { updateNominations } from './features/nominations/NominationSlice';
import { Grid, Header } from 'semantic-ui-react';
import './App.css';

function App() {

  const dispatch = useDispatch();

  // retrieves stored nominations on page load
  const localNoms = JSON.parse(localStorage.getItem('nominations'));
  dispatch(updateNominations(localNoms));

  return (
    <Grid centered stackable id='grid'>
      <Header id='pageHeader' as='h1'>
        The Shoppies
        <div id='pageHeadLine'></div>
        </Header>
      <Grid.Row id='searchContainer'>
        <Search />
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column width={11}>
          <Results />
        </Grid.Column>
        <Grid.Column width={5}>
          <Nominations />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
