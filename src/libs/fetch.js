// import qs from 'qs'
import axios from 'axios';
import Cookies from 'js-cookie';

// 创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:8090', // api的base_url
    timeout: 5000 // 请求超时时间
});
// request拦截器
service.interceptors.request.use(config => {
    const token = Cookies.get('token');
    if (token) {
        config.headers['Authorization'] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
}, error => {
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        if (response.data === 401) {
            Cookies.remove('token');
            // 跳转到登陆页面
        }
        if (response.headers['Authorization']) {
            if (Cookies.get('token') !== response.headers['Authorization']) {
                Cookies.set('token', response.headers['Authorization']);
            }
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
