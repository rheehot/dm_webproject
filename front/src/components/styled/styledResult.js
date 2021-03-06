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

export const Container = styled.div`
height: 600px;
overflow: auto;
padding: 100px;

@media screen and (max-width: 768px) {
    padding 10px;
    height: 700px;
}
`;

export const Ul = styled.ul`
padding: 0;
`;

export const Li = styled.li`
list-style: none;
font-size: ${font__size__large};
color: ${color__black};
font-weight: bold;
opacity: 0.3;

background-color : ${color__white};
border-radius: 10px;
max-width: 1200px;
margin: 30px auto;

&:hover {
    opacity: 1;
}

@media screen and (max-width: 768px) {
    font-size: ${font__size__medium};
    margin: 30px 30px;
}
`;

export const Info = styled.div`
display: inline-block;
width: 320px;
margin: 5px 20px;

padding: 10px 0;

@media screen and (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
}
`;

export const Title = styled.div`
font-size: ${font__size__big};
padding: 30px;
`;