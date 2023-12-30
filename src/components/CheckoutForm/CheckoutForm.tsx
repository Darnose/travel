import { useState, useEffect } from "react";
import styles from "./sass/CheckoutForm.module.scss"
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import ICheckoutForm from "./interface/ICheckoutForm";
import { useTranslation } from "next-i18next";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { t } = useTranslation('home');

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit: ICheckoutForm["handleSubmit"] = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form className={styles.payment_form} id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button className={styles.payment_btn} disabled={isLoading || !stripe || !elements} id="submit">
        <span className={styles.button_text} id="button-text">
          {t('Pay')}
        </span>
      </button>
      {message && <div className={styles.payment_message} id='payment-message'>{message}</div>}
    </form>
  );
}

export default CheckoutForm