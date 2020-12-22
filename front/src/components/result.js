import React, { useEffect } from 'react';
import { Home, Ul, Li, Info, Container } from './styled/styledResult';

import Layout from '../Layout';
import BackMenu from './backMenu';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Result = () => {
    const developersList = useSelector(state => state.question.developers);
    const state = useSelector(state => state.question.loading);

    const history = useHistory();
    useEffect(() => {
        state === false && history.push('/question');
    }, [state === false]);

    return (
        <Home>
            <Layout />
            <BackMenu />
            <h1 style={{ marginTop: 30 }}>추천 개발자</h1>
            <Container>
                <Ul>
                    {
                        state === true &&
                        developersList[0].map(data => (
                            <Li>
                                <Info>{data.dev_name}</Info>
                                <Info>{data.email}</Info>
                                <a href={data.link} target='blank'>
                                    <Info> Github :: Blog </Info>
                                </a>
                            </Li>
                        ))
                    }
                </Ul>
            </Container>
        </Home>
    );
}

export default Result;