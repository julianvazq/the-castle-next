import styled from 'styled-components';
import { mulishFont } from '../../../styles/shared';

export const MobileServicesContainer = styled.section`
    padding: 0 1.5rem 4rem;

    & > * + * {
        margin-top: 1rem;
    }
`;

export const MobileService = styled.article`
    ${mulishFont}
    background: var(--purple-2);
    padding: 1.5rem 3rem;
    border-radius: 13px;
    font-weight: 700;
    text-align: center;
`;

export const DesktopServicesContainer = styled.section`
    padding: 0 1.5rem 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
`;

export const DesktopService = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 1rem;
        max-height: 200px;
        width: 100%;
        object-fit: cover;
    }

    p {
        ${mulishFont}
        font-weight: 700;
        text-align: center;
    }
`;
