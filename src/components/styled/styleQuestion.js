import styled from 'styled-components';
import {
    color__white,
    font__size__big,
    font__size__large,
    font__size__medium
} from './styledCommon';

export const Home = styled.div`
height: 100vh;
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
`;

export const Questions = styled.div`
font-size: ${font__size__large};
padding: 0 0 15px 0;
`;

export const ButtonGroup = styled.div`
`;

export const Button = styled.button`
background-color: transparent;
cursor: pointer;
border: none;
outline: none;
font-size: ${font__size__medium};
color: ${color__white};
`;