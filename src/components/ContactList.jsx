import React, { useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';

export default function ContactList() {
  const { phoneBook } = usePhoneBookStore();
  const [search, setSearch] = useState('');

  const filteredList = phoneBook.filter((item) => item.name.includes(search));
  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <TextField
        label='검색'
        variant='outlined'
        size='small'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredList.map((item, idx) => (
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
            px: 2,
          }}
          key={idx}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar>{item.name.charAt(0)}</Avatar>
            <CardContent sx={{ padding: '12px 0' }}>
              <Typography variant='subtitle1'>{item.name}</Typography>
              <Typography variant='body2' color='text.secondary'>
                {item.phoneNumber}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ))}
    </Box>
  );
}
