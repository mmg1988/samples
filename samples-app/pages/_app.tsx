import './global.css';
import { Roboto } from 'next/font/google'
import * as Styles from './styles';

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export default function MyApp({
  Component,
  pageProps
}: Readonly<{
  Component: React.FC,
  pageProps: object
}>) {
  return (
    <Styles.Layout className={roboto.className}>
      <Styles.Wrapper>
        <Component {...pageProps} />
      </Styles.Wrapper>
    </Styles.Layout>
  )
}