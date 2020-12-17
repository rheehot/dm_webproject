import React from 'react';
import sytled from 'styled-components';

import { useDispatch } from 'react-redux';
import { logoutAction } from './redux/members';

const Layout = () => {
    const dispatch = useDispatch();
    const onClickLogout = () => {
        dispatch(logoutAction());
        console.log('click logout')
    }

    return (
        <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
    );
}

export default Layout;

const LogoutButton = sytled.div`
text-align: center;
padding: 30px;
background: transparent;
color: white;
font-size: 20px;
font-weight: bold;
`;