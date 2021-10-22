import '../styles/globals.css';
import type { AppProps } from 'next/app';
// custom
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';

const INITIAL_STATE = {};

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(INITIAL_STATE);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
