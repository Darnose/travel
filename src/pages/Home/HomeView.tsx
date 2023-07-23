import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import Title from '../../components/Title/Title';
import styles from './sass/Home.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import '../../i18n/i18n'
import IHome from './interfaces/IHome';

const HomeView = ({
  searchLocation,
  data,
  location,
  deleteLocation,
  locationHandler,
}: IHome) => {

  const { t } = useTranslation('home');
  
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.search}>
          <Input
            type='text'
            placeholder={t('Search Location')}
            value={location}
            onChange={e => locationHandler(e)}
            name='search'
          />
          <Button
            type='button'
            onClick={e => deleteLocation(e)}
            text={<FontAwesomeIcon icon={faXmark} />}
            styleType="Xmark"
          />
          <div className={styles.search_btn}>
            <Button
              type='submit'
              onClick={e => searchLocation(e)}
              text={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              styleType="search"
            />
          </div>
        </div>
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
                  <p>Feels like</p>
                </div>
                <div className={styles.humidity}>
                {data.main ? <p className={styles.bold}>{data.main.humidity.toFixed()}%</p> : null}
                  <p>Humidity</p>
                </div>
                <div className={styles.wind}>
                {data.main ? <p className={styles.bold}>{data.wind.speed.toFixed()}Km/h</p> : null}
                  <p>Wind speed</p>
                </div>
              </div>
          </div>
        : null}
      </div>
    </Layout>
  );
}

export default HomeView;
