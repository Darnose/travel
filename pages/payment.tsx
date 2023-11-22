import axios from 'axios';
import { useEffect, useState } from 'react';
import { serverSideTranslations, } from 'next-i18next/serverSideTranslations';
import PaymentView from '../src/pages/Payment/PaymentView';
import IStaticProps from '../src/interfaces/IStaticProps';
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";


const Payment = () => {
  const [clientSecret, setClientSecret] = useState<StripeElementsOptions>();
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');
  
  useEffect(() => {
    axios.get("/api/create-payment-intent")
    .then((response)=> {
      setClientSecret(response.data)
    })
  }, [])

  return (
    <PaymentView 
      clientSecret={clientSecret}
      stripePromise={stripePromise}
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

export default Payment;