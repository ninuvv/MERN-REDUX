import  axios from 'axios';


// const BASE_URL='http://localhost:5000/';
const BASE_URL='https://merncurd.herokuapp.com/'
const TOKEN='';

export const axiosRequest=axios.create({
    baseURL:BASE_URL,
});

export const userAxios=axios.create({
    baseURL:BASE_URL,
    header:{ token :`Bearer ${TOKEN}`},
});