import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';

export default function ContactForm() {
  const initialContact = { name: '', phoneNumber: '' };
  const [contact, setContact] = useState(initialContact);
  const { addContact } = usePhoneBookStore();

  const handleAdd = () => {
    if (!contact.name.trim() || !contact.phoneNumber.trim()) return;

    addContact(contact);
    setContact(initialContact);
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
      <TextField
        id='name'
        label='이름'
        variant='outlined'
        autoComplete='off'
        fullWidth
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <TextField
        id='phone-num'
        label='전화번호'
        variant='outlined'
        autoComplete='off'
        fullWidth
        value={contact.phoneNumber}
        onChange={(e) =>
          setContact({ ...contact, phoneNumber: e.target.value })
        }
      />
      <Button variant='outlined' size='large' fullWidth onClick={handleAdd}>
        추가
      </Button>
    </Box>
  );
}
