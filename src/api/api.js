import axios from 'axios';

let base = '';//远程地址配置

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };