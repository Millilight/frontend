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
import { useRouter } from 'next/router';
import { useGetLegatorUsersQuery } from 'generated/graphql';

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
      backgroundColor: 'var(--dark-blue)',
      color: 'var(--white)',
    },
  }),
  ...(!open && {
    overflowX: 'hidden',
    width: '80px',
    '& .MuiDrawer-paper': {
      overflowX: 'hidden',
      width: '80px',
      backgroundColor: 'var(--dark-blue)',
      color: 'var(--white)',
    },
  }),
}));

export default function MenuDrawer(props: { selectedPage: string }) {
  //To handle redirections
  const router = useRouter();

  // Whether the menu is opened (icons + text) or shrunk on the left hand side (icons only)
  const [open, setOpen] = React.useState(false);

  // Conditional display of "Access to legators' safe" : if at least 1 legator
  const { data, error } = useGetLegatorUsersQuery();
  const legators = data?.user.legator_users;
  const hasLegators = !error && legators?.length ? true : false;

  function displayAccessToLegatorsSafe() {
    if (hasLegators) {
      return (
        <ListItemButton
          onClick={() => {
            router.push('/espace-personnel/coffre-fort-de-mes-proches');
          }}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            backgroundColor:
              props.selectedPage === 'legators_safe' ? '#000000' : 'null',
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
                width: '35px',
              }}
              alt="..."
              src="/key.png"
            />
          </ListItemIcon>
          <ListItemText
            primary={translate('menu.legators_safe')}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      );
    }
  }

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
            router.push('/espace-personnel');
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
              router.push('/espace-personnel/volontes-ceremoniales');
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
              router.push('/espace-personnel/volontes-medicales');
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
              router.push('/espace-personnel/demarches-administratives');
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
              router.push('/espace-personnel/espace-libre');
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
            router.push('/espace-personnel/personnes-de-confiance');
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
        {displayAccessToLegatorsSafe()}
      </List>
    </Drawer>
  );
}
