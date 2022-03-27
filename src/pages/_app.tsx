import '@/styles/globals.css';
import { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
