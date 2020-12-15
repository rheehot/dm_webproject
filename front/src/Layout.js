import Reac from 'react';
import sytled from 'styled-components';

import { useDispatch } from 'react-redux';
import { logoutAction } from './redux/login';

const Layout = () => {
    const dispatch = useDispatch();
    const onClickLogout = () => {
        dispatch(logoutAction());
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