import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import PaperworkProcedureContent from '../PaperworkProcedureContent/PaperworkProcedureContent';
import styles from './PaperworkProcedures.module.css';

export default function PaperworkProcedures(props: {
  items: PaperworkProcedure[];
  helpCallback: (
    title: JSX.Element,
    image: string,
    newHelp: JSX.Element
  ) => void;
}) {
  return (
    <div className="content-container">
      <Stack spacing={2} justifyContent="center" alignItems="center">
        {props.items
          ? props.items.map((item: PaperworkProcedure) => (
              <Box
                key={item.itemId}
                onClick={() =>
                  props.helpCallback(item.title, item.image, item.help)
                }
                sx={{
                  width: '90%',
                  boxShadow: 2,
                }}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      paddingX: '50px',
                      paddingY: '10px',
                    }}
                  >
                    <Typography>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordion}>
                    <PaperworkProcedureContent
                      item={item}
                    ></PaperworkProcedureContent>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))
          : null}
      </Stack>
    </div>
  );
}
