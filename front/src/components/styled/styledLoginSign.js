import styled from 'styled-components';
import {
    color__white,
    font__size__medium,
    font__size__big,
} from './styledCommon';

export const Home = styled.div`
height: 100vh;
// margin-top: 200px;
opacity: 0.8;
color: ${color__white};
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
`;

export const Title = styled.div`
font-size: ${font__size__big};
padding: 30px;

@media screen and (max-width: 768px) {
    font-size: ${font__size__medium};
}
`;