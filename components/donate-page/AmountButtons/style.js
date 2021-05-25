import styled from 'styled-components';
import { Paragraph } from '../../../styles/shared';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    & > * + * {
        margin-left: 0.5rem;
    }
`;

export const AmountButton = styled.button`
    flex: 1;
    padding: 0.5rem 1rem;
    border: 1px solid var(--purple-4);
    border-radius: 6px;
    font-weight: 700;
    background: ${(props) =>
        props.$selected ? 'var(--purple-4)' : 'var(--white)'};
    color: ${(props) => (props.$selected ? 'var(--white)' : 'var(--purple-4)')};
`;

export const Form = styled.form`
    border: 1px solid var(--purple-4);
    padding: 0.5rem 0.75rem;
    margin-top: 1rem;
    border-radius: 6px;

    label {
        font-size: 0.875rem;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }
`;

export const OtherAmountInput = styled.input`
    width: 100%;
    font-weight: 700;
    border-width: 0px;
    padding: 0.5rem 0;
    border: none;
    outline: none;
    color: var(--purple-4);
    &:focus {
    }
`;

export const PaymentText = styled(Paragraph)`
    margin-bottom: 1rem;
`;
