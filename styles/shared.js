import styled, { css } from 'styled-components';

export const uppercase = css`
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const playfairDisplayFont = css`
    font-family: 'Playfair Display', 'Times New Roman', Times, serif;
`;

export const cookieFont = css`
    font-family: 'Cookie', 'Times New Roman', Times, serif;
`;

export const mulishFont = css`
    font-family: 'Mulish', sans-serif;
`;

export const MaxWidthContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: ${(props) => props.$padding || '0'};
    background: ${(props) => props.background || 'none'};
`;

export const SectionHeader = styled.h2`
    ${playfairDisplayFont}
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
    line-height: 1.7;
    max-width: ${(props) => props.$maxWidth};

    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }

    span {
        font-weight: 600;
    }
`;

export const StyledLink = styled.a`
    color: var(--purple-4);
    font-weight: 600;
`;
