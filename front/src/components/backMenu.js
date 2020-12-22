import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { resetQuestion } from '../redux/question';

const BackMenu = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onClickBack = () => {
        dispatch(resetQuestion());
        history.push('/selectMenu');
    }

    return (
        <div onClick={onClickBack}>메뉴로 돌아가기</div>
    );
}

export default BackMenu;