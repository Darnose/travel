import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import ILayout from './interfaces/ILayout';
import styles from './sass/Layout.module.scss';

const Layout = ({ children, styleType }: ILayout) => {
  const { t } = useTranslation('common');
  return (
    <div className={`${styles.container} ${styleType ? styles[styleType] : ''}`}>
      <Head>
        <title>{t('Title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
