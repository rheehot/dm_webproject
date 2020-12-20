import React from 'react';
import { Home, Ul, Li, Info, Container, Title } from './styled/styledResult';

import Layout from '../Layout';

import { useSelector } from 'react-redux';

const Result = () => {
    const developersList = useSelector(state => state.question.developers);
    const state = useSelector(state => state.question.loading);
    const loginState = useSelector(state => state.members.isLogin);
    return (
        loginState === true ?
        <Home>
            <Layout />
            <h1 style={{ marginTop: 30 }}>추천 개발자</h1>
            <Container>
                <Ul>
                    {
                        state === true &&
                        developersList[0].map(data => (
                            <Li>
                                <Info>{data.dev_name}</Info>
                                <Info>{data.email}</Info>
                                <a href={data.link}>
                                    <Info> Github :: Blog </Info>
                                </a>
                            </Li>
                        ))
                    }
                </Ul>
            </Container>
        </Home>
        :
        <Home>
            <Title>로그인이 필요한 서비스 입니다.</Title>
        </Home>
    );
}

export default Result;