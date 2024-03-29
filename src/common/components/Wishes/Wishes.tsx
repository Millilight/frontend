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
import WishContent from '@/components/WishContent/WishContent';
import styles from './Wishes.module.css';

export default function Wishes(props: {
  wishes: Wish[];
  helpCallback: (
    title: JSX.Element,
    image: string,
    newHelp: JSX.Element
  ) => void;
}) {
  return (
    <div className="content-container">
      <Stack spacing={2} justifyContent="center" alignItems="center">
        {props.wishes
          ? props.wishes.map((wish: Wish) => (
              <Box
                key={wish.wishId}
                onClick={() =>
                  props.helpCallback(wish.title, wish.image, wish.help)
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
                    <Typography>{wish.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordion}>
                    <WishContent wish={wish}></WishContent>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))
          : null}
      </Stack>
    </div>
  );
}
