import styles from './sass/Attractions.module.scss';
import IAttraction from './interface/IAttractions';
import Title from '../Title/Title';

import { useTranslation } from 'next-i18next';
import '../../i18n/i18n'


const Attractions = ({attractions, data}: IAttraction) => {

  const { t } = useTranslation('home');

  return (
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
  );
}

export default Attractions;