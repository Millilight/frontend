import {
  TextField,
  Button,
  Stack,
  Box,
  CircularProgress,
  Divider,
} from '@mui/material';
import React, { useState } from 'react';
import translate from '@/utils/translate';
import styles from './PaperworkProcedureContent.module.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useUpdateProceduresMutation } from 'generated/graphql';

export default function PaperorkItemContent(props: {
  item: PaperworkProcedure;
}) {
  // Mutation : update using codegen hook
  const [updateProceduresMutation, { loading, error }] =
    useUpdateProceduresMutation();

  // To display fields in read only or editing
  const [editionMode, setEditionMode] = useState(false);

  // Content modified by the user
  const [rows, setRows] = useState(props.item.rows ? props.item.rows : []);

  // Update the corresponding field
  function handleChange(
    rowIndex: number,
    field: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setRows(
      rows.map((row) =>
        rows.indexOf(row) === rowIndex
          ? {
              ...row,
              [field]: event.target.value,
            }
          : { ...row }
      )
    );
  }

  // Send the submitted information
  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    itemId: string
  ) {
    event.preventDefault();
    setEditionMode(false);
    updateProceduresMutation({
      variables: { [itemId]: rows },
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
    setRows(props.item.rows ? props.item.rows : []);
  }

  return (
    <Stack
      spacing={2}
      component="form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(e, props.item.itemId);
      }}
    >
      {rows
        ? rows.map((row: PaperworkProcedureRow) => (
            <div key={'row' + rows.indexOf(row)}>
              <div className={styles.horizontal_container}>
                {Object.entries(row).map(([key, value]) => (
                  <TextField
                    key={key}
                    id={key}
                    className={styles.field}
                    label={translate(
                      'paperwork.' + props.item.itemId + '.' + key
                    )}
                    value={value}
                    onChange={(e) => handleChange(rows.indexOf(row), key, e)}
                    disabled={!editionMode}
                    fullWidth
                    required
                    multiline
                    name="content"
                  />
                ))}
                {editionMode ? (
                  <Button
                    className="yellow-button-square"
                    variant="outlined"
                    onClick={() => {
                      const index = rows.indexOf(row);
                      if (index !== -1) rows.splice(index, 1);
                      if (rows.length === 0) rows.push(props.item.emptyRow);
                    }}
                  >
                    {' '}
                    <DeleteForeverIcon />
                  </Button>
                ) : null}
              </div>
              <Divider />
            </div>
          ))
        : null}
      {editionMode ? (
        <div>
          <div style={{ marginBottom: '12px' }}>
            <Button
              className="yellow-button-square"
              variant="outlined"
              onClick={() => {
                rows.push(props.item.emptyRow);
              }}
            >
              {' '}
              <AddCircleOutlineIcon />
            </Button>
            <br />
          </div>
          <div className={styles.horizontal_container}>
            <Button className="yellow-button" variant="contained" type="submit">
              {translate('common.button.save')}
            </Button>
            <Button
              className="yellow-button-outlined"
              variant="outlined"
              onClick={handleCancel}
            >
              {translate('common.button.cancel')}
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.horizontal_container}>
          <Button
            className="yellow-button"
            variant="contained"
            onClick={() => setEditionMode(true)}
          >
            {translate('common.button.edit')}
          </Button>
        </div>
      )}
    </Stack>
  );
}
