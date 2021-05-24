import styled from 'styled-components';
import { mulishFont, uppercase } from '../../../styles/shared';

export const PaymentContainer = styled.article`
    ${mulishFont}
    display: flex;
    flex-direction: column;
    border: 1px solid var(--purple-4);
    border-radius: 6px;
    padding: 2rem;

    & > * + * {
        margin-top: 1.5rem;
    }
`;

export const PaymentHeader = styled.h3`
    ${mulishFont}
    font-weight: 700;
    font-size: 1.5rem;
`;

export const CheckText = styled.p``;

export const Separator = styled.p`
    ${mulishFont}
    ${uppercase}
    font-size: 1.125rem;
    font-weight: 700;
    align-self: center;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 3rem;
        height: 1px;
        width: 75px;
        background: var(--purple-4);
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 3rem;
        height: 1px;
        width: 75px;
        background: var(--purple-4);
    }
`;
