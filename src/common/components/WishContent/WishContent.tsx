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
import translate from '@/utils/translate';

export default function WishContent(props: { wish: Wish }) {
  // Mutation : update using codegen hook
  const [updateWishesMutation, { loading, error }] = useUpdateWishesMutation();

  // To display fields in read only or editing
  const [editionMode, setEditionMode] = useState(false);

  // Content modified by the user
  const [content, setContent] = useState(
    props.wish.content ? props.wish.content : ''
  );

  // Send the submitted wish
  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    wishId: string
  ) {
    event.preventDefault();
    setEditionMode(false);
    updateWishesMutation({
      variables: { [wishId]: content },
    });
    if (loading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      );
    }
    if (error) {
      alert(translate('wish.error'));
      return null;
    }
  }

  // Cancel : reset to previous content
  function handleCancel() {
    setEditionMode(false);
    setContent(props.wish.content ? props.wish.content : '');
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
              id={props.wish.wishId + '_field'}
              label={translate('wish.label')}
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
                  {translate('common.button.save')}
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
                  onClick={handleCancel}
                >
                  {translate('common.button.cancel')}
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
                onClick={() => setEditionMode(true)}
              >
                {translate('common.button.edit')}
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
                id={props.wish.wishId + '_field'}
                aria-labelledby="demo-radio-buttons-group-label"
                value={content}
                onChange={(e) => setContent(e.target.value)}
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
                  {translate('common.button.save')}
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
                  onClick={handleCancel}
                >
                  {translate('common.button.cancel')}
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
                onClick={() => setEditionMode(true)}
              >
                {translate('common.button.edit')}
              </Button>
            )}
          </Stack>
        );
      default:
        return null;
    }
  })();
}
