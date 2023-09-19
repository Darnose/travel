import axios from 'axios';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeView from '../src/pages/Home/HomeView';
import IHome, { IData } from '../src/pages/Home/interfaces/IHome';
import IStaticProps from '../src/interfaces/IStaticProps';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  
  const [data, setData] = useState<IData>({} as IData);
  const [location, setLocation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const _apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${_apiKey}`;

  
 

  const searchLocation: IHome["searchLocation"] = (e) => {
    e.preventDefault();
    const successReq = () => toast.success('Request successful');
    const errorReq = () => toast.error('Request completed with an error');

    if(location.length >= 3) {
      setLoading(true);
      axios.get(url)
      .then((response) => {
        setData(response.data);
        successReq();
      })
      .catch(() => {
        errorReq();
      })
      .finally(() => {
        setLoading(false);
      })
    }
  }

  const locationHandler: IHome["locationHandler"] = (e) => {
    setLocation(e.target.value)
  }

  const deleteLocation: IHome["deleteLocation"] = () => {
    setLocation('');
    setData({} as IData);
  }


  return (
    <HomeView 
      searchLocation={searchLocation}
      data={data}
      location={location}
      loading={loading}
      locationHandler={locationHandler}
      deleteLocation={deleteLocation}
    />
  )
  
}

export async function getStaticProps({ locale }: IStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}

export default Home;