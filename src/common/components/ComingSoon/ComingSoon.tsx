import { Typography } from '@mui/material';

export default function ComingSoon(): JSX.Element {
  return (
    <div className="invisible-container">
      <Typography
        sx={{
          mb: 2,
        }}
        variant="h4"
      >
        Coming Soon...
      </Typography>
    </div>
  );
}
