import React, { useState, useEffect } from 'react';
import { Home, Title, Input, Submit, Wrap, SubTitle, AllWrap } from './styled/styledCreateProfile';

import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../redux/profile';
import { useHistory } from 'react-router';

const CreateProfile = () => {
    const [profile, setProfile] = useState({});
    const onChangeName = (e) => setProfile({ ...profile, name: e.target.value });
    const onChangeEmail = (e) => setProfile({ ...profile, email: e.target.value });
    const onChangeLink = (e) => setProfile({ ...profile, link: e.target.value });
    const onSelectFrontend = (e) => setProfile({ ...profile, frontend: e.target.value });
    const onSelectBackend = (e) => setProfile({ ...profile, backend: e.target.value });
    const onSelectJavascript = (e) => setProfile({ ...profile, javascript: e.target.value });
    const onSelectJava = (e) => setProfile({ ...profile, java: e.target.value });
    const onSelectSenior = (e) => setProfile({ ...profile, senior: e.target.value });

    const dispatch = useDispatch();
    const onClickSubmit = () => {
        dispatch(profileAction(profile));
    }

    const history = useHistory();
    const profileResult = useSelector(state => state.profile.result);
    useEffect(() => {
        profileResult === true && history.push('/selectMenu');
        profileResult === true && alert('회원등록 성공');
    }, [profileResult]);

    return (
        <Home>
            <Title>개발자 프로필 등록</Title>
            <AllWrap style={{ margin: "0 auto" }}>
                <Input onChange={onChangeName} placeholder="이름 | 닉네임" />
                <Input onChange={onChangeEmail} placeholder="이메일" type='email' />
                <Input onChange={onChangeLink} placeholder="GitHub | Blog" />

                <Wrap>
                    <SubTitle>Frontend 개발을 하시나요?</SubTitle>
                    <input type="radio" id="frontend" name="frontend" value="1" onChange={onSelectFrontend} />
                    <label for='frontend'>Yes</label>
                    <input type="radio" id="frontend" name="frontend" value="0" onChange={onSelectFrontend} />
                    <label for='frontend'>No</label>
                </Wrap>

                <Wrap>
                    <SubTitle>Backend 개발을 하시나요?</SubTitle>
                    <input type="radio" id="backend" name="backend" value="1" onChange={onSelectBackend} />
                    <label for='backend'>Yes</label>
                    <input type="radio" id="backend" name="backend" value="0" onChange={onSelectBackend} />
                    <label for='backend'>No</label>
                </Wrap>
                <Wrap>
                    <SubTitle>JavaScript 언어를 사용할 줄 아시나요?</SubTitle>
                    <input type="radio" id="javascript" name="javascript" value="1" onChange={onSelectJavascript} />
                    <label for='javascript'>Yes</label>
                    <input type="radio" id="javascript" name="javascript" value="0" onChange={onSelectJavascript} />
                    <label for='javascript'>No</label>
                </Wrap>
                <Wrap>
                    <SubTitle>Java 언어를 사용할 줄 아시나요?</SubTitle>
                    <input type="radio" id="java" name="java" value="1" onChange={onSelectJava} />
                    <label for='java'>Yes</label>
                    <input type="radio" id="java" name="java" value="0" onChange={onSelectJava} />
                    <label for='java'>No</label>
                </Wrap>
                <Wrap>
                    <SubTitle>신입개발자 인가요?</SubTitle>
                    <input type="radio" id="senior" name="senior" value="1" onChange={onSelectSenior} />
                    <label for='senior'>Yes</label>
                    <input type="radio" id="senior" name="senior" value="0" onChange={onSelectSenior} />
                    <label for='senior'>No</label>
                </Wrap>

                <Submit onClick={onClickSubmit}>등록하기</Submit>
            </AllWrap>
        </Home>
    );
}

export default CreateProfile;