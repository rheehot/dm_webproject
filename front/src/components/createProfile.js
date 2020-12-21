import React, { useState, useEffect } from 'react';
import { Home, Title, Input, Submit, Wrap, SubTitle } from './styled/styledCreateProfile';

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

    const onClickSubmit = () => { }

    useEffect(() => {
        console.log(profile);
    }, [profile]);
    return (
        <Home>
            <Title>개발자 프로필 등록</Title>
            <div style={{ margin: "0 auto" }}>
                <Input onChange={onChangeName} placeholder="이름 | 닉네임" />
                <Input onChange={onChangeEmail} placeholder="이메일" type='email' />
                <Input onChange={onChangeLink} placeholder="GitHub | Blog" />

                <Wrap>
                    <SubTitle>Frontend 개발을 하시나요?</SubTitle>
                    <input type="radio" id="frontend" name="userinfo" value="1" onChange={onSelectFrontend} />
                    <label for='frontend'>Yes</label>
                    <input type="radio" id="frontend" name="userinfo" value="0" onChange={onSelectFrontend} />
                    <label for='frontend'>No</label>
                </Wrap>

                <Wrap>
                    <SubTitle>Backend 개발을 하시나요?</SubTitle>
                    <input type="radio" id="frontend" name="userinfo" value="1" onChange={onSelectBackend} />
                    <label for='frontend'>Yes</label>
                    <input type="radio" id="frontend" name="userinfo" value="0" onChange={onSelectBackend} />
                    <label for='frontend'>No</label>
                </Wrap>
                <Wrap>
                    <SubTitle>JavaScript 언어를 사용할 줄 아시나요?</SubTitle>
                    <input type="radio" id="frontend" name="userinfo" value="1" onChange={onSelectJavascript} />
                    <label for='frontend'>Yes</label>
                    <input type="radio" id="frontend" name="userinfo" value="0" onChange={onSelectJavascript} />
                    <label for='frontend'>No</label>
                </Wrap>
                <Wrap>
                    <SubTitle>Java 언어를 사용할 줄 아시나요?</SubTitle>
                    <input type="radio" id="frontend" name="userinfo" value="1" onChange={onSelectJava} />
                    <label for='frontend'>Yes</label>
                    <input type="radio" id="frontend" name="userinfo" value="0" onChange={onSelectJava} />
                    <label for='frontend'>No</label>
                </Wrap>
                <Wrap>
                    <SubTitle>신입개발자 인가요?</SubTitle>
                    <input type="radio" id="frontend" name="userinfo" value="1" onChange={onSelectSenior} />
                    <label for='frontend'>Yes</label>
                    <input type="radio" id="frontend" name="userinfo" value="0" onChange={onSelectSenior} />
                    <label for='frontend'>No</label>
                </Wrap>

                <Submit onClick={onClickSubmit}>등록하기</Submit>
            </div>
        </Home>
    );
}

export default CreateProfile;