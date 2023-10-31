import App from 'next/app'
import '../styles/global.css';
import 'semantic-ui-css/semantic.min.css'
import { Analytics } from '@vercel/analytics/react';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const isServer = typeof window === 'undefined';
    
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
      }
    render () {
        const { pageProps, Component } = this.props;
        return <><Component {...pageProps} /><Analytics/></>
    }
  }
  
  export default MyApp