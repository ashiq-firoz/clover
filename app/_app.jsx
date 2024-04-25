import { useState } from 'react';
import RootLayout from './layout';
import Loader from '@components/Loader'; // Import your loader component

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay
  setTimeout(() => {
    setLoading(false);
  }, 5000); // Replace this with your actual loading logic

  return (
    <RootLayout loading={loading}>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </RootLayout>
  );
}

export default MyApp;
