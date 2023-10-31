import axios from 'axios';
import { useEffect, useState } from 'react';
import { serverSideTranslations, } from 'next-i18next/serverSideTranslations';
import HomeView from '../src/pages/Home/HomeView';
import IHome, { IData, IRates, IAttractions } from '../src/pages/Home/interfaces/IHome';
import IStaticProps from '../src/interfaces/IStaticProps';
import { loadStripe } from "@stripe/stripe-js";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  
  const [data, setData] = useState<IData>({} as IData);
  const [countryCode, setCountryCode] = useState<string>('UA');
  const [currentCurrency, setCurrentCurrency] = useState<string>('UAH');
  const [exchangeRates, setExchangeRates] = useState<IRates>({} as IRates);
  const [attractions, setAttractions] = useState<IAttractions>({} as IAttractions)
  const [location, setLocation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const apiWeather = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const apiCurrency = process.env.NEXT_PUBLIC_CURRENCY_API_KEY;
  const apiAttractions = process.env.NEXT_PUBLIC_ATTRACTIONS_API_KEY;
  const [latLong, setLatLong] = useState<string>('48.45%2C34.9833');
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiWeather}`;
  const urlCountry = `https://restcountries.com/v3/alpha/${countryCode}`;
  const urlCurrency = `https://openexchangerates.org/api/latest.json?app_id=${apiCurrency}&symbols=${currentCurrency}`;
  const linkAttr = '/v1/location/nearby_search';
  const urlAttract = `${linkAttr}?latLong=${latLong}&key=${apiAttractions}&category=attractions&radius=30&language=en`;
  const [clientSecret, setClientSecret] = useState("");
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  
  const searchLocation: IHome["searchLocation"] = (e) => {
    e.preventDefault();
    const successReq = () => toast.success('Request successful');
    const errorReq = () => toast.error('Request completed with an error');

    if(location.length >= 3) {
      setLoading(true);
      axios.get(urlWeather)
      .then((response) => {
        setData(response.data);
        setCountryCode(response.data.sys.country);
        setLatLong(`${response.data.coord.lat}%2C${response.data.coord.lon}`);
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

  useEffect(() => {
    axios.get(urlCountry)
    .then((response) => {
      setCurrentCurrency(Object.keys(response.data[0].currencies)[0])
    })
    
  }, [countryCode, urlCountry, currentCurrency]) 

  useEffect(() => {
    axios.get(urlCurrency)
    .then((response)=> {
      setExchangeRates(response.data)
    })
  }, [urlCurrency])

  useEffect(() => {
    axios.get(`/api/${urlAttract}`)
    .then((response)=> {
      setAttractions(response.data)
      console.log(response.data)
    })
  }, [urlAttract, latLong])

  useEffect(() => {
    axios.get("/api/create-payment-intent")
    .then((response)=> {
      setClientSecret(response.data)
    })
  }, [])

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
      latLong={latLong}
      clientSecret={clientSecret}
      stripePromise={stripePromise}
      exchangeRates={exchangeRates}
      attractions={attractions}
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