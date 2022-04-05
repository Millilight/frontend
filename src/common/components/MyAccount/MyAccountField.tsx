import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MyAccountFieldContent from '@/components/MyAccount/MyAccountFieldContent';

export default function MyAccountField(props: {
  myaccountfields: MyAccountField[];
}) {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ m: 1, textAlign: 'center' }}
    >
      {props.myaccountfields
        ? props.myaccountfields.map((field: MyAccountField) => (
            <Box
              key={field.fieldId}
              sx={{
                width: '50%',
                boxShadow: 2,
                bgcolor: '#FFFFFF',
                borderRadius: '25px',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  m: 1,
                }}
              >
                {field.title}
              </Typography>
              <MyAccountFieldContent
                myaccountfield={field}
              ></MyAccountFieldContent>
            </Box>
          ))
        : null}
    </Stack>
  );
}
