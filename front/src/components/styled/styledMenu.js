import styled from 'styled-components';
import {
    color__white,
    color__black,
    font__size__large,
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

export const Select = styled.div`
padding: 20px 30px;
// font-weight: bold;
font-size: ${font__size__large};
text-align: center;
`;

export const Title = styled.div`
font-weight: bold;
font-size: ${font__size__big};
padding: 30px;
`;

export const SubTitle = styled.div`
font-size: ${font__size__large};
padding: 30px;
`;