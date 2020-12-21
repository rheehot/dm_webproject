import styled from 'styled-components';
import {
    color__white,
    font__size__big,
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

export const SubTitle = styled.div`
font-size: ${font__size__medium};
font-weight: bold;
margin-bottom: 10px;
`;

export const LoginForm = styled.div`
max-width: 600px;
height: 200px;
margin: 0 auto;
`;

export const Input = styled.input`
display: block;
width: 300px;
height: 50px;
margin-bottom: 10px;
border: none;
border-radius: 5px;
outline: none;
text-align: center;
font-size: ${font__size__medium}
`;

export const Submit = styled.button`
width: 300px;
height: 30px;
margin: 20px 0;
border: none;
border-radius: 5px;
outline: none;
font-weight: bold;
display: block;
`;

export const Wrap = styled.div`
text-align: left;
padding: 15px 0;
`;