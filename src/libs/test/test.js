import {fetch} from '../../libs/fetch'

export const test = ()=>{
    return fetch({
        url: '/api/auth/code',
        method: 'post',
        data: ({
            userPhone: 'test',
        }),
    })
}