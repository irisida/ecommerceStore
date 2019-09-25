import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_2NXzwmqOYXzagtToX8tf8O6f00hY9pkSMS';

  const onToken = token => {
    alert('Payment was successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Pretty Green"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`The total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
