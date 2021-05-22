import React from 'react';
import { Paragraph } from '../../../styles/shared';
import Hero from '../../shared/Hero';
import InfoSection from '../../shared/InfoSection';

const InKindDonations = () => {
    return (
        <>
            <Hero title='In-Kind Donations' />
            <InfoSection title='We need your support!'>
                <Paragraph $maxWidth={700}>
                    We are seeking donations from companies specializing in the
                    following areas or from individuals interested in
                    financially contributing to the items below. If you would
                    like to contribute, please contact us.
                </Paragraph>
            </InfoSection>
        </>
    );
};

export default InKindDonations;
