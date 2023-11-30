import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import IError from '../src/pages/Error/interfaces/IError';
import IServerSideProps from '../src/interfaces/IServerSideProps';
import ErrorView from '../src/pages/Error/ErrorView';

const ErrorPage = ({ statusCode }: IError) => {
  return (
    <ErrorView statusCode={statusCode} />
  );
}

export async function getServerSideProps({ locale, res }: IServerSideProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'error'])),
      statusCode: res?.statusCode || 404,
    },
  };
}

export default ErrorPage;
