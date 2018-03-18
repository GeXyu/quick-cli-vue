import axios from 'axios';
import env from '../../build/env';
const ajaxUrl = env === 'development'
    ? 'http://127.0.0.1:8081'
    : env === 'production'
        ? 'https://www.url.com'
        : 'https://debug.url.com';

let ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});
export default ajax;
