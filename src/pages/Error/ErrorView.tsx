import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import { NOT_FOUND } from '../../constants/httpStatusCodes';
import IErrorView from './interfaces/IErrorView';
import styles from './sass/Error.module.scss';

function ErrorView({ statusCode }: IErrorView) {
  const { t } = useTranslation('error');

  return (
    <Layout>
      <div className={styles.errorBody}>
        <Title>
          {t(statusCode === NOT_FOUND ? 'pageNotFound' : 'internalServerError')}
        </Title>
      </div>
    </Layout>
  );
}

export default ErrorView;
