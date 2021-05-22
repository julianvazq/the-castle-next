import styled from 'styled-components';
import { mulishFont, uppercase } from '../../../styles/shared';
import { DonateContainer } from '../../donate-page/Donate/styled';

export const Nav = styled.nav``;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    padding: 1rem;

    @media screen and (min-width: 700px) {
        flex-direction: row;
    }
`;

export const Logo = styled.div`
    height: 100px;
    width: 100px;
    margin: 0 2rem 2rem 0;
    background: violet;
`;

export const LinkContainer = styled.section`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 700px) {
        flex-direction: row;
    }
`;

export const RegularLinks = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        ${uppercase}
        ${mulishFont};
        color: var(--white);

        ${DonateContainer} & {
            color: var(--gray);
        }
    }

    @media screen and (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        & > * + * {
            margin-left: 1.5rem;
        }
    }
`;

export const DonateLink = styled.div`
    margin-top: 2rem;

    a {
        ${uppercase}
        ${mulishFont};
        background: var(--purple-4);
        color: var(--white);
        border-radius: 99px;
        padding: 0.75rem 1.125rem;
    }

    @media screen and (min-width: 700px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 2rem;
        margin-top: 0;
    }
`;
