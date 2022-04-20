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
import MenuIcon from '@mui/icons-material/Menu';
// import MuiDrawer from '@mui/material/Drawer';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import AccountMenu from '../AccountMenu/AccountMenu';

import styles from './MenuDrawer.module.css';
import translate from '@/utils/translate';
import { useRouter } from 'next/router';
import { useGetLegatorUsersQuery } from 'generated/graphql';

export default function MenuDrawer(props: { selectedPage: string }) {
  //To handle redirections
  const router = useRouter();

  // Whether the menu is opened (icons + text) or shrunk on the left hand side (icons only)
  const [open, setOpen] = React.useState(false);
  // open = true;
  // Conditional display of "Access to legators' safe" : if at least 1 legator
  const { data, error } = useGetLegatorUsersQuery();
  const legators = data?.user.legators;
  const hasLegators = !error && legators?.length ? true : false;

  return (
    <>
      {' '}
      <div className={styles.drawer_header}>
        {open ? (
          <MenuOpenIcon onClick={() => setOpen(false)} />
        ) : (
          <MenuIcon onClick={() => setOpen(true)} />
        )}
      </div>
      <div
        className={`${styles.menu_container} ${
          open ? styles.menu_open : styles.menu_closed
        }`}
      >
        <div className={styles.account_menu_container}>
          <AccountMenu />
        </div>
        {/* <Divider sx={{ color: '#FFFFFF', mt: 8, fontSize: '12px' }}>
        Mon espace
      </Divider> */}

        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: 'flex-start',
            px: 2.5,
            pl: 3,
            mt: 2,
            backgroundColor: 'null',
          }}
          onClick={() => {
            router.push('/espace-personnel');
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: 'center',
            }}
          >
            <HomeIcon sx={{ color: 'white' }} />
            <div
              style={{ marginTop: '5px' }}
              className={`${styles.text_item} ${
                open ? styles.text_item_visible : styles.text_item_hidden
              }`}
            >
              Espace Personnel
            </div>
          </ListItemIcon>
        </ListItemButton>
        <Divider sx={{ color: '#FFFFFF', mt: 8, fontSize: '12px' }}>
          Coffre-fort
        </Divider>

        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: 'flex-start',
            px: 2.5,
            pl: 3,
            mt: 2,
            backgroundColor:
              props.selectedPage === 'ceremonial' ? '#0b374c' : 'null',
          }}
          onClick={() => {
            router.push('/espace-personnel/volontes-ceremoniales');
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                width: '30px',
              }}
              alt="..."
              src="/candle.png"
            />
            <div
              className={`${styles.text_item} ${
                open ? styles.text_item_visible : styles.text_item_hidden
              }`}
            >
              Volontés cérémoniales
            </div>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            router.push('/espace-personnel/volontes-medicales');
          }}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            pl: 3,
            mt: 2,
            backgroundColor:
              props.selectedPage === 'medical' ? '#0b374c' : 'null',
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
                width: '30px',
              }}
              alt="..."
              src="/caduce.png"
            />
            <div
              className={`${styles.text_item} ${
                open ? styles.text_item_visible : styles.text_item_hidden
              }`}
            >
              Volontés médicales
            </div>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            router.push('/espace-personnel/demarches-administratives');
          }}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            pl: 3,
            mt: 2,
            backgroundColor:
              props.selectedPage === 'paperwork' ? '#0b374c' : 'null',
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
                width: '30px',
              }}
              alt="..."
              src="/house.png"
            />
          </ListItemIcon>
          <div
            className={`${styles.text_item} ${
              open ? styles.text_item_visible : styles.text_item_hidden
            }`}
          >
            Démarches administratives
          </div>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            router.push('/espace-personnel/espace-libre');
          }}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            pl: 3,
            mt: 2,
            backgroundColor:
              props.selectedPage === 'free_space' ? '#0b374c' : 'null',
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
                width: '30px',
              }}
              alt="..."
              src="/paint.png"
            />
          </ListItemIcon>
          <div
            className={`${styles.text_item} ${
              open ? styles.text_item_visible : styles.text_item_hidden
            }`}
          >
            Espace libre
          </div>
        </ListItemButton>
        <Divider sx={{ color: '#FFFFFF', mt: 8, fontSize: '12px' }}>
          Proches
        </Divider>
        <ListItemButton
          onClick={() => {
            router.push('/espace-personnel/personnes-de-confiance');
          }}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            mt: 2,
            backgroundColor:
              props.selectedPage === 'trusted_persons' ? '#0b374c' : 'null',
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
            <div
              className={`${styles.text_item} ${
                open ? styles.text_item_visible : styles.text_item_hidden
              }`}
              style={{ marginTop: '10px' }}
            >
              Mes proches de confiance
            </div>
          </ListItemIcon>
        </ListItemButton>
        {/* {displayAccessToLegatorsSafe()} */}
      </div>
    </>
  );
}
