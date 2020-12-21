import React, { useState, useEffect } from 'react';
import { Home, Title, InputId, InputPw, LoginBtn, LoginForm, SignUp } from './styled/styledLogin';

import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/members';

import { useHistory, Link } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState({ id: null, pw: null });
    const onChangeId = e => setLogin({ ...login, id: e.target.value });
    const onChangePw = e => setLogin({ ...login, pw: e.target.value });

    const dispatch = useDispatch();
    const onClickLogin = () => {
        dispatch(loginAction(login.id, login.pw));
    }

    const history = useHistory();
    const loginStatus = useSelector(state => state.members.isLogin);
    useEffect(() => {
        loginStatus === true && history.push('/question');
    }, [loginStatus]);

    return (
        <Home>
            <Title>LOGIN</Title>
            <LoginForm>
                <InputId placeholder="ID" onChange={onChangeId} />
                <InputPw placeholder="PW" type="password" onChange={onChangePw} />
                <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
                <SignUp><Link to="/signUp">회원가입</Link></SignUp>
            </LoginForm>
        </Home>
    )
}

export default Login;