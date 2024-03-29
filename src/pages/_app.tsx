import '@/styles/globals.css';
import '@/styles/inscription.css';
import '@/styles/personal-space.css';
import '@/styles/wordpress-menu.css';
import { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { IntlProvider } from 'react-intl';
import French from '../lang/fr.json';
import { MenuProvider } from '../contexts/menuContext';

// import { useState } from 'react';

// Crisp
import dynamic from 'next/dynamic';
const CrispWithNoSSR = dynamic(() => import('@/utils/crisp'), { ssr: false });

const AmplitudeWithNoSSR = dynamic(() => import('@/utils/amplitude'), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  // Currently : only in French
  // const [locale, setLocale] = useState('fr');
  // const [messages, setMessages] = useState(French);
  const locale = 'fr';
  const messages = French;
  // // Not used for now, to update to add other languages
  // function changeLanguage(locale: string) {
  //   setLocale(locale);
  //   switch (locale) {
  //     case 'fr':
  //       setMessages(French);
  //   }
  // }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <MenuProvider>
        <AmplitudeWithNoSSR />
        <CrispWithNoSSR />
        <Component {...pageProps} />
      </MenuProvider>
    </IntlProvider>
  );
}
