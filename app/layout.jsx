import { Inter } from 'next/font/google';
import './globals.css';
import FooterComponent from '@components/FooterCompanent';
import NavBarComponent from '@components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Clover Creative ',
  description: 'Clover Creative Social Media Management UAE, clover is a social media management company running in UAE, supports clients from around uae and arab countries',
};

export default function RootLayout({ children, loading }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-neutral-200`}>
        {loading ? (
          <div className="loader">
            {/* Replace this with your loader component */}
            <center>
              <img src="/img/logo.png" className='w-10 h-10' alt="" />
            </center>
          </div>
        ) : (
          <div>
            <NavBarComponent />
            {children}
            <FooterComponent />
          </div>
        )}
      </body>
    </html>
  );
}
