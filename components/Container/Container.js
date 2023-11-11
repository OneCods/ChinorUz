import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    width: 1350px;
    margin: 0 auto;
    padding: 0 20px;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        padding: 0 15px;
    }

    @media only screen and (max-width: 375px) {
        max-width: 100%;
        padding: 0 10px;
    }
`
