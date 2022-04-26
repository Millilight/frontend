import PaperworkProcedures from '@/components/PaperworkProcedures/PaperworkProcedures';
import { Box, CircularProgress, Button } from '@mui/material';
import { useState } from 'react';
import {
  GetMySensitiveDataProceduresQuery,
  useGetMySensitiveDataProceduresLazyQuery,
  useGetMySensitiveDataProceduresQuery,
} from 'generated/graphql';
import translate from '@/utils/translate';
import styles from './Paperwork.module.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { dowloadMyPaperworkProcedures } from '@/utils/pdf';
import amplitude from 'amplitude-js';

export default function Paperwork() {
  const [shouldDownload, setShouldDownload] = useState(false);

  // Hook to fetch sensitive data procedures
  const [
    getMySensitiveDataProceduresLazyQuery,
    { data: dataGet, loading: loadingGet, error: errorGet },
  ] = useGetMySensitiveDataProceduresLazyQuery({
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
          width: '20%',
          marginX: '40%',
        }}
        alt="..."
        src="/house.png"
      />
      <h2>{translate('paperwork.title')}</h2>
      <div>
        <p>{translate('paperwork.help.1')}</p>
        <p>{translate('paperwork.help.2')}</p>
        <p>{translate('paperwork.help.3')}</p>
      </div>
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

  //List of procedures with help texts
  const paperworkProceduresList: PaperworkProcedure[] = [
    {
      itemId: 'bank_products',
      title: translate('paperwork.bank_products.title'),
      help: (
        <div>
          <h3>{translate('paperwork.bank_products.help.1')}</h3>
          <p>{translate('paperwork.bank_products.help.2')}</p>
          <p>
            {translate('paperwork.bank_products.help.3')}
            <b>{translate('paperwork.bank_products.help.3b')}</b>
          </p>
          <p>{translate('paperwork.bank_products.help.4')}</p>
        </div>
      ),
      image: '/bank.png',
      emptyRow: { type: '', company: '', localization: '' },
      rows: [{ type: '', company: '', localization: '' }],
    },
    {
      itemId: 'insurance_products',
      title: translate('paperwork.insurance_products.title'),
      help: (
        <div>
          <p>{translate('paperwork.insurance_products.help.1')}</p>
          <h3>{translate('paperwork.insurance_products.help.2')}</h3>
          <p>{translate('paperwork.insurance_products.help.3')}</p>
        </div>
      ),
      image: '/insurance.png',
      emptyRow: { type: '', company: '', localization: '' },
      rows: [{ type: '', company: '', localization: '' }],
    },
    {
      itemId: 'vehicles',
      title: translate('paperwork.vehicles.title'),
      help: (
        <div>
          <p>{translate('paperwork.vehicles.help.1')}</p>
          <h3>{translate('paperwork.vehicles.help.2')}</h3>
          <p>{translate('paperwork.vehicles.help.3')}</p>
        </div>
      ),
      image: '/car.png',
      emptyRow: { type: '', registration_number: '' },
      rows: [{ type: '', registration_number: '' }],
    },
    {
      itemId: 'properties',
      title: translate('paperwork.properties.title'),
      help: (
        <div>
          <p>{translate('paperwork.properties.help.1')}</p>
          <h3>{translate('paperwork.properties.help.2')}</h3>
          <p>{translate('paperwork.properties.help.3')}</p>
        </div>
      ),
      image: '/flat.png',
      emptyRow: { type: '', localization: '' },
      rows: [{ type: '', localization: '' }],
    },
    {
      itemId: 'consumer_credits',
      title: translate('paperwork.consumer_credits.title'),
      help: (
        <div>
          <p>{translate('paperwork.consumer_credits.help.1')}</p>
          <h3>{translate('paperwork.consumer_credits.help.2')}</h3>
          <p>{translate('paperwork.consumer_credits.help.3')}</p>
        </div>
      ),
      image: '/cashback.png',
      emptyRow: { company: '', contract_number: '' },
      rows: [{ company: '', contract_number: '' }],
    },
    {
      itemId: 'internet_accounts_to_be_deleted',
      title: translate('paperwork.internet_accounts_to_be_deleted.title'),
      help: (
        <div>
          <p>{translate('paperwork.internet_accounts_to_be_deleted.help.1')}</p>
        </div>
      ),
      image: '/internet.png',
      emptyRow: { site: '', username: '' },
      rows: [{ site: '', username: '' }],
    },
  ];

  //Update the list of paperwork items with data retreived from backend
  function updatePaperworkProceduresList(
    savedProcedures: GetMySensitiveDataProceduresQuery['user']['sensitive_data']['procedures']
  ) {
    if (savedProcedures !== undefined && savedProcedures !== null) {
      // For each type of paperwork procedure
      for (const [procedureKey, procedureValues] of Object.entries(
        savedProcedures
      )) {
        // Find corresponding entry in paperworkProceduresList
        const existingProcedure = paperworkProceduresList.find(
          (item) => item.itemId === procedureKey
        );
        // If there is an exsiting procedure and at least one element to update
        if (existingProcedure !== undefined && procedureValues.length) {
          // Delete empty row
          existingProcedure?.rows?.pop();
          // Add existing rows
          for (const [i, row] of Object.entries(procedureValues)) {
            const newRow = { ...row };
            delete newRow.__typename;
            existingProcedure?.rows?.push(newRow);
          }
        }
      }
    }
  }

  //Load procedures
  const { data, loading, error } = useGetMySensitiveDataProceduresQuery();

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
  const savedProcedures:
    | GetMySensitiveDataProceduresQuery['user']['sensitive_data']['procedures']
    | undefined = data?.user.sensitive_data.procedures;
  if (!savedProcedures) {
    console.error(savedProcedures);
    return null;
  }

  updatePaperworkProceduresList(savedProcedures);

  /*******  Access the content (sensitive data - procedures) the safe  to dowload pdf ********* */

  function displayGetSensitiveDataButton() {
    if (shouldDownload && dataGet && !loadingGet && !errorGet) {
      const response:
        | GetMySensitiveDataProceduresQuery['user']['sensitive_data']
        | undefined = dataGet?.user.sensitive_data;
      if (response) {
        // Extract sensitive data procedures
        let data: SensitiveDataProcedures = {};
        if (response?.procedures) {
          delete response?.procedures.__typename;
          data = { ...response?.procedures };
          // Make PDF
          dowloadMyPaperworkProcedures(data);
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
          onClick={() => {
            amplitude.getInstance().logEvent('Personal pdf export', {
              category: 'paperwork_procedures',
            });
            getMySensitiveDataProceduresLazyQuery();
          }}
          sx={{
            bgcolor: 'var(--yellow)',
            '&:hover': {
              bgcolor: 'var(--dark-blue)',
            },
          }}
          variant="contained"
        >
          <CloudDownloadIcon className={styles.icon} />
          {translate('paperwork.button.download')}
        </Button>
      </>
    );
  }

  return (
    <div className={styles.horizontal_container}>
      <div className={styles.item_list}>
        <div onClick={() => setHelp(initial_help)}>
          <h3 className={styles.title}>
            <Box
              component="img"
              sx={{
                width: '50px',
              }}
              alt="..."
              src="/house.png"
            />
            {'   '}
            {translate('paperwork.title')}
          </h3>
        </div>
        <div className={styles.horizontal_container_right}>
          {displayGetSensitiveDataButton()}
        </div>
        <PaperworkProcedures
          items={paperworkProceduresList}
          helpCallback={changeHelp}
        />
      </div>
      <div className={styles.item_help}>
        <div className={styles.help}>{help}</div>
      </div>
    </div>
  );
}
