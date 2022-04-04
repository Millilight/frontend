import * as React from 'react';
import {
  Box,
  List,
  Divider,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  styled,
  ListItem,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';

import styles from './MenuDrawer.module.css';
import translate from '@/utils/translate';

const drawerWidth = 350;

// Overriding the style of MUI's Drawer component to handle differences between opened and closed drawer
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    width: drawerWidth,
    overflowX: 'hidden',
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      overflowX: 'hidden',
      backgroundColor: '#03546d',
      color: '#ffffff',
    },
  }),
  ...(!open && {
    overflowX: 'hidden',
    width: '80px',
    '& .MuiDrawer-paper': {
      overflowX: 'hidden',
      width: '80px',
      backgroundColor: '#03546d',
      color: '#ffffff',
    },
  }),
}));

export default function MenuDrawer(props: {
  selectedPage: string;
  setSelectedPage: (newSelectedPage: string) => void;
}) {
  // Whether the menu is opened (icons + text) or shrunk on the left hand side (icons only)
  const [open, setOpen] = React.useState(false);

  // To know which icon (page) to select on the menu

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={styles.drawer_header}>
        <IconButton
          onClick={() => {
            props.setSelectedPage('home');
          }}
        >
          <HomeIcon sx={{ color: 'white' }} />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                width: '40px',
              }}
              alt="..."
              src="/safe.png"
            />
          </ListItemIcon>
          <ListItemText
            primary={translate('menu.safe')}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItem>
        <div className="submenu">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              pl: open ? 10 : 3,
              backgroundColor:
                props.selectedPage === 'ceremonial' ? '#000000' : 'null',
            }}
            onClick={() => {
              props.setSelectedPage('ceremonial');
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                sx={{
                  width: '25px',
                }}
                alt="..."
                src="/candle.png"
              />
            </ListItemIcon>
            <ListItemText
              primary={translate('menu.ceremonial')}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              props.setSelectedPage('medical');
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              pl: open ? 10 : 3,
              backgroundColor:
                props.selectedPage === 'medical' ? '#000000' : 'null',
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                sx={{
                  width: '25px',
                }}
                alt="..."
                src="/caduce.png"
              />
            </ListItemIcon>
            <ListItemText
              primary={translate('menu.medical')}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              props.setSelectedPage('paperwork');
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              pl: open ? 10 : 3,
              backgroundColor:
                props.selectedPage === 'paperwork' ? '#000000' : 'null',
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                sx={{
                  width: '25px',
                }}
                alt="..."
                src="/house.png"
              />
            </ListItemIcon>
            <ListItemText
              primary={translate('menu.admin')}
              sx={{
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                opacity: open ? 1 : 0,
              }}
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              props.setSelectedPage('free_space');
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              pl: open ? 10 : 3,
              backgroundColor:
                props.selectedPage === 'free_space' ? '#000000' : 'null',
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                sx={{
                  width: '25px',
                }}
                alt="..."
                src="/paint.png"
              />
            </ListItemIcon>
            <ListItemText
              primary={translate('menu.free_space')}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </div>
        <ListItemButton
          onClick={() => {
            props.setSelectedPage('trusted_persons');
          }}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            backgroundColor:
              props.selectedPage === 'trusted_persons' ? '#000000' : 'null',
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                width: '40px',
              }}
              alt="..."
              src="/trusted_persons.png"
            />
          </ListItemIcon>
          <ListItemText
            primary={translate('menu.trusted_persons')}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
