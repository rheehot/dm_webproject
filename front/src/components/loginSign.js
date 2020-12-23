import React from 'react';
import { useHistory } from 'react-router';
import { Home, Title } from './styled/styledLoginSign';

const LoginSign = () => {
    const history = useHistory();
    return (
        <Home>
            <Title>로그인이 필요한 서비스 입니다.</Title>
            <Title onClick={() => history.push('/')}>홈으로 돌아가기</Title>
        </Home>
    );
}

export default LoginSign;