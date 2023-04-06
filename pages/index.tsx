import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeView from '../src/pages/Home/HomeView';
import IStaticProps from '../src/interfaces/IStaticProps';

import '../src/i18n/i18n'

const Home = () => {
    return (
        <HomeView />
    );
}

export async function getStaticProps({ locale }: IStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}

export default Home;