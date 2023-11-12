import { useTranslation } from 'next-i18next';
import styles from './sass/Weather.module.scss';
import IWeather from './interface/IWeather';
import Title from '../Title/Title';

import '../../i18n/i18n'



const Weather = ({data}: IWeather) => {

  const { t } = useTranslation('home');

  return (
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
  );
}

export default Weather;