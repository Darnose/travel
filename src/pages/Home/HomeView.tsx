import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/Home.module.scss';
import Loader from '../../components/Loader/Loader';
import Search from '../../components/Search/Search';
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
              Donate 5$
            </Link>}
          styleType="donate"
        />
        {loading ? (
          <Loader/>
        ) : (
          <div className={styles.wrap}>
            {data.name ?
              <div className={styles.weather}>
                <div className={styles.top}>
                  <div className={styles.location}>
                    <p>{data.name}</p>
                  </div>
                  <div className={styles.temp}>
                    {data.main ? <Title>{data.main.temp.toFixed()}°C</Title> : null}
                  </div>
                  <div className={styles.description}>
                  {data.weather ? <p>{data.weather[0].description}</p> : null}
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.feels}>
                  {data.main ? <p className={styles.bold}>{data.main.feels_like.toFixed()}°C</p> : null}
                    <p>{t('Feels')}</p>
                  </div>
                  <div className={styles.humidity}>
                  {data.main ? <p className={styles.bold}>{data.main.humidity.toFixed()}%</p> : null}
                    <p>{t('Humidity')}</p>
                  </div>
                  <div className={styles.wind}>
                  {data.main ? <p className={styles.bold}>{data.wind.speed.toFixed()}m/s</p> : null}
                    <p>{t('Wind')}</p>
                  </div>
                </div>
              </div>
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
            {data.name ?
              <div className={styles.map}>
                <p className={styles.currencies}>
                  {`1 USD = ${Object.values(exchangeRates.rates)[0].toFixed(2)} ${Object.keys(exchangeRates.rates)}`}
                </p>
              </div>
            : null}
            {data.name ?
              <div className={styles.attractions}>
                <Title>
                  <>
                    {t('Sights')} {data.name}
                  </>
                </Title>
                {attractions.data.map((attraction, i) => (
                    <p key={i}>
                      {`${i + 1}. ${attraction.name}, ${attraction.address_obj.street1}`}
                    </p>
                  ))}
              </div>
            : null}
          </div>
        )
        }
    </Layout>
  );
}

export default HomeView;
