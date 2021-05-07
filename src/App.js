import React from 'react';
import { Search } from './features/search/Search';
import { Results } from './features/results/Results';
import { Nominations } from './features/nominations/Nominations';
import { Grid, Header } from 'semantic-ui-react';
import './App.css';

function App() {
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
        <Grid.Column width={12}>
          <Results />
        </Grid.Column>
        <Grid.Column width={4}>
          <Nominations />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
