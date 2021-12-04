import './App.css';
import { Grid, Typography } from '@mui/material';
import NavBar from './components/NavBar';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Grid container sx={{height: '100vh'}}>
        <NavBar />
        <Main sx={{height: '100%'}}/>
      </Grid>
    </div>
  );
}

export default App;
