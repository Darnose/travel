import { useTranslation } from 'next-i18next';
import styles from './sass/Search.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ISearch from './interface/ISearch';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../i18n/i18n'

const Search = ({ searchLocation, location, deleteLocation, locationHandler,}: ISearch) => {

  const { t } = useTranslation('home');

  return (
    <form action="#" className={styles.search}>
      <Input
        type='text'
        placeholder={t('Search Location')}
        value={location}
        onChange={e => locationHandler(e)}
        name='search'
      />
      {
        location && (
          <Button
          type='button'
          onClick={e => deleteLocation(e)}
          text={<FontAwesomeIcon icon={faXmark} />}
          styleType="Xmark"
        />
        )
      }
      <Button
        type='submit'
        onClick={e => searchLocation(e)}
        text={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        styleType="search"
      />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </form>
  );
}

export default Search;