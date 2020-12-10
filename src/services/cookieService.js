import axios from 'axios';

export const createCookie = () => {
    axios.get('http://localhost:3000/cookie1', {withCredentials: true}).then(res =>{
        console.log(res.data);
    });
}

export const createSecureCookie = () => {
    axios.get('http://localhost:3000/cookie2', {withCredentials: true}).then(res =>{
        console.log(res.data);
    });
}

export const deleteSecureCookie = () => {
    axios.get('http://localhost:3000/deleteCookie', {withCredentials: true}).then(res =>{
        console.log(res.data);
    });
}