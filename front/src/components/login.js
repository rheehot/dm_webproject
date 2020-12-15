import React, { useState, useEffect } from 'react';
import { Home, Title, InputId, InputPw, LoginBtn, LoginForm } from './styled/styledLogin';

import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/login';

import { useHistory } from 'react-router-dom';
import Layout from '../Layout';

const Login = () => {
    const [login, setLogin] = useState({ id: null, pw: null });
    const onChangeId = e => setLogin({ ...login, id: e.target.value });
    const onChangePw = e => setLogin({ ...login, pw: e.target.value });

    const dispatch = useDispatch();
    const onClickLogin = () => {
        dispatch(loginAction(login.id, login.pw));
    }

    const history = useHistory();
    const loginStatus = useSelector(state => state.login.isLogin);
    useEffect(() => {
        loginStatus === true ? history.push('/question') : console.log('');
    }, [loginStatus]);

    return (
        <Home>
            <Title>LOGIN</Title>
            <LoginForm>
                <InputId placeholder="ID" onChange={onChangeId} />
                <InputPw placeholder="PW" type="password" onChange={onChangePw} />
                <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
            </LoginForm>
        </Home>
    )
}

export default Login;