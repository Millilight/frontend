import { Typography, Grid, Box, Button } from '@mui/material';
import translate from '@/utils/translate';
import { useRouter } from 'next/router';
import {
  administrative_url,
  burrial_wishes_url,
  free_space_url,
  medical_url,
  trust_people_url,
} from '@/utils/config';

export default function PersonalSpaceHome() {
  //To handle redirections
  const router = useRouter();

  return (
    <div>
      <div className="invisible-container">
        <Typography
          sx={{
            mb: 2,
          }}
          variant="h4"
        >
          {translate('personal_space.title')}
        </Typography>
        <Typography variant="subtitle1">
          {translate('personal_space.description')}
        </Typography>
      </div>
      <div className="rounded-container">
        <Grid container spacing={2}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                width: '50px',
              }}
              alt="..."
              src="/safe.png"
            />
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {translate('personal_space.safe.title')}
            </Typography>
            <Typography variant="subtitle1">
              {translate('personal_space.safe.description')}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            mt: 2,
          }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              className="category-button"
              onClick={() => {
                router.push(burrial_wishes_url);
              }}
            >
              {' '}
              <Box
                component="img"
                sx={{
                  width: '30px',
                  mr: 2,
                }}
                alt="..."
                src="/candle.png"
              />
              {translate('menu.ceremonial')}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              className="category-button"
              onClick={() => {
                router.push(medical_url);
              }}
            >
              {' '}
              <Box
                component="img"
                sx={{
                  width: '30px',
                  mr: 2,
                }}
                alt="..."
                src="/caduce.png"
              />
              {translate('menu.medical')}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              className="category-button"
              onClick={() => {
                router.push(administrative_url);
              }}
            >
              {' '}
              <Box
                component="img"
                sx={{
                  width: '30px',
                  mr: 2,
                }}
                alt="..."
                src="/house.png"
              />
              {translate('menu.admin')}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              className="category-button"
              onClick={() => {
                router.push(free_space_url);
              }}
            >
              {' '}
              <Box
                component="img"
                sx={{
                  width: '30px',
                  mr: 2,
                }}
                alt="..."
                src="/paint.png"
              />
              {translate('menu.free_space')}
            </Button>
          </Grid>
        </Grid>
      </div>
      <div
        className="rounded-container emphasis-on-hover"
        onClick={() => {
          router.push(trust_people_url);
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              pb: 3,
            }}
          >
            <Box
              component="img"
              sx={{
                width: '50px',
              }}
              alt="..."
              src="/trusted_persons.png"
            />
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {translate('personal_space.trusted_persons.title')}
            </Typography>
            <Typography variant="subtitle1">
              {translate('personal_space.trusted_persons.description')}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
