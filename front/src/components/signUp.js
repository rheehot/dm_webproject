import React, { useState, useEffect } from 'react';
import { Home, Title, Input, Submit } from './styled/styledSignup';

import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../redux/members';

import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({ id: null, pw: null, });
    const [pwCheck, setPwCheck] = useState(!null);
    const [state, setState] = useState(false);

    const onChangeId = (e) => setUserInfo({ ...userInfo, id: e.target.value });
    const onChangePw = (e) => setUserInfo({ ...userInfo, pw: e.target.value });
    const onChangePwCheck = (e) => setPwCheck(e.target.value);

    const dispatch = useDispatch();
    const onClickSubmit = () => {
        dispatch(signUpAction(userInfo.id, userInfo.pw));
    }

    useEffect(() => {
        console.log(pwCheck);
        pwCheck === userInfo.pw ? setState(true) : setState(false);
    }, [pwCheck]);

    const history = useHistory();
    const isSignUp = useSelector(state => state.members.signUpStatus);
    useEffect(() => {
        isSignUp === true ? history.push('/') : console.log('');
    }, [isSignUp]);

    return (
        <Home>
            <Title>회원가입</Title>
            <div style={{ margin: "0 auto" }}>
                <Input onChange={onChangeId} placeholder="사용할 ID를 넣어주세요" />
                <Input onChange={onChangePw} placeholder="사용할 PW를 넣어주세요" type="password" />
                <Input onChange={onChangePwCheck} placeholder="사용할 PW를 다시 입력해주세요" type="password" />
                {
                    state !== true ? <p style={{ color: 'red', fontWeight: 'bold' }}>비밀번호가 일치하지 않습니다!!</p>
                        : <p style={{ color: 'white', fontWeight: 'bold' }}>비밀번호가 일치합니다!!</p>
                }
                <Submit onClick={onClickSubmit}>회원가입</Submit>
            </div>
        </Home>
    )
}

export default SignUp;