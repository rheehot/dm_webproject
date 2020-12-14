import React from 'react';
import { Home, Title, InputId, InputPw, LoginBtn, LoginForm } from './styled/styledLogin';

import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Home>
            <Title>LOGIN</Title>
            <LoginForm>
                <InputId placeholder="ID"/>
                <InputPw placeholder="PW" type="password"/>
                <LoginBtn>
                    <Link to='/question'>로그인</Link>
                </LoginBtn>
            </LoginForm>
        </Home>
    )
}

export default Login;