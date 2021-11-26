import './App.css';
import { Grid, Typography } from '@mui/material';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Grid container sx={{height: '100vh'}}>
        <NavBar />
        <Main/>
      </Grid>
    </div>
  );
}

export default App;
