import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useContext } from 'react';
// const value=useContext(Data);

export default class TakeMoney extends React.Component {
    
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51JCPidSHSETbtSVuAqRG7Hej7PlNuGOCj5o4g7XDinboQBGEKiFemqXXJTJYlWm1nzeNrIBaEIPJIt7IiscneD4u00q6TgkvJF"
        amount={9900}
        label="BOOK NOW"
        // ComponentClass="button
      >
      <button className="button">Book Now</button>
    </StripeCheckout>
    )
  }
}