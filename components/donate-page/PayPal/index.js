import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React, { useState } from 'react';
import * as S from './style';

const amounts = [
    {
        amount: 0.01,
        text: '$0.01',
    },
    // {
    //     amount: 5000,
    //     text: '$5,000',
    // },
    {
        amount: 15000,
        text: '$15,000',
    },
    {
        amount: 25000,
        text: '$25,000',
    },
    {
        amount: 'custom',
        text: 'Custom',
    },
];

const PayPal = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [amount, setAmount] = useState(amounts[0].amount);

    const createOrder = async (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount,
                    },
                },
            ],
            application_context: {
                brand_name: 'The Castle | Simply Ingram, LLC',
                shipping_preference: 'NO_SHIPPING',
                landing_page: 'BILLING',
                user_action: 'PAY_NOW',
            },
        });
        // .then((orderID) => {
        //     setOrderID(orderID);
        //     return orderID;
        // });
    };

    const onClick = () => {
        console.log('clicked button!');
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            console.log('onApprove ', details);
            // This function shows a transaction success message to your buyer.
            alert('Transaction completed by ' + details.payer.name.given_name);
        });
    };

    const onError = (err) => {
        console.log('error', err);
    };

    if (isPending) {
        return 'Loading payment options...';
    }

    return (
        <S.PaymentContainer>
            <S.PaymentHeader>Payment Method</S.PaymentHeader>
            <S.CheckText>
                Tax deductible charitable donations can be made by mailing check
                payable to the Greater Syracuse Land Bank, ATTN: The Castle, 431
                E. Fayette Street Suite 375, Syracuse NY 13202
            </S.CheckText>
            <S.Separator>OR</S.Separator>
            <PayPalButtons
                style={{ layout: 'vertical' }}
                createOrder={createOrder}
                onClick={onClick}
                onApprove={onApprove}
                onError={onError}
            />
        </S.PaymentContainer>
    );
};

export default PayPal;
