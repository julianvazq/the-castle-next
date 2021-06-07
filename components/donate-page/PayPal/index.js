import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react';
import AmountButtons from '../AmountButtons';
import * as S from './style';

const PayPal = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [amount, setAmount] = useState(5000);
    const [payerDetails, setPayerDetails] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showError, setShowError] = useState(false);
    const [paymentHeight, setPaymentHeight] = useState('200px');

    useEffect(() => {
        if (amount) {
            setShowError(false);
            setPaymentHeight('200px');
        }

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
        if (!amount) return;
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

    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            setPayerDetails(details.payer);
        });
    };

    const onError = (err) => {
        console.log('On Error', err);
    };

    const onCancel = (data) => {
        setPaymentHeight('200px');
    };

    const onClick = ({ fundingSource }) => {
        if (!amount) {
            setShowError(true);
            setPaymentHeight('250px');
            return;
        }

        if (fundingSource === 'card') {
            setPaymentHeight('auto');
        }
    };

    if (payerDetails) {
        return (
            <S.Confirmation>
                <S.Check />
                Thank you for your donation
                {payerDetails?.name?.given_name
                    ? `, ${payerDetails?.name?.given_name}!`
                    : '!'}
            </S.Confirmation>
        );
    }

    return (
        <S.Container>
            <S.PaymentHeader>Payment</S.PaymentHeader>
            <S.CheckText>
                Tax deductible charitable donations can be made by mailing a
                check payable to the{' '}
                <span>
                    Greater Syracuse Land Bank, ATTN: The Castle, 431 E. Fayette
                    Street Suite 375, Syracuse NY 13202.
                </span>
            </S.CheckText>
        </S.Container>
    );

    if (amount > 10000) {
        return (
            <S.Container>
                <S.PaymentHeader>Payment Method</S.PaymentHeader>
                <AmountButtons changeAmount={changeAmount} />
                <S.PaymentDisclaimer>
                    Donations over $10,000 are to be made via check.
                </S.PaymentDisclaimer>
                <S.CheckText>
                    Tax deductible charitable donations can be made by mailing a
                    check payable to the Greater Syracuse Land Bank, ATTN: The
                    Castle, 431 E. Fayette Street Suite 375, Syracuse NY 13202
                </S.CheckText>
            </S.Container>
        );
    }

    return (
        <S.Container>
            <S.PaymentHeader>Payment Method</S.PaymentHeader>
            <AmountButtons changeAmount={changeAmount} />
            <S.CheckText>
                Tax deductible charitable donations can be made by mailing a
                check payable to the Greater Syracuse Land Bank, ATTN: The
                Castle, 431 E. Fayette Street Suite 375, Syracuse NY 13202
            </S.CheckText>
            <S.Separator>OR</S.Separator>
            {showSpinner || isPending ? (
                <S.PaymentContainer $height={paymentHeight}>
                    <S.Spinner />
                </S.PaymentContainer>
            ) : (
                <S.PaymentContainer $display='block' $height={paymentHeight}>
                    {showError && (
                        <S.Error>
                            Please enter an amount above to continue.
                        </S.Error>
                    )}
                    <PayPalButtons
                        style={{ layout: 'vertical' }}
                        forceReRender={[amount]}
                        createOrder={createOrder}
                        onClick={onClick}
                        onApprove={onApprove}
                        onCancel={onCancel}
                        onError={onError}
                        disabled={!amount}
                    />
                </S.PaymentContainer>
            )}
        </S.Container>
    );
};

export default PayPal;
