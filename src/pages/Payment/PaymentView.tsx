import Layout from '../../layout/Layout';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import IPayment from './interfaces/IPayment';
import Link from 'next/dist/client/link';
import { useTranslation } from 'next-i18next';

const PaymentView = ({
  clientSecret,
  stripePromise
}: IPayment) => {

  const { t } = useTranslation('home');

  return (
    <Layout
      styleType="container_top"
    >
      {clientSecret && (
        <Elements options={clientSecret} stripe={stripePromise}>
            <Link href={'/'}>
              {t('Back')}
            </Link>
          <CheckoutForm />
        </Elements>
      )}
    </Layout>
  );
}

export default PaymentView;
