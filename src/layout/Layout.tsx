import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Footer from './footer/Footer';
import ILayout from './interfaces/ILayout';
import styles from './sass/Layout.module.scss';

function Layout({ children }: ILayout) {
  const { t } = useTranslation('common');
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>{t('travel')}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
