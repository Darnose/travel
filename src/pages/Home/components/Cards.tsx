import { useTranslation } from 'next-i18next';
import styles from '../sass/Cards.module.scss';

function Cards() {
  const { t } = useTranslation('home');

  return (
    <div className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h3>
          {t('documentation')}
        &nbsp;&rarr;
        </h3>
        <p>{t('findInformation')}</p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        <h3>
          {t('learn')}
        &nbsp;&rarr;
        </h3>
        <p>{t('learnAbout')}</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className={styles.card}
      >
        <h3>
          {t('examples')}
        &nbsp;&rarr;
        </h3>
        <p>{t('discoverAndDeploy')}</p>
      </a>
    </div>
  );
}

export default Cards;
