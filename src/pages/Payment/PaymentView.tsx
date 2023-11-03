import Layout from '../../layout/Layout';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/Payment/Payment';
import IHome from './interfaces/IPayment';
import Title from '../../components/Title/Title';
import Link from 'next/dist/client/link';


const PaymentView = ({
  clientSecret,
  stripePromise
}: IHome) => {

  return (
    <Layout
      styleType="container_top"
    >
      {clientSecret && (
        <Elements options={clientSecret} stripe={stripePromise}>
            <Link href={'/'}>
              Back to main page
            </Link>
          <CheckoutForm />
        </Elements>
      )}
    </Layout>
  );
}

export default PaymentView;
