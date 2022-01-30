import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { LocationsProvider } from '../contexts/Locations';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocationsProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </LocationsProvider>
  );
}

export default MyApp;
