import { Box, Container, Grid, Switch, Typography } from '@mui/material';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useThemeStore } from './stores/useThemeStore';

function App() {
  const { mode, toggleMode } = useThemeStore();
  return (
    <Container>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap={2}
        sx={{ mt: 3, mb: 3 }}
      >
        <Typography variant='h5'>연락처 앱</Typography>
        <Switch checked={mode === 'dark'} onChange={toggleMode} />
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
