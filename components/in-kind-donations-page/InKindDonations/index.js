import React from 'react';
import { Paragraph, StyledLink } from '../../../styles/shared';
import InfoSection from '../../shared/InfoSection';
import Services from '../Services';

const InKindDonations = () => {
    return (
        <>
            <InfoSection title='We need your support!'>
                <Paragraph $maxWidth={700}>
                    We are seeking donations from companies specializing in the
                    following areas or from individuals interested in
                    financially contributing to the items below. If you would
                    like to contribute, please{' '}
                    <StyledLink href='/in-kind-donations#footer'>
                        contact us
                    </StyledLink>
                    .
                </Paragraph>
            </InfoSection>
            <Services />
        </>
    );
};

export default InKindDonations;
