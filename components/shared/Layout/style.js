import styled from 'styled-components';

export const AppContainer = styled.div``;

export const HeroContainer = styled.section`
    background-image: ${(props) =>
        props.showImage ? "url('/assets/castle-lg.jpg')" : ''};
    background-repeat: no-repeat;
    background-size: cover;
`;
