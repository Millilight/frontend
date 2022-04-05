import '@/styles/globals.css';
import '@/styles/inscription.css';
import '@/styles/personal-space.css';
import { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { IntlProvider } from 'react-intl';
import French from '../lang/fr.json';
// import { useState } from 'react';

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
      <Component {...pageProps} />
    </IntlProvider>
  );
}
