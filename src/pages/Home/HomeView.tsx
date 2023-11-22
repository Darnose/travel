import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/Home.module.scss';
import Loader from '../../components/Loader/Loader';
import Search from '../../components/Search/Search';
import Weather from '../../components/Weather/Weather';
import Button from '../../components/Button/Button';
import Link from 'next/dist/client/link';
import Map, { NavigationControl, ScaleControl, FullscreenControl } from 'react-map-gl';

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
            {data.name ?
              <Weather
                data={data}
              />
            : null}
            { data.name ?
              <div className={styles.map}>
                <Map
                  initialViewState={{
                    longitude: data.coord.lon,
                    latitude: data.coord.lat,
                    zoom: 10
                  }}
                  minZoom={3}
                  maxZoom={19}
                  mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
                  mapStyle={process.env.NEXT_PUBLIC_MAPSTYLE}
                  fadeDuration={300}
                >
                  <NavigationControl />
                  <ScaleControl />
                  <FullscreenControl />
                </Map>
              </div>
            : null}
            {data.name &&
              <div className={styles.map}>
                <p className={styles.currencies}>
                  {`1 USD = ${Object.values(exchangeRates.rates)[0].toFixed(2)} ${Object.keys(exchangeRates.rates)}`}
                </p>
              </div>
            }
            {data.name ?
              <div className={styles.attractions}>
                <Title>
                  {t('Sights')} {data.name}
                </Title>
                <ul>
                {attractions.data.map((attraction, i) => (
                  <li key={[attraction.name, i].join('_')}>
                    {`${i + 1}. ${attraction.name}, ${attraction.address_obj.street1}`}
                  </li>
                  ))}
                </ul>
              </div>
            : null}
          </div>
        )
        }
    </Layout>
  );
}

export default HomeView;
