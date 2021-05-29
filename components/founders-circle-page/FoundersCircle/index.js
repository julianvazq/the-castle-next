import React from 'react';
import { Paragraph } from '../../../styles/shared';
import InfoSection from '../../shared/InfoSection';
import Levels from './Levels';

const FoundersCircle = () => {
    return (
        <>
            <InfoSection title='The Castle'>
                <Paragraph>
                    The Founders Circle is an exclusive sponsorship package
                    designed to foster a collaborative spirit of giving for this
                    community centered project. It also provides an opportunity
                    for those wanting to financially support the renovation of
                    The Castle. The sponsorship benefits are exclusive to donors
                    providing gifts at each associated level and include
                    designated elements of recognition. Givers at each level
                    will be classified as Founders Circle members and have
                    access to certain privileges.
                </Paragraph>
            </InfoSection>
            <Levels />
        </>
    );
};

export default FoundersCircle;
