import './page.module.css';
import CommonTable from '../components/Table';
import { Grid } from '@mui/material';

function Home() {
  return (
    <>
    <Grid container mt={4}>
      <Grid item lg={6} xs={11} margin="auto">
        <CommonTable/>
      </Grid>
    </Grid>
    </>
  );
}

export default Home;

