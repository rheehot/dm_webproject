import React, { useState, useEffect } from 'react';
import { Home, Title, Questions, ButtonGroup, Button } from './styled/styleQuestion';
import { useHistory } from 'react-router-dom';

const Question = () => {
    const [state, setState] = useState([]);
    const [count, setCount] = useState(0);
    let history = useHistory();

    const onClickBtn = (e) => {
        setCount(count + 1);
        setState([...state, e.target.dataset.type]);
    }

    const onClickBtn2 = () => {
        history.push('/result');
    }

    useEffect(() => {
        console.log('!!!!!!!!!!!!!!!!!');
        console.log(state);
    }, [count > 4]);

    return (
        count < 5 ?
            <Home>
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
                <Title>. . . 분 석 중</Title>
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