import React from 'react';
import { Search } from './features/search/Search';
import { Results } from './features/results/Results';
import { Nominations } from './features/nominations/Nominations';
import { Grid } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Grid centered stackable>
      <Grid.Row centered>
        <Search />
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Results />
        </Grid.Column>
        <Grid.Column>
          <Nominations />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
