import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import {
    MaxWidthContainer,
    Paragraph,
    SectionHeader,
} from '../../../styles/shared';
import NavBar from '../../shared/NavBar';
import PayPal from '../PayPal';
import * as S from './style';

const initialOptions = {
    // 'client-id': 'sb',
    /* Sandbox */
    'client-id':
        'AasQVTEe4oNhdXPBnK2k6e0bbw3kxJZMIHatU8Dt2bGBGEeT_B-bJ6RcmxKqdX_SLG4OXOzMZVOwWH1I',
    /* Real */
    // 'client-id':
    //     'AWK1HJxIagbxdwE-LGJ_qEiDkZ-YexHnqemcKsdREiMzQ7KYHN9H8xR1_G0KkPN3IeNNRouqcfxC3iHu',
    currency: 'USD',
    intent: 'capture',
};

const Donate = () => {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <S.DonateContainer>
                <NavBar />
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
                            <Paragraph>
                                <span>
                                    Checks made payable to Simply Ingram, LLC
                                    and mailed to 4383 Colburn Drive Syracuse,
                                    New York 13215
                                </span>
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
