import fetch from '@/libs/fetch';

export function login (data) {
    return fetch({
        url: '/manager/stateless/login',
        method: 'post',
        data
    });
}
export function saveUser (data) {
    return fetch({
        url: '/manager/user/save',
        method: 'post',
        data
    });
}
