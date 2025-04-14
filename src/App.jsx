import { Box, Container, Grid } from '@mui/material';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <Container>
      <Box textAlign='center'>
        <h1>연락처 앱</h1>
      </Box>
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
