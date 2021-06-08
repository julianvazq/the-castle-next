import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import {
    MaxWidthContainer,
    Paragraph,
    SectionHeader,
} from '../../../styles/shared';
import PayPal from '../PayPal';
import * as S from './style';

const initialOptions = {
    /* Sandbox */
    // 'client-id':
    //     'AasQVTEe4oNhdXPBnK2k6e0bbw3kxJZMIHatU8Dt2bGBGEeT_B-bJ6RcmxKqdX_SLG4OXOzMZVOwWH1I',
    /* Real JV */
    // 'client-id':
    //     'AWK1HJxIagbxdwE-LGJ_qEiDkZ-YexHnqemcKsdREiMzQ7KYHN9H8xR1_G0KkPN3IeNNRouqcfxC3iHu',
    /* Real bank */
    'client-id':
        'ASJIqmbX02bQ7Flyb9Ke0kA_G5vDd5sW6GjyRNKoDdSsXISiL-QRByT0-i2vr8eQfc7iFTXO3xv-aoBZ',
    currency: 'USD',
    intent: 'capture',
};

const Donate = () => {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <S.DonateContainer>
                <MaxWidthContainer>
                    <S.ContentContainer>
                        <S.Info>
                            <SectionHeader>Donate to The Castle</SectionHeader>
                            <Paragraph>
                                Thank you for your generous gift to The Castle.
                                Your donation will help us renovate The Castle
                                into a venue the community can be proud of. Your
                                financial support will help us accomplish our
                                goal and achieve our vision. We are thrilled and
                                thankful for your support. We appreciate you.
                            </Paragraph>
                        </S.Info>
                        <PayPal />
                    </S.ContentContainer>
                </MaxWidthContainer>
            </S.DonateContainer>
        </PayPalScriptProvider>
    );
};

export default Donate;
