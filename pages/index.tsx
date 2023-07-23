import axios from 'axios';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeView from '../src/pages/Home/HomeView';
import IHome from '../src/pages/Home/interfaces/IHome';
import IStaticProps from '../src/interfaces/IStaticProps';


const Home = () => {
  
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const _apiKey = 'b8b5bf29247ffaa27bd650896a05c6b3';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${_apiKey}`;

  
  const searchLocation: IHome["searchLocation"] = (e) => {
    axios.get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const locationHandler: IHome["locationHandler"] = (e) => {
    setLocation(e.target.value)
  }

  const deleteLocation: IHome["deleteLocation"] = () => {
    setLocation('')
    setData({})
  }


  return (
    <HomeView 
      searchLocation={searchLocation}
      data={data}
      location={location}
      locationHandler={locationHandler}
      deleteLocation={deleteLocation}
    />
  );
  
}

export async function getStaticProps({ locale }: IStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}

export default Home;