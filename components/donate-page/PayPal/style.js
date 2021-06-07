import { IoIosCheckmarkCircle } from 'react-icons/io';
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

export const CheckText = styled.p`
    span {
        font-weight: 700;
    }
`;

export const PaymentDisclaimer = styled.p`
    margin-bottom: -1rem;
    font-weight: 700;
`;

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

export const Confirmation = styled.p`
    ${mulishFont}
    padding: 1rem 1.25rem;
    background: var(--purple-4);
    color: var(--white);
    border-radius: 6px;
    font-weight: 600;
    display: flex;
    align-items: center;

    @media screen and (min-width: 650px) {
        justify-self: flex-start;
    }

    @media screen and (min-width: 800px) {
        align-self: center;
    }
`;

export const Check = styled(IoIosCheckmarkCircle)`
    color: var(--white);
    font-size: 1.25rem;
    margin-right: 1rem;
`;

export const Error = styled.p`
    background: hsl(288deg 39% 44%);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
    font-weight: 600;
`;
