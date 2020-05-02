import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicshableKey = 'pk_test_1LSUW4TMbWla0EKAQjnBNNzc00XFKg6sVg';

  const onToken = token => {
    console.log(token)
    alert('Payment Success!');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publicshableKey}
    />
  )
};

export default StripeCheckOutButton;
