import { Container, Grid, Typography } from '@mui/material';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <Container>
      <Typography sx={{ mt: 5, mb: 5 }} variant='h3' align='center'>
        연락처 앱
      </Typography>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
