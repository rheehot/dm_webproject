import axios from 'axios';

export const loginApi = (id, pw) => {
    const res = axios({
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        url: 'http://localhost:5000/login',
        data: {
            "id": id,
            "pw": pw,
        }
    });
    return res;
}

export const logoutApi = async () => {
    const res = await axios({
        method: 'get',
        url: 'http://localhost:5000/logout',
    }).then(res => res);
    return res;
}