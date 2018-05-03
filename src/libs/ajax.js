import axios from 'axios';
import env from '../../build/env';
import Cookies from 'js-cookie';
const ajaxUrl = env === 'development'
    ? 'http://127.0.0.1:8090'
    : env === 'production'
        ? 'https://www.url.com'
        : 'https://debug.url.com';

let ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
});
ajax.interceptors.request.use(function (config) {
    let token = Cookies.get('token')
    if(token){
        config.headers.common['x-Authenticate-token'] = token;
    }
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });
ajax.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("-----"+response);
    if(response==='403'){
        Cookies.remove('token');
    }
    if(response.headers['x-Authenticate-token']){
        if(Cookies.get('token')!= response.headers['x-Authenticate-token']){
            Cookies.set('token',response.headers['x-Authenticate-token'])
        }
        console.log(response.headers['x-Authenticate-token']);
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default ajax;
