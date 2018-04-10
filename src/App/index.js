// @flow
import * as React from 'react';
import theme from '@/toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Detail from 'Components/Detail';
import Grid from 'Components/Grid';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import '@/toolbox/theme.css';

const App = ():React.Element<typeof Grid> =>
  <ThemeProvider {...{theme}}>
    <React.Fragment>
      <BrowserRouter>
        <React.Fragment>
          <AppBar title='Music reviews'>
            <Navigation type='horizontal'>
            <Link to='/'>All reviews</Link>
            </Navigation>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Grid}/>
            <Route exact path="/:slug" component={Detail}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </React.Fragment>
  </ThemeProvider>

export default App;
