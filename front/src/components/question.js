import React, { useState, useEffect } from 'react';
import { Home, Title, Questions, ButtonGroup, Button } from './styled/styleQuestion';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../Layout';

const Question = () => {
    const [state, setState] = useState([]);
    const [count, setCount] = useState(0);
    let history = useHistory();

    const loginState = useSelector(state => state.login.isLogin);

    const onClickBtn = (e) => {
        setCount(count + 1);
        setState([...state, e.target.dataset.type]);
    }

    const onClickBtn2 = () => {
        history.push('/result');
    }

    return (
        loginState === true ?
        count < 5 ?
            <Home>
                <Layout />
                <Title>{dummy.data[count].title}</Title>
                <Questions>{dummy.data[count].desc}</Questions>
                <ButtonGroup>
                    <Button onClick={onClickBtn} data-type="yes">Yes</Button>
                    <Button onClick={onClickBtn} data-type="no">No</Button>
                    <Button onClick={onClickBtn2} data-type="no">aaa</Button>
                </ButtonGroup>
            </Home>
            :
            <Home>
                <Title>. . . 분석중</Title>
            </Home>
            :
            <Home>
                <Title>로그인이 필요한 서비스 입니다.</Title>
            </Home>
    );
}

export default Question;

const dummy = {
    data: [
        {
            title: '1',
            desc: 'first',
        },
        {
            title: '2',
            desc: 'second',
        },
        {
            title: '3',
            desc: 'third',
        },
        {
            title: '4',
            desc: 'four',
        },
        {
            title: '5',
            desc: 'five',
        }
    ]
}