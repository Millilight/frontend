import {
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack,
  Box,
  CircularProgress,
} from '@mui/material';
import React, { useState } from 'react';
import { useUpdateWishesMutation } from 'generated/graphql';

export default function WishContent(props: { wish: Wish }) {
  // Mutation : update using codegen hook
  const [updateWishesMutation, { loading, error }] = useUpdateWishesMutation();

  // To display fields in read only or editing
  const [editionMode, setEditionMode] = useState(false);

  // Send the submitted wish
  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    wishId: string
  ) {
    event.preventDefault();
    setEditionMode(false);
    const target = new FormData(event.currentTarget);
    updateWishesMutation({
      variables: { [wishId]: target.get('content') },
    });
    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      );
    }
    if (error) {
      alert('Une erreur est survenue, l’enregistrement n’a pas été effectué.');
      return null;
    }
  }
  return (() => {
    switch (props.wish.type) {
      case 'textfield':
        return (
          <Stack
            spacing={2}
            component="form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              handleSubmit(e, props.wish.wishId);
            }}
          >
            <TextField
              id={props.wish.title + '_field'}
              placeholder="Entrez vos volontés ici..."
              defaultValue={props.wish.content}
              disabled={!editionMode}
              fullWidth
              required
              multiline
              name="content"
            />
            {editionMode ? (
              <div>
                <Button
                  sx={{
                    bgcolor: '#03546D',
                    width: '170px',
                    borderRadius: '25px',
                  }}
                  variant="contained"
                  type="submit"
                >
                  Enregistrer
                </Button>
                <Button
                  sx={{
                    bgcolor: '#ffffff',
                    borderColor: '#03546D',
                    width: '130px',
                    borderRadius: '25px',
                    color: '#03546D',
                    ml: '10px',
                  }}
                  variant="outlined"
                  onClick={() => setEditionMode(!editionMode)}
                >
                  Annuler
                </Button>
              </div>
            ) : (
              <Button
                sx={{
                  bgcolor: '#ffffff',
                  borderColor: '#03546D',
                  width: '170px',
                  borderRadius: '25px',
                  color: '#03546D',
                }}
                variant="outlined"
                onClick={() => setEditionMode(!editionMode)}
              >
                Modifier
              </Button>
            )}
          </Stack>
        );
      case 'radio':
        return (
          <Stack
            spacing={2}
            component="form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              handleSubmit(e, props.wish.wishId);
            }}
          >
            <FormControl required>
              <RadioGroup
                id={props.wish.title + '_field'}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={props.wish.content}
                name="content"
              >
                {props.wish.possibleValues
                  ? props.wish.possibleValues.map((val: string) => (
                      <FormControlLabel
                        key={val}
                        value={val}
                        control={<Radio />}
                        label={val}
                        disabled={!editionMode}
                      />
                    ))
                  : null}
              </RadioGroup>
            </FormControl>
            {editionMode ? (
              <div>
                <Button
                  sx={{
                    bgcolor: '#03546D',
                    width: '170px',
                    borderRadius: '25px',
                  }}
                  variant="contained"
                  type="submit"
                >
                  Enregistrer
                </Button>
                <Button
                  sx={{
                    bgcolor: '#ffffff',
                    borderColor: '#03546D',
                    width: '130px',
                    borderRadius: '25px',
                    color: '#03546D',
                    ml: '10px',
                  }}
                  variant="outlined"
                  onClick={() => setEditionMode(!editionMode)}
                >
                  Annuler
                </Button>
              </div>
            ) : (
              <Button
                sx={{
                  bgcolor: '#ffffff',
                  borderColor: '#03546D',
                  width: '170px',
                  borderRadius: '25px',
                  color: '#03546D',
                }}
                variant="outlined"
                onClick={() => setEditionMode(!editionMode)}
              >
                Modifier
              </Button>
            )}
          </Stack>
        );
      default:
        return null;
    }
  })();
}
