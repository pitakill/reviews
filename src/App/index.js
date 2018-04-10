// @flow
import * as React from 'react';
import theme from '@/toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Grid from 'Components/Grid';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import '@/toolbox/theme.css';

const App = ():React.Element<typeof Grid> => (
  <ThemeProvider {...{theme}}>
    <React.Fragment>
      <AppBar title="Music reviews"/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Grid}/>
          <Route exact path="/:id" component={() => <div>Hola</div>}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  </ThemeProvider>
);

export default App;
