import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react';
import AmountButtons from '../AmountButtons';
import * as S from './style';

const PayPal = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [amount, setAmount] = useState(0.01);
    const [showSpinner, setShowSpinner] = useState(false);
    console.log(amount);

    useEffect(() => {
        setShowSpinner(true);
        const timeoutId = setTimeout(() => {
            setShowSpinner(false);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [amount]);

    const changeAmount = (amount) => {
        setAmount(amount);
    };

    const createOrder = async (data, actions) => {
        console.log(amount);
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

    return (
        <S.Container>
            <S.PaymentHeader>Payment Method</S.PaymentHeader>
            <S.CheckText>
                Tax deductible charitable donations can be made by mailing check
                payable to the Greater Syracuse Land Bank, ATTN: The Castle, 431
                E. Fayette Street Suite 375, Syracuse NY 13202
            </S.CheckText>
            <S.Separator>OR</S.Separator>
            <AmountButtons changeAmount={changeAmount} />
            {showSpinner || isPending ? (
                <S.PaymentContainer>
                    <S.Spinner />
                </S.PaymentContainer>
            ) : (
                <S.PaymentContainer $display='block'>
                    <PayPalButtons
                        style={{ layout: 'vertical' }}
                        forceReRender={[amount]}
                        createOrder={createOrder}
                        onClick={onClick}
                        onApprove={onApprove}
                        onError={onError}
                    />
                </S.PaymentContainer>
            )}
        </S.Container>
    );
};

export default PayPal;
