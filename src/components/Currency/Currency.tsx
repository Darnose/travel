import styles from './sass/Weather.module.scss';
import ICurrency from './interface/ICurrency';

const Currency = ({exchangeRates}: ICurrency) => {

  return (
    <div className={styles.map}>
      <p className={styles.currencies}>
        {`1 USD = ${Object.values(exchangeRates.rates)[0].toFixed(2)} ${Object.keys(exchangeRates.rates)}`}
      </p>
    </div>
  );
}

export default Currency;