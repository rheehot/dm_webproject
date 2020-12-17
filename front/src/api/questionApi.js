import axios from 'axios';

export const questionApi = async (data) => {
    const res = await axios({
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        url: 'http://localhost:5000/question',
        data: {
            "q1": data[0],
            "q2": data[1],
            "q3": data[2],
            "q4": data[3],
            "q5": data[4]
        }
    });
    return res;
}