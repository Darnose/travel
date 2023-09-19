import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/Home.module.scss';
import Loader from '../../components/Loader/Loader';
import Search from '../../components/Search/Search';
import ReactMapGL from 'react-map-gl';

import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css'

import '../../i18n/i18n'
import IHome from './interfaces/IHome';

const HomeView = ({
  searchLocation,
  data,
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
                  {data.weather ? <p>{data.weather[0].main}</p> : null}
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
                <ReactMapGL
                  latitude={data.coord.lat}
                  longitude={data.coord.lon}
                  zoom={9}
                  mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
                  mapStyle={process.env.NEXT_PUBLIC_MAPSTYLE}
                />
              </div>
            : null}
          </div>
        )
        }
    </Layout>
  );
}

export default HomeView;
