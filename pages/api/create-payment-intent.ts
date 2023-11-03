// This is your test secret API key.
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest , res:NextApiResponse ) {

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 500,
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

};