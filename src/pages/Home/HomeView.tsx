import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import styles from './sass/Home.module.scss';
import Loader from '../../components/Loader/Loader';
import Search from '../../components/Search/Search';
import Weather from '../../components/Weather/Weather';
import CustomMap from '../../components/CustomMap/CustomMap';
import Currency from '../../components/Currency/Currency';
import Attractions from '../../components/Attractions/Attractions';
import Button from '../../components/Button/Button';
import Link from 'next/dist/client/link';
import { signOut } from 'next-auth/react';

import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css'

import '../../i18n/i18n'
import IHome from './interfaces/IHome';


const HomeView = ({
  searchLocation,
  data,
  exchangeRates,
  attractions,
  location,
  loading,
  deleteLocation,
  locationHandler,
}: IHome) => {

  const { t } = useTranslation('home');
  return (
    <Layout
      styleType="container_top"
    >
      <Button
          type='button'
          text={'Sign Out'}
          onClick={() => signOut()}
        />
      <Search
        searchLocation={searchLocation}
        location={location}
        deleteLocation={deleteLocation}
        locationHandler={locationHandler}
      />
      <Button
          type='button'
          text={
            <Link href='/payment'>
              {t('Donate')}
            </Link>}
          styleType="donate"
        />
        {loading ? (
          <Loader/>
        ) : (
          <div className={styles.wrap}>
            {data.name &&
              <Weather
                data={data}
              />
            }
            { data.name &&
              <CustomMap
                data={data}
              />
            }
            {data.name &&
              <Currency
                exchangeRates={exchangeRates}
              />
            }
            {/* {data.name &&
              <Attractions
                attractions={attractions}
                data={data}
              />
            } */}
          </div>
        )
        }
    </Layout>
  );
}

export default HomeView;
