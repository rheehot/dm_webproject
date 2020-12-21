import React, { useState, useEffect } from 'react';
import { Home, Title, Questions, ButtonGroup, Button } from './styled/styleQuestion';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { questionAction } from '../redux/question';

import Layout from '../Layout';

const Question = () => {
    const [state, setState] = useState([]);
    const [count, setCount] = useState(0);
    const history = useHistory();

    const onClickBtn = (e) => {
        setCount(count + 1);
        setState([...state, e.target.dataset.type === 'yes' ? true : false]);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            count !== 0 && dispatch(questionAction(state));
        }, 1500);
    }, [count < 5]);

    const resultLoading = useSelector(state => state.question.loading);
    useEffect(() => {
        resultLoading === true && history.push('/result');
    }, [resultLoading]);

    return (
        count < 5 ?
            <Home>
                <Layout />
                <Title>{dummy.data[count].title}</Title>
                <Questions>{dummy.data[count].desc}</Questions>
                <ButtonGroup>
                    <Button onClick={onClickBtn} data-type="yes">Yes</Button>
                    <Button onClick={onClickBtn} data-type="no">No</Button>
                </ButtonGroup>
            </Home>
            :
            <Home>
                <Title>. . . 분석중</Title>
            </Home>
    );
}

export default Question;

const dummy = {
    data: [
        {
            title: 'Q1 :: 개발자 선택',
            desc: '프론트앤드 개발자를 찾으시나요?',
        },
        {
            title: 'Q2 :: 개발자 선택',
            desc: '백엔드 개발자를 찾으시나요?',
        },
        {
            title: 'Q3 :: 사용언어',
            desc: 'HTML/CSS/JavaScript가 필수 인가요?',
        },
        {
            title: 'Q4 :: 사용언어',
            desc: 'JAVA가 필수 인가요?',
        },
        {
            title: 'Q5 :: 경력',
            desc: '시니어 개발자를 원하시나요?',
        }
    ]
}