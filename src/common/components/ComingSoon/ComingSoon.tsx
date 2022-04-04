import { Typography } from '@mui/material';
import translate from '@/utils/translate';

export default function ComingSoon(): JSX.Element {
  return (
    <div className="invisible-container">
      <Typography
        sx={{
          mb: 2,
        }}
        variant="h4"
      >
        {translate('common.coming_soon')}
      </Typography>
    </div>
  );
}
