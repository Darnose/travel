import  { Stripe }  from "@stripe/stripe-js";

export default interface IPayment {
    clientSecret: string | undefined,
    stripePromise: Promise<Stripe | null>,
}