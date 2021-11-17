import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core';
import { deepOrange, yellow } from '@material-ui/core/colors';
import Layout from './components/Layout';
import Tablo from './pages/Tablo';


const theme = createTheme({
  palette:{
    primary:{
      main: '#fefefe'
    },
    secondary: {
      main: deepOrange[500],
      
    },
    agelir: yellow[700],
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  const [notes, setNotes] = useState([])
  
  
  return (
    <ThemeProvider theme={theme} >
    <Router>
      <Layout notes={notes}  >
      <Switch>
        <Route exact path="/">
          <Notes notes={notes} setNotes={setNotes} />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/tablo">
          <Tablo notes={notes}  />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
