import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import Cards from './components/Cards';
import styles from './sass/Home.module.scss';

function HomeView() {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <div className={styles.page}>
        <Title>
          {t('welcomeMessage')}
          {' '}
          <a href="https://nextjs.org">
            {t('nextJs')}
            !
          </a>
        </Title>
        <p className={styles.description}>
          {t('getStarted')}
          {' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Cards />
      </div>
    </Layout>
  );
}

export default HomeView;
