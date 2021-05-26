import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as S from './style';

const AmountButtons = ({ changeAmount }) => {
    const router = useRouter();
    const { level } = router.query;
    const [selectedAmount, setSelectedAmount] = useState(0.01);
    const [showOther, setShowOther] = useState(false);
    const [otherAmount, setOtherAmount] = useState('$0');

    const onAmountSelection = (amount) => {
        setSelectedAmount(amount);

        if (amount === 'other') {
            setShowOther(true);
            return;
        }

        setOtherAmount(0);
        setShowOther(false);
        changeAmount(amount);
    };

    const onChange = (e) => {
        const numericAmount = Number(e.target.value.replace(/[ ,.$]/g, ''));

        console.log(e.target.value);
        if (
            !/^[0-9]*$/.test(numericAmount) ||
            numericAmount.toString().length < 1
        )
            return;

        const displayAmount =
            '$' + Number(numericAmount.toFixed(2)).toLocaleString();
        setOtherAmount(displayAmount);
        changeAmount(numericAmount);
    };

    useEffect(() => {
        console.log(level);
        switch (level) {
            case 'the-chateau':
                onAmountSelection(5000);
                break;
            case 'the-palace':
                onAmountSelection(15000);
                break;
            case 'the-castle':
                onAmountSelection(25000);
                break;
            default:
                break;
        }
    }, [level]);

    return (
        <div>
            <S.PaymentText>Pay with credit card or PayPal</S.PaymentText>
            <S.Container>
                {amounts.map((val) => (
                    <S.AmountButton
                        key={val.amount}
                        $selected={selectedAmount === val.amount}
                        onClick={() => onAmountSelection(val.amount)}
                    >
                        {val.text}
                    </S.AmountButton>
                ))}
            </S.Container>
            {showOther && (
                <S.Form>
                    <label>Other amount</label>
                    <S.OtherAmountInput
                        type='text'
                        value={otherAmount}
                        onChange={onChange}
                        placeholder='$7,500'
                    />
                </S.Form>
            )}
        </div>
    );
};

const amounts = [
    {
        amount: 0.01,
        text: '$5,000',
    },
    {
        amount: 15000,
        text: '$15,000',
    },
    {
        amount: 25000,
        text: '$25,000',
    },
    {
        amount: 'other',
        text: 'Other',
    },
];

export default AmountButtons;
