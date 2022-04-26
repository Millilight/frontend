import Wishes from '@/components/Wishes/Wishes';
import { Box, CircularProgress, Button } from '@mui/material';
import { useState } from 'react';
import {
  useGetWishesforUserQuery,
  GetWishesforUserQuery,
  useGetMyUrgentDataWishesLazyQuery,
  GetMyUrgentDataWishesQuery,
} from 'generated/graphql';
import translate from '@/utils/translate';
import styles from './Ceremonial.module.css';
import { dowloadMyWishes } from '@/utils/pdf';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import amplitude from 'amplitude-js';

export default function Ceremonial() {
  const [shouldDownload, setShouldDownload] = useState(false);

  // Hook to fetch urgent data wishes
  const [
    getUrgentDataWishesQuery,
    { data: dataGet, loading: loadingGet, error: errorGet },
  ] = useGetMyUrgentDataWishesLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: () => {
      setShouldDownload(true);
    },
  });

  // Help on the right hand side  pannel
  const initial_help = (
    <div>
      <Box
        component="img"
        sx={{
          width: '40%',
          marginX: '30%',
        }}
        alt="..."
        src="/yoga_woman.png"
      />
      <p>{translate('ceremonial.default_help')}</p>
    </div>
  );
  const [help, setHelp] = useState(initial_help);

  function changeHelp(title: JSX.Element, image: string, newHelp: JSX.Element) {
    const newHelpTransformed = (
      <div>
        <Box
          component="img"
          sx={{
            width: '12%',
            marginX: '45%',
            marginBottom: '20px',
          }}
          alt="..."
          src={image}
        />
        <h2>{title}</h2>
        {newHelp}
      </div>
    );
    setHelp(newHelpTransformed);
  }

  //List of ceremonial wishes with help texts
  const ceremonialWishesList: Wish[] = [
    {
      wishId: 'burial_cremation',
      title: translate('ceremonial.burial_cremation.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.burial_cremation.help.1')}</h3>
          <p>{translate('ceremonial.burial_cremation.help.2')}</p>
        </div>
      ),
      type: 'radio',
      possibleValues: ['Inhumation', 'Crémation'],
      image: '/bird.png',
    },
    {
      wishId: 'burial_cremation_place',
      title: translate('ceremonial.burial_cremation_place.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.burial_cremation_place.help.1')}</h3>
          <p>{translate('ceremonial.burial_cremation_place.help.2')}</p>
          <ul>
            <li>{translate('ceremonial.burial_cremation_place.help.3')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.4')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.5')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.6')}</li>
          </ul>
          <p>{translate('ceremonial.burial_cremation_place.help.7')}</p>
          <h3>{translate('ceremonial.burial_cremation_place.help.8')}</h3>
          <p>{translate('ceremonial.burial_cremation_place.help.9')}</p>
          <ul>
            <li>{translate('ceremonial.burial_cremation_place.help.10')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.11')}</li>
            <li>{translate('ceremonial.burial_cremation_place.help.12')}</li>
          </ul>
          <p>{translate('ceremonial.burial_cremation_place.help.13')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/place.png',
    },
    {
      wishId: 'religion',
      title: translate('ceremonial.religion.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.music.help.1')}</h3>
          <p>{translate('ceremonial.religion.help1')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/icons8-religions-64.png',
    },
    {
      wishId: 'place',
      title: translate('ceremonial.place.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.place.help.1')}</h3>
          <p>{translate('ceremonial.place.help.2')}</p>
          <p>{translate('ceremonial.place.help.3')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/place.png',
    },
    {
      wishId: 'prevoyance',
      title: translate('ceremonial.prevoyance.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.prevoyance.help.1')}</h3>
          <p>{translate('ceremonial.prevoyance.help.2')}</p>
          <p>{translate('ceremonial.prevoyance.help.3')}</p>
          <h3>{translate('ceremonial.prevoyance.help.4')}</h3>
          <p>{translate('ceremonial.prevoyance.help.5')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/parapluie.png',
    },
    {
      wishId: 'list_of_people',
      title: translate('ceremonial.list_of_people.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.music.help.1')}</h3>
          <p>{translate('ceremonial.list_of_people.help.1')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/contacts.png',
    },
    {
      wishId: 'coffin',
      title: translate('ceremonial.coffin.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.coffin.help.1')}</h3>
          <p>{translate('ceremonial.coffin.help.2')}</p>
          <p>{translate('ceremonial.coffin.help.3')}</p>
          <p>{translate('ceremonial.coffin.help.4')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/sarcophage.png',
    },
    {
      wishId: 'ornament',
      title: translate('ceremonial.ornament.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.music.help.1')}</h3>
          <p>{translate('ceremonial.ornament.help.1')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/bouquet-de-fleurs.png',
    },
    {
      wishId: 'text',
      title: translate('ceremonial.text.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.music.help.1')}</h3>
          <p>{translate('ceremonial.text.help.1')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/faire-defiler.png',
    },
    {
      wishId: 'music',
      title: translate('ceremonial.music.title'),
      content: '',
      help: (
        <div>
          <h3>{translate('ceremonial.music.help.1')}</h3>
          <p>{translate('ceremonial.music.help.2')}</p>
          <h3>{translate('ceremonial.music.help.3')}</h3>
          <p>{translate('ceremonial.music.help.4')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/music.png',
    },
    {
      wishId: 'other',
      title: translate('ceremonial.other.title'),
      content: '',
      help: (
        <div>
          <p>{translate('ceremonial.other.help.1')}</p>
        </div>
      ),
      type: 'textfield',
      image: '/signe-plus.png',
    },
  ];

  //Update the list of wishes with data (content) retreived from backend
  function updateWishesList(
    savedWishes: GetWishesforUserQuery['user']['urgent_data']['wishes']
  ) {
    if (savedWishes !== undefined && savedWishes !== null) {
      for (const [key, value] of Object.entries(savedWishes)) {
        const existingWish = ceremonialWishesList.find(
          (item) => item.wishId === key
        );
        existingWish !== undefined ? (existingWish.content = value) : null;
      }
    }
  }

  //Load ceremonial wishes
  const { data, loading, error } = useGetWishesforUserQuery();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    console.error(error);
    return null;
  }
  const savedWishes:
    | GetWishesforUserQuery['user']['urgent_data']['wishes']
    | undefined = data?.user.urgent_data.wishes;
  if (!savedWishes) {
    console.error(savedWishes);
    return null;
  }

  updateWishesList(savedWishes);

  /*******  Access the content (urgent data - wishes) the safe  to dowload pdf ********* */

  function getMyUrgentDataWishes() {
    amplitude.getInstance().logEvent('Personal pdf export', {
      category: 'ceremonial_wishes',
    });
    getUrgentDataWishesQuery();
  }

  function displayGetUrgentDataButton() {
    if (shouldDownload && dataGet && !loadingGet && !errorGet) {
      const response:
        | GetMyUrgentDataWishesQuery['user']['urgent_data']
        | undefined = dataGet?.user.urgent_data;
      if (response) {
        // Extract urgent data wishes
        const data: UrgentDataWishes = {};
        if (response?.wishes) {
          for (const [key, value] of Object.entries(response?.wishes)) {
            data[key as keyof UrgentDataWishes] =
              value !== null ? value : undefined;
          }
          delete data.__typename;

          // Make PDF
          dowloadMyWishes(data);
          setShouldDownload(false);
        }
      }
    }

    if (errorGet) {
      return (
        <Button
          className={styles.inscription_button}
          variant="outlined"
          color="error"
        >
          {translate('common.button.error')}
        </Button>
      );
    }

    return (
      <>
        <Button
          className={styles.download_button}
          onClick={() => getMyUrgentDataWishes()}
          sx={{
            bgcolor: 'var(--yellow)',
            '&:hover': {
              bgcolor: 'var(--dark-blue)',
            },
          }}
          variant="contained"
        >
          <CloudDownloadIcon className={styles.icon} />
          {translate('wish.button.download')}
        </Button>
      </>
    );
  }

  return (
    <div className={styles.horizontal_container}>
      <div className={styles.item}>
        <div onClick={() => setHelp(initial_help)}>
          <h3
            className={styles.title}
            // variant="h3"
            // sx={{
            //   m: 8,
            //   textAlign: 'center',
            // }}
          >
            <Box
              component="img"
              sx={{
                width: '50px',
              }}
              alt="..."
              src="/candle.png"
            />
            {'   '}
            {translate('ceremonial.title')}
          </h3>
        </div>
        <div className={styles.horizontal_container_right}>
          {displayGetUrgentDataButton()}
        </div>
        <Wishes wishes={ceremonialWishesList} helpCallback={changeHelp} />
      </div>
      <div className={styles.item}>
        <div className={styles.help}>{help}</div>
      </div>
    </div>
  );
}
