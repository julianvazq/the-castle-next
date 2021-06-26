import styled from 'styled-components';
import { mulishFont, uppercase } from '../../../styles/shared';

export const Container = styled.section`
    padding: 3.75rem 1.5rem 4rem;
    background: var(--purple-1);
`;

export const Text = styled.p`
    font-size: 1.5rem;
    text-align: center;
`;

export const FormContainer = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 500px;
`;

export const StyledForm = styled.form`
    border-radius: 99px;
    background: var(--purple-2);
    display: flex;

    input {
        ${mulishFont}
        padding: 0.5rem 1rem;
        max-width: 350px;
        width: 100%;
        outline: none;

        &::placeholder {
            ${uppercase}
        }
    }

    button {
        ${mulishFont}
        ${uppercase}
        flex: 1;
        background: var(--purple-4);
        color: var(--white);
        border-radius: 99px;
        padding: 0 1rem;
        font-size: 0.875rem;
    }
`;

export const HiddenInput = styled.div`
    position: absolute;
    left: -5000px;
`;

export const Message = styled.p`
    margin-top: 1rem;
    text-align: center;

    a {
        color: var(--purple-4);
        font-weight: 600;
    }
`;

export const Success = styled(Message)`
    color: var(--purple-4);
    font-weight: 600;
`;
