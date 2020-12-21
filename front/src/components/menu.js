import React from 'react';
import { Home, Title, Select } from './styled/styledMenu';

import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Home>
            <Title>:: Hello World ::</Title>
            <Select>
                <Link to='/question' style={{
                    color: 'white'
                }}>
                    개발자 찾기
                </Link>
            </Select>
            <Select>
                <Link to='/createProfile' style={{
                    color: 'white'
                }}>
                    개발자 프로필 등록
                    </Link>
            </Select>
        </Home>
    );
}

export default Menu;