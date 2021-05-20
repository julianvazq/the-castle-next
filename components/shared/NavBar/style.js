import Link from 'next/link';
import styled from 'styled-components';

export const Nav = styled.nav``;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

export const Logo = styled.div`
    height: 100px;
    width: 100px;
    background: violet;
`;

export const LinkContainer = styled.section`
    & > * + * {
        margin-left: 1rem;
    }
`;

export const StyledLink = styled(Link)`
    color: red;
`;
