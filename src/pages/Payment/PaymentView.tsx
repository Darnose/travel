import Layout from '../../layout/Layout';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/Payment/Payment';
import IPayment from './interfaces/IPayment';
import Link from 'next/dist/client/link';

const PaymentView = ({
  clientSecret,
  stripePromise
}: IPayment) => {

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
