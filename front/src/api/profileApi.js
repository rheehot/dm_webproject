import axios from 'axios';

export const profileApi = async (data) => {
    const res = await axios({
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        url: 'http://localhost:5000/profile',
        data: {
            "name": data.name,
            "frontend": data.frontend,
            "backend": data.backend,
            "javascript": data.javascript,
            "java": data.java,
            "senior": data.senior,
            "email": data.email,
            "link": data.link
        }
    });
    return res;
}