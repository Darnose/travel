import  { Stripe, StripeElementsOptions }  from "@stripe/stripe-js";

export default interface IPayment {
    clientSecret: StripeElementsOptions | undefined,
    stripePromise: Promise<Stripe | null>,
}