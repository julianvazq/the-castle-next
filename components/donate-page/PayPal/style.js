import styled, { keyframes } from 'styled-components';
import { mulishFont, uppercase } from '../../../styles/shared';

export const Container = styled.article`
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

export const PaymentContainer = styled.div`
    height: ${(props) => props.$height || '200px'};
    display: ${(props) => props.$display || 'flex'};
    align-items: center;
    justify-content: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

export const Spinner = styled.div`
    display: inline-block;
    height: 80px;

    &:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff var(--purple-4) #fff var(--purple-4);
        animation: ${spin} 1.2s linear infinite;
    }
`;
