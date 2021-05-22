import React from 'react';
import { MaxWidthContainer, SectionHeader } from '../../../styles/shared';
import * as S from './style';

const InfoSection = ({ title, children }) => {
    return (
        <MaxWidthContainer>
            <S.Content>
                <SectionHeader>{title}</SectionHeader>
                {children}
            </S.Content>
        </MaxWidthContainer>
    );
};

export default InfoSection;
