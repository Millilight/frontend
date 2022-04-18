import * as React from 'react';
import { Box, Divider, ListItemIcon, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import MuiDrawer from '@mui/material/Drawer';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import AccountMenu from '../AccountMenu/AccountMenu';

import styles from './MenuDrawer.module.css';
import translate from '@/utils/translate';
import { useRouter } from 'next/router';
import { useGetLegatorUsersQuery } from 'generated/graphql';
import {
  administrative_url,
  burrial_wishes_url,
  free_space_url,
  home_url,
  legators_safe_url,
  medical_url,
  trusted_users_url,
} from '@/utils/config';
import amplitude from 'amplitude-js';

const drawerWidth = 350;

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

  function displayAccessToLegatorsSafe() {
    if (hasLegators) {
      return (
        <ListItemButton
          onClick={() => {
            router.push(legators_safe_url);
          }}
          sx={{
            minHeight: 48,
            justifyContent: 'flex-start',
            px: 2.5,
            pl: 3,
            mt: 2,
            backgroundColor:
              props.selectedPage === 'legators_safe' ? '#0b374c' : 'null',
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
                width: '35px',
              }}
              alt="..."
              src="/key.png"
            />
          </ListItemIcon>
          <div
            className={`${styles.text_item} ${
              open ? styles.text_item_visible : styles.text_item_hidden
            }`}
            style={{ marginTop: '10px' }}
          >
            Mes proches de confiance
          </div>
        </ListItemButton>
      );
    }
  }

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
            router.push(home_url);
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
            amplitude.getInstance().logEvent('Category clicked', {
              category: 'ceremonial_wishes',
            });
            router.push(burrial_wishes_url);
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
            amplitude.getInstance().logEvent('Category clicked', {
              category: 'medical_wishes',
            });
            router.push(medical_url);
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
            amplitude.getInstance().logEvent('Category clicked', {
              category: 'paperwork',
            });
            router.push(administrative_url);
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
            amplitude.getInstance().logEvent('Category clicked', {
              category: 'free_space',
            });
            router.push(free_space_url);
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
            router.push(trusted_users_url);
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
        {displayAccessToLegatorsSafe()}
      </div>
    </>
  );
}
