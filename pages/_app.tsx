import '../styles/globals.css'
import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import Header from '../components/Header';



const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="flex flex-col bg-slate-50">
        <Header />
        <Component {...pageProps} />
      </div>

    </SessionProvider>
  );
};


export default App
